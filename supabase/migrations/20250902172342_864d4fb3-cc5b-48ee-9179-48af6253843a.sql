-- Create storage policies for reports folder in admin-uploads bucket with 2000KB limit

-- Policy for viewing reports (admins only)
CREATE POLICY "Admins can view reports in admin-uploads" 
ON storage.objects 
FOR SELECT 
USING (
  bucket_id = 'admin-uploads' 
  AND (storage.foldername(name))[1] = 'reports'
  AND is_admin()
);

-- Policy for uploading reports (admins only, with 2000KB size limit)
CREATE POLICY "Admins can upload reports with 2000KB limit" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'admin-uploads' 
  AND (storage.foldername(name))[1] = 'reports'
  AND is_admin()
  AND (octet_length(decode(encode(storage.extension(name), 'escape'), 'escape')) <= 2048000) -- 2000KB = 2048000 bytes
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