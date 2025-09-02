-- Add public read access policy for staff table
CREATE POLICY "Public can view active staff" 
ON public.staff 
FOR SELECT 
USING (is_active = true);