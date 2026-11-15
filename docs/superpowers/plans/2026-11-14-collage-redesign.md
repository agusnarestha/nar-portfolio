# Collage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace nar-portfolio's neo-brutalist visual layer with the paper-collage system from the reference, site-wide, without changing content, routes, data, or SEO behavior.

**Architecture:** Add a token layer (CSS variables + Tailwind theme + `design-tokens.ts`), four fonts via `next/font`, CSS/SVG texture utilities, and a small set of collage primitives. Restyle each surface by composing those primitives, then delete the old `.neo-*` utility layer. Verification is build + lint + two dependency-free Node scripts (token/contrast checks and a legacy-style scan), because the repo has no test runner.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS 3, framer-motion 12, typeit-react, next/og.

**Spec:** `docs/superpowers/specs/2026-11-14-collage-redesign-design.md`

## Global Constraints

- No new runtime dependencies; use only what is already in `package.json`.
- Do not change metadata, routes, JSON-LD, sitemap, robots, feed, analytics, or `src/data/*.json`.
- Body copy never uses the hand font; body copy must pass WCAG AA (4.5:1).
- `prefers-reduced-motion: reduce` disables transforms, typing, and infinite loops; content is visible.
- No horizontal overflow at 320, 390, 768, or 1280 px.
- No `neo-*` classes or legacy hex literals remain in `src/` at completion.
- Dark mode is out of scope; leave `darkMode: "class"` and existing `dark:` variants untouched.
- Canonical values: paper `#EDF0F4`, sheet `#FFFFFF`, sheet-2 `#F6F8FB`, ink `#15161A`, ink-2 `#444A57`, ink-3 `#69707F`, rule `#C4CAD5`, cobalt `#2446F2`, cobalt-dark `#1B34C4`, butter `#FFF7B8`, highlight `#FFEE3B`, mint `#2FD49A`, mint-light `#CDF6E6`, mint-dark `#077A52`, pink `#FF8DC7`, pink-light `#FFD9EC`, sky `#D3E2FF`, sky-ink `#1D2E62`, tomato `#FF5130`, tomato-dark `#C2341A`, tomato-light `#FFE1DA`, amber `#D9B800`.

## Review Focus

1. `prefers-reduced-motion: reduce` → no transforms, typing, or infinite loops, and all content visible. Covered in Task 2 and Task 10.
2. Client JS fails or is disabled → hero name and greeting remain visible. Covered in Task 2.
3. Very long titles, descriptions, or tag lists at 320px → cards clamp or wrap with no page overflow. Covered in Task 4, Task 5, Task 10.
4. `ArchivoBlack-Regular.ttf` missing → OG routes fall back to `system-ui` and the build still succeeds. Covered in Task 9.
5. Long code blocks or tables in MDX → scroll inside the article, page does not overflow. Covered in Task 6 and Task 10.

---

### Task 1: Foundations — fonts, tokens, textures, token check

**Files:**
- Create: `src/lib/design-tokens.ts`
- Create: `scripts/check-design-tokens.mjs`
- Modify: `package.json` (add `check:design` script)
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

**Interfaces:**
- Produces: `export const palette: { paper; sheet; sheet2; ink; ink2; ink3; rule; cobalt; cobaltDark; butter; highlight; mint; mintLight; mintDark; pink; pinkLight; sky; skyInk; tomato; tomatoDark; tomatoLight; amber }` with the canonical hex strings.
- Produces: CSS variables `--font-display`, `--font-body`, `--font-hand`, `--font-mono`; utility classes `.paper-grain`, `.halftone`, `.halftone-cobalt`, `.halftone-pink`, `.tape`, `.tape-yellow`, `.tape-pink`, `.tape-mint`, `.tape-sky`, `.tape-clear`, `.torn-divider`, `.torn-divider-flip`, `.highlight`, `.stamp`.
- Produces: npm script `check:design`.

- [ ] **Step 1: Write the failing token/contrast check**

Create `scripts/check-design-tokens.mjs`:

