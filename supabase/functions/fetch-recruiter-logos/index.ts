import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';
import FirecrawlApp from 'https://esm.sh/@mendable/firecrawl-js@1.7.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { canvaUrl } = await req.json();
    
    if (!firecrawlApiKey) {
      throw new Error('Firecrawl API key not configured');
    }

    console.log('Fetching logos from Canva URL:', canvaUrl);
    
    const app = new FirecrawlApp({ apiKey: firecrawlApiKey });
    
    // Scrape the Canva page to get images
    const scrapeResponse = await app.scrapeUrl(canvaUrl, {
      formats: ['html'],
      onlyMainContent: false,
      includeTags: ['img']
    });

    if (!scrapeResponse.success) {
      throw new Error('Failed to scrape Canva page');
    }

    console.log('Scrape successful, processing images...');
    
    // Extract image URLs from the scraped content
    const htmlContent = scrapeResponse.data?.html || '';
    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
    const imageUrls: string[] = [];
    let match;
    
    while ((match = imgRegex.exec(htmlContent)) !== null) {
      const src = match[1];
      // Filter for likely logo images (avoid thumbnails, UI elements)
      if (src.includes('canva') && 
          (src.includes('.png') || src.includes('.jpg') || src.includes('.jpeg') || src.includes('.svg')) &&
          !src.includes('thumbnail') && 
          !src.includes('ui-') &&
          src.length > 50) { // Longer URLs are likely actual content images
        imageUrls.push(src);
      }
    }

    console.log(`Found ${imageUrls.length} potential logo images`);

    const uploadedLogos = [];
    
    // Download and upload each image
    for (let i = 0; i < Math.min(imageUrls.length, 50); i++) { // Limit to 50 images
      try {
        const imageUrl = imageUrls[i];
        console.log(`Processing image ${i + 1}/${imageUrls.length}: ${imageUrl}`);
        
        // Download the image
        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok) continue;
        
        const imageBlob = await imageResponse.blob();
        const arrayBuffer = await imageBlob.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        
        // Generate filename
        const extension = imageUrl.includes('.png') ? 'png' : 
                         imageUrl.includes('.svg') ? 'svg' : 'jpg';
        const filename = `logo_${i + 1}.${extension}`;
        
        // Upload to Supabase storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('recruiter-logos')
          .upload(filename, uint8Array, {
            contentType: `image/${extension}`,
            upsert: true
          });

        if (uploadError) {
          console.error(`Upload error for ${filename}:`, uploadError);
          continue;
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('recruiter-logos')
          .getPublicUrl(filename);

        uploadedLogos.push({
          filename,
          url: publicUrl,
          originalUrl: imageUrl
        });
        
        console.log(`Successfully uploaded: ${filename}`);
        
      } catch (error) {
        console.error(`Error processing image ${i + 1}:`, error);
        continue;
      }
    }

    console.log(`Successfully uploaded ${uploadedLogos.length} logos`);

    return new Response(JSON.stringify({ 
      success: true,
      uploadedLogos,
      totalFound: imageUrls.length,
      totalUploaded: uploadedLogos.length
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in fetch-recruiter-logos function:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});