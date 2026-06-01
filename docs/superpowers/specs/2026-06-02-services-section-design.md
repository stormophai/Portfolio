# Services Section — Design Spec
**Date:** 2026-06-02  
**Status:** Approved

---

## Overview

Replace the existing `Features` section (abstract service pillars) and remove the `FourBuilds` section entirely. Replace with a new concrete `Services` section showing the 4 actual services Rethink Studio offers, using an interactive numbered list + illustrated detail panel layout.

---

## Removals

| Section | File | Reason |
|---------|------|--------|
| `Features` | `src/components/sections/Features.jsx` | Replaced by new Services section |
| `FourBuilds` | `src/components/sections/FourBuilds.jsx` | Removed entirely |

Both imports and JSX render calls must be removed from `src/pages/Home.jsx`.

---

## New Section Identity

- **Section ID:** `#services`
- **File:** `src/components/sections/Services.jsx`
- **Position:** Where Features was (early in page, after AppPreview)
- **Overline:** `• WHAT WE DO`
- **Heading:** `Services we provide` (Lora serif, fontWeight 400)
- **Subheading:** `From idea to shipped product — we cover every layer of the stack.` (Lora italic)

---

## Services Data

| # | Title | Subtitle | Stack pills | Art gradient | Description |
|---|-------|----------|-------------|--------------|-------------|
| 01 | Web / App Development | React · Next.js · Node.js | React, Next.js, Node.js, TypeScript, PostgreSQL | `#0d0b2e → #1a1060` (indigo/violet) | Full-stack web and mobile applications built for scale. From pixel-perfect React frontends to robust Node.js backends — we ship fast and maintain quality. |
| 02 | Automation | n8n · Python · Zapier | n8n, Python, Zapier, Make, REST APIs | `#0a1a0e → #0d2e18` (deep green) | Workflow automation that eliminates repetitive work. We connect your tools, trigger actions on events, and build pipelines that run while you sleep. |
| 03 | IoT & Embedded | MQTT · Firmware · ESP32 | MQTT, ESP32, Arduino, Firmware, WebRTC | `#0d0b2e → #1a0d3a` (deep indigo/purple) | Hardware that talks to the cloud. Firmware development, sensor integration, real-time telemetry dashboards, and command centers for physical devices. |
| 04 | Online Marketing | SEO · Ads · Social | SEO, Google Ads, Meta Ads, Analytics, Content | `#1a0a0a → #2e0d0d` (deep crimson) | Data-driven marketing that compounds. SEO foundations, paid ad campaigns, social strategy, and analytics dashboards — all tied to measurable ROI. |

---

## Layout

### Desktop (≥ 768px)

```
[Left column — 1fr]          [Right column — 1.6fr]
┌─────────────────┐          ┌───────────────────────────┐
│ 01  Web/App Dev │ ←active  │ [Gradient art zone 100px] │
│    React·Next.. │          │ Title                     │
├─────────────────┤          │ Description paragraph      │
│ 02  Automation  │          │ [pill] [pill] [pill]       │
├─────────────────┤          │ Start a project ↗          │
│ 03  IoT &       │          └───────────────────────────┘
├─────────────────┤
│ 04  Marketing   │
└─────────────────┘
```

CSS grid: `grid-template-columns: 1fr 1.6fr`, `gap: 16px`

### Mobile (< 768px)

Single column stack. List items show all 4 always expanded (no click needed — just stack the detail panels vertically, list hidden). Use injected `<style>` media query identical to PreviousProjects pattern.

---

## List Item (left column)

**Active state:**
- `border: 1px solid rgba(124,58,237,0.35)`
- Number: `color: #a78bfa`, `fontWeight: 700`
- Service name: `color: #f0f0ff`, `fontWeight: 600`, 13px Poppins
- Subtitle: JetBrains Mono 10px, `rgba(240,240,255,0.3)`
- Chevron arrow `›` right-aligned, `color: #a78bfa`
- Cursor: pointer

**Inactive state:**
- `border: 1px solid rgba(255,255,255,0.06)`
- `opacity: 0.55`
- No chevron
- Hover: `opacity: 0.85`, `border-color: rgba(255,255,255,0.12)`

State managed with `useState(0)` — active index, default 0 (first service).

---

## Detail Panel (right column)

### Art Zone (top, 110px tall)

- Background: service-specific gradient
- `overflow: hidden`, `position: relative`
- Two radial gradient blobs (`position: absolute`) for depth
- CSS grid-line texture: `background-image: linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.04) 1px, transparent 1px); background-size: 20px 20px`
- Service label bottom-left: JetBrains Mono 11px, `#a78bfa`, uppercase, `letter-spacing: 0.2em`

### Content Area (below art zone)

- Padding: `18px 20px`
- Title: Poppins 15px, `fontWeight: 600`, `#f0f0ff`
- Description: Lora 13px, `rgba(240,240,255,0.5)`, `lineHeight: 1.7`, margin-bottom 14px
- Tech pills: `background: rgba(124,58,237,0.18)`, `border: 1px solid rgba(124,58,237,0.3)`, `border-radius: 20px`, `padding: 2px 9px`, JetBrains Mono 9px, `#a78bfa`
- CTA link: `border: 1px solid rgba(124,58,237,0.3)`, `padding: 5px 12px`, `border-radius: 5px`, JetBrains Mono 11px, `#a78bfa` → `#f0f0ff` on hover, `href="#team"` (scrolls to contact/team)

### Panel container

- `background: #0f0f18`
- `border: 1px solid rgba(124,58,237,0.2)`
- `border-radius: 12px`
- `overflow: hidden`

---

## Animations

- Section heading block: `whileInView`, `y: 20→0`, `opacity: 0→1`, `once: true`, `duration: 0.5`
- Left list: `whileInView`, `x: -20→0`, `opacity: 0→1`, `once: true`, `duration: 0.6`
- Detail panel: `AnimatePresence` with `key={activeIndex}` — on service switch, panel fades out (`opacity: 0, x: 10`) and new one fades in (`opacity: 1, x: 0`), `duration: 0.25`

---

## Component Structure

```
Services (section, exported)
├── Section heading (overline + h2 + subheading)
└── Two-column grid
    ├── ServiceList (left)
    │   └── ServiceListItem × 4 (active/inactive states)
    └── ServicePanel (right)
        ├── ArtZone (gradient + blobs + grid texture + label)
        └── ContentArea (title + description + pills + CTA)

State: activeIndex (0-3) in Services, passed down as prop
```

Single file: `src/components/sections/Services.jsx`

---

## Self-Review

- No TBDs — all service content, colors, and copy defined
- No contradictions — mobile collapses to vertical stack (no interaction needed)
- Scope: one file created, two files' imports+renders removed from Home.jsx
- Ambiguity resolved: CTA links to `#team`, `AnimatePresence` on panel switch, `once: true` on scroll animations
