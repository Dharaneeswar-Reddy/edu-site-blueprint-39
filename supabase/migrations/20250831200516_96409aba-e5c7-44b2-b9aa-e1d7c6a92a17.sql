-- Swap document_type values for Internal Time Tables and Internal Circulars
-- This fixes the mix-up where time tables were stored as circulars and vice versa

-- First, temporarily rename to avoid conflicts
UPDATE examination_documents 
SET document_type = 'TEMP_INTERNAL_TIME_TABLES' 
WHERE document_type = 'Internal Time Tables';

-- Then swap: Internal Circulars -> Internal Time Tables
UPDATE examination_documents 
SET document_type = 'Internal Time Tables' 
WHERE document_type = 'Internal Circulars';

-- Finally: TEMP -> Internal Circulars
UPDATE examination_documents 
SET document_type = 'Internal Circulars' 
WHERE document_type = 'TEMP_INTERNAL_TIME_TABLES';