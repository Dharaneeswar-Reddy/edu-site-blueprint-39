-- Create storage policies for reports folder in admin-uploads bucket

-- Policy for viewing reports (admins only)
CREATE POLICY "Admins can view reports in admin-uploads" 
ON storage.objects 
FOR SELECT 
USING (
  bucket_id = 'admin-uploads' 
  AND (storage.foldername(name))[1] = 'reports'
  AND is_admin()
);

-- Policy for uploading reports (admins only)
CREATE POLICY "Admins can upload reports in admin-uploads" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'admin-uploads' 
  AND (storage.foldername(name))[1] = 'reports'
  AND is_admin()
);

-- Policy for updating reports (admins only)
CREATE POLICY "Admins can update reports in admin-uploads" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'admin-uploads' 
  AND (storage.foldername(name))[1] = 'reports'
  AND is_admin()
);

-- Policy for deleting reports (admins only)
CREATE POLICY "Admins can delete reports in admin-uploads" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'admin-uploads' 
  AND (storage.foldername(name))[1] = 'reports'
  AND is_admin()
);