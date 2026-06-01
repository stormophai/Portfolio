import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  {
    id: 1,
    number: '01',
    title: 'Web / App Development',
    subtitle: 'React · Next.js · Node.js',
    description: 'Full-stack web and mobile applications built for scale. From pixel-perfect React frontends to robust Node.js backends — we ship fast and maintain quality.',
    pills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    artGradient: 'linear-gradient(135deg, #0d0b2e 0%, #1a1060 50%, #0d0b2e 100%)',
    artLabel: '</> Web / App Dev',
    blob1: 'rgba(124,58,237,0.45)',
    blob2: 'rgba(167,139,250,0.25)',
  },
  {
    id: 2,
    number: '02',
    title: 'Automation',
    subtitle: 'n8n · Python · Zapier',
    description: 'Workflow automation that eliminates repetitive work. We connect your tools, trigger actions on events, and build pipelines that run while you sleep.',
    pills: ['n8n', 'Python', 'Zapier', 'Make', 'REST APIs'],
    artGradient: 'linear-gradient(135deg, #0a1a0e 0%, #0d2e18 50%, #0a1a0e 100%)',
    artLabel: '⚡ Automation',
    blob1: 'rgba(39,201,63,0.35)',
    blob2: 'rgba(0,229,255,0.18)',
  },
  {
    id: 3,
    number: '03',
    title: 'IoT & Embedded',
    subtitle: 'MQTT · Firmware · ESP32',
    description: 'Hardware that talks to the cloud. Firmware development, sensor integration, real-time telemetry dashboards, and command centers for physical devices.',
    pills: ['MQTT', 'ESP32', 'Arduino', 'Firmware', 'WebRTC'],
    artGradient: 'linear-gradient(135deg, #0d0b2e 0%, #1a0d3a 50%, #0d0b2e 100%)',
    artLabel: '⬡ IoT & Embedded',
    blob1: 'rgba(124,58,237,0.4)',
    blob2: 'rgba(0,229,255,0.22)',
  },
  {
    id: 4,
    number: '04',
    title: 'Online Marketing',
    subtitle: 'SEO · Ads · Social',
    description: 'Data-driven marketing that compounds. SEO foundations, paid ad campaigns, social strategy, and analytics dashboards — all tied to measurable ROI.',
    pills: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics', 'Content'],
    artGradient: 'linear-gradient(135deg, #1a0a0a 0%, #2e0d0d 50%, #1a0a0a 100%)',
    artLabel: '↗ Online Marketing',
    blob1: 'rgba(220,50,50,0.35)',
    blob2: 'rgba(255,120,50,0.2)',
  },
];

