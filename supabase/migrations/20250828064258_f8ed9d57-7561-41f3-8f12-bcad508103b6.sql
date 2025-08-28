-- Create leadership table for chairman and principal
CREATE TABLE public.leadership (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  position text NOT NULL UNIQUE CHECK (position IN ('chairman', 'principal')),
  name text NOT NULL,
  designation text NOT NULL,
  department text,
  email text,
  phone text,
  photo_url text,
  bio text,
  qualifications text,
  experience text,
  specialization text,
  message text,
  achievements text[], -- Array for multiple achievements
  is_active boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leadership ENABLE ROW LEVEL SECURITY;

-- Create policies for leadership table
CREATE POLICY "Authenticated users can manage leadership"
ON public.leadership
FOR ALL
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Public can view active leadership"
ON public.leadership
FOR SELECT
USING (is_active = true);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_leadership_updated_at
BEFORE UPDATE ON public.leadership
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();