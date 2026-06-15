# Action Plan: agusnarestha.dev

**Generated:** June 15, 2026
**SEO Health Score:** 78/100
**Target Score:** 90+ after Phase 2

---

## Phase 1: Critical Fixes (Week 1)

### 1.1 Fix Homepage H1 — Change `<p>` to `<h1>` [Critical]
- **File:** `src/components/sections/HomeSection.tsx:18`
- **Change:** Replace `motion.p` with `motion.h1` (keep same className for styling)
- **Why:** AI crawlers and search engines use `<h1>` to determine the primary subject of the page. Without it, your name lacks the strongest heading signal.
- **Effort:** 5 minutes
- **How we'll know it worked:** View page source → "Agus Narestha" wrapped in `<h1>`. Google Search Console → check HTML suggestions for missing H1 resolved.
- **Leading indicator:** Improved AI chatbot citation accuracy for "who is Agus Narestha" queries.

### 1.2 Fix BlogPosting `publisher` Schema [Critical]
- **Files:** `src/components/blog/JsonLd.tsx`, create new Organization schema
- **Change:** Create an Organization schema in `PortfolioJsonLd.tsx` and use it as `publisher` in blog JsonLd instead of Person
- **Why:** Google Article rich results require `publisher` as Organization with logo. Person publisher disqualifies from rich results.
- **Effort:** 30 minutes
- **How we'll know it worked:** Rich Results Test tool shows Article rich result eligibility.
- **Leading indicator:** Blog posts eligible for Google Article rich results in Search Console enhancements report.

### 1.3 Fix Sitemap `lastmod` for Static Pages [High]
- **File:** `src/app/sitemap.ts`
- **Change:** Replace `lastModified: new Date()` with actual file modification dates (use git commit dates or hardcoded dates)
- **Why:** Google uses `lastmod` as the primary re-crawl signal. False dates erode trust, meaning real blog updates may not trigger re-crawls.
- **Effort:** 20 minutes
- **How we'll know it worked:** Sitemap XML shows consistent, realistic dates that only change when content actually changes.
- **Leading indicator:** Google Search Console → sitemap report shows fewer "lastmod ignored" signals over time.

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

### 2.1 Fix BreadcrumbList — Per-Page Implementation [High]
- **Files:** `src/components/PortfolioJsonLd.tsx` (remove flat list), create `BreadcrumbJsonLd.tsx` component
- **Change:** Remove the flat BreadcrumbList from PortfolioJsonLd. Add per-page BreadcrumbList to each route:
  - `/about` → [Home, About]
  - `/project` → [Home, Projects]
  - `/blog` → [Home, Blog]
  - `/blog/[slug]` → [Home, Blog, Post Title]
- **Why:** A flat list of all pages is semantically incorrect for BreadcrumbList schema. Each page needs its own navigational path.
- **Effort:** 1 hour
- **How we'll know it worked:** Rich Results Test shows valid BreadcrumbList per page.
- **Leading indicator:** Breadcrumb rich results appear in SERPs for inner pages.

### 2.2 Remove Dead `public/robots.txt` [High]
- **File:** `public/robots.txt`
- **Change:** Delete the file. The dynamic route in `src/app/robots.ts` is the active one.
- **Why:** Dead code causes confusion — anyone editing the static file will see no effect in production.
- **Effort:** 2 minutes
- **How we'll know it worked:** Only one robots.txt source exists.

### 2.3 Add Visible Author Byline to Blog Posts [High]
- **File:** `src/app/blog/[slug]/page.tsx`
- **Change:** Add "By Agus Narestha" text in the post header alongside date and reading time
- **Why:** AI crawlers parsing visible HTML body miss the author attribution. Visible byline strengthens E-E-A-T.
- **Effort:** 10 minutes
- **How we'll know it worked:** Blog post HTML contains "Agus Narestha" as visible text in the article header.
- **Leading indicator:** Improved AI citation accuracy — AI chatbots correctly attribute content.

### 2.4 Add Explicit AI Crawler Directives [Medium]
- **File:** `src/app/robots.ts`
- **Change:** Add explicit rules for GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot
- **Why:** Explicit allow directives signal intent to AI indexers and can improve crawl prioritization.
- **Effort:** 5 minutes
- **How we'll know it worked:** robots.txt includes AI-specific crawler rules.
- **Leading indicator:** Increased AI chatbot content ingestion frequency.

### 2.5 Add `modifiedDate` to BlogPost Type [Medium]
- **Files:** `src/types/blog.ts`, `src/app/blog/[slug]/page.tsx`, `src/components/blog/JsonLd.tsx`
- **Change:** Add optional `modifiedDate?: string` field. Use `post.modifiedDate ?? post.date` for JSON-LD `dateModified`.
- **Why:** Current schema uses identical dates for published and modified, which is misleading for edited posts.
- **Effort:** 15 minutes
- **How we'll know it worked:** Blog JSON-LD shows different dates for published vs modified when applicable.
- **Leading indicator:** Rich Results Test validates date accuracy.

