-- Create storage bucket for recruiter logos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('recruiter-logos', 'recruiter-logos', true);

-- Create RLS policies for recruiter logos bucket
CREATE POLICY "Public can view recruiter logos"
ON storage.objects FOR SELECT
USING (bucket_id = 'recruiter-logos');

CREATE POLICY "Admins can upload recruiter logos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'recruiter-logos' AND is_admin());

CREATE POLICY "Admins can update recruiter logos"
ON storage.objects FOR UPDATE
USING (bucket_id = 'recruiter-logos' AND is_admin());

CREATE POLICY "Admins can delete recruiter logos"
ON storage.objects FOR DELETE
USING (bucket_id = 'recruiter-logos' AND is_admin());

-- Create table to store recruiter logo mappings
CREATE TABLE public.recruiter_logos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  normalized_name TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on recruiter_logos
ALTER TABLE public.recruiter_logos ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for recruiter logos table
CREATE POLICY "Public can view active recruiter logos"
ON public.recruiter_logos FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can manage recruiter logos"
ON public.recruiter_logos FOR ALL
USING (is_admin())
WITH CHECK (is_admin());

-- Create trigger for updated_at
CREATE TRIGGER update_recruiter_logos_updated_at
  BEFORE UPDATE ON public.recruiter_logos
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();