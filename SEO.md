# SomaLab — SEO Implementation

## What's in place

- **Per-route SEO** via `react-helmet-async` (`src/components/SEO.tsx`)
  Unique title, meta description, canonical, OG/Twitter cards on every page.
- **Structured data** (JSON-LD): site-wide `LocalBusiness` + `WebSite`, plus
  per-page `Service`, `Person`, `Blog`, `ContactPage`, and `BreadcrumbList`.
- **Sitemap**: `public/sitemap.xml` (8 routes)
- **Robots**: `public/robots.txt` (allows all crawlers, references sitemap)
- **`index.html`**: full default meta + LocalBusiness JSON-LD as a baseline for
  crawlers that don't execute JS.
- **Performance**: hero image `fetchpriority="high"`, all other images
  `loading="lazy" decoding="async"`, font preconnect.
- **NAP consistency**: single source of truth in `src/lib/seo-config.ts` — used
  by schema, footer, and contact page.

## Local SEO

`areaServed` schema covers Brisbane, Gold Coast, Sunshine Coast, Queensland,
and Australia. Page copy and meta descriptions reference Brisbane / Gold Coast
/ Australia-wide for ranking on local searches.

## Submitting to Google

1. Publish the site (Lovable → Publish).
2. Verify domain ownership in [Google Search Console](https://search.google.com/search-console).
3. Submit sitemap URL: `https://somalab.com.au/sitemap.xml`
4. Use **URL Inspection** → **Request Indexing** for `/`, `/about`, `/services`,
   `/contact` to accelerate first crawl.

## Why no SSR on Lovable

Lovable hosting serves the Vite SPA build directly — there is no Node server
runtime for SSR. Modern Googlebot **does execute JavaScript**, so the helmet
meta + JSON-LD are read on the second-pass render. This is the industry-standard
"hybrid" SEO pattern for SPAs and is sufficient for ranking.

## Optional: prerender for Vercel / Netlify

If you ever migrate hosting, run after `vite build`:

```bash
npm i -D puppeteer
node scripts/prerender.mjs
```

This generates static, fully-rendered `dist/<route>/index.html` for every route
— gives crawlers HTML with zero JS dependency and improves LCP.

## Future content for ranking

- Add blog posts (`src/pages/Blog.tsx` already supports them — append to the
  `posts` array). Each post should have its own `Article` schema and route.
- Add real reviews → `AggregateRating` schema.
- Add a real street address or service-area polygons → richer LocalBusiness
  schema and Google Business Profile linkage.
