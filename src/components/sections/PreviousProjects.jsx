import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    title: 'Madnani',
    url: 'https://madnani.org.in',
    displayUrl: 'madnani.org.in',
    meta: '01 · WEB · 2024',
    fallbackGradient: 'linear-gradient(135deg, #0e0e1a 0%, #1a1535 100%)',
  },
  {
    id: 2,
    title: 'Solar Solutions',
    url: 'https://sssolarsolutions.org',
    displayUrl: 'sssolarsolutions.org',
    meta: '02 · WEB · 2024',
    fallbackGradient: 'linear-gradient(135deg, #0d1a10 0%, #0a2a14 100%)',
  },
  {
    id: 3,
    title: 'Unitak Fans',
    url: 'https://unitakfans.com',
    displayUrl: 'unitakfans.com',
    meta: '03 · WEB · 2024',
    fallbackGradient: 'linear-gradient(135deg, #1a0d1a 0%, #2a0a2a 100%)',
  },
];

const BrowserCard = ({ project, delay = 0, isSpotlight = false }) => {
  const previewHeight = isSpotlight ? 260 : 140;

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
            sandbox="allow-scripts"
          />
        </div>
      </div>

      {/* Card footer */}
      <div style={{
        padding: isSpotlight ? '14px 16px' : '10px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <div>
          <p style={{ margin: 0, fontSize: isSpotlight ? 14 : 12, fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#f0f0ff', marginBottom: 3 }}>
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
          className="prev-projects-visit"
          style={{
            fontSize: 10,
            fontFamily: 'JetBrains Mono, monospace',
            color: 'rgba(167,139,250,0.55)',
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
          .prev-projects-visit:hover { color: #a78bfa !important; }
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
            <BrowserCard project={spotlight} delay={0} isSpotlight />
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
