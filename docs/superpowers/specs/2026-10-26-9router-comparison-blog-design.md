# 9Router vs OpenRouter vs LiteLLM — Blog Post Design

**Date:** 2026-10-26
**Type:** Blog post (MDX)
**Target filename:** `src/content/blog/9router-vs-openrouter-litellm.mdx`
**Status:** Draft spec — awaiting approval before writing

---

## Intent & Why

The existing `9router.mdx` ranks well on Google for informational queries ("what is 9router", "9router setup"). The next-highest-value keyword cluster we are not capturing is **comparison intent**: searches like *"9router vs openrouter"*, *"9router alternatives"*, *"best AI API router"*, *"openrouter vs litellm"*.

People searching these terms are close to picking a tool. A comparison post:
- Captures a different, higher-intent search audience than the existing intro/setup posts.
- Builds an internal link cluster: the overview, the setup guide, and the comparison all cross-link to each other, which strengthens SEO for all three.
- Positions the blog as an honest technical resource, not just a 9Router fan page — which earns reader trust and backlinks.

---

## Goals

1. **Rank for comparison keywords** — "9router vs openrouter", "9router vs litellm", "AI API router comparison", "best LLM proxy".
2. **Help readers pick a tool** — not just list features, but match each tool to a specific user persona.
3. **Drive traffic back to the existing 9Router posts** — via internal links to the intro and setup guide.
4. **Be honest** — acknowledge where OpenRouter or LiteLLM wins. Marketing fluff gets called out by readers and penalized by Google's helpful-content signals.

## Non-Goals

- Not a sponsored post. No affiliate bias.
- Not a deep tutorial for any of the three — that would dilute the comparison. Link out instead.
- Not covering every alternative on the market (e.g. Portkey, Martian). Stay focused on the top three.

## Anti-Goals (what would make this a failure)

- A feature-parity table with no narrative — Google ranks opinionated, structured content higher.
- Obvious 9Router bias — readers bounce. The comparison must be fair enough that a LiteLLM user would bookmark it.
- Longer than ~2,500 words — comparison posts that ramble lose to tighter competitors.

---

## Target Audience

- Developers already using an AI coding tool (Claude Code, Cursor, Codex) who are hitting cost or quota walls.
- Technical enough to self-host or run an npm package.
- Searching for a router/proxy but unsure which one to pick.

## Primary Keywords

- `9router vs openrouter`
- `9router vs litellm`
- `AI API router comparison`
- `best LLM proxy for AI coding`
- `openrouter alternatives`

## Secondary / Long-tail Keywords

- `how to reduce AI coding costs`
- `litellm vs openrouter for claude code`
- `self-hosted AI API proxy`

---

## Angle / Thesis

**The others just route. 9Router actively reduces your spend.**

The framing is about **what each tool optimizes for**:

- **9Router** optimizes for **cost**: RTK compression (20–40%), Caveman/Ponytail modes (up to 65% output savings), built-in free-tier providers (Kiro, OpenCode, Vertex), multi-account round-robin. It's the only router that actively shrinks your bill per request.
- **OpenRouter** optimizes for **convenience**: huge model catalog (300+), zero setup, one API key. But you pay a markup and bring your own paid keys. No compression, no free fallback tiers.
- **LiteLLM** optimizes for **control**: embeddable Python/JS SDK, retry/fallback as code. But it's a library, not a turnkey cost-saver. You have to build the routing logic yourself.

**Why this thesis wins:**
- Defensible: 9Router *is* the only one with built-in token compression, free-tier providers, and multi-account round-robin.
- Memorable: "One of these actively shrinks your bill, the others just move requests around."
- Better SEO: targets "reduce AI coding cost", "cheapest AI API", "cut Claude Code bill" — what people actually type into Google.
- Fits the blog cluster: your existing 9Router posts already lean 9Router-positive.

**How to keep it honest:**
- Admit where 9Router loses: smaller model catalog than OpenRouter, requires self-hosting, docs lag behind features.
- Give OpenRouter and LiteLLM genuine credit for what they're good at.
- Let the cost features speak for themselves — numbers (20–40% RTK savings, 65% Caveman savings, $0 Kiro tier) do more than opinion.

A reader should finish thinking: "9Router is built to cut costs, OpenRouter is built to be easy, LiteLLM is built to be embedded. Got it."

---

## Structure (Section Outline)

### 1. Intro (~150 words)
Hook: "You know you need a router. But what if one of these could actually shrink your bill, while the other two just move requests around?"
Name the three contenders and state the cost-focused thesis in one sentence.
Internal link: "If you are new to 9Router, start with our [intro](/blog/9router) and [setup guide](/blog/9router-setup) first."

### 2. What These Tools Have in Common (~150 words)
All three:
- Expose an OpenAI-compatible API
- Support 40+ providers
- Let you switch models without rewriting your code
- Handle fallback on errors

Then pivot: "But they optimize for completely different things."

