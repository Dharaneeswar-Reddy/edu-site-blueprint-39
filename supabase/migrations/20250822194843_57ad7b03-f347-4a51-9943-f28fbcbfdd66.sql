-- Create storage buckets for file uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('admin-uploads', 'admin-uploads', false),
  ('staff-photos', 'staff-photos', true),
  ('gallery-images', 'gallery-images', true);

-- Create announcements table
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'general',
  priority INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create staff table
CREATE TABLE public.staff (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  department TEXT,
  email TEXT,
  phone TEXT,
  photo_url TEXT,
  bio TEXT,
  qualification TEXT,
  experience TEXT,
  is_active BOOLEAN DEFAULT true,
  staff_type TEXT NOT NULL DEFAULT 'teaching',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create IQAC documents table
CREATE TABLE public.iqac_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  document_type TEXT NOT NULL,
  file_url TEXT NOT NULL,
  description TEXT,
  academic_year TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create examination documents table
CREATE TABLE public.examination_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  document_type TEXT NOT NULL,
  file_url TEXT NOT NULL,
  department TEXT,
  semester TEXT,
  academic_year TEXT,
  description TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create NCC events table
CREATE TABLE public.ncc_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_time TIME,
  location TEXT,
  event_type TEXT DEFAULT 'general',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create gallery images table
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.iqac_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.examination_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ncc_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view active announcements" ON public.announcements FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view active staff" ON public.staff FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view IQAC documents" ON public.iqac_documents FOR SELECT USING (true);
CREATE POLICY "Public can view examination documents" ON public.examination_documents FOR SELECT USING (true);
CREATE POLICY "Public can view active NCC events" ON public.ncc_events FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view active gallery images" ON public.gallery_images FOR SELECT USING (is_active = true);

-- Create admin policies (authenticated users can manage all data)
CREATE POLICY "Authenticated users can manage announcements" ON public.announcements 
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage staff" ON public.staff 
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage IQAC documents" ON public.iqac_documents 
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage examination documents" ON public.examination_documents 
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage NCC events" ON public.ncc_events 
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage gallery images" ON public.gallery_images 
FOR ALL USING (auth.role() = 'authenticated');

-- Create storage policies
CREATE POLICY "Authenticated users can upload admin files" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'admin-uploads' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view admin files" ON storage.objects 
FOR SELECT USING (bucket_id = 'admin-uploads' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update admin files" ON storage.objects 
FOR UPDATE USING (bucket_id = 'admin-uploads' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete admin files" ON storage.objects 
FOR DELETE USING (bucket_id = 'admin-uploads' AND auth.role() = 'authenticated');

-- Staff photos policies
CREATE POLICY "Everyone can view staff photos" ON storage.objects 
FOR SELECT USING (bucket_id = 'staff-photos');

CREATE POLICY "Authenticated users can upload staff photos" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'staff-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update staff photos" ON storage.objects 
FOR UPDATE USING (bucket_id = 'staff-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete staff photos" ON storage.objects 
FOR DELETE USING (bucket_id = 'staff-photos' AND auth.role() = 'authenticated');

-- Gallery images policies
CREATE POLICY "Everyone can view gallery images" ON storage.objects 
FOR SELECT USING (bucket_id = 'gallery-images');

CREATE POLICY "Authenticated users can upload gallery images" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'gallery-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update gallery images" ON storage.objects 
FOR UPDATE USING (bucket_id = 'gallery-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete gallery images" ON storage.objects 
FOR DELETE USING (bucket_id = 'gallery-images' AND auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_announcements_updated_at
  BEFORE UPDATE ON public.announcements
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_staff_updated_at
  BEFORE UPDATE ON public.staff
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_iqac_documents_updated_at
  BEFORE UPDATE ON public.iqac_documents
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_examination_documents_updated_at
  BEFORE UPDATE ON public.examination_documents
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_ncc_events_updated_at
  BEFORE UPDATE ON public.ncc_events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_gallery_images_updated_at
  BEFORE UPDATE ON public.gallery_images
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();