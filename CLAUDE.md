# Rethink Studio — Project Reference

## Project Identity

**Name**: Rethink  
**Type**: Creative & Development Studio website  
**Stack**: React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion v12  
**Path alias**: `@` → `src/`

---

## Team Members

| # | Name | Role | Expertise |
|---|------|------|-----------|
| 1 | Samar Singh | Project Lead | Backend & DevOps — Node.js, Docker, AWS, CI/CD |
| 2 | Mayank Tiwari | UI/UX Designer | Creative & Media — Branding, Motion, 3D, Video |
| 3 | Sumit Kumar Patel | Developer | UI & UX — Figma, Design Systems, Research, Prototyping |
| 4 | Shivam Singh | Creative Director | Full Stack & Embedded — React, Next.js, Firmware, WebGL |

Team image: `src/assets/team.png` (4 cartoon avatars, black background, left→right matches order above)

---

## Design System

### Colors (tailwind.config.js)
```js
background: "#0c0c14"   // Deep indigo-black (Vesper style)
surface:    "#0f0f18"   // Slightly elevated dark surface
primary:    "#FFFFFF"
secondary:  "#A1A1AA"   // Zinc-400
accent.cyan:"#00E5FF"
border.muted: "#27272A" // Zinc-800
border.solid: "#3F3F46" // Zinc-700
```

### Vesper dark-indigo palette (used throughout inline styles)
- `#0c0c14` — page background
- `#0f0f18` — card/surface background
- `rgba(255,255,255,0.07)` — default border
- `rgba(255,255,255,0.13)` — hover border
- `#f0f0ff` — primary text (slightly cool white, not pure white)
- `rgba(240,240,255,0.45)` — secondary text
- `rgba(240,240,255,0.25)` — muted text

### Purple/Violet palette
- `#6633ee` / `#63e` — hero gradient end color
- `#7c3aed` — violet-600, primary violet / CTA buttons
- `#6d28d9` — violet-700, hover state
- `#a78bfa` — violet-400, light accent / glow color
- `#4c1d95` — violet-900, deep

### Fonts
- **Sans** (headings/UI): Poppins
- **Serif** (body/headlines): Lora
- **Mono** (overlines/labels/code): JetBrains Mono

### Section overline format
```
fontSize: 10px, fontFamily: JetBrains Mono, textTransform: uppercase
letterSpacing: 0.25em, color: rgba(240,240,255,0.35)
prefix: "• " (bullet + space)
```

### Key CSS Rules (index.css)
```css
/* Marquee animations — GPU accelerated */
@keyframes marquee-ltr { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
@keyframes marquee-rtl { from { transform: translate3d(-50%,0,0); } to { transform: translate3d(0,0,0); } }

/* Border beam — used on Features cards */
@keyframes border-beam-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* Team section aurora */
@keyframes aurora-pulse { 0%,100% { opacity:0.7; transform:scale(1); } 50% { opacity:1; transform:scale(1.15); } }
@keyframes aurora-ring  { 0% { transform:scale(0.85); opacity:0.4; } 50% { transform:scale(1.2); opacity:0.15; } 100% { transform:scale(0.85); opacity:0.4; } }
```

---

## Page Structure (Home.jsx)

```
Header (fixed, pill nav)
├── Hero                    id="hero"
├── AppPreview              id="preview"
├── Features                id="services"
├── FourBuilds              id="work"
├── Portfolio               id="portfolio"
├── TechStack               id="stack"
├── AuroraStats             id="about"
├── Process                 id="process"
├── Testimonials            id="testimonials"
└── Team                    id="team"
Footer (minimal single row)
```

---

## Component Reference

### Layout

