-- Create user roles system to fix overly permissive RLS policies
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create profiles table for user management
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on new tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer functions to avoid RLS recursion
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS app_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.user_roles WHERE user_roles.user_id = get_user_role.user_id LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = is_admin.user_id 
    AND role = 'admin'
  );
$$;

-- Create function to get public staff data without PII
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

-- Create function to get public leadership data without PII
CREATE OR REPLACE FUNCTION public.get_public_leadership_data()
RETURNS TABLE(
  id UUID,
  name TEXT,
  position TEXT,
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
AS $$
  SELECT 
    l.id,
    l.name,
    l.position,
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

-- Create function to get public student support staff without PII
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

-- Update RLS policies to be admin-only for management operations
-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can manage announcements" ON public.announcements;
DROP POLICY IF EXISTS "Authenticated users can manage timetables" ON public.department_timetables;
DROP POLICY IF EXISTS "Authenticated users can manage examination documents" ON public.examination_documents;
DROP POLICY IF EXISTS "Authenticated users can manage gallery images" ON public.gallery_images;
DROP POLICY IF EXISTS "Authenticated users can manage IQAC documents" ON public.iqac_documents;
DROP POLICY IF EXISTS "Authenticated users can manage leadership" ON public.leadership;
DROP POLICY IF EXISTS "Authenticated users can manage NCC events" ON public.ncc_events;
DROP POLICY IF EXISTS "Authenticated users can manage staff" ON public.staff;
DROP POLICY IF EXISTS "Authenticated users can manage student achievements" ON public.student_achievements;
DROP POLICY IF EXISTS "Authenticated users can manage student support galleries" ON public.student_support_galleries;
DROP POLICY IF EXISTS "Authenticated users can manage student support reports" ON public.student_support_reports;
DROP POLICY IF EXISTS "Authenticated users can manage student support services" ON public.student_support_services;
DROP POLICY IF EXISTS "Authenticated users can manage student support staff" ON public.student_support_staff;

-- Create admin-only management policies
CREATE POLICY "Only admins can manage announcements" ON public.announcements
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage timetables" ON public.department_timetables
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage examination documents" ON public.examination_documents
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage gallery images" ON public.gallery_images
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage IQAC documents" ON public.iqac_documents
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage leadership" ON public.leadership
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage NCC events" ON public.ncc_events
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage staff" ON public.staff
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage student achievements" ON public.student_achievements
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage student support galleries" ON public.student_support_galleries
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage student support reports" ON public.student_support_reports
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage student support services" ON public.student_support_services
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can manage student support staff" ON public.student_support_staff
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
FOR SELECT TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
FOR SELECT TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can manage profiles" ON public.profiles
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- User roles policies
CREATE POLICY "Admins can manage user roles" ON public.user_roles
FOR ALL TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "Users can view their own roles" ON public.user_roles
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

-- Create trigger for profile creation on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Add trigger for updated_at on profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();