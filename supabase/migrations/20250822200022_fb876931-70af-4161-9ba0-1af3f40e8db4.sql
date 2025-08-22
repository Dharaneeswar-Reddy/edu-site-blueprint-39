
-- Ensure complete row data is available for realtime changes
ALTER TABLE public.announcements REPLICA IDENTITY FULL;

-- Add the table to the supabase_realtime publication if it's not already present
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'announcements'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime ADD TABLE public.announcements';
  END IF;
END $$;
