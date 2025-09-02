-- Fix the admin-uploads bucket file size limit to allow 2MB files
UPDATE storage.buckets 
SET file_size_limit = 2097152  -- 2MB in bytes (2 * 1024 * 1024)
WHERE name = 'admin-uploads';

-- Update the storage policy to be more specific about reports folder
DROP POLICY IF EXISTS "Admins can upload reports to admin-uploads" ON storage.objects;

CREATE POLICY "Admins can upload to admin-uploads bucket" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'admin-uploads' 
  AND is_admin()
);

-- Create separate policies for different operations
CREATE POLICY "Admins can read admin-uploads" 
ON storage.objects 
FOR SELECT 
USING (
  bucket_id = 'admin-uploads' 
  AND is_admin()
);

CREATE POLICY "Admins can update admin-uploads" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'admin-uploads' 
  AND is_admin()
);

CREATE POLICY "Admins can delete admin-uploads" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'admin-uploads' 
  AND is_admin()
);