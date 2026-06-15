# Schema/Structured Data Findings: agusnarestha.dev

## Summary: 68/100

### Current Schema Inventory

| Type | File | Status |
|------|------|--------|
| Person | PortfolioJsonLd.tsx | Valid with @id |
| WebSite | PortfolioJsonLd.tsx | Valid |
| SiteNavigationElement (×4) | PortfolioJsonLd.tsx | Valid |
| BreadcrumbList | PortfolioJsonLd.tsx | Semantically incorrect |
| SearchAction | PortfolioJsonLd.tsx | Over-engineered |
| BlogPosting | blog/JsonLd.tsx | Publisher issue |
| Blog | blog/JsonLd.tsx | Orphan @id |
| WebPage | blog/JsonLd.tsx | Valid |

### Critical: BlogPosting publisher is Person
- Google Article rich results require Organization with logo
- **Fix:** Create Organization schema, use as publisher

### Medium: BreadcrumbList is flat navigation
- Should be per-page trail, not site menu
- **Fix:** Create per-page BreadcrumbList components

### Medium: SearchAction target uses EntryPoint
- Simplify to plain URL string
- **Fix:** Change target to string URL

### Medium: Person @id cross-document reference
- Blog pages reference homepage Person definition
- **Fix:** Include full @graph on blog pages

### Medium: dateModified = datePublished
- Both use post.date
- **Fix:** Add modifiedDate to BlogPost type

### Opportunities
- Organization schema for brand entity
- SoftwareSourceCode for projects
- Per-page BreadcrumbList
- Article enhancements (articleSection, wordCount, speakable)