### 2.6 Enhance llms.txt with RSL Licensing [Medium]
- **File:** `src/app/llms.txt/route.ts`
- **Change:** Add `Description:`, `Last-Updated:`, and `License: CC BY 4.0` headers
- **Why:** The emerging llms.txt standard expects metadata headers. Helps AI crawlers understand usage terms.
- **Effort:** 15 minutes
- **How we'll know it worked:** llms.txt output includes metadata block at top.
- **Leading indicator:** AI models more likely to cite content with clear licensing.

---

## Phase 3: Content & Authority (Month 2)

### 3.1 Expand Project Descriptions [Medium]
- **File:** `src/data/projectData.json`
- **Change:** Add 2-3 sentence descriptions per project. Replace `#` placeholder links with GitHub repo URLs.
- **Why:** Single-sentence descriptions limit citability. Inactive links signal abandonment.
- **Effort:** 1-2 hours
- **How we'll know it worked:** All projects have meaningful descriptions and active links.
- **Leading indicator:** Improved AI chatbot responses about specific projects.

### 3.2 Add Organization Schema [Medium]
- **File:** `src/components/PortfolioJsonLd.tsx`
- **Change:** Add Organization schema with logo, sameAs links, and founder reference to Person
- **Why:** Strengthens entity graph resolution, enables proper publisher for Article rich results.
- **Effort:** 30 minutes
- **How we'll know it worked:** Rich Results Test shows Organization schema with logo.
- **Leading indicator:** Stronger entity association in Google Knowledge Graph.

### 3.3 Add Tag Pages to Sitemap [Medium]
- **File:** `src/app/sitemap.ts`
- **Change:** Import `getAllTags()` and map to sitemap entries with priority 0.5
- **Why:** Tag pages are indexable but excluded from sitemap. Adding them ensures complete crawl coverage.
- **Effort:** 15 minutes
- **How we'll know it worked:** Sitemap XML includes `/blog/tag/*` URLs.
- **Leading indicator:** Tag pages indexed in Google (site:agusnarestha.dev/blog/tag/).

### 3.4 Add External Source Citations to Blog Posts [Low]
- **Files:** Individual MDX blog posts
- **Change:** Add links to authoritative sources (official docs, statistics, research) within blog content
- **Why:** External citations strengthen E-E-A-T and make content more citable by AI models.
- **Effort:** 2-3 hours (across all posts)
- **How we'll know it worked:** Blog posts contain outbound links to authoritative sources.
- **Leading indicator:** Improved content depth scores in AI evaluations.

---

## Phase 4: Monitoring & Iteration (Ongoing)

### 4.1 Configure Google PageSpeed/CrUX API [Low]
- **Action:** Set `GOOGLE_API_KEY` environment variable
- **Why:** Field CWV data from CrUX provides more accurate performance monitoring than lab estimates.
- **Effort:** 10 minutes
- **Leading indicator:** Real-world CWV data in audit reports.

### 4.2 Register with Bing Webmaster Tools [Low]
- **Action:** Add `<meta name="msvalidate.01">` to root layout metadata
- **Why:** Bing Copilot visibility benefits from Bing indexing. No Bing verification tag currently exists.
- **Effort:** 10 minutes
- **Leading indicator:** Bing Search Console shows indexed pages.

### 4.3 Add Vercel Speed Insights [Low]
- **Action:** Install `@vercel/speed-insights` package
- **Why:** Already hosted on Vercel. Speed Insights provides free CWV monitoring with zero config.
- **Effort:** 5 minutes
- **Leading indicator:** Real-time CWV dashboard in Vercel.

### 4.4 Monitor Blog Post Performance [Low]
- **Action:** Review GA4 organic traffic to blog posts monthly
- **Why:** Identify which topics drive the most organic traffic and double down on those themes.
- **Effort:** 30 minutes/month
- **Leading indicator:** Increasing organic sessions to blog content.

### 4.5 Consider YouTube Channel [Low]
- **Action:** Create YouTube channel for tutorial content
- **Why:** Data shows YouTube presence has ~0.737 correlation with AI citations. Video content expands reach.
- **Effort:** Ongoing content creation
- **Leading indicator:** YouTube views and external citations increase.

---

## Dependency Sequencing

```
Phase 1.1 (H1 fix) ────────────────────┐
Phase 1.2 (publisher schema) ──────────┤──→ Phase 2.1 (BreadcrumbList)
Phase 1.3 (sitemap lastmod) ───────────┤   └─→ Phase 3.3 (tag pages in sitemap)
                                       │
Phase 2.2 (remove robots.txt) ────────→┤──→ Phase 2.4 (AI crawler rules)
Phase 2.3 (author byline) ─────────────┤
Phase 2.5 (modifiedDate) ──────────────┤──→ Phase 2.6 (llms.txt enhancement)
                                       │
                                       └──→ Phase 3.x (content improvements)
```

**Rationale:** Fix the foundation (H1, schema, sitemap) before layering enhancements. Content improvements depend on schema being correct first.

---

*Action plan generated by SEO Audit Skill*