```js
import { readFileSync } from "node:fs";

const EXPECTED = {
  paper: "#EDF0F4", sheet: "#FFFFFF", sheet2: "#F6F8FB",
  ink: "#15161A", ink2: "#444A57", ink3: "#69707F", rule: "#C4CAD5",
  cobalt: "#2446F2", cobaltDark: "#1B34C4",
  butter: "#FFF7B8", highlight: "#FFEE3B",
  mint: "#2FD49A", mintLight: "#CDF6E6", mintDark: "#077A52",
  pink: "#FF8DC7", pinkLight: "#FFD9EC",
  sky: "#D3E2FF", skyInk: "#1D2E62",
  tomato: "#FF5130", tomatoDark: "#C2341A", tomatoLight: "#FFE1DA",
  amber: "#D9B800",
};

let src;
try {
  src = readFileSync("src/lib/design-tokens.ts", "utf8");
} catch {
  console.error("FAIL: src/lib/design-tokens.ts not found");
  process.exit(1);
}

const missing = Object.entries(EXPECTED).filter(
  ([key, hex]) => !new RegExp(`${key}\\s*:\\s*"${hex}"`, "i").test(src)
);
if (missing.length) {
  console.error("FAIL: missing or mismatched tokens:");
  for (const [key, hex] of missing) console.error(`  ${key}: expected ${hex}`);
  process.exit(1);
}

const luminance = (hex) => {
  const n = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const PAIRS = [
  ["ink/paper", EXPECTED.ink, EXPECTED.paper, 4.5],
  ["ink/sheet", EXPECTED.ink, EXPECTED.sheet, 4.5],
  ["ink/butter", EXPECTED.ink, EXPECTED.butter, 4.5],
  ["ink/highlight", EXPECTED.ink, EXPECTED.highlight, 4.5],
  ["ink/pinkLight", EXPECTED.ink, EXPECTED.pinkLight, 4.5],
  ["ink/sky", EXPECTED.ink, EXPECTED.sky, 4.5],
  ["ink/mintLight", EXPECTED.ink, EXPECTED.mintLight, 4.5],
  ["white/cobalt", "#FFFFFF", EXPECTED.cobalt, 4.5],
  ["white/tomatoDark", "#FFFFFF", EXPECTED.tomatoDark, 4.5],
  ["ink2/paper", EXPECTED.ink2, EXPECTED.paper, 4.5],
  ["ink3/sheet", EXPECTED.ink3, EXPECTED.sheet, 4.5],
  ["white/tomato (large only)", "#FFFFFF", EXPECTED.tomato, 3],
  ["tomatoDark/tomatoLight (large only)", EXPECTED.tomatoDark, EXPECTED.tomatoLight, 3],
  ["skyInk/sky", EXPECTED.skyInk, EXPECTED.sky, 4.5],
  ["mintDark/mintLight", EXPECTED.mintDark, EXPECTED.mintLight, 4.5],
];

const failures = PAIRS.filter(([, a, b, min]) => ratio(a, b) < min);
if (failures.length) {
  console.error("FAIL: contrast failures:");
  for (const [name, a, b, min] of failures) {
    console.error(`  ${name}: ${ratio(a, b).toFixed(2)} < ${min}`);
  }
  process.exit(1);
}
console.log(`PASS: ${Object.keys(EXPECTED).length} tokens, ${PAIRS.length} contrast pairs`);
```

- [ ] **Step 2: Run it to verify it fails**

Run: `node scripts/check-design-tokens.mjs`
Expected: FAIL with `src/lib/design-tokens.ts not found`.

- [ ] **Step 3: Create the token module**

Create `src/lib/design-tokens.ts` exporting `palette` as a `const` object with the canonical values and `type PaletteKey = keyof typeof palette`.

- [ ] **Step 4: Run the check to verify it passes**

Run: `node scripts/check-design-tokens.mjs`
Expected: `PASS: 22 tokens, 15 contrast pairs`.

- [ ] **Step 5: Add fonts in `src/app/layout.tsx`**

```tsx
import { Archivo, Figtree, Gochi_Hand, DM_Mono } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
```

Apply all four `variable` classes to `<html>`. If `next/font` demands explicit weights for Archivo or Figtree, use `["400","500","600","700","800","900"]` and `["400","500","600"]` respectively. Keep every existing metadata, script tag, and `PortfolioJsonLd` untouched. Add `<div aria-hidden className="paper-grain" />` as the first child of `<body>` and give the existing content wrapper `relative z-10`.

- [ ] **Step 6: Update `tailwind.config.ts`**

Replace the `fontFamily` map with the four CSS variables. Add the canonical colors (keep `surface` with `DEFAULT: "#EDF0F4"`, `card: "#FFFFFF"`, `warm: "#FFF7B8"`, `accent: "#D3E2FF"`; update `ink` to `DEFAULT "#15161A"`, `secondary "#444A57"`, `muted "#69707F"`). Add `boxShadow.paper = "3px 3px 0 #15161A"`, `paper-sm = "2px 2px 0 #15161A"`, `paper-lg = "5px 5px 0 #15161A"`, `paper-hover = "1px 1px 0 #15161A"`. Keep the old `neo-*` colors/utilities in place until Task 10.

- [ ] **Step 7: Update `src/app/globals.css`**

