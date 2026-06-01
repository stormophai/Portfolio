# Previous Projects Section — Design Spec
**Date:** 2026-06-02  
**Status:** Approved

---

## Overview

New page section showcasing 3 real client websites built by Rethink Studio. Distinct from the existing Portfolio section (which shows fictional projects) — this section shows live, shipped client work with interactive browser-chrome preview windows.

---

## Section Identity

- **Section ID:** `#previous-projects`
- **Overline:** `• CLIENT WORK`
- **Heading:** `Real sites. Real clients. Shipped.`
- **Position:** After the existing `Portfolio` section (`#portfolio`), before `TechStack`.
- **File:** `src/components/sections/PreviousProjects.jsx`

---

## Projects

| # | Title | URL | Description | Tags |
|---|-------|-----|-------------|------|
| 1 | Madnani | madnani.org.in | Business website built for a professional client | React, Tailwind, CMS |
| 2 | Solar Solutions | sssolarsolutions.org | Corporate site for a solar energy company | Next.js, SEO, CMS |
| 3 | Unitak Fans | unitakfans.com | Fan community platform | React, Community |

Project 1 (Madnani) is the **spotlight** — rendered larger on the left. Projects 2 & 3 stack on the right.

---

## Layout

Asymmetric CSS grid: `grid-template-columns: 1.6fr 1fr` with `grid-template-rows: auto auto`.

- **Spotlight card** (`grid-row: 1 / 3`): taller, more detail, larger browser preview
- **Two small cards**: stacked in the right column

Collapses to single column stack on mobile (< 768px).

---

## Card Anatomy

Each card = Minimal Dark style:

```
┌─────────────────────────────────────┐
│ ● ● ●   [ site-url.com          ↗ ] │  ← browser chrome bar
├─────────────────────────────────────┤
│                                     │
│   <iframe src="https://site.com">   │  ← live preview (or gradient fallback)
│   [scaled 33% via CSS transform]    │
│                                     │
├─────────────────────────────────────┤
│ Site Name              ↗ Visit site │  ← footer
│ 01 · WEB · 2024                     │
└─────────────────────────────────────┘
```

- **Background:** `#0f0f18`
- **Border:** `1px solid rgba(255,255,255,0.07)` → `rgba(255,255,255,0.18)` on hover
- **Border-radius:** `12px`
- **Chrome bar:** `#141420`, macOS traffic lights (red/yellow/green circles), URL pill

### iframe Embed Strategy

- `<iframe src="https://site-url" />` inside a `overflow: hidden` container
- Scaled down to fit via `transform: scale(0.33); transform-origin: top left` with the container sized to compensate (`width: 300%; height: 300%` → parent clips)
- `pointer-events: none` so hover on the card works correctly
- **Fallback:** if iframe is blocked (X-Frame-Options), show a styled gradient background matching the site's color palette. Detected via `onError` on a hidden `<img>` probe or simply using a static gradient that always shows (iframe layered on top via `position: absolute`)

Fallback gradient per project:
- Madnani: `linear-gradient(135deg, #0e0e1a, #1a1535)`
- Solar Solutions: `linear-gradient(135deg, #0d1a10, #0a2a14)`
- Unitak Fans: `linear-gradient(135deg, #1a0d1a, #2a0a2a)`

---

## Animations

- Section heading: `whileInView` fade-up, `once: true`
- Spotlight card: `whileInView` fade-up with `y: 24`, `duration: 0.7`
- Two small cards: same, staggered `delay: 0.1` and `delay: 0.2`
- Card hover: `border-color` transition 250ms, no transform lift (Minimal Dark — no float)

---

## Styling

Follows existing design system:

- **Overline:** 10px JetBrains Mono, uppercase, `rgba(240,240,255,0.35)`, `letterSpacing: 0.25em`
- **Heading:** Lora serif, `clamp(32px, 4vw, 48px)`, `fontWeight: 400`, `#f0f0ff`
- **Card footer project name:** Poppins 13px, `fontWeight: 600`, `#f0f0ff`
- **Card footer meta:** JetBrains Mono 9px, `rgba(240,240,255,0.25)`, uppercase
- **Visit link:** JetBrains Mono 10px, `rgba(167,139,250,0.55)` → `#a78bfa` on hover

---

## Component Structure

```
PreviousProjects (section)
├── Section heading (overline + h2)
└── Project grid (CSS grid)
    ├── BrowserCard (spotlight — madnani.org.in)
    └── BrowserCard (small — sssolarsolutions.org)
    └── BrowserCard (small — unitakfans.com)

BrowserCard props:
  { title, url, meta, tags, fallbackGradient, spotlight? }
```

---

## Self-Review

- No TBDs or placeholders — all project info defined
- No internal contradictions
- Scope: one focused section, one new component file
- Ambiguity resolved: iframe scaled via CSS transform (not actual resize), gradient always visible as fallback layer beneath iframe
