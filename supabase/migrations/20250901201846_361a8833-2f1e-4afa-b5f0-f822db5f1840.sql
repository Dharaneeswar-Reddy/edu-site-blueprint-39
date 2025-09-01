-- Check what positions are currently allowed in the leadership table
SELECT conname, consrc 
FROM pg_constraint 
WHERE conrelid = 'public.leadership'::regclass 
  AND contype = 'c';

-- Drop the existing check constraint if it exists
ALTER TABLE public.leadership 
DROP CONSTRAINT IF EXISTS leadership_position_check;

-- Create a new check constraint that includes office_superintendent
ALTER TABLE public.leadership 
ADD CONSTRAINT leadership_position_check 
CHECK (position IN ('principal', 'correspondent', 'office_superintendent'));

-- Also ensure the position column allows the new value
COMMENT ON CONSTRAINT leadership_position_check ON public.leadership 
IS 'Allows principal, correspondent, and office_superintendent positions';