# Site Image Manager and Current Events

## Build
- Add an admin-managed image registry for image placements throughout the site. Convert existing static image placements to read from the registry while retaining their current images as fallbacks; leave the current gallery and department image managers working as they are.
- Add a public Current Events listing and individual event detail pages. Admins can create, edit, publish/unpublish, and remove events with a short summary, full details, registration link, event date, cover image, and supporting photos.
- Add matching admin navigation and public navigation for these pages, preserving existing page layouts and styling conventions.

## Delivery steps
1. Add Supabase tables and access policies for editable site-image placements and public events, with public read limited to active/published content and admin-only changes.
2. Build the image registry admin screen with upload, replace, preview, and reset/remove controls; update existing static image placements to use registry overrides with their original images as safe fallbacks.
3. Build event administration and the public event listing/detail experience, including photo display and registration links.
4. Verify the relevant public pages, admin flows, image fallbacks, and mobile presentation.

## Technical details
- Use the existing `admin-uploads` public Supabase Storage bucket for uploaded images and the current `is_admin()` authorization pattern for protected writes.
- Use the project's Supabase migration tool for schema changes, with explicit table grants before RLS enablement and policies.
- Preserve the existing department-image and general-gallery data flows; this work manages other image placements without replacing those tools.
