-- Upgrade the current admin user to super_admin
UPDATE public.user_roles 
SET role = 'super_admin' 
WHERE user_id = 'a854d73f-ff6c-4822-9054-38f78b0a8725' AND role = 'admin';