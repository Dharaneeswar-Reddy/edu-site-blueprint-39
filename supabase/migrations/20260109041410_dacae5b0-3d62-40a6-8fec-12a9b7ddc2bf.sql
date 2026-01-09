-- Create AICTE documents table
CREATE TABLE public.aicte_documents (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.aicte_documents ENABLE ROW LEVEL SECURITY;

-- Create policies for public viewing
CREATE POLICY "Public can view active AICTE documents"
ON public.aicte_documents
FOR SELECT
USING (is_active = true);

-- Create policies for admin management
CREATE POLICY "Only admins can manage AICTE documents"
ON public.aicte_documents
FOR ALL
USING (is_admin())
WITH CHECK (is_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_aicte_documents_updated_at
BEFORE UPDATE ON public.aicte_documents
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();