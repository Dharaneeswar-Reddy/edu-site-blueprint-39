-- Add super_admin to app_role enum (must be in separate transaction)
ALTER TYPE public.app_role ADD VALUE 'super_admin';