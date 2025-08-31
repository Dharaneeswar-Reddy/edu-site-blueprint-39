-- Fix function search path security warnings
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS app_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT role FROM public.user_roles WHERE user_roles.user_id = get_user_role.user_id LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = is_admin.user_id 
    AND role = 'admin'
  );
$$;

CREATE OR REPLACE FUNCTION public.get_public_staff_data_secure()
RETURNS TABLE(
  id UUID,
  name TEXT,
  designation TEXT,
  department TEXT,
  photo_url TEXT,
  bio TEXT,
  qualification TEXT,
  experience TEXT,
  staff_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE SQL
STABLE SECURITY DEFINER
SET search_path = public
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

CREATE OR REPLACE FUNCTION public.get_public_leadership_data()
RETURNS TABLE(
  id UUID,
  name TEXT,
  "position" TEXT,
  designation TEXT,
  department TEXT,
  bio TEXT,
  message TEXT,
  photo_url TEXT,
  qualifications TEXT,
  experience TEXT,
  specialization TEXT,
  achievements TEXT[],
  is_active BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE SQL
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    l.id,
    l.name,
    l."position",
    l.designation,
    l.department,
    l.bio,
    l.message,
    l.photo_url,
    l.qualifications,
    l.experience,
    l.specialization,
    l.achievements,
    l.is_active,
    l.created_at,
    l.updated_at
  FROM public.leadership l
  WHERE l.is_active = true;
$$;

CREATE OR REPLACE FUNCTION public.get_public_student_support_staff()
RETURNS TABLE(
  id UUID,
  service_name TEXT,
  name TEXT,
  designation TEXT,
  department TEXT,
  photo_url TEXT,
  display_order INTEGER,
  is_active BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE SQL
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    s.id,
    s.service_name,
    s.name,
    s.designation,
    s.department,
    s.photo_url,
    s.display_order,
    s.is_active,
    s.created_at,
    s.updated_at
  FROM public.student_support_staff s
  WHERE s.is_active = true;
$$;