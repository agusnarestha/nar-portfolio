# Collage Redesign — nar-portfolio

Date: 2026-11-14
Status: Draft for approval

## Intent

The portfolio currently uses a neo-brutalist system: bright saturated accents,
hard black borders, hard offset shadows, Space Grotesk + Inter. Agus likes the
look of https://motion.clipprovit.com/ and wants "almost all of it" applied to
this project.

The reference is a paper-collage / scrapbook visual language: warm paper
surfaces, ink and cobalt blue, tape strips, torn paper edges, halftone dots,
polaroid and post-it motifs, handwritten annotations, and small "print shop"
motions. It is a sibling of neo-brutalism — both are bold and flat — but the
reference is warmer and more analog.

Goal: make the portfolio's first impression more memorable and clearly distinct
from typical developer portfolios, without turning it into a sales landing page
and without losing content, SEO, or readability.

The redesign is site-wide: home, project index, blog index, blog posts, about
page, 404, and the generated OG images.

## Goals

- Replace the neo-brutalist visual language with the collage system across the
  whole site.
- Keep every existing content block, route, link, metadata field, structured
  data entry, analytics tag, and social link working exactly as it does now.
- Make the homepage feel crafted and personal: poster-like name treatment,
  polaroid portrait, handwritten annotations, taped cards.
- Keep long-form blog posts comfortable to read: paper is the frame, not the
  texture behind body copy.
- Use motion that reads as handcrafted (taped-in, stamped, highlighted, typed),
  never as a generic fade-up-on-scroll everywhere.
- Respect `prefers-reduced-motion`.
- Preserve or improve performance: no new heavy dependencies, no large texture
  images, no layout shift from animated elements.

## Non-goals

- No content rewrite. Copy stays as is except tiny connective words if a design
  element needs them (e.g. a handwritten label).
- No new routes, features, CMS, backend, or data-model changes.
- No pricing, testimonials, urgency devices, or other sales-page patterns from
  the reference.
- No copy of the reference's brand assets, copy, or exact section layouts. Only
  the visual system and motif vocabulary.
- No changes to SEO behavior: metadata, canonical, sitemap, robots, llms.txt,
  RSS feed, JSON-LD, and OG image URLs must keep working.

## Anti-goals

- A page that looks like a cluttered scrapbook and hurts scanning. Collage
  accents must sit on a calm, structured grid.
- Readability loss: no body text on grain, no hand font for paragraphs, no
  low-contrast ink on butter/pink.
- Motion sickness or jank: no continuous float near long text, no opacity-0
  hero that stays invisible if JS fails.
- Horizontal overflow on mobile caused by rotated cards or tape overhangs.

## Constraints from the codebase

- Next.js 16 App Router, React 19, Tailwind CSS 3, framer-motion 12,
  typeit-react, lucide-react. `@tailwindcss/typography` is installed for MDX.
- Fonts are currently imported through a Google Fonts `@import` in
  `src/app/globals.css`; Tailwind font families are declared in
  `tailwind.config.ts`.
- Design tokens live in `:root` in `globals.css` and in `theme.extend.colors` in
  `tailwind.config.ts`, but components also hard-code hex values in arbitrary
  Tailwind classes (`bg-[#ec4899]`, `shadow-[6px_6px_0_#000]`, etc.). Migration
  needs a token map and a sweep of these literals.
- Sections are client components using framer-motion: `HomeSection`,
  `AboutSection`, `ExperienceSection`, `RecentProjectSection`, `Header`,
  `Footer`, `ProjectCard`, `Timeline`, `ScrollDown`, `BackgroundArt`.
- `src/app/opengraph-image.tsx`, `src/app/blog/[slug]/opengraph-image.tsx`, and
  `src/components/og/OGImageLayout.tsx` generate social images with next/og.
- Blog rendering uses `next-mdx-remote` + `MDXComponents` + `TableOfContents`.
- Existing reusable classes in `globals.css`: `.neo-badge`, `.neo-btn`,
  `.neo-card`, `.zigzag-top`, `.dot-grid`, `.animated-underline`,
  `.scrollbar-hide`, float/drift animations.