Remove the Google Fonts `@import` only. Add `:root` variables for every canonical token: `--paper`, `--sheet`, `--sheet-2`, `--ink`, `--ink-2`, `--ink-3`, `--rule`, `--cobalt`, `--cobalt-dark`, `--butter`, `--highlight`, `--mint`, `--mint-light`, `--mint-dark`, `--pink`, `--pink-light`, `--sky`, `--sky-ink`, `--tomato`, `--tomato-dark`, `--tomato-light`, `--amber`. Add the utility classes listed in Interfaces. Update the existing `.font-display`, `.font-body`, and `.font-mono` helpers to use `var(--font-display)`, `var(--font-body)`, and `var(--font-mono)` (they currently hard-code the old families and would override Tailwind), and add `.font-hand` using `var(--font-hand)`. Update the scrollbar track/thumb to paper/ink/cobalt. Base body becomes `background: #EDF0F4`, `color: #15161A`, `font-family: var(--font-body)`, `font-weight: 400`. Keep the old `:root` block and `.neo-*` utilities until Task 10.

Texture baselines:
- `.paper-grain` — fixed inset-0 overlay, SVG fractal-noise data URI, `opacity: 0.35`, `pointer-events: none`.
- `.halftone*` — `radial-gradient` dot pattern, `background-size: 10px 10px`, tone-specific dot color at 10–14% opacity.
- `.tape*` — absolutely positioned translucent strip, `background` per tone, slight `box-shadow`, no border.
- `.torn-divider` — 16px tall ink zigzag via two 45° linear gradients at `background-size: 16px 16px`; `.torn-divider-flip` rotates it 180°.
- `.highlight` — `background: linear-gradient(transparent 55%, var(--highlight) 55%)`, `box-decoration-break: clone`.
- `.stamp` — 2px ink border, 1px inner dashed border, uppercase display text, `rotate(-3deg)`.

- [ ] **Step 8: Add the npm script**

In `package.json`: `"check:design": "node scripts/check-design-tokens.mjs"`.

- [ ] **Step 9: Verify**

Run: `npm run check:design && npm run lint && npm run build`
Expected: all pass.

- [ ] **Step 10: Commit**

```bash
git add src/lib/design-tokens.ts scripts/check-design-tokens.mjs package.json src/app/layout.tsx src/app/globals.css tailwind.config.ts
git commit -m "feat: add collage design tokens, fonts, and textures"
```

---

### Task 2: Header, hero, and core collage primitives

