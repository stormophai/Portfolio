# Previous Projects Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Previous Projects" section with 3 real client sites displayed in macOS-style browser-chrome cards using an asymmetric spotlight layout.

**Architecture:** Single new component file `PreviousProjects.jsx` containing a reusable `BrowserCard` component. Gradient fallback always renders beneath the iframe so blocked embeds degrade gracefully. Wired into `Home.jsx` between `Portfolio` and `TechStack`.

**Tech Stack:** React 19, Framer Motion v12, Tailwind CSS v4, inline styles (matches codebase pattern)

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Create | `src/components/sections/PreviousProjects.jsx` | Full section + `BrowserCard` sub-component |
| Modify | `src/pages/Home.jsx` | Import + render between Portfolio and TechStack |

---

### Task 1: Create `PreviousProjects.jsx`

**Files:**
- Create: `src/components/sections/PreviousProjects.jsx`

- [ ] **Step 1: Create the file with project data and `BrowserCard` component**

```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    title: 'Madnani',
    url: 'https://madnani.org.in',
    displayUrl: 'madnani.org.in',
    meta: '01 · WEB · 2024',
    tags: ['React', 'Tailwind', 'CMS'],
    fallbackGradient: 'linear-gradient(135deg, #0e0e1a 0%, #1a1535 100%)',
    spotlight: true,
  },
  {
    id: 2,
    title: 'Solar Solutions',
    url: 'https://sssolarsolutions.org',
    displayUrl: 'sssolarsolutions.org',
    meta: '02 · WEB · 2024',
    tags: ['Next.js', 'SEO', 'CMS'],
    fallbackGradient: 'linear-gradient(135deg, #0d1a10 0%, #0a2a14 100%)',
    spotlight: false,
  },
  {
    id: 3,
    title: 'Unitak Fans',
    url: 'https://unitakfans.com',
    displayUrl: 'unitakfans.com',
    meta: '03 · WEB · 2024',
    tags: ['React', 'Community'],
    fallbackGradient: 'linear-gradient(135deg, #1a0d1a 0%, #2a0a2a 100%)',
    spotlight: false,
  },
];
```

- [ ] **Step 2: Add the `BrowserCard` component below the data**

```jsx
const BrowserCard = ({ project, delay = 0 }) => {
  const [linkHovered, setLinkHovered] = useState(false);
  const previewHeight = project.spotlight ? 260 : 140;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#0f0f18',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'border-color 250ms',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      {/* Browser chrome bar */}
      <div style={{
        background: '#141420',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        {/* URL pill */}
        <div style={{
          flex: 1,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 5,
          padding: '3px 10px',
          fontSize: 9,
          color: 'rgba(240,240,255,0.35)',
          fontFamily: 'JetBrains Mono, monospace',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {project.displayUrl}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 11, color: 'rgba(167,139,250,0.5)', flexShrink: 0, textDecoration: 'none', lineHeight: 1 }}
        >
          ↗
        </a>
      </div>

      {/* Preview area — gradient always visible, iframe layered on top */}
      <div style={{ position: 'relative', height: previewHeight, overflow: 'hidden', flexShrink: 0 }}>
        {/* Gradient fallback (always visible — shows if iframe is blocked) */}
        <div style={{ position: 'absolute', inset: 0, background: project.fallbackGradient }} />

        {/* Bottom fade so card footer reads cleanly */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 48,
          background: 'linear-gradient(to top, #0f0f18, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        {/* Live iframe — scaled down via CSS transform */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '300%',
          height: '300%',
          transform: 'scale(0.333)',
          transformOrigin: 'top left',
          pointerEvents: 'none',
          zIndex: 1,
        }}>
          <iframe
            src={project.url}
            title={project.title}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>

      {/* Card footer */}
      <div style={{
        padding: project.spotlight ? '14px 16px' : '10px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <div>
          <p style={{ margin: 0, fontSize: project.spotlight ? 14 : 12, fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#f0f0ff', marginBottom: 3 }}>
            {project.title}
          </p>
          <p style={{ margin: 0, fontSize: 9, fontFamily: 'JetBrains Mono, monospace', color: 'rgba(240,240,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {project.meta}
          </p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          style={{
            fontSize: 10,
            fontFamily: 'JetBrains Mono, monospace',
            color: linkHovered ? '#a78bfa' : 'rgba(167,139,250,0.55)',
            textDecoration: 'none',
            transition: 'color 200ms',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          ↗ Visit site
        </a>
      </div>
    </motion.div>
  );
};
```

