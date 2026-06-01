import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const STEPS = [
  { num: '01', title: 'Discover', icon: Search,  desc: 'One focused brief. We map your goals, constraints, and users in a single async session. No 12-slide decks.' },
  { num: '02', title: 'Design',   icon: PenTool, desc: 'Systems before surfaces. Architecture, data model, and component boundaries defined before a single pixel.' },
  { num: '03', title: 'Build',    icon: Code2,   desc: 'Iterative sprints with daily pushes. You see real code running in staging, not Figma frames.' },
  { num: '04', title: 'Ship',     icon: Rocket,  desc: "CI/CD, monitoring, documentation. We hand you the keys with everything lit and nothing on fire." },
];

const StepCard = ({ step, index }) => {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: '40px',
        overflow: 'hidden',
        transition: 'border-color 200ms, background 200ms',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.25)'; e.currentTarget.style.background = 'rgba(124,58,237,0.04)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
    >
      <span style={{ position: 'absolute', top: 24, right: 24, fontFamily: '"JetBrains Mono",monospace', fontSize: 64, fontWeight: 700, color: 'rgba(124,58,237,0.12)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
        {step.num}
      </span>
      <div style={{ width: 44, height: 44, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <Icon size={20} color="#a78bfa" strokeWidth={1.5} />
      </div>
      <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(240,240,255,0.25)', marginBottom: 8 }}>
        STEP {step.num}
      </p>
      <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 22, fontWeight: 600, color: '#f0f0ff', marginBottom: 12 }}>
        {step.title}
      </h3>
      <p style={{ fontFamily: 'Lora,serif', fontSize: 14, color: 'rgba(240,240,255,0.5)', lineHeight: 1.75 }}>
        {step.desc}
      </p>
    </motion.div>
  );
};

export const Process = () => (
  <section id="process" style={{ background: '#0c0c14', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '120px 24px' }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', marginBottom: 80 }}
    >
      <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(240,240,255,0.35)', marginBottom: 20 }}>
        • HOW WE WORK
      </p>
      <h2 style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(36px,5vw,52px)', fontWeight: 400, color: '#f0f0ff', marginBottom: 20, lineHeight: 1.15 }}>
        Four steps. Zero noise.
      </h2>
      <p style={{ fontFamily: 'Lora,serif', fontSize: 15, color: 'rgba(240,240,255,0.45)', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7 }}>
        A tight loop from brief to delivery. No middlemen, no status theatre — just a focused team moving fast.
      </p>
    </motion.div>

    <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, maxWidth: 860, margin: '0 auto' }}>
      {STEPS.map((step, i) => <StepCard key={step.num} step={step} index={i} />)}
    </div>

    <style>{`@media(max-width:768px){.process-grid{grid-template-columns:1fr!important}}`}</style>
  </section>
);
