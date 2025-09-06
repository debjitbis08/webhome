Notes Admin (Decap CMS)

Overview
- A CMS is available at `/admin` for adding notes with images and formatting.
- New notes are saved as Markdown in `src/content/note` and images to `public/uploads`.

Netlify Setup (recommended)
1) Deploy on Netlify (if not already). The repo includes `netlify.toml`.
2) In Netlify dashboard: Site settings → Identity → Enable Identity.
3) Identity → Settings → Services → Enable Git Gateway.
4) Invite your email under Identity → Invite users, accept the invite.
5) Enable GitHub login (no email/password): Identity → Settings → External providers → Enable GitHub. Users can sign in with GitHub.
6) Visit your deployed site at `/admin` and log in with GitHub. You’ll see the “Notes” collection.

Usage
- Create Note: Click “New Notes”, set Publish Date, write Markdown, upload images.
- Images: Uploaded files go to `/public/uploads` and are referenced as `/uploads/...`.
- Save/Publish: Publishing commits directly to the `main` branch.

Local Development (optional)
- You can run the site locally and still use `/admin` if you enable `local_backend` in `public/admin/config.yml` and run the Decap proxy: `npx decap-server`.

GitHub backend (without Netlify) — optional
- If you don’t want Netlify Identity/Git Gateway, Decap supports GitHub OAuth directly.
- Requirements: a small auth server (e.g., `netlify-cms-oauth-provider`) and a GitHub OAuth App.
- Config changes: switch `backend` in `public/admin/config.yml` to:
  - name: `github`
  - `repo: <owner>/<repo>` and `branch: main`
  - set your OAuth proxy `base_url` and `auth_endpoint`
- This offers GitHub login as well, but is more setup than Netlify with GitHub provider.

Alternate backends
- GitHub OAuth: Replace `backend` in `config.yml` with `name: github` and `repo: owner/name`, and configure a GitHub OAuth app. Use this if you’re not on Netlify.

Notes schema
- Frontmatter fields match `src/content.config.ts` for the `note` collection: `publishDate` (ISO 8601) and optional `pinned`.
- Body is Markdown. Relative links and embeds work as expected.
