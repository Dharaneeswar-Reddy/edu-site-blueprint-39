-- Fix security issue: Remove public read access to login_attempts table
-- The table should only be accessible through security definer functions for rate limiting

-- Drop the dangerous public SELECT policy
DROP POLICY IF EXISTS "Anyone can view login attempts for rate limiting" ON public.login_attempts;

-- Add a restricted policy that only allows system-level access
-- No public SELECT access - only security definer functions can read this table
CREATE POLICY "System can manage login attempts for security" 
ON public.login_attempts 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Ensure the existing security definer functions still work by confirming their permissions
-- The check_login_attempts, record_failed_login, and reset_login_attempts functions
-- are already SECURITY DEFINER so they can still access the table