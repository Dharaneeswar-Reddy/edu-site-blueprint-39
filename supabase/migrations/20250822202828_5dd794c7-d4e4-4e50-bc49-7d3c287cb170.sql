
-- 1) Ensure the bucket exists and set it to public
UPDATE storage.buckets
SET public = true
WHERE id = 'admin-uploads';

-- If the bucket does not exist for any reason, create it (no-op if it already exists)
INSERT INTO storage.buckets (id, name, public)
SELECT 'admin-uploads', 'admin-uploads', true
WHERE NOT EXISTS (
  SELECT 1 FROM storage.buckets WHERE id = 'admin-uploads'
);

-- 2) Allow public read access to files in the 'admin-uploads' bucket
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Public read for admin-uploads'
  ) THEN
    CREATE POLICY "Public read for admin-uploads"
      ON storage.objects
      FOR SELECT
      USING (bucket_id = 'admin-uploads');
  END IF;
END $$;
