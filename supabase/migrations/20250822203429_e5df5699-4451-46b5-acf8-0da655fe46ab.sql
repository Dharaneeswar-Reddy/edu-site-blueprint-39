
-- Create a new neutral/public bucket for examination documents (idempotent)
INSERT INTO storage.buckets (id, name, public)
SELECT 'examination-docs', 'examination-docs', true
WHERE NOT EXISTS (
  SELECT 1 FROM storage.buckets WHERE id = 'examination-docs'
);

-- Public read policy for the new bucket (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Public read for examination-docs'
  ) THEN
    CREATE POLICY "Public read for examination-docs"
      ON storage.objects
      FOR SELECT
      USING (bucket_id = 'examination-docs');
  END IF;
END $$;

-- Authenticated users can upload to the new bucket (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Authenticated can insert to examination-docs'
  ) THEN
    CREATE POLICY "Authenticated can insert to examination-docs"
      ON storage.objects
      FOR INSERT
      WITH CHECK (bucket_id = 'examination-docs' AND auth.role() = 'authenticated');
  END IF;
END $$;

-- Authenticated users can update files in the new bucket (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Authenticated can update examination-docs'
  ) THEN
    CREATE POLICY "Authenticated can update examination-docs"
      ON storage.objects
      FOR UPDATE
      USING (bucket_id = 'examination-docs' AND auth.role() = 'authenticated');
  END IF;
END $$;

-- Authenticated users can delete files in the new bucket (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Authenticated can delete examination-docs'
  ) THEN
    CREATE POLICY "Authenticated can delete examination-docs"
      ON storage.objects
      FOR DELETE
      USING (bucket_id = 'examination-docs' AND auth.role() = 'authenticated');
  END IF;
END $$;
