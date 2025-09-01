-- Drop the existing check constraint if it exists
ALTER TABLE public.leadership 
DROP CONSTRAINT IF EXISTS leadership_position_check;

-- Create a new check constraint that includes office_superintendent
ALTER TABLE public.leadership 
ADD CONSTRAINT leadership_position_check 
CHECK (position IN ('principal', 'correspondent', 'office_superintendent'));