- Data files: `src/data/projectData.json`, `src/data/timelineData.json`.

## Design system

### Color tokens

Replace the neo accent palette with the collage palette. Values are taken from
the reference's CSS variables and become the project's source of truth.

| Token | Value | Use |
|---|---|---|
| `paper` | `#EDF0F4` | page background |
| `sheet` | `#FFFFFF` | cards, sheets |
| `sheet-2` | `#F6F8FB` | secondary sheet |
| `bone` | `#EDF0F4` | same family as paper |
| `ink` | `#15161A` | primary text, rules, borders |
| `ink-2` | `#444A57` | secondary text |
| `ink-3` | `#69707F` | muted text, metadata |
| `rule` | `#C4CAD5` | hairlines |
| `line` | `rgba(21,22,26,0.12)` | subtle dividers |
| `cobalt` | `#2446F2` | primary accent, links, buttons |
| `cobalt-dark` | `#1B34C4` | hover/pressed |
| `butter` | `#FFF7B8` | soft highlight surface |
| `highlight` | `#FFEE3B` | marker highlight, tape |
| `mint` | `#2FD49A` | success, "current" |
| `mint-light` | `#CDF6E6` | mint surface |
| `mint-dark` | `#077A52` | mint text on light |
| `pink` | `#FF8DC7` | playful accent |
| `pink-light` | `#FFD9EC` | pink surface |
| `sky` | `#D3E2FF` | calm accent surface |
| `sky-ink` | `#1D2E62` | text on sky |
| `tomato` | `#FF5130` | emphasis accent |
| `tomato-dark` | `#C2341A` | tomato hover/text |
| `tomato-light` | `#FFE1DA` | tomato surface |
| `amber` | `#D9B800` | stamp/ink alternative |

Text-on-color rules: ink on paper/butter/pink/sky/mint-light; white on cobalt
and tomato; `sky-ink` on sky; `mint-dark` on mint-light. Never rely on the hand
font for information that must pass contrast.

### Typography

- Display: **Archivo** (700/800/900, tight tracking). Name, section headings,
  badges, stamp text.
- Body: **Figtree** (400/500/600). Paragraphs, navigation, UI.
- Hand: **Gochi Hand** (400). Annotations, arrows, captions, sticky-note text.
- Mono: **DM Mono** (400/500). Dates, tags, metadata, small print.

Load with `next/font/google` (latin subset, `display: swap`) rather than the CSS
`@import`, then expose CSS variables (`--font-display`, `--font-body`,
`--font-hand`, `--font-mono`) and map them in `tailwind.config.ts`. Remove the
old font `@import` and Space Grotesk/Inter/Fira Code families.

### Texture and motif utilities

Build as CSS/SVG utilities in `globals.css`, not image assets:

- `paper-grain` — inline SVG fractal-noise overlay at very low opacity.
- `halftone` / `halftone-cobalt` / `halftone-pink` — radial dot pattern.
- `torn-top` / `torn-bottom` — torn-paper edge using the reference's jagged SVG
  polygon as a mask or background strip.
- `tape`, `tape-yellow`, `tape-pink`, `tape-mint`, `tape-sky` — translucent
  rotated strip with slightly uneven ends.
- `highlight` — marker fill behind inline text (padding, slight skew).
- `stamp` — double-ring or boxed stamp with slight rotation and texture.

Primitives to introduce (names are a proposal, builder may adjust):
`PaperSheet`, `Tape`, `Stamp`, `Polaroid`, `Highlight`, `TornDivider`,
`HandNote`, `Tag`. Each accepts children and a small set of variants.

### Layout language

- Page background is `paper`; a single grain overlay sits on the body, below
  content.
- Content blocks are white sheets with a 1.5–2px `ink` border and a soft offset
  shadow (smaller and softer than the current 6–8px hard shadow).