const ServiceListItem = ({ service, isActive, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: '#0f0f18',
      border: `1px solid ${isActive ? 'rgba(124,58,237,0.35)' : 'rgba(255,255,255,0.06)'}`,
      borderRadius: 10,
      padding: '14px 16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      opacity: isActive ? 1 : 0.55,
      transition: 'border-color 200ms, opacity 200ms',
    }}
    onMouseEnter={e => { if (!isActive) e.currentTarget.style.opacity = '0.85'; }}
    onMouseLeave={e => { if (!isActive) e.currentTarget.style.opacity = '0.55'; }}
  >
    <span style={{
      fontSize: 10,
      fontFamily: 'JetBrains Mono, monospace',
      color: isActive ? '#a78bfa' : 'rgba(240,240,255,0.3)',
      fontWeight: isActive ? 700 : 400,
      flexShrink: 0,
    }}>
      {service.number}
    </span>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontSize: 13,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        color: isActive ? '#f0f0ff' : 'rgba(240,240,255,0.7)',
        marginBottom: 2,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {service.title}
      </div>
      <div style={{
        fontSize: 10,
        fontFamily: 'JetBrains Mono, monospace',
        color: isActive ? 'rgba(240,240,255,0.35)' : 'rgba(240,240,255,0.2)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {service.subtitle}
      </div>
    </div>
    {isActive && (
      <div style={{
        width: 6, height: 6,
        borderRight: '1.5px solid #a78bfa',
        borderTop: '1.5px solid #a78bfa',
        transform: 'rotate(45deg)',
        flexShrink: 0,
      }} />
    )}
  </div>
);

const ServicePanel = ({ service }) => (
  <motion.div
    key={service.id}
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    style={{
      background: '#0f0f18',
      border: '1px solid rgba(124,58,237,0.2)',
      borderRadius: 12,
      overflow: 'hidden',
    }}
  >
    {/* Art zone */}
    <div style={{
      height: 110,
      background: service.artGradient,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.04) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />
      <div style={{
        position: 'absolute',
        width: 140, height: 140,
        background: `radial-gradient(circle, ${service.blob1}, transparent 70%)`,
        borderRadius: '50%',
        top: -40, right: -20,
      }} />
      <div style={{
        position: 'absolute',
        width: 90, height: 90,
        background: `radial-gradient(circle, ${service.blob2}, transparent 70%)`,
        borderRadius: '50%',
        bottom: -25, left: 20,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 14, left: 18,
        fontSize: 11,
        fontFamily: 'JetBrains Mono, monospace',
        color: '#a78bfa',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        opacity: 0.85,
      }}>
        {service.artLabel}
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '18px 20px' }}>
      <p style={{
        margin: '0 0 8px',
        fontSize: 15,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        color: '#f0f0ff',
      }}>
        {service.title}
      </p>
      <p style={{
        margin: '0 0 14px',
        fontSize: 13,
        fontFamily: 'Lora, serif',
        color: 'rgba(240,240,255,0.5)',
        lineHeight: 1.7,
      }}>
        {service.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
        {service.pills.map(pill => (
          <span key={pill} style={{
            background: 'rgba(124,58,237,0.18)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: 20,
            padding: '2px 9px',
            fontSize: 9,
            fontFamily: 'JetBrains Mono, monospace',
            color: '#a78bfa',
          }}>
            {pill}
          </span>
        ))}
      </div>
      <a
        href="#team"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 11,
          fontFamily: 'JetBrains Mono, monospace',
          color: '#a78bfa',
          textDecoration: 'none',
          border: '1px solid rgba(124,58,237,0.3)',
          padding: '5px 12px',
          borderRadius: 5,
          transition: 'color 200ms, border-color 200ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#f0f0ff'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'; }}
      >
        Start a project ↗
      </a>
    </div>
  </motion.div>
);

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      style={{
        background: '#0c0c14',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '96px 0',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-list { display: none !important; }
          .services-mobile-stack { display: flex !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

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
            • WHAT WE DO
          </p>
          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            color: '#f0f0ff',
            margin: '0 0 12px',
            lineHeight: 1.2,
          }}>
            Services we provide
          </h2>
          <p style={{
            fontFamily: 'Lora, serif',
            fontStyle: 'italic',
            fontSize: 15,
            color: 'rgba(240,240,255,0.4)',
            margin: '0 auto',
            maxWidth: 440,
            lineHeight: 1.6,
          }}>
            From idea to shipped product — we cover every layer of the stack.
          </p>
        </motion.div>

        {/* Desktop: numbered list + detail panel */}
        <div
          className="services-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 16, alignItems: 'start' }}
        >
          <motion.div
            className="services-list"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {SERVICES.map((service, i) => (
              <ServiceListItem
                key={service.id}
                service={service}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <ServicePanel key={activeIndex} service={SERVICES[activeIndex]} />
          </AnimatePresence>
        </div>

        {/* Mobile: all panels stacked, list hidden via CSS */}
        <div
          className="services-mobile-stack"
          style={{ display: 'none', flexDirection: 'column', gap: 16 }}
        >
          {SERVICES.map(service => (
            <ServicePanel key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};
