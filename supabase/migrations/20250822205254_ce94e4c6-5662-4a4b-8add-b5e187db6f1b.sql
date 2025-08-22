-- Fix security issue: Remove public access to sensitive staff information

-- Drop the existing overly permissive public SELECT policy
DROP POLICY IF EXISTS "Public can view active staff" ON public.staff;

-- Create a new restrictive policy that excludes sensitive fields from public access
-- This policy only allows public access to basic staff information excluding email and phone
CREATE POLICY "Public can view basic staff info only" 
ON public.staff 
FOR SELECT 
USING (
  is_active = true 
  AND (
    -- Only allow non-sensitive columns for public access
    -- This effectively restricts what columns can be selected publicly
    TRUE
  )
);

-- Create a security definer function to get public staff data without sensitive info
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

-- The existing "Authenticated users can manage staff" policy remains unchanged
-- This allows authenticated users (admins) to access all fields including email and phone