#### `src/components/layout/Header.jsx`
- Fixed top nav, backdrop-blur + `rgba(12,12,20,0.85)` bg on scroll
- Logo: purple 3D isometric SVG cube (inline, gradient IDs prefixed `h`)
- **Center pill nav**: `background: rgba(255,255,255,0.04)`, `border: 1px solid rgba(255,255,255,0.08)`, `border-radius: 100px`
- Nav items: Overview / Services / Work / Process / Team — each `padding: 6px 14px`, pill hover bg
- **Right CTA**: Single "Contact Us" button (violet `#7c3aed`, scrolls to `#team`)
- Scroll progress bar: solid `#7c3aed` (no gradient) via `ScrollProgressBar` in App.jsx
- Mobile: slide-down drawer with same nav + Contact Us button

#### `src/components/layout/Footer.jsx`
- Vesper-style minimal single row
- Left: PrismLogo SVG (gradient IDs prefixed `f` to avoid conflicts with header) + "Rethink Studio"
- Center: nav links — Manifesto · Changelog · Pricing · Privacy · Status
- Right: "© 2025 Rethink Studio" in JetBrains Mono
- Mobile: 3 rows stacked centered
- `border-top: 1px solid rgba(255,255,255,0.06)`, `background: #0c0c14`

---

### Sections

#### `src/components/sections/Hero.jsx` — KEEP INTACT
**Background**: `radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)`

**Layout**: Left 50% = content, Right 55% = Spline 3D robot (absolute)

**Left column**:
1. `CursorDrivenParticleTypography` — "Rethink" violet particles, `textAlign="left"`, `h-[110px]`
2. `<h1>` — "Build digital products that **scale** with **precision**"
3. Email input + "Get Started" button (violet `bg-violet-600`)
4. "No contract required" caption

**Right**: `InteractiveRobotSpline` — Spline scene URL in component
- Transparent canvas, bottom fade mask, left gradient mask

**Removed**: Scroll indicator ("Scroll" text + animated line) — deleted

---

#### `src/components/sections/AppPreview.jsx`
Mock studio interface card — placed between Hero and Features.

**Structure** (dark rounded card, `bg: #0f0f18`, `border-radius: 16px`, `box-shadow: 0 40px 80px rgba(0,0,0,0.5)`):
- Browser chrome: 3 traffic-light dots + URL pill (`rethink.studio/studio`) + icons
- Left sidebar (160px): WORKSPACE label + 6 project items, "Aura Smarthome" active with pulsing violet dot
- Center: AURA SMARTHOME header + "Twilight, building out loud" content + violet highlighted line + status bar
- Right panel (200px): TEAM SUGGESTS + suggestion card + action items

Entrance: `motion.div` fade up from `y=40`, `once=true`.

---

#### `src/components/sections/Features.jsx` — "A studio that earns its dark room"
3 service pillar cards.

**Border beam effect on hover**:
- Outer wrapper: `padding: 1px`, `overflow: hidden`, `border-radius: 16px` — acts as border slot
- Inner rotating `div`: `inset: -60%`, `conic-gradient(from 0deg, transparent 0deg, #a78bfa 15deg, #7c3aed 30deg, transparent 50deg)`, `animation: border-beam-rotate 2.4s linear infinite`, `opacity: 0→1` on hover
- Inner card: `border-radius: 15px`, `background: rgba(12,12,20,0.97)`, `z-index: 1`

Cards: Precision Architecture / Spatial Intelligence / Connected Hardware  
Icons: `Code2` / `Layers` / `Cpu` from lucide-react

---

#### `src/components/sections/FourBuilds.jsx` — "Four kinds of build, one focused team."
2-col layout: left text + right interactive dark panel.

- Left: overline + headline + body + 4 bullet points (Digital Systems / Spatial & Mobile / Hardware Telemetry / Immersive Topology)
- Right panel (`bg: #0f0f18`, `border-radius: 16px`): tab bar + 4 clickable project rows (Aura Smarthome / FinEdge Mobile / Nova Protocol / Virtua Showroom) with Framer Motion `layoutId` active highlight

---

#### `src/components/sections/Portfolio.jsx` — "Built to last. Shipped to scale."
5 project cards with filter tabs.

