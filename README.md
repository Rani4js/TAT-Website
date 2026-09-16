# Together Advanced Technologies Website

Responsive React website for Together Advanced Technologies (TAT), built with Vite. The site presents TAT's digital technology services through a responsive, theme-matched experience with animated inline SVG capability artwork.

## Features

- Responsive Home, About, Services, Contact, Careers, Privacy, and Terms pages
- Route-aware navigation and Get Quote modal
- Responsive technology carousel for Salesforce, UI/UX, Adobe AEM, React, and Data Cloud
- Native SVG capability artwork with official Salesforce and AEM assets where appropriate
- Cookie consent preferences for necessary, analytics, and marketing cookies
- Consent-gated browser/device information storage
- PHP/PDO endpoint and MySQL schema for browser-information storage
- Contact enquiry API that stores submissions and emails the visitor and TAT inbox
- Production output in `dist/`

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Vite starts the development server at the URL shown in the terminal, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The build command regenerates the tracked `dist/` directory. The preview command serves the production build locally.

## Browser-information API

The browser-information endpoint is located at:

```text
public/api/browser-info.php
```

The database schema is located at:

```text
public/api/browser-information.sql
```

To connect the frontend to the deployed PHP endpoint, copy `.env.example` to `.env` and set:

```env
VITE_BROWSER_INFO_API_URL=https://your-domain.example/api/browser-info.php
```

Configure the database credentials, allowed origin, and table name in the PHP endpoint before uploading it to cPanel. Do not commit `.env` or database credentials.

## Contact enquiry API

The contact enquiry endpoint is located at:

```text
public/api/contact.php
```

Import `public/api/contact-submissions.sql` into MySQL. Configure these server environment variables in cPanel:

```text
TAT_DATABASE_HOST
TAT_DATABASE_NAME
TAT_DATABASE_USER
TAT_DATABASE_PASSWORD
TAT_NOTIFICATION_EMAIL=support@togetherat.in
TAT_MAIL_FROM=support@togetherat.in
TAT_LOGO_URL=https://togetherat.in/favicon-512.png
```

The endpoint stores the enquiry, sends a branded HTML notification containing the submitted information to the TAT inbox, and sends the visitor a branded HTML confirmation. The frontend uses `VITE_CONTACT_FORM_API_URL`; when omitted, it posts to `/api/contact.php`.

If cPanel does not pass `SetEnv` values to PHP-FPM, copy
`public/api/config.example.php` to `public/api/config.php` on the server and
replace its placeholders. `config.php` is ignored by Git and must never be
committed. Keep it outside `public_html` when the hosting plan allows it.

To configure the API with Apache `.htaccess`, upload
`dist/api/.htaccess` as `public_html/api/.htaccess`, then replace the
placeholder values in its `SetEnv` directives. The API reads those values with
`getenv()`. Do not add backslashes before underscores in variable names.

## cPanel deployment

1. Run `npm run build`.
2. Upload the contents of `dist/` to the hosting document root, commonly `public_html/`.
3. Upload `public/api/browser-info.php` and `public/api/browser-information.sql` as needed for the API setup.
4. Create the MySQL table by importing `browser-information.sql` in phpMyAdmin.
5. Configure the PHP database connection and allowed origin.
6. Set the production `VITE_BROWSER_INFO_API_URL` before building the frontend.

For client-side routing, configure the host to serve `index.html` for application routes when the hosting provider supports rewrite rules.

## GitHub Pages

GitHub Pages deployment is configured in:

```text
.github/workflows/deploy-pages.yml
```

The workflow builds and deploys the `sreenivaskoda-react-dev-server` branch. Enable **Settings → Pages → Build and deployment → GitHub Actions** in the repository before the first deployment. The Vite base path and SPA fallback are configured for the repository site.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