**Files:**
- Create: `src/components/collage/PaperSheet.tsx`
- Create: `src/components/collage/Tape.tsx`
- Create: `src/components/collage/Polaroid.tsx`
- Create: `src/components/collage/Highlight.tsx`
- Create: `src/components/collage/HandNote.tsx`
- Create: `src/components/collage/TornDivider.tsx`
- Create: `src/lib/hand-copy.ts`
- Modify: `src/components/layouts/Header.tsx`
- Modify: `src/components/layouts/HeaderButton.tsx`
- Modify: `src/components/sections/HomeSection.tsx`
- Modify: `src/components/ScrollDown.tsx`
- Modify: `src/components/BackgroundArt.tsx`
- Modify: `src/components/SpotifyNowPlaying.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- `PaperSheet({ tone?: "sheet" | "butter" | "sky" | "pink" | "mint"; rotate?: number; className?: string; children: React.ReactNode })`
- `Tape({ tone?: "yellow" | "pink" | "mint" | "sky" | "clear"; rotate?: number; className?: string })`
- `Polaroid({ src: string; alt: string; width: number; height: number; caption?: string; priority?: boolean; rotate?: number; className?: string })`
- `Highlight({ children: React.ReactNode; tone?: "yellow" | "pink" | "mint" | "sky"; className?: string })`
- `HandNote({ children: React.ReactNode; rotate?: number; className?: string })`
- `TornDivider({ flip?: boolean; className?: string })`
- `handCopy` object with `hero`, `scroll`, `about`, `current`, `project`, `footer` (short factual strings only).
- `HeaderButton({ label: string; href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; active?: boolean })` — the `color` prop is removed.

- [ ] **Step 1: Check for the old styles (expected to fail)**

Run: `grep -nE "neo-(badge|btn|card)|#fbbf24|#3b82f6|#ec4899|border-\\[3px\\]" src/components/layouts/Header.tsx src/components/layouts/HeaderButton.tsx`
Expected: matches found.

- [ ] **Step 2: Create the primitives and hand copy**

Implement each file with the interfaces above. `PaperSheet` maps tones to `bg-sheet`, `bg-butter`, `bg-sky`, `bg-pink-light`, `bg-mint-light`, uses `border-2 border-ink` and `shadow-paper`, and applies rotation through inline `transform`. `Tape` is `aria-hidden`. `Polaroid` uses `next/image` inside a white frame with `p-3 pb-9` and a `Tape` at the top. `Highlight` renders a `<mark>` with the `.highlight` class. `HandNote` renders `span.font-hand`. `TornDivider` renders `<div aria-hidden className="torn-divider" />`.

- [ ] **Step 3: Restyle the header**

Paper bar with `border-b border-ink/20`, sticky blur kept. "Nar." becomes a butter label with a tape strip. Desktop links use `HeaderButton`. Mobile overlay becomes paper with the same chips. Update all four call sites to the new `HeaderButton` signature.

- [ ] **Step 4: Restyle the hero**

Archivo name with one word inside `Highlight`; taped `Polaroid` for `/emoji.webp`; `HandNote` greeting; TypeIt greeting retained but rendered as static text when `useReducedMotion()` is true; Spotify block wrapped in a post-it (`PaperSheet tone="butter"`). Do not animate the `<h1>` from `opacity: 0` — animate only transform so the name is visible without JS.

- [ ] **Step 5: Restyle supporting hero pieces**

`ScrollDown` becomes a taped hand label with no infinite float. `BackgroundArt` becomes a static halftone plus at most two paper scraps; no continuous float. `SpotifyNowPlaying` containers use `border-2 border-ink`, `shadow-paper`, `bg-sheet`, `font-body`, `font-mono` for metadata.

- [ ] **Step 6: Replace the section dividers**

In `src/app/page.tsx`, delete `SectionDivider` and use `TornDivider` between sections. Keep the `whileInView` wrappers but make opacity animations conditional on `useReducedMotion()`.

- [ ] **Step 7: Verify**

Run: `npm run lint && npm run build`
Run: `grep -nE "neo-(badge|btn|card)|#fbbf24|#3b82f6|#ec4899|border-\\[3px\\]" src/components/layouts/Header.tsx src/components/layouts/HeaderButton.tsx`
Expected: build passes; grep returns no output.

Manual: with JS disabled, the hero name is still visible; with reduced motion, nothing animates.

- [ ] **Step 8: Commit**

```bash
git add src/components/collage src/lib/hand-copy.ts src/components/layouts src/components/sections/HomeSection.tsx src/components/ScrollDown.tsx src/components/BackgroundArt.tsx src/components/SpotifyNowPlaying.tsx src/app/page.tsx
git commit -m "feat: restyle header and hero with collage system"
```

---

### Task 3: About and experience

**Files:**
- Create: `src/components/collage/Stamp.tsx`
- Create: `src/components/collage/Tag.tsx`
- Modify: `src/components/sections/AboutSection.tsx`
- Modify: `src/components/sections/ExperienceSection.tsx`
- Modify: `src/components/Timeline.tsx`
- Modify: `src/app/about/page.tsx`

**Interfaces:**
- `Stamp({ children: React.ReactNode; tone?: "tomato" | "mint" | "cobalt"; rotate?: number; className?: string })`
- `Tag({ children: React.ReactNode; tone?: "butter" | "pink" | "mint" | "sky" | "paper"; className?: string })`

- [ ] **Step 1: Check for old styles (expected to fail)**

Run: `grep -nE "neo-(badge|btn|card)|#fbbf24|#3b82f6|#22c55e|#84cc16|border-\\[3px\\]" src/components/sections/AboutSection.tsx src/components/sections/ExperienceSection.tsx src/components/Timeline.tsx`
Expected: matches found.

- [ ] **Step 2: Create `Stamp` and `Tag`**

`Stamp` uses the `.stamp` class with a tone color; `Tag` is a small `font-mono` label with `border-2 border-ink`.

- [ ] **Step 3: Restyle About**

One `PaperSheet` for the copy, a taped `Polaroid` for `/me/me.webp` with a `HandNote` margin note, social links as `Tag`-style chips. Remove the floating decorative SVGs. Keep all copy and link URLs.

- [ ] **Step 4: Restyle Experience and Timeline**

Section heading becomes a taped label. Each company header becomes a cobalt or mint paper tab. Each position is an index-card sheet with a dashed rule, mono date, Archivo title, and `Tag` tech stack. When `date.toLowerCase().includes("present")`, render `<Stamp tone="mint">{handCopy.current}</Stamp>`. Keep `extractTechStack` and `calculateDuration` behavior unchanged. Remove the decorative floating SVGs.

- [ ] **Step 5: Verify**

Run: `npm run lint && npm run build`
Run: `grep -nE "neo-(badge|btn|card)|#fbbf24|#3b82f6|#22c55e|#84cc16|border-\\[3px\\]" src/components/sections/AboutSection.tsx src/components/sections/ExperienceSection.tsx src/components/Timeline.tsx`
Expected: build passes; grep returns no output.

Manual: dates, durations, and tech stacks still match `timelineData.json`.

- [ ] **Step 6: Commit**

```bash
git add src/components/collage/Stamp.tsx src/components/collage/Tag.tsx src/components/sections/AboutSection.tsx src/components/sections/ExperienceSection.tsx src/components/Timeline.tsx src/app/about/page.tsx
git commit -m "feat: restyle about and experience with collage system"
```

---

### Task 4: Project cards and project pages

**Files:**
- Modify: `src/components/ProjectCard.tsx`
- Modify: `src/components/sections/RecentProjectSection.tsx`
- Modify: `src/components/sections/AllProjectSection.tsx`
- Modify: `src/app/project/page.tsx`

**Interfaces:**
- Consumes existing `ProjectCard` props unchanged: `{ title; description; imageUrl; linkProject; categories; technologies }`.
- Consumes `PaperSheet`, `Tape`, `Tag`, `HandNote`.

- [ ] **Step 1: Check for old styles (expected to fail)**

Run: `grep -nE "neo-(badge|btn|card)|#fbbf24|#ec4899|border-\\[3px\\]|shadow-\\[8px" src/components/ProjectCard.tsx src/components/sections/RecentProjectSection.tsx src/components/sections/AllProjectSection.tsx`
Expected: matches found.

- [ ] **Step 2: Restyle `ProjectCard`**

Polaroid composition: `PaperSheet` frame with `p-3`, image at a fixed aspect (`aspect-[16/10]`) with white mat, tape at the top, Archivo title, Figtree description clamped to two lines, category `Tag`s, and the existing simple-icons strip in a dashed-top row. Keep the external link, `aria-label`, hover lift/rotate, and lazy image loading. Do not change `projectData.json`.

- [ ] **Step 3: Restyle the two project sections**

Headings become taped labels with `HandNote` captions. Keep the horizontal snap/scroll row on mobile and the 3-up grid on desktop. Replace the numbered circle indicator with `font-mono` text and a small stamp. Keep "View All" and project counts correct.

- [ ] **Step 4: Verify**

Run: `npm run lint && npm run build`
Run: `grep -nE "neo-(badge|btn|card)|#fbbf24|#ec4899|border-\\[3px\\]|shadow-\\[8px" src/components/ProjectCard.tsx src/components/sections/RecentProjectSection.tsx src/components/sections/AllProjectSection.tsx`
Expected: build passes; grep returns no output.

Manual at 320px: the card row scrolls horizontally without making the page wider; long project titles stay clamped.

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectCard.tsx src/components/sections/RecentProjectSection.tsx src/components/sections/AllProjectSection.tsx src/app/project/page.tsx
git commit -m "feat: restyle project cards and project pages"
```