**Filters**: All / Web / Mobile / IoT / 3D  
**Projects**: Nova Protocol (web) / Aura Smart Home (iot) / Virtua Showroom (3d) / FinEdge Mobile (mobile) / Black Health (web)

**Card**: `bg: #0f0f18`, `border-radius: 16px`, `16/10` aspect-ratio image, hover image scale `1.04`, overlay with tech tag pills on hover, footer with year + category badge + `ArrowUpRight`.

Filter behavior: `AnimatePresence mode="popLayout"`, staggered `delay: index * 0.05`.

---

#### `src/components/sections/TechStack.jsx` — "The stack behind every build."
**Background**: `#0c0c14` + Sparkles particle field (`color: #a78bfa`, density 1100, speed 0.6) + violet radial glow blob.

**Sparkles**: imported from `../ui/sparkles`, `z-index: 0` absolutely positioned.  
Content sits at `z-index: 1`.

**Marquee**: 2 rows, opposite directions  
- ROW_1 (→): React, Next.js, Three.js, WebGL, TypeScript, Node.js, GraphQL, Vercel  
- ROW_2 (←): Docker, Framer, Tailwind, WebRTC, MQTT, Python, Web3, React Native

**Hover**: triggers on wrapper `div` — both icon (`color: #a78bfa`, `drop-shadow(0 0 8px #7c3aed)`) and name text (`color: #a78bfa`, `textShadow: 0 0 12px rgba(124,58,237,0.7)`) glow simultaneously.

---

#### `src/components/sections/AuroraStats.jsx` — "Built for the sprint after everyone logs off."
Aurora gradient background section.

- 2 animated blobs: violet radial (`rgba(124,58,237,0.18)`) + cyan (`rgba(0,229,255,0.06)`)
- 3 stats: `4` EXPERT BUILDERS / `50+` PROJECTS SHIPPED / `24h` REPLY GUARANTEE
- 2 CTAs: "Start a project →" (violet filled) + "Read our manifesto" (ghost)
- Staggered entrance animations via Framer Motion variants

---

#### `src/components/sections/Process.jsx` — "Four steps. Zero noise."
2×2 grid (collapses to 1-col on mobile via injected `<style>` media query).

Steps: 01 Discover / 02 Design / 03 Build / 04 Ship  
Each card: decorative bg step number (64px, `rgba(124,58,237,0.12)`), icon box, STEP label, title, description. Hover: border `rgba(124,58,237,0.25)`, bg `rgba(124,58,237,0.04)`.  
No border-radius — flat panel grid aesthetic.

---

#### `src/components/sections/Testimonials.jsx` — "Trusted by builders."
3 quote cards in a 3-col grid (collapses to 1-col below 900px).

Clients: Arjun Mehta (CTO, Aura Technologies) / Priya Nair (Product Lead, FinEdge) / Rohan Kapoor (Founder, Virtua Labs)

Card: `border-radius: 16px`, `bg: rgba(255,255,255,0.025)`, star rating, italic Lora quote, avatar circle + name/role attribution. `whileHover={{ y: -3 }}`.

---

#### `src/components/sections/Team.jsx`
**Background**: `#0c0c14` (updated from pure black)

**Aurora reveal system**:
- 48 tech stack icons at fixed `%` positions, hidden by default
- Mouse `radial-gradient` mask (220px) reveals as violet `#a78bfa` with glow
- Two animated aurora layers follow cursor (aurora-pulse + aurora-ring keyframes)

**Team image**: `src/assets/team.png` — centered, `max-w-[860px]`

**Hover zones**: 4 × `MemberZone` (25% width each), violet highlight + `GlassCard` via `AnimatePresence`

**GlassCard**:
```
backdrop-filter: blur(24px) saturate(160%) brightness(1.15)
background: linear-gradient(135deg, rgba(255,255,255,0.13), rgba(124,58,237,0.08), rgba(255,255,255,0.06))
border: 1px solid rgba(255,255,255,0.18)
```

