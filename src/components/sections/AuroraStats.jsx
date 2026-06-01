import { motion } from 'framer-motion';

const stats = [
  { value: '4',   label: 'EXPERT BUILDERS'  },
  { value: '50+', label: 'PROJECTS SHIPPED' },
  { value: '24h', label: 'REPLY GUARANTEE'  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUpVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const statVariants = (i) => ({
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] } },
});

export function AuroraStats() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '112px',
        paddingBottom: '112px',
        paddingLeft: '24px',
        paddingRight: '24px',
        background: '#0c0c14',
      }}
    >
      {/* Violet aurora blob — CSS animation, no JS per-frame */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
        <div
          style={{
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(109,40,217,0.08) 40%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'aurora-pulse 5s ease-in-out infinite',
            willChange: 'transform, opacity',
          }}
        />
      </div>

      {/* Cyan accent blob */}
      <div style={{ position: 'absolute', top: '-20%', right: '10%', pointerEvents: 'none' }}>
        <div
          style={{
            width: '400px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'aurora-pulse 5s ease-in-out infinite',
            animationDelay: '2.5s',
            willChange: 'transform, opacity',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ position: 'relative', zIndex: 10, maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.p
          variants={fadeUpVariants}
          style={{ fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(240,240,255,0.35)', marginBottom: '16px' }}
        >
          • AFTER DEADLINE
        </motion.p>

        <motion.h2
          variants={fadeUpVariants}
          style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontFamily: 'Lora, serif', fontWeight: 400, color: '#f0f0ff', lineHeight: 1.15, maxWidth: '672px', margin: '0 auto 24px' }}
        >
          Built for the sprint after everyone logs off.
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          style={{ fontSize: '16px', fontFamily: 'Lora, serif', color: 'rgba(240,240,255,0.5)', maxWidth: '576px', margin: '0 auto 48px', lineHeight: 1.7 }}
        >
          Rethink turns the cursor into a command. The project glows; the team is
          focused; and the only thing lit is the milestone you are pushing.
        </motion.p>

        <motion.div
          variants={containerVariants}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '64px', marginBottom: '64px' }}
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={statVariants(i)} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '36px', fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, color: '#f0f0ff', letterSpacing: '-0.02em', margin: 0 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(240,240,255,0.35)', fontFamily: 'Poppins, sans-serif', margin: '4px 0 0' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUpVariants} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          <motion.button
            whileHover={{ boxShadow: '0 0 24px rgba(124,58,237,0.5), 0 0 8px rgba(124,58,237,0.3)' }}
            transition={{ duration: 0.2 }}
            style={{ padding: '12px 28px', background: '#7c3aed', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '14px', fontFamily: 'Poppins, sans-serif', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.01em' }}
          >
            Start a project →
          </motion.button>

          <motion.button
            whileHover={{ borderColor: 'rgba(255,255,255,0.3)' }}
            transition={{ duration: 0.2 }}
            style={{ padding: '12px 28px', background: 'transparent', color: 'rgba(240,240,255,0.7)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: 'Poppins, sans-serif', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.01em' }}
          >
            Read our manifesto
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
