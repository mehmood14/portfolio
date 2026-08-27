# Mehmood ul Haq — Portfolio

A fast, content-first React and TypeScript portfolio designed for Vercel deployment.

**Live site:** [portfolio-amber-one-79.vercel.app](https://portfolio-amber-one-79.vercel.app/)

<img width="1332" height="852" alt="Screenshot 2026-08-27 at 6 03 18 PM" src="https://github.com/user-attachments/assets/e22dcdf6-2fe2-4f22-805b-04e3d5887814" />

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Deployment

Import this repository into Vercel. The default build command (`npm run build`) and output directory (`dist`) are detected automatically. The included `vercel.json` routes direct visits to client-side pages through the application, including the custom 404 view.

Before publishing, add `VITE_SITE_URL` in Vercel's environment variables with the final production URL (for example, `https://your-domain.example`). It supplies canonical and social-sharing URLs at runtime. Configure the same custom domain in Vercel and its DNS provider.

## Content and confidentiality

Portfolio content lives in `src/content/portfolio.ts`; routes live in `src/app/App.tsx`; page and component styles are co-located with their source files.

The source reference documents (`resume.md` and `portfolio.md`) are intentionally ignored by Git. They are local working material and must not be deployed or committed. Project descriptions on the site are generalized to avoid exposing internal systems, customer data, private URLs, implementation details, or unsupported claims.

## Source structure

- `src/app` — application shell and routes
- `src/pages` — route-level portfolio pages, with co-located styles
- `src/components` — shared layout and navigation UI
- `src/content` — typed portfolio content
- `src/styles` — global tokens, reset rules, and shared responsive styles
