# Fuevation — Electronics Value Recovery & Circular Solutions

**🌐 Live site: [https://pro-gram-mer.github.io/fuevation-static/](https://pro-gram-mer.github.io/fuevation-static/)**

Marketing website for **Fuevation**, which helps brands, OEMs, retailers and enterprises get the most value out of electronics through refurbishment, liquidation, parts recovery, reverse logistics, recycling and EPR compliance.

The site is plain static HTML, CSS and JavaScript with no build step, hosted on GitHub Pages. The repo also contains a work-in-progress Next.js version, described [below](#nextjs-version-work-in-progress).

---

## Pages

| Page | Path |
|------|------|
| Home | [`/`](https://pro-gram-mer.github.io/fuevation-static/) |
| Solutions overview | [`/solutions.html`](https://pro-gram-mer.github.io/fuevation-static/solutions.html) |
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

- **Shared header, footer and CTA:** `components.js` fetches them from `components/*.html` at runtime and rewrites their links, so they work at the domain root or under a sub-path such as GitHub Pages.
- **"Talk to an expert" modal:** a self-contained widget in `expert-contact/`.
- **SEO:** canonical URLs, Open Graph and Twitter cards, JSON-LD, `sitemap.xml` and `robots.txt`.
- **Analytics:** Google Tag Manager and GA4 event tracking via `analytics.js`.
- **PWA manifest:** `manifest.json`.
- **Responsive layout:** Outfit, Plus Jakarta Sans and Poppins from Google Fonts.

## Project structure

```
.
├── index.html                 # Home page
├── index.css                  # Global / home styles
├── main.js                    # Home page interactions
├── components.js              # Loads shared header / footer / CTA
├── analytics.js               # GTM + GA4 tracking
├── components/                # header.html, footer.html, cta.html
├── solutions.html             # Solutions overview
├── solutions.css
├── solutions/
│   ├── <solution>/index.html  # One folder per solution page
│   └── <solution>.css         # Per-page styles
├── expert-contact/            # Contact modal (HTML / CSS / JS)
├── assets/                    # Images, logos, icons
├── sitemap.xml, robots.txt, manifest.json
│
├── app/, lib/, public/        # Next.js version (WIP, not deployed)
└── DESIGN-SYSTEM.md           # Colours, type, spacing reference
```

## Run locally

No build step is needed. Serve the folder over HTTP rather than opening the file directly, because `components.js` uses `fetch`.

```bash
# any static server works
npx serve .
# or
python -m http.server 8000
```

Then open http://localhost:8000 (or the port the server prints).

## Deployment

The site is deployed with **GitHub Pages** from the `main` branch, repo root. Every push to `main` redeploys within a minute or two.

- `.nojekyll` stops Jekyll from processing the files.
- The production domain is `https://fuevation.com/`. Canonical and OG URLs point there, while the GitHub Pages URL above serves as the preview.

## Next.js version (work in progress)

`app/`, `lib/` and `public/` contain a Next.js 16 / React 19 / Tailwind v4 port of the site. It is **not** part of the GitHub Pages deployment.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Docs

- [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md): design tokens and UI guidelines
- [`IMAGE-AUDIT.md`](IMAGE-AUDIT.md): image optimisation notes
- [`IMPLEMENTATION-AUDIT.md`](IMPLEMENTATION-AUDIT.md): implementation review

---

© Fuevation. All rights reserved.
