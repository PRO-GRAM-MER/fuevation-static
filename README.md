# Fuevation — Electronics Value Recovery & Circular Solutions

**🌐 Live site: [https://pro-gram-mer.github.io/fuevation-static/](https://pro-gram-mer.github.io/fuevation-static/)**

Marketing website for **Fuevation**, which helps brands, OEMs, retailers and enterprises get the most value out of electronics through refurbishment, liquidation, parts recovery, reverse logistics, recycling and EPR compliance.

Built with Next.js 16, React 19 and Tailwind CSS v4, exported as static HTML and hosted on GitHub Pages.

---

## Pages

| Page | Path |
|------|------|
| Home | [`/`](https://pro-gram-mer.github.io/fuevation-static/) |
| Solutions overview | [`/solutions/`](https://pro-gram-mer.github.io/fuevation-static/solutions/) |
| Electronics Value Recovery | [`/solutions/electronics-value-recovery/`](https://pro-gram-mer.github.io/fuevation-static/solutions/electronics-value-recovery/) |
| Electronics Refurbishment | [`/solutions/electronics-refurbishment/`](https://pro-gram-mer.github.io/fuevation-static/solutions/electronics-refurbishment/) |
| Inventory Liquidation | [`/solutions/inventory-liquidation/`](https://pro-gram-mer.github.io/fuevation-static/solutions/inventory-liquidation/) |
| Excess Inventory Management | [`/solutions/excess-inventory-management/`](https://pro-gram-mer.github.io/fuevation-static/solutions/excess-inventory-management/) |
| EOL Inventory Management | [`/solutions/eol-inventory-management/`](https://pro-gram-mer.github.io/fuevation-static/solutions/eol-inventory-management/) |
| Parts Harvesting | [`/solutions/parts-harvesting/`](https://pro-gram-mer.github.io/fuevation-static/solutions/parts-harvesting/) |
| Reverse Logistics | [`/solutions/reverse-logistics/`](https://pro-gram-mer.github.io/fuevation-static/solutions/reverse-logistics/) |
| E-Waste Management | [`/solutions/e-waste-management/`](https://pro-gram-mer.github.io/fuevation-static/solutions/e-waste-management/) |
| Battery Recycling | [`/solutions/battery-recycling/`](https://pro-gram-mer.github.io/fuevation-static/solutions/battery-recycling/) |
| EPR Compliance | [`/solutions/epr-compliance/`](https://pro-gram-mer.github.io/fuevation-static/solutions/epr-compliance/) |

## Features

- **Data-driven solution pages:** one template (`components/solutions/solution-detail-template.tsx`) renders all ten pages from `lib/solution-details-data.ts`. The `/solutions/` hub cards and the footer's solution links are derived from the same data (`lib/solutions-data.ts`).
- **"Talk to an expert" modal:** `components/expert-contact/`.
- **SEO:** per-page metadata via `lib/metadata.ts` (canonical, Open Graph, Twitter card), JSON-LD (`lib/json-ld.tsx`), plus a generated `sitemap.xml` and `robots.txt`.
- **Analytics:** Google Tag Manager and GA4 via `@next/third-parties`, with event helpers in `lib/analytics.ts`. Loaded only in production builds that set the IDs (see [Configuration](#configuration)).
- **Images:** `scripts/generate-images.mjs` builds resized WebP variants and 1200×630 JPG share images into `public/_img/` (git-ignored) before every `dev` and `build`.

## Project structure

```
.
├── app/                        # Routes: home, /solutions, /solutions/[slug], 404, sitemap, robots
├── components/
│   ├── layout/                 # Site header and footer
│   ├── sections/               # Home page sections and the shared hero
│   ├── solutions/              # Solution page template and FAQ accordion
│   ├── ui/                     # Shared building blocks (breadcrumbs, section header, CTA band, class strings)
│   ├── expert-contact/         # Contact modal and trigger
│   └── analytics/
├── lib/                        # Site config, page data, metadata, JSON-LD, analytics, image loader, focus trap
├── public/images/              # Source images and icons
├── scripts/generate-images.mjs # Resized image variants and share images
├── docs/archive/               # Audits of the earlier static HTML site
├── next.config.ts              # Static export, basePath, image loader and sizes
└── .github/workflows/          # ci.yml (pull requests), deploy.yml (main → GitHub Pages)
```

## Run locally

Requires Node.js 22 (the version CI uses).

```bash
npm ci
npm run dev     # http://localhost:3000 (generates image variants first)
npm run lint
npx next typegen && npx tsc --noEmit
```

## Configuration

All settings are build-time environment variables:

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Sub-path the site is served from (`/fuevation-static` on GitHub Pages) | empty (served at `/`) |
| `NEXT_PUBLIC_SITE_ENV` | `preview` makes every page `noindex` and turns analytics off | unset (production) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | unset (GTM not loaded) |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID, loaded directly alongside GTM | unset (GA4 not loaded) |

In GitHub Actions, `deploy.yml` reads the repository variables `SITE_ENV` (defaults to `preview`), `GTM_ID` and `GA_ID` (Settings → Secrets and variables → Actions → Variables). If GA4 is also configured as a tag inside the GTM container, leave `GA_ID` unset to avoid counting page views twice.

## Deployment

Pull requests into `main` run `.github/workflows/ci.yml` (lint, type check and build; no deploy). Every push to `main` runs `.github/workflows/deploy.yml`. The workflow builds a static export (`next build` with `output: "export"`) into `out/` and publishes it to GitHub Pages.

- GitHub Pages serves the site under `/fuevation-static/`. The workflow passes that path to the build as `NEXT_PUBLIC_BASE_PATH`. Locally the variable is unset, so the site runs at `/`.
- `next/image` uses a custom loader (`lib/image-loader.ts`) that only adds the base path, because a static export has no image optimizer.
- The production domain is `https://fuevation.com/`. Canonical and OG URLs point there, and the GitHub Pages URL above serves as a preview (built with `NEXT_PUBLIC_SITE_ENV=preview`, so it is `noindex` and loads no analytics).
- As of October 2026, fuevation.com still serves the earlier static HTML site, not this build. Share images and the Organization logo resolve to `https://fuevation.com/_img/…` and `/images/…`, which only exist once this build is deployed there.

To preview the static export locally (served at `/`, without the base path):

```bash
npm run build
npx serve out
```

## Docs

- [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md): design tokens and UI guidelines (tokens live in `app/globals.css`)
- [`docs/archive/`](docs/archive/): image and implementation audits of the earlier static HTML site

---

© Fuevation. All rights reserved.
