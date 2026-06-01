import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import novaImg        from '../../assets/nova-protocol.png';
import auraImg        from '../../assets/aura-smarthome.png';
import virtuaImg      from '../../assets/virtua-showroom.png';
import finedgeImg     from '../../assets/finedge-mobile.png';
import blackHealthImg from '../../assets/black_health_matters.png';

const imageMap = { 1: novaImg, 2: auraImg, 3: virtuaImg, 4: finedgeImg, 5: blackHealthImg };

const projects = [
  { id: 1, title: 'Nova Protocol',   category: 'web',    tags: ['React','Web3','Tailwind'],       year: '2024' },
  { id: 2, title: 'Aura Smart Home', category: 'iot',    tags: ['Node.js','MQTT','React Native'], year: '2024' },
  { id: 3, title: 'Virtua Showroom', category: '3d',     tags: ['Three.js','WebGL','React'],      year: '2023' },
  { id: 4, title: 'FinEdge Mobile',  category: 'mobile', tags: ['Swift','Kotlin','Firebase'],     year: '2024' },
  { id: 5, title: 'Black Health',    category: 'web',    tags: ['Next.js','Tailwind','Framer'],   year: '2023' },
];

const FILTERS = [
  { id: 'all',    label: 'All'    },
  { id: 'web',    label: 'Web'    },
  { id: 'mobile', label: 'Mobile' },
  { id: 'iot',    label: 'IoT'    },
  { id: '3d',     label: '3D'     },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0f0f18',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 250ms, transform 250ms',
      }}
    >
      <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
        <img
          src={imageMap[project.id]}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 400ms ease' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'flex-end', padding: 16, opacity: hovered ? 1 : 0, transition: 'opacity 250ms' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ background: 'rgba(124,58,237,0.6)', color: '#fff', fontSize: 10, fontFamily: 'Poppins,sans-serif', padding: '2px 8px', borderRadius: 9999, lineHeight: 1.6 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: '16px 20px' }}>
        <p style={{ margin: '0 0 8px', fontSize: 16, fontFamily: 'Poppins,sans-serif', fontWeight: 600, color: '#f0f0ff' }}>
          {project.title}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, fontFamily: '"JetBrains Mono",monospace', color: 'rgba(240,240,255,0.25)' }}>{project.year}</span>
            <span style={{ fontSize: 10, fontFamily: 'Poppins,sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(240,240,255,0.45)', padding: '2px 8px', borderRadius: 4 }}>
              {project.category}
            </span>
          </div>
          <ArrowUpRight size={14} style={{ color: hovered ? '#a78bfa' : 'rgba(240,240,255,0.25)', transition: 'color 250ms', flexShrink: 0 }} />
        </div>
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" style={{ background: '#0c0c14', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 10, fontFamily: '"JetBrains Mono",monospace', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(240,240,255,0.35)', margin: '0 0 16px' }}>• OUR WORK</p>
          <h2 style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(36px,5vw,52px)', fontWeight: 400, color: '#f0f0ff', margin: '0 0 16px', lineHeight: 1.15 }}>
            Built to last. Shipped to scale.
          </h2>
          <p style={{ fontFamily: 'Lora,serif', fontSize: 15, color: 'rgba(240,240,255,0.45)', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7 }}>
            Five products across web, mobile, IoT, and immersive tech — each one a system built to endure.
          </p>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
          {FILTERS.map(f => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: '6px 16px', borderRadius: 9999,
                  border: `1px solid ${active ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  background: active ? 'rgba(124,58,237,0.15)' : 'transparent',
                  color: active ? '#a78bfa' : 'rgba(240,240,255,0.45)',
                  fontSize: 12, fontFamily: 'Poppins,sans-serif',
                  cursor: 'pointer', transition: 'all 150ms', outline: 'none',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#f0f0ff'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(240,240,255,0.45)'; }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