---

### Task 5: Blog list, post cards, and tag pages

**Files:**
- Modify: `src/components/blog/BlogCard.tsx`
- Modify: `src/components/PostCard.tsx`
- Modify: `src/components/sections/RecentPostSection.tsx`
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/blog/tag/[tag]/page.tsx`

**Interfaces:**
- `BlogCard` and `PostCard` props stay unchanged.
- Consumes `PaperSheet`, `Tape`, `Tag`, `HandNote`.

- [ ] **Step 1: Check for old styles (expected to fail)**

Run: `grep -nE "neo-(badge|btn|card)|#fbbf24|#06b6d4|#e6b448|border-\\[3px\\]|shadow-\\[8px" src/components/blog/BlogCard.tsx src/components/PostCard.tsx src/components/sections/RecentPostSection.tsx src/app/blog/page.tsx src/app/blog/tag/[tag]/page.tsx`
Expected: matches found.

- [ ] **Step 2: Restyle the cards**

`BlogCard` becomes a clipped article: white sheet, tape at the top, Archivo title, Figtree description, `Tag` list, and a mono date/read-time footer with a dashed rule. `PostCard` keeps its tag expansion behavior (`showAllTags`) but uses the same visual language in a compact size. Keep line clamps and `aria-label`s.

- [ ] **Step 3: Restyle the blog index and tag page**

Heading as a taped label, filter panels as paper index cards with tag chips, active tag in `bg-highlight`. Restyle the back link, tag heading, and all-tags panel on the tag page. Keep every `href` and the `notFound()` behavior unchanged.

- [ ] **Step 4: Verify**

Run: `npm run lint && npm run build`
Run: `grep -nE "neo-(badge|btn|card)|#fbbf24|#06b6d4|#e6b448|border-\\[3px\\]|shadow-\\[8px" src/components/blog/BlogCard.tsx src/components/PostCard.tsx src/components/sections/RecentPostSection.tsx src/app/blog/page.tsx src/app/blog/tag/[tag]/page.tsx`
Expected: build passes; grep returns no output.

Manual at 320px: a post with many tags wraps without overflow; the `+N` button still expands.

- [ ] **Step 5: Commit**

```bash
git add src/components/blog/BlogCard.tsx src/components/PostCard.tsx src/components/sections/RecentPostSection.tsx src/app/blog/page.tsx src/app/blog/tag/[tag]/page.tsx
git commit -m "feat: restyle blog cards and blog index"
```

---

### Task 6: Blog post page, prose, TOC, and code blocks

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`
- Modify: `src/components/blog/TableOfContents.tsx`
- Modify: `src/components/blog/MobileTableOfContents.tsx`
- Modify: `src/components/blog/ShareButtons.tsx`
- Modify: `src/components/CodeBlock.tsx`
- Modify: `src/app/globals.css` (prose overrides only)