- [ ] **Step 3: Add the `PreviousProjects` section component and export**

```jsx
export const PreviousProjects = () => {
  const [spotlight, ...rest] = PROJECTS;

  return (
    <section
      id="previous-projects"
      style={{
        background: '#0c0c14',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '96px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p style={{
            fontSize: 10,
            fontFamily: 'JetBrains Mono, monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: 'rgba(240,240,255,0.35)',
            margin: '0 0 16px',
          }}>
            • CLIENT WORK
          </p>
          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            color: '#f0f0ff',
            margin: 0,
            lineHeight: 1.2,
          }}>
            Real sites. Real clients. Shipped.
          </h2>
        </motion.div>

        {/* Grid — desktop: spotlight left + 2 stacked right | mobile: single column */}
        <style>{`
          @media (max-width: 767px) {
            .prev-projects-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div
          className="prev-projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: 16,
          }}
        >
          {/* Spotlight */}
          <div style={{ gridRow: '1 / 3' }}>
            <BrowserCard project={spotlight} delay={0} />
          </div>

          {/* Two small cards */}
          {rest.map((project, i) => (
            <BrowserCard key={project.id} project={project} delay={0.1 + i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
};
```

- [ ] **Step 4: Verify file is complete — no missing closing braces**

Open `src/components/sections/PreviousProjects.jsx` and confirm it has:
- `PROJECTS` array (3 entries)
- `BrowserCard` component
- `PreviousProjects` exported component
- No syntax errors (check for mismatched `{}` or `()`)

---

### Task 2: Wire into `Home.jsx` + visual verification

**Files:**
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Add import to `Home.jsx`**

In `src/pages/Home.jsx`, add to the import block:

```jsx
import { PreviousProjects } from '../components/sections/PreviousProjects';
```

- [ ] **Step 2: Render between Portfolio and TechStack**

```jsx
// Before (in Home.jsx <main>):
<Portfolio />
<TechStack />

// After:
<Portfolio />
<PreviousProjects />
<TechStack />
```

- [ ] **Step 3: Run dev server**

```bash
npm run dev
```

Expected: no console errors, server starts at `http://localhost:5173`

- [ ] **Step 4: Visual check — section renders**

Open `http://localhost:5173`, scroll to the Previous Projects section and verify:
- Overline `• CLIENT WORK` visible
- Heading `Real sites. Real clients. Shipped.` visible
- 3 cards in spotlight layout (1 large left, 2 stacked right)
- Each card has macOS traffic lights + URL bar + preview area + footer

- [ ] **Step 5: Visual check — iframe vs gradient fallback**

In the preview area of each card:
- If the site allows embedding: iframe content loads (may take a few seconds on slow connections)
- If blocked (X-Frame-Options): gradient fallback is visible — this is correct and expected
- Bottom fade gradient on each preview area masks the iframe/gradient transition into the card footer cleanly

- [ ] **Step 6: Visual check — hover states**

Hover each card:
- Card border brightens from `rgba(255,255,255,0.07)` to `rgba(255,255,255,0.18)`
- "↗ Visit site" link turns `#a78bfa` (violet) on hover
- No layout shift or float effect (Minimal Dark — intentionally no lift)

- [ ] **Step 7: Visual check — mobile layout**

Resize browser below 768px:
- All 3 cards stack in a single column
- Spotlight card loses its `grid-row: 1/3` span (collapses to auto)
- Cards remain readable at mobile width

- [ ] **Step 8: Visual check — scroll animations**

Scroll past the section, then back up so it's out of view. Scroll down again:
- `once: true` on all animations — they do NOT replay
- Heading fades up first, then cards stagger in (0s, 0.1s, 0.2s delays)
