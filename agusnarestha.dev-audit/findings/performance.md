# Performance Findings: agusnarestha.dev

## Summary: 88/100

### CWV Lab Estimates (Next.js + Vercel patterns)

| Metric | Estimate | Threshold | Status |
|--------|----------|-----------|--------|
| LCP | ~1.2s | < 2.5s | Good |
| INP | ~80ms | < 200ms | Good |
| CLS | ~0.02 | < 0.1 | Good |

### What Works
- Vercel CDN with cache HIT
- Brotli compression
- Static prerendering
- Next.js Image optimization (WebP, srcset)
- JS chunking + lazy loading
- Hero image preloaded

### Findings

#### Medium: Three analytics scripts in head
- GTM + GA + Umami each add overhead
- **Fix:** Consider consolidating

#### Low: Framer Motion animation weight
- Multiple animations add bundle size
- **Fix:** Use CSS animations for simple effects

#### Low: TypeIt-react dependency
- Client-side library for cosmetic effect
- **Fix:** CSS-based typing animation

#### Low: No font preloading
- Custom fonts may not be preloaded
- **Fix:** Add <link rel=preload as=font>

#### Info: No CWV field data monitoring
- Google APIs not configured
- **Fix:** Enable Vercel Speed Insights or configure CrUX API
