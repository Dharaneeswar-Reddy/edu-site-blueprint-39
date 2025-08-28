-- Update storage bucket configuration to allow larger file sizes
-- First, let's check if the buckets exist and update their configuration

-- Update admin-uploads bucket to allow larger files
UPDATE storage.buckets 
SET file_size_limit = 52428800 -- 50MB limit
WHERE id = 'admin-uploads';

-- Insert admin-uploads bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('admin-uploads', 'admin-uploads', false, 52428800, ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'image/gif', 'image/webp'])
ON CONFLICT (id) DO UPDATE SET
  file_size_limit = 52428800,
  allowed_mime_types = ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'image/gif', 'image/webp'];

-- Create RLS policies for admin-uploads bucket
DROP POLICY IF EXISTS "Authenticated users can upload admin files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can view admin files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete admin files" ON storage.objects;

CREATE POLICY "Authenticated users can upload admin files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'admin-uploads' AND 
  auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can view admin files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'admin-uploads');

CREATE POLICY "Authenticated users can delete admin files" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'admin-uploads' AND 
  auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can update admin files" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'admin-uploads' AND 
  auth.role() = 'authenticated'
);