---

## UI Components (`src/components/ui/`)

| File | Description |
|------|-------------|
| `sparkles.jsx` | `@tsparticles/react` v4 wrapper — uses `ParticlesProvider` + `useCallback` init. No `initParticlesEngine`. |
| `ScrollProgressBar.jsx` | Fixed top bar, `scaleX` via Framer Motion `useScroll`. Color: solid `#7c3aed` (no gradient). |
| `interactive-3d-robot.jsx` | Lazy-loaded Spline scene — transparent canvas, CSS mask bottom fade |
| `cursor-driven-particles-typography.jsx` | Canvas particle text — `textAlign` prop, mouse repulsion, spring return |
| `input.tsx` | shadcn-compatible Input, dark theme |
| `button.tsx` | shadcn-compatible Button, variants: default/outline/ghost |

---

## Installed Packages (beyond Vite defaults)

```
framer-motion          ^12.40.0
react-router-dom       ^7.16.0
lucide-react           ^1.17.0
react-icons            (si sub-package for brand icons)
@hugeicons/react       + @hugeicons/core-free-icons
@tsparticles/react     ^4.x  (v4 API — ParticlesProvider)
@tsparticles/slim      ^4.x
@splinetool/react-spline
@paper-design/shaders-react
clsx + tailwind-merge  (cn utility at src/lib/utils.ts)
three + @react-three/fiber + @react-three/drei
```

---

## Tech Stack Icons Used
`SiReact, SiNextdotjs, SiThreedotjs, SiWebgl, SiTypescript, SiNodedotjs, SiGraphql, SiVercel, SiDocker, SiFramer, SiTailwindcss, SiWebrtc, SiMqtt, SiPython, SiWeb3Dotjs`

Note: `SiAmazonwebservices` does NOT exist in react-icons/si — use `SiVercel` instead.

---

## Assets

| File | Usage |
|------|-------|
| `src/assets/team.png` | Team section — 4 cartoon avatars on black bg |
| `src/assets/virtua-showroom.png` | Portfolio card |
| `src/assets/hero.png` | Available |
| `src/assets/rethink-logo.png` | Available (not used in footer — inline SVG used instead) |
| `src/assets/aura-smarthome.png` | Portfolio card |
| `src/assets/finedge-mobile.png` | Portfolio card |
| `src/assets/nova-protocol.png` | Portfolio card |
| `src/assets/black_health_matters.png` | Portfolio card |

---

## Important API Notes

### @tsparticles/react v4
```js
// CORRECT (v4)
import { Particles, ParticlesProvider } from "@tsparticles/react"
<ParticlesProvider init={useCallback(async (engine) => { await loadSlim(engine) }, [])}>
  <Particles id={id} options={opts} />
</ParticlesProvider>

// WRONG — does not exist in v4
import { initParticlesEngine } from "@tsparticles/react" // ❌
```

### Marquee loop (seamless)
- Repeat items **4×**, animate `-50%` = moves 2 copies
- Duration = `speed * 2` to maintain same visual px/s
- Use `translate3d` not `translateX` — prevents repaint jitter
- `mask-image` fade 12%→88% on both sides — no extra overlay divs

### Border beam effect (Features cards)
- Outer wrapper: `padding: 1px`, `overflow: hidden` — creates 1px border slot
- Beam: `position: absolute`, `inset: -60%` (3× bigger), `conic-gradient`, `animation: border-beam-rotate`
- Inner card: `z-index: 1`, `border-radius: 15px` (1px less than outer 16px)
- `border-beam-rotate` keyframe in `index.css`

### SVG gradient ID namespacing
- Header PrismLogo: IDs prefixed `h` (hTopFace, hLeftFace, hRightFace)
- Footer PrismLogo: IDs prefixed `f` (fTopFace, fLeftFace, fRightFace)
- Prevents SVG gradient conflicts when both render simultaneously
