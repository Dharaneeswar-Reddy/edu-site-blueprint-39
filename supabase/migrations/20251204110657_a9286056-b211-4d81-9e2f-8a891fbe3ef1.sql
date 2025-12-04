-- Create department_images table for hero images and gallery images
CREATE TABLE public.department_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department TEXT NOT NULL,
  image_type TEXT NOT NULL CHECK (image_type IN ('hero', 'gallery')),
  image_url TEXT NOT NULL,
  title TEXT,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.department_images ENABLE ROW LEVEL SECURITY;

-- Public can view active department images
CREATE POLICY "Public can view active department images" 
ON public.department_images 
FOR SELECT 
USING (is_active = true);

-- Only admins can manage department images
CREATE POLICY "Only admins can manage department images" 
ON public.department_images 
FOR ALL 
USING (is_admin())
WITH CHECK (is_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_department_images_updated_at
BEFORE UPDATE ON public.department_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_department_images_department ON public.department_images(department);
CREATE INDEX idx_department_images_type ON public.department_images(image_type);