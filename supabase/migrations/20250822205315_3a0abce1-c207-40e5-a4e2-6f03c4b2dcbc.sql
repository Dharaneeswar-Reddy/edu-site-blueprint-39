-- Fix security issue: Remove public access to sensitive staff information (idempotent)

-- Drop the existing overly permissive public SELECT policy
DROP POLICY IF EXISTS "Public can view active staff" ON public.staff;
DROP POLICY IF EXISTS "Public can view basic staff info only" ON public.staff;

-- Create a new restrictive policy using RPC function approach
-- First, create the function that provides only non-sensitive data
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

-- Create a more restrictive policy that denies public access to sensitive fields
-- Instead of allowing public SELECT, we'll remove it entirely and rely on the function
-- The authenticated users policy will still allow full access to admins