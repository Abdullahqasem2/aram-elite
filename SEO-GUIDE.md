# Aram Elite — SEO Guide

Everything already built into the site, plus the steps only you can do. Ranking #1 is won by doing ALL of this, not just the code.

## What's already done in the code

- **Title & meta description** — Arabic + English, keyword-rich, Riyadh-targeted (`index.html`)
- **Structured data (JSON-LD)** — `GeneralContractor` local business schema with phone, 24/7 hours, Riyadh service area, free-site-visit offer, all 7 services, and an FAQ schema (eligible for rich results in Google)
- **robots.txt + sitemap.xml** — in `/public`, deployed automatically with the build
- **Canonical URL** — https://www.aram-elite.sa/
- **Open Graph / Twitter cards** — proper preview when the link is shared on WhatsApp/social
- **One full section per service** with keyword-loaded H2 headings ("مقاولات عامة في الرياض", "عقود صيانة سنوية"...) and every sub-service in the page as indexable text (the old tabbed layout hid this from Google)
- **Descriptive image alt text** in both languages
- **Geo meta tags** for Riyadh

## Target keywords (built into headings/content)

| Service | Arabic | English |
|---|---|---|
| Contracting | مقاولات عامة الرياض، شركة مقاولات | general contractor Riyadh |
| Design | تصميم داخلي الرياض، تصميم واجهات | interior design Riyadh |
| Renovation | ترميم فلل الرياض، تجديد منازل | villa renovation Riyadh |
| Maintenance | عقود صيانة سنوية، صيانة منازل الرياض، إدارة مرافق | annual maintenance contract, facility management Riyadh |
| Luxury | بناء قصور فاخرة، تصميم قصور | luxury mansion construction Saudi Arabia |

## Steps only YOU can do (in priority order)

1. **Google Business Profile (single highest-impact step for local search)**
   - Create at business.google.com with the exact name "مجموعة أرام إيليت للمقاولات — Aram Elite Contracting Group"
   - Add +966 50 208 0228, website URL, Riyadh service area, 24/7 hours, all 7 service categories, and 10+ real project photos
   - This is what puts you in the Google Maps 3-pack for "مقاولات الرياض"

2. **Google Search Console** — verify www.aram-elite.sa, submit `sitemap.xml`. This is how Google discovers the site and how you monitor which keywords bring visitors.

3. **Reviews** — after every completed job, WhatsApp the client a direct link to review you on Google. Reviews are a top-3 local ranking factor. Aim for 2–3/month minimum.

4. **Replace stock photos with real project photos** — rename files with keywords before uploading (e.g. `مقاولات-عامة-الرياض.jpg`, `villa-renovation-riyadh.jpg`). Real photos convert better and rank in Google Images.

5. **Local citations** — list the business with identical name/phone/URL on: Foursquare, Bing Places, Yelp, Saudi directories (Daleeli, etc.). Consistency matters.

6. **Backlinks** — ask suppliers, partner companies, and any press/project announcements to link to the site.

7. **Bing Places + Bing Webmaster Tools** — 5 minutes, covers the "any search engine" goal.

## Technical notes

- The site is a React SPA. Google renders JavaScript fine, but if you later want maximum SEO, migrate to pre-rendering/SSG (e.g. `vite-plugin-ssr` or Astro) so HTML is served ready-made. Not urgent.
- Default language is Arabic (matches most Riyadh search volume). The EN toggle covers English searchers; if English traffic becomes significant, consider separate `/en/` URLs with hreflang tags — separate URLs per language rank better than a JS toggle.
- Update `lastmod` in `sitemap.xml` whenever you change the site.
- Keep the site fast: compress any photos you upload to under ~300 KB (use tinypng.com).

## Measuring

- Google Search Console → Performance: which queries you rank for
- Track WhatsApp clicks: consider adding a Google Analytics 4 tag later
- Realistic timeline: Maps results within weeks of GBP setup + reviews; organic top rankings for "مقاولات الرياض" take 3–6+ months of reviews, photos and backlinks (it's a competitive keyword). Long-tail terms like "عقود صيانة سنوية للمولات الرياض" rank much faster.