### 3. 9Router — The Cost Optimizer (~350 words)
- What it is (one paragraph)
- Strengths: self-hosted, RTK token compression (20–40%), Caveman/Ponytail modes (up to 65% output savings), 3-tier fallback with free tiers (Kiro, OpenCode, Vertex), multi-account round-robin, live quota dashboard
- Weaknesses: you run it yourself, smaller model catalog than OpenRouter, community-driven so docs lag behind features
- Cost example: show how the combination of RTK + Caveman + free tiers can cut a $200/month bill to $15–30
- Best for: devs who want to minimize spend on AI coding tools

### 4. OpenRouter — The Convenience Gateway (~300 words)
- What it is (one paragraph)
- Strengths: zero setup, massive model catalog (300+), unified billing, great for app developers, free credits for some models
- Weaknesses: hosted (your requests go through their servers), no token compression, no free-tier fallback tiers, per-token markup, less control over routing logic, you bring your own paid API keys
- Best for: app builders who want one API key and don't want to self-host

### 5. LiteLLM — The Developer Library (~300 words)
- What it is (one paragraph)
- Strengths: Python/JS SDK, deep integration into existing codebases, fine-grained control, retry/fallback logic as code, popular in production ML stacks
- Weaknesses: not a turnkey product for coding tools, requires coding to configure, no dashboard out of the box, overkill if you just want to route Claude Code, no built-in cost optimization
- Best for: engineers building an AI-powered product who need a programmable routing layer

### 6. Head-to-Head Comparison Table (~200 words + table)
A single markdown table comparing the three across ~10 dimensions:

| Dimension | 9Router | OpenRouter | LiteLLM |
|---|---|---|---|
| Type | Self-hosted proxy | Hosted gateway | Library / proxy |
| Setup | `npm i -g` + dashboard | Sign up, get API key | `pip install` + code |
| Token compression | Yes (RTK, 20–40%) | No | No |
| Prompt modes | Caveman, Ponytail | None | Manual |
| Free tiers | Kiro, OpenCode, Vertex | Some free models | N/A (BYO keys) |
| Provider count | 40+ | 300+ | 100+ |
| Dashboard | Yes | Yes | Optional (LiteLLM UI) |
| Coding tool support | First-class | Good | Manual |
| Pricing | Free (MIT) + your provider costs | Pay-as-you-go + markup | Free (Apache-2.0) + your provider costs |
| Self-hosted | Required | No | Optional |
| OpenAI-compatible | Yes | Yes | Yes |

### 7. Which One Should You Use? (~250 words)
Decision tree in prose:
- "If you mostly use Claude Code, Cursor, or Codex and want to cut your bill → **9Router**. Start with our [setup guide](/blog/9router-setup)."
- "If you are building an app and want one API key for every model → **OpenRouter**."
- "If you are writing Python/JS code and need routing as a library → **LiteLLM**."
- "You can combine them. 9Router as your local coding proxy, LiteLLM inside your product backend."

### 8. FAQ (~200 words)
- Can I use 9Router and OpenRouter together?
- Is 9Router safer than OpenRouter (self-hosted vs hosted)?
- Does LiteLLM support Claude Code?
- Which is cheapest?

### 9. Conclusion (~100 words)
Re-state the thesis. Link back to 9Router intro + setup. Link out to the [9Router GitHub repo](https://github.com/decolua/9router).

---

## Internal Linking Strategy

- Link to `/blog/9router` (intro) at least twice.
- Link to `/blog/9router-setup` (setup guide) at least twice.
- Link to `/blog/openclaw`, `/blog/install-ollama-and-deepseek-locally`, and `/blog/how-to-vibes-coding` where contextually relevant.
- External link to [OpenRouter](https://openrouter.ai) and [LiteLLM](https://github.com/BerriAI/litellm) repos for credibility.

---

## Tone & Voice

- Honest, technical, slightly opinionated — like a senior dev explaining choices to a peer.
- No superlatives without evidence ("best", "fastest", "cheapest" only when backed by numbers).
- Short paragraphs. Use tables and code blocks where they compress information.
- Match the voice of the existing 9Router posts.

---

## Word Count Target

~2,000–2,500 words. Tight and scannable.

---

## Frontmatter

```yaml
title: "9Router vs OpenRouter vs LiteLLM: Which AI API Router Should You Use?"
date: "2026-10-26"
description: "An honest comparison of 9Router, OpenRouter, and LiteLLM — three AI API routers for cutting LLM costs. Pick the right tool for your workflow."
tags: ["AI", "Developer Tools", "Open Source", "Tools", "9Router", "OpenRouter", "LiteLLM"]
```

---

## Left to Builder Judgment

- Exact wording of the comparison table — keep dimensions but adjust labels for clarity.
- Whether to include code snippets for each tool (probably not — links out are enough).
- Whether to mention Portkey, Martian, or other alternatives briefly in the intro (probably not — keep scope tight).
