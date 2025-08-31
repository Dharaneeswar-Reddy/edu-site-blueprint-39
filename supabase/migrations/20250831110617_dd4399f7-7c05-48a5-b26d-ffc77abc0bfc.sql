-- Add super_admin to app_role enum
ALTER TYPE public.app_role ADD VALUE 'super_admin';

-- Create login_attempts table for rate limiting
CREATE TABLE public.login_attempts (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text,
  ip_address inet,
  failed_attempts integer NOT NULL DEFAULT 0,
  last_attempt_at timestamp with time zone NOT NULL DEFAULT now(),
  locked_until timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create admin_invitations table
CREATE TABLE public.admin_invitations (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  invited_by uuid REFERENCES auth.users(id),
  invitation_token text NOT NULL,
  role app_role NOT NULL DEFAULT 'admin',
  expires_at timestamp with time zone NOT NULL,
  used_at timestamp with time zone,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create audit_logs table for security monitoring
CREATE TABLE public.audit_logs (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  action text NOT NULL,
  resource_type text,
  resource_id text,
  details jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on new tables
ALTER TABLE public.login_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for login_attempts (public access needed for rate limiting)
CREATE POLICY "Anyone can view login attempts for rate limiting"
ON public.login_attempts FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert login attempts"
ON public.login_attempts FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can update login attempts for rate limiting"
ON public.login_attempts FOR UPDATE
USING (true);

-- Create policies for admin_invitations
CREATE POLICY "Super admins can manage invitations"
ON public.admin_invitations FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'super_admin'
  )
);

CREATE POLICY "Invited users can view their own invitation"
ON public.admin_invitations FOR SELECT
USING (email = (SELECT email FROM auth.users WHERE id = auth.uid()));

-- Create policies for audit_logs
CREATE POLICY "Super admins can view all audit logs"
ON public.audit_logs FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'super_admin'
  )
);

CREATE POLICY "Admins can insert audit logs"
ON public.audit_logs FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
  )
);

-- Create function to check if user is super admin
CREATE OR REPLACE FUNCTION public.is_super_admin(user_id uuid DEFAULT auth.uid())
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = is_super_admin.user_id 
    AND role = 'super_admin'
  );
$$;

-- Create function to get user role level (for hierarchical permissions)
CREATE OR REPLACE FUNCTION public.get_user_role_level(user_id uuid DEFAULT auth.uid())
RETURNS integer
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT CASE 
    WHEN EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.user_id = get_user_role_level.user_id AND role = 'super_admin') THEN 3
    WHEN EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.user_id = get_user_role_level.user_id AND role = 'admin') THEN 2
    WHEN EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.user_id = get_user_role_level.user_id AND role = 'moderator') THEN 1
    ELSE 0
  END;
$$;

-- Create function to check and update login attempts
CREATE OR REPLACE FUNCTION public.check_login_attempts(user_email text, user_ip inet DEFAULT NULL)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  attempt_record record;
  is_locked boolean := false;
  remaining_attempts integer := 5;
  lockout_minutes integer := 0;
BEGIN
  -- Get or create login attempt record
  SELECT * INTO attempt_record
  FROM public.login_attempts
  WHERE email = user_email OR (user_ip IS NOT NULL AND ip_address = user_ip)
  ORDER BY last_attempt_at DESC
  LIMIT 1;

  -- Check if account is currently locked
  IF attempt_record.locked_until IS NOT NULL AND attempt_record.locked_until > now() THEN
    is_locked := true;
    lockout_minutes := EXTRACT(EPOCH FROM (attempt_record.locked_until - now())) / 60;
  ELSE
    -- Reset if lockout period has passed
    IF attempt_record.locked_until IS NOT NULL AND attempt_record.locked_until <= now() THEN
      UPDATE public.login_attempts 
      SET failed_attempts = 0, locked_until = NULL, updated_at = now()
      WHERE id = attempt_record.id;
      attempt_record.failed_attempts := 0;
    END IF;
    
    remaining_attempts := 5 - COALESCE(attempt_record.failed_attempts, 0);
  END IF;

  RETURN jsonb_build_object(
    'is_locked', is_locked,
    'remaining_attempts', GREATEST(remaining_attempts, 0),
    'lockout_minutes', ROUND(lockout_minutes::numeric, 0),
    'failed_attempts', COALESCE(attempt_record.failed_attempts, 0)
  );
END;
$$;

-- Create function to record failed login attempt
CREATE OR REPLACE FUNCTION public.record_failed_login(user_email text, user_ip inet DEFAULT NULL)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  attempt_record record;
  new_failed_attempts integer;
  lockout_until timestamp with time zone := NULL;
BEGIN
  -- Get existing record
  SELECT * INTO attempt_record
  FROM public.login_attempts
  WHERE email = user_email OR (user_ip IS NOT NULL AND ip_address = user_ip)
  ORDER BY last_attempt_at DESC
  LIMIT 1;

  IF attempt_record IS NULL THEN
    -- Create new record
    INSERT INTO public.login_attempts (email, ip_address, failed_attempts, last_attempt_at)
    VALUES (user_email, user_ip, 1, now());
    new_failed_attempts := 1;
  ELSE
    -- Update existing record
    new_failed_attempts := attempt_record.failed_attempts + 1;
    
    -- Calculate lockout period based on failed attempts
    IF new_failed_attempts >= 5 THEN
      lockout_until := now() + interval '15 minutes';
    END IF;
    
    UPDATE public.login_attempts
    SET 
      failed_attempts = new_failed_attempts,
      last_attempt_at = now(),
      locked_until = lockout_until,
      updated_at = now()
    WHERE id = attempt_record.id;
  END IF;

  RETURN jsonb_build_object(
    'failed_attempts', new_failed_attempts,
    'is_locked', lockout_until IS NOT NULL,
    'remaining_attempts', GREATEST(5 - new_failed_attempts, 0),
    'lockout_minutes', CASE WHEN lockout_until IS NOT NULL THEN 15 ELSE 0 END
  );
END;
$$;

-- Create function to reset login attempts on successful login
CREATE OR REPLACE FUNCTION public.reset_login_attempts(user_email text, user_ip inet DEFAULT NULL)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  UPDATE public.login_attempts
  SET 
    failed_attempts = 0,
    locked_until = NULL,
    updated_at = now()
  WHERE email = user_email OR (user_ip IS NOT NULL AND ip_address = user_ip);
END;
$$;

-- Create triggers for updated_at columns
CREATE TRIGGER update_login_attempts_updated_at
  BEFORE UPDATE ON public.login_attempts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_admin_invitations_updated_at
  BEFORE UPDATE ON public.admin_invitations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();