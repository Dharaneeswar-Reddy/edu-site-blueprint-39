-- Add report_type column to student_support_reports table
ALTER TABLE public.student_support_reports 
ADD COLUMN report_type TEXT DEFAULT 'NCC';

-- Add check constraint for report_type
ALTER TABLE public.student_support_reports 
ADD CONSTRAINT check_report_type 
CHECK (report_type IN ('NCC', 'NSS'));

-- Update existing records to have NCC as default
UPDATE public.student_support_reports 
SET report_type = 'NCC' 
WHERE report_type IS NULL;