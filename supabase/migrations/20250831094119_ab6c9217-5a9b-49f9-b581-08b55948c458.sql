-- Create table for student achievements per department
CREATE TABLE public.student_achievements (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department text NOT NULL,
  title text NOT NULL,
  description text,
  file_url text NOT NULL,
  file_type text NOT NULL, -- 'pdf', 'excel', 'word', 'image', 'other'
  academic_year text,
  achievement_date date,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.student_achievements ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can view active student achievements" 
ON public.student_achievements 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage student achievements" 
ON public.student_achievements 
FOR ALL 
USING (auth.role() = 'authenticated'::text);

-- Create trigger for updated_at
CREATE TRIGGER update_student_achievements_updated_at
BEFORE UPDATE ON public.student_achievements
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();