-- Update staff-photos bucket to allow CORS from all origins
UPDATE storage.buckets 
SET 
  allowed_mime_types = ARRAY['image/*'],
  file_size_limit = 52428800, -- 50MB
  public = true
WHERE id = 'staff-photos';

-- Create a policy to ensure public access to staff photos
DO $$
BEGIN
  -- Drop existing policy if it exists
  DROP POLICY IF EXISTS "Public Access" ON storage.objects;
  
  -- Create new policy for public access to staff-photos
  CREATE POLICY "Public Access to Staff Photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'staff-photos');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;