**Interfaces:**
- No prop or export changes. Keep `JsonLd`, `ShareButtons`, `MDXRemote`, `remarkGfm`, and all metadata behavior exactly as-is.
- Consumes `PaperSheet`, `Tape`, `Tag`, `Stamp`, `HandNote`.

- [ ] **Step 1: Check for old styles (expected to fail)**

Run: `grep -nE "#fffbe6|#e6b448|#3cc4ce|#df548e|#525252|border-2 border-black|border-b-2 border-black|shadow-\\[4px|rounded-lg" src/app/blog/[slug]/page.tsx src/components/blog/TableOfContents.tsx src/components/blog/MobileTableOfContents.tsx src/components/blog/ShareButtons.tsx src/components/CodeBlock.tsx`
Expected: matches found.

- [ ] **Step 2: Restyle the post header**

Back link as a taped chip. Header on a butter sheet with the title in Archivo, meta in `font-mono text-ink-2`, tags as `Tag`s, and share buttons beside them. Keep the author line and dates.

- [ ] **Step 3: Restyle the article prose**

Use a white sheet with `border-2 border-ink`, `shadow-paper`, and Tailwind typography custom properties:

```
[--tw-prose-body:#444A57] [--tw-prose-headings:#15161A]
[--tw-prose-links:#2446F2] [--tw-prose-bold:#15161A]
[--tw-prose-code:#C2341A] [--tw-prose-pre-bg:#F6F8FB]
```

Add `[&_pre]:overflow-x-auto [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto` so long code and tables scroll inside the article.

- [ ] **Step 4: Restyle TOC, mobile TOC, and share**

Desktop TOC becomes a butter post-it with a tape strip; links use Figtree, active item uses a cobalt left border and `bg-highlight`. Mobile toggle uses the same sheet style. `ShareButtons` uses ink/sheet/cobalt with no rounded corners; keep the `dark:` classes untouched and keep copy/link behavior.

- [ ] **Step 5: Restyle `CodeBlock`**

Pasted-card style: `border-2 border-ink`, `bg-sheet-2`, `shadow-paper-sm`, no `rounded-lg`. Keep `oneLight`, line numbers, wrap behavior, and the copy button. Replace the three colored dots with ink/butter/tomato dots using tokens.

- [ ] **Step 6: Verify**

Run: `npm run lint && npm run build`
Run: `grep -nE "#fffbe6|#e6b448|#3cc4ce|#df548e|#525252|border-2 border-black|border-b-2 border-black|shadow-\\[4px|rounded-lg" src/app/blog/[slug]/page.tsx src/components/blog/TableOfContents.tsx src/components/blog/MobileTableOfContents.tsx src/components/blog/ShareButtons.tsx src/components/CodeBlock.tsx`
Expected: build passes; grep returns no output.

Manual: open a post with long code and a table at 320px; the page does not scroll horizontally.

- [ ] **Step 7: Commit**

```bash
git add src/app/blog/[slug]/page.tsx src/components/blog/TableOfContents.tsx src/components/blog/MobileTableOfContents.tsx src/components/blog/ShareButtons.tsx src/components/CodeBlock.tsx src/app/globals.css
git commit -m "feat: restyle blog post reading experience"
```

---

### Task 7: Footer and contact CTA

**Files:**
- Modify: `src/components/layouts/Footer.tsx`

**Interfaces:**
- Consumes `PaperSheet`, `Stamp`, `Tape`, `HandNote`, `Tag`.

- [ ] **Step 1: Check for old styles (expected to fail)**

Run: `grep -nE "neo-(badge|btn|card)|#fef3c7|#fbbf24|#22c55e|#06b6d4|#ec4899|border-\\[3px\\]|zigzag-top" src/components/layouts/Footer.tsx`
Expected: matches found.

