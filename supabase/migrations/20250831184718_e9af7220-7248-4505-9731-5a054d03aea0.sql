-- Create a storage bucket specifically for IQAC documents if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'iqac-documents', 
  'iqac-documents', 
  true, 
  10485760, -- 10MB limit
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'image/jpg']
)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for IQAC documents
CREATE POLICY "Authenticated users can upload IQAC documents"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'iqac-documents' 
  AND auth.uid() IS NOT NULL
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'super_admin')
  )
);

CREATE POLICY "Anyone can view IQAC documents"
ON storage.objects
FOR SELECT
USING (bucket_id = 'iqac-documents');

CREATE POLICY "Admins can update IQAC documents"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'iqac-documents' 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'super_admin')
  )
);

CREATE POLICY "Admins can delete IQAC documents"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'iqac-documents' 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'super_admin')
  )
);

-- Update the RLS policies for iqac_documents table to be more explicit
DROP POLICY IF EXISTS "Only admins can manage IQAC documents" ON public.iqac_documents;
DROP POLICY IF EXISTS "Public can view IQAC documents" ON public.iqac_documents;

-- Create more explicit RLS policies
CREATE POLICY "Authenticated admins can insert IQAC documents"
ON public.iqac_documents
FOR INSERT
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'super_admin')
  )
);

CREATE POLICY "Authenticated admins can update IQAC documents"
ON public.iqac_documents
FOR UPDATE
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'super_admin')
  )
);

CREATE POLICY "Authenticated admins can delete IQAC documents"
ON public.iqac_documents
FOR DELETE
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'super_admin')
  )
);

CREATE POLICY "Anyone can view IQAC documents"
ON public.iqac_documents
FOR SELECT
USING (true);