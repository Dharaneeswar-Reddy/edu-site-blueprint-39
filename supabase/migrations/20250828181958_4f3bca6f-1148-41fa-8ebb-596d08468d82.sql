-- Create table for student support services
CREATE TABLE public.student_support_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL, -- 'JKC', 'NCC', 'NSS', 'Consumer Club', etc.
  title TEXT NOT NULL,
  description TEXT,
  vision TEXT,
  mission TEXT,
  objectives TEXT[], -- Array of objectives
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for student support yearly reports
CREATE TABLE public.student_support_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  academic_year TEXT NOT NULL,
  file_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for student support staff
CREATE TABLE public.student_support_staff (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL,
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  department TEXT,
  email TEXT,
  phone TEXT,
  photo_url TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for student support galleries
CREATE TABLE public.student_support_galleries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.student_support_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_support_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_support_staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_support_galleries ENABLE ROW LEVEL SECURITY;

-- Create policies for student support services
CREATE POLICY "Public can view active student support services" 
ON public.student_support_services 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage student support services" 
ON public.student_support_services 
FOR ALL 
USING (auth.role() = 'authenticated'::text);

-- Create policies for reports
CREATE POLICY "Public can view active student support reports" 
ON public.student_support_reports 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage student support reports" 
ON public.student_support_reports 
FOR ALL 
USING (auth.role() = 'authenticated'::text);

-- Create policies for staff
CREATE POLICY "Public can view active student support staff" 
ON public.student_support_staff 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage student support staff" 
ON public.student_support_staff 
FOR ALL 
USING (auth.role() = 'authenticated'::text);

-- Create policies for galleries
CREATE POLICY "Public can view active student support galleries" 
ON public.student_support_galleries 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage student support galleries" 
ON public.student_support_galleries 
FOR ALL 
USING (auth.role() = 'authenticated'::text);

-- Create triggers for timestamp updates
CREATE TRIGGER update_student_support_services_updated_at
BEFORE UPDATE ON public.student_support_services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_student_support_reports_updated_at
BEFORE UPDATE ON public.student_support_reports
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_student_support_staff_updated_at
BEFORE UPDATE ON public.student_support_staff
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_student_support_galleries_updated_at
BEFORE UPDATE ON public.student_support_galleries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();