- [ ] **Step 2: Restyle the footer**

Contact CTA becomes a postcard: white sheet, torn top edge, a stamp motif in the corner, Archivo heading, and a cobalt "Get In Touch" button. Footer sits on butter/paper with a torn top edge. Navigation, social icons, status, copyright, and both back-to-top controls remain. Status becomes a mint `Stamp`.

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Run: `grep -nE "neo-(badge|btn|card)|#fef3c7|#fbbf24|#22c55e|#06b6d4|#ec4899|border-\\[3px\\]|zigzag-top" src/components/layouts/Footer.tsx`
Expected: build passes; grep returns no output.

Manual: all footer links still point to the same destinations; back-to-top works on mobile.

- [ ] **Step 4: Commit**

```bash
git add src/components/layouts/Footer.tsx
git commit -m "feat: restyle footer and contact CTA"
```

---

### Task 8: 404 and about page shell

**Files:**
- Modify: `src/app/not-found.tsx`
- Modify: `src/app/about/page.tsx`

**Interfaces:**
- Consumes `PaperSheet`, `Stamp`, `HandNote`, `Tape`.

- [ ] **Step 1: Check for old styles (expected to fail)**

Run: `grep -nE "neo-(badge|btn|card)|#3cc4ce|#df548e|#e6b448|#faf9f6|border-2 border-black" src/app/not-found.tsx`
Expected: matches found.

- [ ] **Step 2: Restyle 404**

A torn paper note centered on the page: cobalt 404 in Archivo with an ink outline, `HandNote` caption, and a cobalt return-home button. Keep `robots: { index: false, follow: true }`.

- [ ] **Step 3: Adjust the about page shell**

Keep `AboutSection` + `ExperienceSection`; only update outer spacing/classes if needed to fit the paper background. Do not duplicate section content.

- [ ] **Step 4: Verify**

Run: `npm run lint && npm run build`
Run: `grep -nE "neo-(badge|btn|card)|#3cc4ce|#df548e|#e6b448|#faf9f6|border-2 border-black" src/app/not-found.tsx`
Expected: build passes; grep returns no output.

Manual: `/this-does-not-exist` renders the new 404.

- [ ] **Step 5: Commit**

```bash
git add src/app/not-found.tsx src/app/about/page.tsx
git commit -m "feat: restyle 404 and about page shell"
```

---

### Task 9: OG images

**Files:**
- Create: `src/assets/fonts/ArchivoBlack-Regular.ttf`
- Create: `src/assets/fonts/OFL.txt`
- Create: `src/lib/og-font.ts`
- Modify: `src/components/og/OGImageLayout.tsx`
- Modify: `src/app/opengraph-image.tsx`
- Modify: `src/app/blog/[slug]/opengraph-image.tsx`

**Interfaces:**
- `loadOgFont(): Promise<Buffer>`
- `generateOGImage(props: OGImageLayoutProps): Promise<ImageResponse>` — now async.
- `OGImageLayoutProps` keeps `{ title; subtitle?; type? }`.
- `size` and `contentType` exports stay unchanged.

- [ ] **Step 1: Download the bundled font and license**

```bash
mkdir -p src/assets/fonts
curl -sL https://raw.githubusercontent.com/google/fonts/main/ofl/archivoblack/ArchivoBlack-Regular.ttf -o src/assets/fonts/ArchivoBlack-Regular.ttf
curl -sL https://raw.githubusercontent.com/google/fonts/main/ofl/archivoblack/OFL.txt -o src/assets/fonts/OFL.txt
```

Verify the TTF is about 91 KB (`wc -c`).

- [ ] **Step 2: Add the loader**

`src/lib/og-font.ts` reads the TTF once with `node:fs/promises`, caches the promise, and resolves the path from `process.cwd()`. No network fetch.

- [ ] **Step 3: Rewrite `generateOGImage` as async**

Keep 1200×630. Use paper `#EDF0F4` background, white card, 2px `#15161A` border, `6px 6px 0 #15161A` shadow, cobalt badge, butter site badge, Archivo Black title, ink-2 subtitle. Load the font and pass:

```ts
fonts: font ? [{ name: "Archivo Black", data: font, weight: 900, style: "normal" }] : []
```

If TypeScript rejects `Buffer`, pass `new Uint8Array(font)`. Every `div` in the Satori tree keeps `display: "flex"`.

- [ ] **Step 4: Update both route callers**

`src/app/opengraph-image.tsx` and `src/app/blog/[slug]/opengraph-image.tsx` become `return await generateOGImage(...)`. Keep `generateStaticParams`, `alt`, `size`, and `contentType` exports unchanged.

