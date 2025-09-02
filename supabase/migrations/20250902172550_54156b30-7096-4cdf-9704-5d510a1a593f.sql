-- Drop and recreate the upload policy with proper 2000KB size limit for reports folder

-- Drop the existing upload policy
DROP POLICY "Admins can upload reports in admin-uploads" ON storage.objects;

-- Recreate with proper size limit (2000KB = 2,048,000 bytes)
CREATE POLICY "Admins can upload reports with 2000KB limit" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'admin-uploads' 
  AND (storage.foldername(name))[1] = 'reports'
  AND is_admin()
  AND octet_length(name) <= 2048000 -- 2000KB limit
);