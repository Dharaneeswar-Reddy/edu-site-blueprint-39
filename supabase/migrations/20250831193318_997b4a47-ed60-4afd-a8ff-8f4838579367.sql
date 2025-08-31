
-- 1) Make is_admin return true for both 'admin' and 'super_admin'
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid DEFAULT auth.uid())
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_roles.user_id = is_admin.user_id
      AND user_roles.role IN ('admin','super_admin')
  );
$function$;

-- 2) Storage policies for examination-docs (upload/manage) and admin-uploads (delete legacy files)
-- Note: storage.objects already has RLS enabled by Supabase.

-- Allow authenticated admins to upload (INSERT) to examination-docs
CREATE POLICY "Admins can upload to examination-docs"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'examination-docs' AND public.is_admin()
);

-- Allow authenticated admins to update objects in examination-docs
CREATE POLICY "Admins can update in examination-docs"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'examination-docs' AND public.is_admin()
)
WITH CHECK (
  bucket_id = 'examination-docs' AND public.is_admin()
);

-- Allow authenticated admins to delete objects in examination-docs
CREATE POLICY "Admins can delete from examination-docs"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'examination-docs' AND public.is_admin()
);

-- Allow authenticated admins to delete legacy objects in admin-uploads
CREATE POLICY "Admins can delete from admin-uploads"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'admin-uploads' AND public.is_admin()
);
