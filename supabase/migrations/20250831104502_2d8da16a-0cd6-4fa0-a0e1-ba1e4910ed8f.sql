-- Assign admin role to all existing users (temporary bootstrap)
-- This will make all currently registered users admins
-- You can modify roles later through the admin interface

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE id NOT IN (SELECT user_id FROM public.user_roles);

-- Alternative: If you know a specific email, uncomment and modify this:
-- INSERT INTO public.user_roles (user_id, role)
-- SELECT id, 'admin'::app_role
-- FROM auth.users
-- WHERE email = 'your-admin-email@example.com'
-- AND id NOT IN (SELECT user_id FROM public.user_roles);