-- Fix the storage policy for reports - remove the incorrect size limit

-- Drop the current policy with the wrong size limit
DROP POLICY IF EXISTS "Admins can upload reports with 2000KB limit" ON storage.objects;

-- Create a new policy without the size limit (let client-side handle it)
CREATE POLICY "Admins can upload reports to admin-uploads" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'admin-uploads' 
  AND (storage.foldername(name))[1] = 'reports'
  AND is_admin()
);