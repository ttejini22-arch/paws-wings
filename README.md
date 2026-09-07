# Paws & Wings

Phase 1 foundation for the Paws & Wings BCA project.

## Stack
HTML, CSS, JavaScript, Bootstrap 5, Supabase PostgreSQL/Auth/Storage, Netlify.

## First setup
1. Create a Supabase project.
2. Open SQL Editor.
3. Run `database/schema.sql`.
4. Run `database/policies.sql`.
5. Open Project Settings -> API.
6. Put the Project URL and Publishable/anon key into `assets/js/config.js`.
7. Open the project with VS Code Live Server.

Do not put a Supabase service-role key in frontend code.

## Next phases
- Supabase authentication and role redirects
- Report image upload and rescue creation
- Donations
- Adoption applications
- Volunteer and NGO workflows
- Admin CRUD
- Notifications
- Final Netlify deployment