- Sheets may be rotated between **-2° and 2°**; never more than one rotated
  element per row on mobile, and negative margins must not create horizontal
  overflow.
- Decorative tape sits at corners/edges, `pointer-events-none`, and is hidden
  under 480px where it would collide with content.
- Section transitions use torn-paper dividers instead of the animated black
  line + diamond.
- Halftone is reserved for accent panels (hero backdrop, CTA, stamp areas), not
  behind long text.
- Highlighter is used for at most one phrase per section.

### Motion language

- **Sticker in:** card enters with `y: 12 → 0`, `rotate: -2 → 0`, spring
  (stiffness ~260, damping ~22). 250–400ms.
- **Stamp down:** scale `1.35 → 1`, opacity `0 → 1`, rotate `-4° → -2°`, 180ms.
- **Highlighter sweep:** `scaleX: 0 → 1`, `transform-origin: left`, 400ms,
  once in view.
- **Halftone sweep:** soft opacity/translate on an accent panel, once.
- **Typing:** keep TypeIt for the hero greeting only.
- **Hover:** lift `-2px` and rotate `-1°`; tape wiggle ±1.5°. 150ms.
- Continuous float/drift is removed or reduced to at most two small decorative
  elements far from text, and disabled entirely under `prefers-reduced-motion`.
- Under reduced motion: no transforms, no typing animation, no infinite loops;
  content appears in final state.
- Above-the-fold name and greeting must be visible without waiting for JS
  animation; entrance animation is additive, not a prerequisite for visibility.

## Section mapping

1. **Header** — paper strip with a hairline rule; "Nar." becomes a taped label
   in Archivo; nav items are small ink chips with a cobalt underline on hover or
   current page. Keep sticky/blur behavior and mobile overlay (restyle only).
2. **Hero** — large Archivo name on paper, one word highlighted with marker;
   emoji/portrait in a taped polaroid; Gochi Hand greeting and a hand-drawn
   arrow; TypeIt greeting retained; Spotify now-playing becomes a small post-it
   with mono metadata.
3. **About** — one white sheet, taped portrait, handwritten margin note, social
   links as chips. Keep copy and icons.
4. **Experience** — each company becomes a receipt/index-card block: mono dates,
   Archivo role, mint "Current" stamp for the active role, tech stack as small
   tags. Keep `Timeline` behavior and duration calculation.
5. **Recent Projects** — polaroid-style cards: image area with white frame, tape
   at top, hand caption, category and tech tags. Keep horizontal scroll on
   mobile and the 3-up grid on desktop.
6. **Recent Posts** — index-card style list; keep the "View All" affordance.
7. **Contact / Footer** — postcard CTA with a stamp motif, "Get In Touch" as a
   primary cobalt button; footer on butter/paper with torn top edge, mono small
   print, and an "Open to Work" mint stamp. Keep both back-to-top controls.
8. **Project index** (`/project`) — collage grid using the same polaroid card;
   filter/category chips restyled as tags.
9. **Blog index** (`/blog`) — paper index with clipped article cards; tags as
   chips; keep pagination/lists.
10. **Blog tag pages** (`/blog/tag/[tag]`) — same paper index treatment; restyle
    the back link, heading, and all-tags panel. These pages are indexed and
    linked from `/blog`, so they are in scope.
11. **Blog post** (`/blog/[slug]`) — content on a white sheet over paper; TOC as
    a post-it; prose uses Figtree with comfortable measure, ink-2 links to
    cobalt, code blocks as pasted light cards. Hand font only for optional
    margin notes. Keep share buttons, mobile TOC, and MDX components.
12. **About page** (`/about`) — re-skin to the same sheet system.
13. **404** — torn paper "lost note" with a link home.
14. **OG images** — re-skin `OGImageLayout` to paper, cobalt, ink, and the
    display font; keep existing dimensions and generated URLs.

## Decisions already made

