# SEO Audit Report: agusnarestha.dev

**Date:** June 15, 2026
**Site:** https://agusnarestha.dev
**Framework:** Next.js (App Router) on Vercel
**Business Type:** Personal Portfolio + Technical Blog
**Total Pages Crawled:** 12 (sitemap: 12 URLs, 8 blog posts)

---

## Executive Summary

### Overall SEO Health Score: **78/100**

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 85/100 | 22% | 18.7 |
| Content Quality | 78/100 | 23% | 17.9 |
| On-Page SEO | 80/100 | 20% | 16.0 |
| Schema / Structured Data | 68/100 | 10% | 6.8 |
| Performance (CWV) | 88/100 | 10% | 8.8 |
| AI Search Readiness | 74/100 | 10% | 7.4 |
| Images | 76/100 | 5% | 3.8 |

### Top 5 Critical Findings

1. **Homepage hero uses `<p>` instead of `<h1>`** — Name "Agus Narestha" rendered as paragraph, not heading
2. **Blog `lastmod` uses `new Date()` for static pages** — false modification dates erode Google's trust in the signal
3. **BlogPosting `publisher` is Person, not Organization** — disqualifies from Google Article rich results
4. **BreadcrumbList is semantically incorrect** — flat navigation map, not per-page breadcrumb trail
5. **Duplicate robots.txt (static + dynamic)** — `public/robots.txt` is dead code, causes confusion

### Top 5 Quick Wins

1. Change `motion.p` → `motion.h1` in `HomeSection.tsx` (5 min)
2. Remove `public/robots.txt` (2 min)
3. Add visible author byline to blog post pages (10 min)
4. Add explicit AI crawler directives to `robots.ts` (5 min)
5. Add `modifiedDate` field to BlogPost type (15 min)

---

## 1. Technical SEO (Score: 85/100)

### What Works

- **robots.txt properly configured** — Dynamic route in `src/app/robots.ts` with correct Allow/Disallow rules and sitemap reference
- **HTTPS enforced** — `Strict-Transport-Security: max-age=63072000` (2 years)
- **Vercel CDN caching** — `X-Vercel-Cache: HIT` with Brotli compression enabled
- **Static prerendering** — `X-Nextjs-Prerender: 1` ensures fast TTFB
- **Google Search Console verified** — `google-site-verification` meta tag present
- **Analytics installed** — Google Tag Manager (GTM-PHV2VZN6) and Google Analytics (G-B2ZN13JQ9F) active
- **Privacy-friendly analytics** — Umami self-hosted analytics also installed
- **Meta tags comprehensive** — OG, Twitter card, canonical, keywords, authors all present
- **RSS feed available** — `/feed.xml` with RSS 2.0 format
- **llms.txt implemented** — Dynamic route with proper markdown formatting

### Findings

| # | Title | Severity | Description |
|---|-------|----------|-------------|
| T1 | Duplicate robots.txt files | Medium | Both `public/robots.txt` and `src/app/robots.ts` exist. Next.js dynamic route overrides the static file, making `public/robots.txt` dead code. Anyone editing the static file will see no effect. |
| T2 | robots.txt missing AI crawler directives | Low | No explicit rules for GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot. While wildcard allow covers them, explicit directives signal intent. |
| T3 | No `Content-Security-Policy` header | Low | Only HSTS is set. Missing CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy headers. Vercel provides some defaults but custom headers should be added in `next.config`. |
| T4 | `generator: "Next.js"` meta tag exposed | Low | Reveals framework version, minor security consideration. Generally acceptable but can be removed. |
| T5 | No Bing Webmaster verification | Info | Google is verified but no `<meta name="msvalidate.01">` tag for Bing. Bing Copilot visibility benefits from Bing Webmaster Tools registration. |

---

## 2. Content Quality (Score: 78/100)

### What Works

- **8 blog posts with genuine technical depth** — Supabase+Next.js guide is comprehensive (~2500 words with code examples)
- **Clear content strategy** — Topics span web dev, AI tools, automation, local LLMs
- **llms.txt with structured site description** — AI crawlers can discover all content
- **Author consistency** — "Agus Narestha" used consistently across all content
- **Reading time displayed** — Helps users set expectations
- **MDX content with code blocks** — Language-tagged, parseable code examples

### Findings

| # | Title | Severity | Description |
|---|-------|----------|-------------|
| C1 | No visible author byline on blog posts | Medium | Blog post header (lines 94-104 in `src/app/blog/[slug]/page.tsx`) shows date and reading time but no "By Agus Narestha". Author only in JSON-LD and meta tags. AI crawlers parsing visible HTML body miss the attribution. |
| C2 | Blog posts lack `modifiedDate` field | Medium | Both `datePublished` and `dateModified` in JSON-LD use the same `post.date` value. No `modifiedDate` field exists in the BlogPost type. Misleading for edited posts. |
| C3 | Hello World post is thin content | Low | Introductory first post with minimal depth. While natural for a blog, it dilutes overall content quality. Consider expanding or adding `noindex` if it remains brief. |
| C4 | Project descriptions are single sentences | Low | All project descriptions in `src/data/projectData.json` are 1 sentence. Limits citability and depth. 4 of 9 projects have `linkProject: "#"` (inactive links). |
| C5 | No external source citations in blog posts | Info | Blog posts are how-to guides without cited statistics or external references. Adding authoritative source links would strengthen E-E-A-T. |
| C6 | No About page OG image | Info | The `/about` page metadata lacks explicit image declaration. Inherits from default layout. |

