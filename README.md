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

- **Data-driven solution pages:** one template (`components/solutions/solution-detail-template.tsx`) renders all ten pages from `lib/solution-details-data.ts`.
- **"Talk to an expert" modal:** `components/expert-contact/`.
- **SEO:** per-page metadata, canonical URLs, Open Graph and Twitter cards, JSON-LD (`lib/json-ld.tsx`), plus a generated `sitemap.xml` and `robots.txt`.
- **Analytics:** Google Tag Manager and GA4 via `@next/third-parties`, with event helpers in `lib/analytics.ts`.

## Project structure

```
.
├── app/                        # Routes: home, /solutions, /solutions/[slug], sitemap, robots
├── components/
│   ├── layout/                 # Site header and footer
│   ├── sections/               # Home page sections
│   ├── solutions/              # Solution page template and FAQ accordion
│   ├── expert-contact/         # Contact modal and trigger
│   └── analytics/
├── lib/                        # Site config, page data, JSON-LD, analytics, image loader
├── public/images/              # Images and icons
├── next.config.ts              # Static export, basePath and image loader
└── .github/workflows/deploy.yml
```

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`. The workflow builds a static export (`next build` with `output: "export"`) into `out/` and publishes it to GitHub Pages.

- GitHub Pages serves the site under `/fuevation-static/`. The workflow passes that path to the build as `NEXT_PUBLIC_BASE_PATH`. Locally the variable is unset, so the site runs at `/`.
- `next/image` uses a custom loader (`lib/image-loader.ts`) that only adds the base path, because a static export has no image optimizer.
- The production domain is `https://fuevation.com/`. Canonical and OG URLs point there, and the GitHub Pages URL above serves as a preview.

To preview the static export locally (served at `/`, without the base path):

```bash
npm run build
npx serve out
```

## Docs

These notes were written for the earlier static HTML version of the site.


- [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md): design tokens and UI guidelines
- [`IMAGE-AUDIT.md`](IMAGE-AUDIT.md): image optimisation notes
- [`IMPLEMENTATION-AUDIT.md`](IMPLEMENTATION-AUDIT.md): implementation review

---

© Fuevation. All rights reserved.
