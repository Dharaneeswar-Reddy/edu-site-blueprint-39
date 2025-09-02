-- Configure CORS for staff-photos bucket to allow access from all domains
INSERT INTO storage.cors (bucket_id, allowed_origins, allowed_headers, allowed_methods)
VALUES (
  'staff-photos',
  ARRAY['*'],
  ARRAY['*'],
  ARRAY['GET', 'HEAD']
) ON CONFLICT (bucket_id) DO UPDATE SET
  allowed_origins = EXCLUDED.allowed_origins,
  allowed_headers = EXCLUDED.allowed_headers,
  allowed_methods = EXCLUDED.allowed_methods;