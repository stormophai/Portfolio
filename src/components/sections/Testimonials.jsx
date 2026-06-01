import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Rethink shipped our entire IoT dashboard in six weeks. Clean architecture, real-time telemetry, zero regressions at launch. They're the rare team that actually understands both firmware and frontend.",
    name: 'Arjun Mehta',
    role: 'CTO',
    company: 'Aura Technologies',
    initials: 'AM',
    color: '#7c3aed',
  },
  {
    quote: "We handed them a Figma file and a one-pager. They handed back a production app that our users called 'the most polished fintech experience they'd ever used'. Work was finished three days early.",
    name: 'Priya Nair',
    role: 'Product Lead',
    company: 'FinEdge',
    initials: 'PN',
    color: '#6d28d9',
  },
  {
    quote: "The WebGL showroom they built tripled our average session time. Complex 3D rendering, optimised for mobile. We've worked with agencies twice the size that couldn't pull this off.",
    name: 'Rohan Kapoor',
    role: 'Founder',
    company: 'Virtua Labs',
    initials: 'RK',
    color: '#5b21b6',
  },
];

const TestimonialCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.5 }}
    whileHover={{ y: -3 }}
    style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      transition: 'border-color 250ms',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
  >
    {/* Stars */}
    <span style={{ fontSize: 13, color: '#a78bfa', opacity: 0.8, letterSpacing: 3 }}>★★★★★</span>

    {/* Quote mark + text */}
    <div style={{ flex: 1 }}>
      <p style={{ fontFamily: 'Lora,serif', fontSize: 15, fontStyle: 'italic', color: 'rgba(240,240,255,0.7)', lineHeight: 1.75 }}>
        "{item.quote}"
      </p>
    </div>

    {/* Attribution */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        background: `${item.color}33`,
        border: `1px solid ${item.color}66`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 12, fontWeight: 700, color: '#a78bfa' }}>
          {item.initials}
        </span>
      </div>
      <div>
        <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: 14, fontWeight: 600, color: '#f0f0ff', lineHeight: 1.3 }}>
          {item.name}
        </p>
        <p style={{ fontFamily: 'Lora,serif', fontSize: 12, color: 'rgba(240,240,255,0.4)' }}>
          {item.role} · {item.company}
        </p>
      </div>
    </div>
  </motion.div>
);

export const Testimonials = () => (
  <section id="testimonials" style={{ backgroundColor: '#0c0c14', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '96px 24px' }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', marginBottom: 64 }}
    >
      <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(240,240,255,0.35)', marginBottom: 16 }}>
        • WHAT CLIENTS SAY
      </p>
      <h2 style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(36px,5vw,52px)', fontWeight: 400, color: '#f0f0ff', marginBottom: 16, lineHeight: 1.15 }}>
        Trusted by builders.
      </h2>
      <p style={{ fontFamily: 'Lora,serif', fontSize: 14, color: 'rgba(240,240,255,0.45)', maxWidth: 360, margin: '0 auto' }}>
        A few words from the people who shipped with us.
      </p>
    </motion.div>

    <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 1080, margin: '0 auto' }}>
      {TESTIMONIALS.map((item, i) => <TestimonialCard key={item.name} item={item} index={i} />)}
    </div>

    <style>{`@media(max-width:900px){.testimonials-grid{grid-template-columns:1fr!important}}`}</style>
  </section>
);
