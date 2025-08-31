-- Remove auto-admin assignment for new users
-- This ensures only manually assigned users get admin access

-- Create a more restrictive function to prevent auto-admin assignment
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  -- Only create a profile entry, do NOT assign any role
  -- Roles must be manually assigned by existing admins
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  );
  
  -- Do not automatically assign any role
  -- Admins must manually assign roles through the admin panel
  
  RETURN NEW;
END;
$$;