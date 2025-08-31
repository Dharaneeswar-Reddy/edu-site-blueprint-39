import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CaptchaValidationRequest {
  captchaToken: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { captchaToken }: CaptchaValidationRequest = await req.json();
    
    if (!captchaToken) {
      return new Response(
        JSON.stringify({ error: 'CAPTCHA token is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const recaptchaSecretKey = Deno.env.get('RECAPTCHA_SECRET_KEY');
    if (!recaptchaSecretKey) {
      console.error('RECAPTCHA_SECRET_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Verify CAPTCHA with Google reCAPTCHA
    const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: recaptchaSecretKey,
        response: captchaToken,
      }),
    });

    const verificationData = await verificationResponse.json();
    console.log('CAPTCHA verification result:', verificationData);

    if (!verificationData.success) {
      return new Response(
        JSON.stringify({ 
          error: 'CAPTCHA verification failed',
          details: verificationData['error-codes'] || []
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // CAPTCHA is valid
    return new Response(
      JSON.stringify({ 
        valid: true,
        score: verificationData.score || null // for reCAPTCHA v3
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in validate-captcha function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);