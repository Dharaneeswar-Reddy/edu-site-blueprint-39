-- Enable realtime for examination_documents table
ALTER TABLE public.examination_documents REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.examination_documents;