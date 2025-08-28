-- Create department_timetables table for storing department-specific timetables
CREATE TABLE public.department_timetables (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  academic_year TEXT,
  semester TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.department_timetables ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access and authenticated admin access
CREATE POLICY "Public can view active timetables" 
ON public.department_timetables 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage timetables" 
ON public.department_timetables 
FOR ALL 
USING (auth.role() = 'authenticated'::text);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_department_timetables_updated_at
BEFORE UPDATE ON public.department_timetables
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();