---

## 3. On-Page SEO (Score: 80/100)

### What Works

- **Title tags properly templated** — `"%s | Agus Narestha"` pattern in root layout
- **Meta descriptions present** — All pages have unique descriptions
- **Canonical URLs set** — Root layout declares canonical, blog posts have per-page canonicals
- **Heading structure in blog posts** — Proper H1 → H2 → H3 hierarchy with MDX
- **Internal linking** — Blog posts link to tags, tag pages link to posts, navigation is consistent
- **Blog Table of Contents** — Both desktop and mobile TOC components enhance navigation

### Findings

| # | Title | Severity | Description |
|---|-------|----------|-------------|
| O1 | Homepage hero is `<p>` not `<h1>` | High | `HomeSection.tsx:18` renders "Agus Narestha" as `<motion.p>` with display styling. Search engines and AI crawlers use `<h1>` to determine primary page topic. Critical for both SEO and AI extraction. |
| O2 | About page OG title is just "About" | Medium | `src/app/about/page.tsx` sets `title: "About"` without brand suffix in OG. Should be "About | Agus Narestha" for proper social sharing. |
| O3 | Tag pages have no unique meta descriptions | Low | `/blog/tag/[tag]/page.tsx` uses `index: true` but may lack descriptive meta descriptions per tag. Tag pages need unique descriptions to avoid thin content flags. |
| O4 | Blog index page has no structured content preview | Low | `/blog` page shows recent posts but doesn't have a structured content summary that AI crawlers can cite. |

---

## 4. Schema / Structured Data (Score: 68/100)

### Current Implementation

| Schema Type | Location | Status |
|-------------|----------|--------|
| Person | `PortfolioJsonLd.tsx` | Valid with `@id` |
| WebSite | `PortfolioJsonLd.tsx` | Valid with publisher reference |
| SiteNavigationElement (×4) | `PortfolioJsonLd.tsx` | Valid standalone |
| BreadcrumbList | `PortfolioJsonLd.tsx` | **Semantically incorrect** |
| SearchAction | `PortfolioJsonLd.tsx` | Valid but over-engineered |
| BlogPosting | `blog/JsonLd.tsx` | Valid but publisher issue |
| Blog | `blog/JsonLd.tsx` (isPartOf) | Orphan `@id` |
| WebPage | `blog/JsonLd.tsx` | Valid |

### Findings

| # | Title | Severity | Description |
|---|-------|----------|-------------|
| S1 | BlogPosting `publisher` is Person, not Organization | Critical | Google Article rich results require `publisher` as Organization with logo. Current Person publisher disqualifies blog posts from rich results. |
| S2 | BreadcrumbList is flat navigation map, not per-page trail | Medium | Lists all 4 top-level pages as positions 1-4. BreadcrumbList should represent a single page's navigational path (e.g., Home → Blog → Post Title). |
| S3 | SearchAction `target` uses verbose EntryPoint shape | Medium | Uses `{@type: "EntryPoint", urlTemplate: "..."}` instead of plain string. Sitelinks Searchbox unlikely for personal site, but simplification helps AI crawlers. |
| S4 | Person `@id` cross-document reference on blog pages | Medium | Blog pages reference `#person` defined on homepage, but search engines receiving just the blog page may not resolve the cross-document reference. |
| S5 | `dateModified` equals `datePublished` for all posts | Medium | Both use `post.date`. Add `modifiedDate` to BlogPost type for accuracy. |
| S6 | Blog `@id` has no matching definition on /blog index | Low | `isPartOf` references `${baseUrl}/blog` but no Blog schema on the index page defines this `@id`. |

### Missing Schema Opportunities

- **Organization schema** — Create brand entity for proper publisher and entity graph
- **SoftwareSourceCode** — Mark up individual projects on `/project` page
- **Per-page BreadcrumbList** — Each page should have its own breadcrumb trail
- **Article enhancements** — Add `articleSection`, `wordCount`, `speakable` to BlogPosting

---

## 5. Performance (Score: 88/100)

### What Works

- **Vercel CDN** — Global edge network with cache HIT confirmed
- **Brotli compression** — `Content-Encoding: br` (superior to gzip)
- **Static prerendering** — Next.js prerendered pages ensure fast TTFB
- **Next.js Image optimization** — `emoji.webp` with srcset preloading, WebP format
- **CSS/JS chunking** — Next.js automatic code splitting
- **JavaScript lazy loading** — `fetchPriority: "low"` on main JS chunk
- **Image priority hinting** — Hero image marked as `priority` in Next.js Image