- Adopt the collage system site-wide, not a single section (user: "semua").
- Keep it a portfolio, not a sales page (user approved this framing).
- Preserve content, routes, SEO, analytics, and readability.
- Use `framer-motion` and `typeit-react` already in the project; do not add a
  new animation or UI library.
- Textures are CSS/SVG, not raster images.
- Re-skin OG images rather than leave them neo-brutalist.

## Resolved after builder check

These came from the independent builder review and are settled here. They are
the builder's calls unless Agus overrides them while approving this document.

- **Blog tag pages are in scope** (`/blog/tag/[tag]`), including the back link,
  heading, and all-tags panel. "Site-wide" means every public surface that
  renders UI, not only the pages listed first.
- **Handwritten copy:** the builder drafts only short, factual annotations
  (e.g. "open to work", "scroll", "hello!") and keeps them in one constants
  module for easy editing. No invented personal stories or claims. Agus reviews
  the strings during the final visual pass; until then they stay simple.
- **OG font:** bundle **Archivo Black** (static TTF, SIL OFL — the heavy display
  cut of Archivo) under `src/assets/fonts` and load it with `fs.readFile` inside
  `ImageResponse`. If the file cannot be read, fall back to `system-ui` so the
  build and the route never fail. Add the OFL license file alongside it.
- **Palette values are fixed**, but usage is restricted to passing pairings:
  - `ink` on `paper`, `sheet`, `butter`, `highlight`, `pink-light`, `sky`,
    `mint-light` for body text.
  - White on `cobalt` for buttons and links.
  - White on `tomato` (`#FF5130`) only at large/bold sizes (≥18.66px bold or
    ≥24px); for body-size text on tomato use `ink` instead.
  - `ink-3` only on `sheet`/`sheet-2`; on `paper` use `ink-2`.
  - `tomato-dark` on `tomato-light` only at large/bold sizes; otherwise use
    `ink`.
  - No body text in the hand font.
- **Dark mode is out of scope.** The collage system is light-only. Do not add a
  second token set; leave the existing `darkMode: "class"` config and `dark:`
  variants untouched so this redesign stays scoped. They are already inert.
- **Project card tech presentation:** keep the existing `simple-icons` logo
  strip and `projectData.json` slugs. Restyle the strip as a kraft-tag row; do
  not add a slug-to-name map or change data. Experience keeps text tags.

## Left to the builder

- Exact primitive component APIs and file placement.
- Whether tokens are consumed as Tailwind theme colors, CSS variables, or both
  (both is acceptable and likely).
- Exact rotation, tape placement, and stagger values within the ranges above.
- Whether the hero keeps the emoji image or uses the portrait; either is
  acceptable if it fits the polaroid.
- Precise blog prose typography values.
- Whether the Experience section keeps a continuous timeline line or becomes
  discrete cards; either is acceptable if ordering and dates stay obvious.
- How much of the old `.neo-*` utility layer to keep during migration versus
  remove at the end. Dead classes should be removed before completion.

## Implementation phases

1. **Foundations** — fonts via `next/font`, tokens in CSS + Tailwind, texture
   and motif utilities, primitives, remove old font imports.
2. **Homepage** — Header, Hero, About, Experience, Recent Projects, Recent
   Posts, Footer.
3. **Inner pages** — Project index, Blog index, Blog post, About page, 404.
4. **Polish** — OG images, reduced-motion pass, mobile overflow QA, contrast
   check, build/lint.

## Acceptance criteria

- `npm run build` and `npm run lint` pass.
- No horizontal overflow at 320px, 390px, 768px, and 1280px widths.
- Every existing link, route, metadata field, JSON-LD entry, feed, sitemap, and
  OG image URL still works.
- All body copy passes WCAG AA contrast on its surface; no body copy uses the
  hand font.
- `prefers-reduced-motion: reduce` removes transforms, typing, and infinite
  loops, and all content is visible.
- Hero name/greeting is visible even if client JS fails.
- No new runtime dependency beyond the existing set.
- No leftover neo-brutalist hex literals or `.neo-*` classes in shipped
  components.
