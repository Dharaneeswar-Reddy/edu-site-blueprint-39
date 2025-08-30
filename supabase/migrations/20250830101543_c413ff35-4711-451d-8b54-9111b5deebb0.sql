-- Create storage policies for admin-uploads bucket if they don't exist
-- First, ensure the bucket exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('admin-uploads', 'admin-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Create policies for admin-uploads bucket
-- Policy for authenticated users to upload files
CREATE POLICY "Authenticated users can upload files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'admin-uploads' 
  AND auth.role() = 'authenticated'
);

-- Policy for authenticated users to view files
CREATE POLICY "Authenticated users can view files" 
ON storage.objects 
FOR SELECT 
USING (
  bucket_id = 'admin-uploads' 
  AND auth.role() = 'authenticated'
);

-- Policy for authenticated users to update files
CREATE POLICY "Authenticated users can update files" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'admin-uploads' 
  AND auth.role() = 'authenticated'
);

-- Policy for authenticated users to delete files
CREATE POLICY "Authenticated users can delete files" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'admin-uploads' 
  AND auth.role() = 'authenticated'
);

-- Also allow public access for viewing (since public is true)
CREATE POLICY "Public can view admin uploads" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'admin-uploads');