### Findings

| # | Title | Severity | Description |
|---|-------|----------|-------------|
| P1 | Framer Motion animations add JavaScript weight | Low | Homepage uses framer-motion for multiple animations (fade-in, slide, scale, rotate). Each animation adds bundle size. Consider CSS animations for simple effects. |
| P2 | TypeIt-react library for typing effect | Low | `typeit-react` loaded client-side for "Hello Everyone..." typing animation. Adds dependency for cosmetic effect. Consider CSS-based typing animation. |
| P3 | Third-party scripts: GTM + GA + Umami | Medium | Three analytics/monitoring scripts loaded in `<head>`: Google Tag Manager, Google Analytics, Umami. Each adds DNS lookup, JS download, and execution time. Consider consolidating. |
| P4 | No font preloading detected | Low | `font-body` class is used but no `<link rel="preload" as="font">` found. If using custom fonts (not system fonts), font preloading would improve LCP. |
| P5 | No explicit Core Web Vitals monitoring | Info | Google PageSpeed/CrUX APIs not configured. No field data collection. Vercel Speed Insights not enabled despite Vercel hosting. |

### CWV Lab Estimates (Based on Next.js + Vercel Patterns)

| Metric | Estimate | Threshold | Status |
|--------|----------|-----------|--------|
| LCP | ~1.2s | < 2.5s | Good |
| INP | ~80ms | < 200ms | Good |
| CLS | ~0.02 | < 0.1 | Good |

---

## 6. AI Search Readiness (Score: 74/100)

### Platform Scores

| Platform | Score | Notes |
|----------|-------|-------|
| Google AI Overviews | 82/100 | Strong schema, GSC verified, SSR content |
| ChatGPT Web Browsing | 72/100 | llms.txt present, no explicit GPTBot rules |
| Perplexity AI | 76/100 | Good structure, external source links present |
| Bing Copilot | 70/100 | No Bing verification, schema present |

### Findings

| # | Title | Severity | Description |
|---|-------|----------|-------------|
| G1 | Homepage H1 missing from semantic HTML | High | "Agus Narestha" rendered as `<p>` element. AI crawlers use `<h1>` to determine primary page subject. |
| G2 | llms.txt missing RSL licensing and metadata | Medium | No `License:`, `Last-Updated:`, or formal `Description:` header per emerging standard. |
| G3 | No explicit AI crawler directives in robots.txt | Medium | No rules for GPTBot, ClaudeBot, PerplexityBot. |
| G4 | Author name not visible in blog post HTML body | Medium | "By Agus Narestha" only in JSON-LD, not as visible text on blog posts. |
| G5 | 4 of 9 projects have inactive `#` links | Medium | BeMO, Dapur Yatim Indonesia, iCovid, BullDOC have placeholder links. Limits project citability. |
| G6 | No Wikipedia/YouTube/Reddit entity signals | Low | Expected for personal portfolio but limits external brand recognition. |
| G7 | Blog post descriptions are single sentences | Low | llms.txt lists 1-sentence descriptions. 2-3 sentences would provide richer AI extraction. |

---

## 7. Images (Score: 76/100)

### What Works

- **Next.js Image component** — Automatic optimization, WebP conversion, srcset
- **Hero image uses WebP** — `emoji.webp` with proper format
- **Priority image preloading** — `<link rel="preload" as="image" imageSrcSet>` in head
- **Proper dimensions** — `width={300} height={300}` on hero image prevents CLS

### Findings

| # | Title | Severity | Description |
|---|-------|----------|-------------|
| I1 | OG images use dynamic Next.js route | Low | Blog OG images at `/${postUrl}/opengraph-image` rely on Next.js dynamic generation. Ensure images meet 1200px minimum for rich results. |
| I2 | No project screenshots/thumbnails | Medium | Project cards likely lack visual previews. Adding project screenshots would improve both UX and image search discoverability. |
| I3 | No alt text audit performed | Low | Cannot verify all images have descriptive alt text without rendering all pages. Hero image has "Agus Narestha Emoji" which could be more descriptive. |

---

## Appendix: Site Technical Profile

| Property | Value |
|----------|-------|
| Framework | Next.js 16 (App Router) |
| Hosting | Vercel |
| Language | English (en_US) |
| CMS | MDX files (static content) |
| Analytics | Google Analytics, Google Tag Manager, Umami |
| Build | Static prerendering (ISR with 300s stale time) |
| Compression | Brotli |
| CDN | Vercel Edge Network |
| GSC Verified | Yes |
| robots.txt | Dynamic (`src/app/robots.ts`) + dead static file |
| sitemap.xml | Dynamic (`src/app/sitemap.ts`) — 12 URLs |
| RSS Feed | `/feed.xml` |
| llms.txt | `/llms.txt` (dynamic route) |
| JSON-LD | Person, WebSite, BlogPosting, SiteNavigationElement, BreadcrumbList |

---

*Report generated by SEO Audit Skill*
