# Anchrd website

The public website for Anchrd, built with React, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vite writes the static site to `dist/`. The root, `/privacy/`, and `/support/` are separate HTML entry points so each URL works directly on GitHub Pages.

## GitHub Pages

This folder is intended to be the root of its own repository. In that repository, set **Settings → Pages → Source** to **GitHub Actions**. Pushing `main` will then run the included deployment workflow. The `CNAME` file configures `anchrdgame.com`; DNS must also be pointed to GitHub Pages.

## Before launch

- Replace the placeholder App Store URL in `src/App.tsx`.
- Confirm `support@anchrdgame.com` receives mail.
- Add the custom domain in GitHub Pages and configure its DNS records.
