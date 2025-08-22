-- Fix security warning: Set search_path for the public staff data function
DROP FUNCTION IF EXISTS public.get_public_staff_data();

CREATE OR REPLACE FUNCTION public.get_public_staff_data()
RETURNS TABLE (
  id uuid,
  name text,
  designation text,
  department text,
  photo_url text,
  bio text,
  qualification text,
  experience text,
  staff_type text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone
) 
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path TO 'public'
AS $$
  SELECT 
    s.id,
    s.name,
    s.designation,
    s.department,
    s.photo_url,
    s.bio,
    s.qualification,
    s.experience,
    s.staff_type,
    s.created_at,
    s.updated_at
  FROM public.staff s
  WHERE s.is_active = true;
$$;

-- Grant execute permission on the function to anonymous and authenticated users
GRANT EXECUTE ON FUNCTION public.get_public_staff_data() TO anon;
GRANT EXECUTE ON FUNCTION public.get_public_staff_data() TO authenticated;