- [ ] **Step 5: Verify the build**

Run: `npm run lint && npm run build`
Expected: build passes and both OG routes are generated.

- [ ] **Step 6: Verify the fallback**

```bash
mv src/assets/fonts/ArchivoBlack-Regular.ttf /tmp/ArchivoBlack-Regular.ttf
npm run build
mv /tmp/ArchivoBlack-Regular.ttf src/assets/fonts/ArchivoBlack-Regular.ttf
```

Expected: the build still passes with `system-ui`.

- [ ] **Step 7: Commit**

```bash
git add src/assets/fonts src/lib/og-font.ts src/components/og/OGImageLayout.tsx src/app/opengraph-image.tsx src/app/blog/[slug]/opengraph-image.tsx
git commit -m "feat: restyle OG images with collage system"
```

---

### Task 10: Legacy cleanup, reduced motion, and final QA

**Files:**
- Create: `scripts/check-legacy-styles.mjs`
- Modify: `package.json` (add `check:legacy`)
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: any file the scan reports

**Interfaces:**
- Produces: npm script `check:legacy` that exits non-zero when legacy styles remain.

- [ ] **Step 1: Write the legacy scan**

Create `scripts/check-legacy-styles.mjs`:

```js
import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const ROOTS = ["src"];
const EXTRA = ["tailwind.config.ts"];
const ALLOWED_EXT = new Set([".ts", ".tsx", ".css"]);

const BANNED = [
  [/\.neo-(badge|btn|card)/, "legacy .neo-* utility"],
  [/\bneo-(red|orange|yellow|lime|green|teal|cyan|blue|indigo|violet|purple|pink|rose)\b/, "legacy neo color"],
  [/\.(dot-grid|zigzag-top|animated-underline)\b/, "legacy utility class"],
  [/border-\[3px\]/, "legacy 3px border"],
  [/\b(border-black|bg-black|text-black|bg-white)\b/, "hard-coded black/white class"],
  [/\.(animate-float|animate-float-slow|animate-drift)\b/, "legacy float animation"],
  [/#(fbbf24|06b6d4|ec4899|f97316|84cc16|22c55e|3b82f6|ef4444|fef3c7|fef9c3|fffbe6|e6b448|3cc4ce|df548e|dcebfe|e0f2fe|525252)\b/i, "legacy hex"],
  [/#(FFE5E5|FF6B6B|4ECDC4|FFE66D)\b/i, "legacy OG hex"],
  [/#000000\b|#000\b/, "hard-coded black"],
];

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (ALLOWED_EXT.has(extname(name))) files.push(full);
  }
};
ROOTS.forEach(walk);
files.push(...EXTRA);

let hits = 0;
for (const file of files) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const [re, label] of BANNED) {
      if (re.test(line)) {
        console.error(`${file}:${i + 1}: ${label}: ${line.trim()}`);
        hits++;
      }
    }
  });
}
if (hits) {
  console.error(`FAIL: ${hits} legacy style hit(s)`);
  process.exit(1);
}
console.log(`PASS: no legacy styles in ${files.length} files`);
```

Add `"check:legacy": "node scripts/check-legacy-styles.mjs"` to `package.json`.

- [ ] **Step 2: Run it to verify it fails**

Run: `node scripts/check-legacy-styles.mjs`
Expected: FAIL with a list of remaining hits.

- [ ] **Step 3: Remove the old layer**

From `globals.css`: delete the old `:root` neo tokens, `.neo-*`, `.dot-grid`, `.zigzag-top`, `.animated-underline`, and the float/drift keyframes. From `tailwind.config.ts`: delete `neo-*` colors, `boxShadow.neo*`, `borderWidth.neo`, and the unused float/drift animations. Replace any remaining hits the scan reports with collage tokens.

- [ ] **Step 4: Run the scan to verify it passes**

Run: `npm run check:legacy && npm run check:design`
Expected: both pass.

- [ ] **Step 5: Reduced-motion and overflow pass**

Run `npm run dev`. In DevTools, emulate `prefers-reduced-motion: reduce` and check: no transform animations, no typing, no infinite loops, and all content visible. Then check `/`, `/project`, `/blog`, one post, and `/about` at 320, 390, 768, and 1280 px for horizontal overflow. Confirm the hero name is visible with JS disabled.

- [ ] **Step 6: Final verification**

Run: `npm run lint && npm run build`
Expected: both pass with no warnings from the edited files.

- [ ] **Step 7: Commit**

```bash
git add scripts/check-legacy-styles.mjs package.json src tailwind.config.ts
git commit -m "chore: remove legacy neo-brutalist styles and verify collage redesign"
```
