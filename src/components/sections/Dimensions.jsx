import { motion } from 'framer-motion';
import { Code2, Box, Cpu, Sparkles } from 'lucide-react';

const EASE = [0.23, 1, 0.32, 1];

/* ════════════════════════════════════════════
   ANIMATION 1 — Data Flow (Full-Stack Systems)
   Packets move along 3 horizontal lanes
   between a client block and a server block
════════════════════════════════════════════ */
const DataFlowViz = () => {
  const LANES = [
    { top: '32%', packets: 3, dur: 2.4, accents: [1] },
    { top: '50%', packets: 4, dur: 2.0, accents: [0, 3] },
    { top: '68%', packets: 3, dur: 2.7, accents: [2] },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* Client block — left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            style={{ width: 38, height: 9, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.45, ease: 'easeInOut' }}
          />
        ))}
        <p className="text-[8px] font-mono text-white/20 mt-1 tracking-widest">CLIENT</p>
      </div>

      {/* Server block — right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
        <motion.div
          style={{ width: 40, height: 54, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 3 }}
          animate={{ borderColor: ['rgba(124,58,237,0.25)', 'rgba(124,58,237,0.6)', 'rgba(124,58,237,0.25)'] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* LED indicator */}
          <motion.div
            className="mx-auto mt-2 rounded-full"
            style={{ width: 5, height: 5, background: '#7c3aed' }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-[8px] font-mono text-white/20 tracking-widest">SERVER</p>
      </div>

      {/* Horizontal lanes */}
      {LANES.map((lane, li) => (
        <div key={li} className="absolute inset-x-0" style={{ top: lane.top }}>
          {/* Track line */}
          <div className="absolute inset-x-[80px] h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
          {/* Packets */}
          {Array.from({ length: lane.packets }).map((_, pi) => {
            const isAccent = lane.accents.includes(pi);
            return (
              <div
                key={pi}
                className="absolute rounded-full"
                style={{
                  width: isAccent ? 6 : 4,
                  height: isAccent ? 6 : 4,
                  top: isAccent ? -3 : -2,
                  left: 80,
                  background: isAccent ? '#7c3aed' : 'rgba(255,255,255,0.35)',
                  boxShadow: isAccent ? '0 0 8px rgba(124,58,237,0.8)' : 'none',
                  animation: `flow-packet ${lane.dur}s linear infinite`,
                  animationDelay: `${pi * (lane.dur / lane.packets)}s`,
                }}
              />
            );
          })}
        </div>
      ))}

      {/* Node ping at server */}
      <div
        className="absolute rounded-full"
        style={{
          width: 12, height: 12,
          right: 'calc(2rem + 14px)',
          top: '50%',
          marginTop: -6,
          border: '1px solid rgba(124,58,237,0.5)',
          animation: 'node-ping 2s ease-out infinite',
        }}
      />
    </div>
  );
};

/* ════════════════════════════════════════════
   ANIMATION 2 — Wireframe Cube (Spatial Interfaces)
   Slow CSS 3D rotation, violet tinted edges
════════════════════════════════════════════ */
const WireframeViz = () => {
  const FACES = [
    { transform: 'translateZ(64px)' },
    { transform: 'translateZ(-64px) rotateY(180deg)' },
    { transform: 'translateX(64px) rotateY(90deg)' },
    { transform: 'translateX(-64px) rotateY(-90deg)' },
    { transform: 'translateY(-64px) rotateX(90deg)' },
    { transform: 'translateY(64px) rotateX(-90deg)' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Subtle horizon line */}
      <div className="absolute inset-x-0 h-px" style={{ top: '65%', background: 'rgba(255,255,255,0.04)' }} />

      {/* Perspective grid dots */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2, height: 2,
            background: 'rgba(255,255,255,0.08)',
            left: `${18 + i * 16}%`,
            top: '66%',
          }}
        />
      ))}

      {/* 3D cube */}
      <div style={{ perspective: '500px' }}>
        <div
          style={{
            width: 128, height: 128,
            transformStyle: 'preserve-3d',
            position: 'relative',
            animation: 'spin-cube 12s linear infinite',
          }}
        >
          {FACES.map((face, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                transform: face.transform,
                border: `1px solid rgba(124,58,237,${i < 2 ? 0.35 : 0.18})`,
                background: i < 2 ? 'rgba(124,58,237,0.03)' : 'transparent',
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner axis labels */}
      {[
        { label: 'X', left: '72%', top: '36%' },
        { label: 'Y', left: '46%', top: '18%' },
        { label: 'Z', left: '24%', top: '36%' },
      ].map(({ label, left, top }) => (
        <span
          key={label}
          className="absolute font-mono text-[9px] text-white/15 select-none"
          style={{ left, top }}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

/* ════════════════════════════════════════════
   ANIMATION 3 — Pulse Wave (Hardware & Telemetry)
   Two sine waves scrolling left continuously
   One primary (violet), one secondary (dim)
════════════════════════════════════════════ */
const PulseWaveViz = () => {
  /* Build a sine path that's 2× wide for seamless loop */
  const buildWave = (amp, freq, width, height, offsetY) => {
    const pts = [];
    for (let x = 0; x <= width; x += 3) {
      const y = offsetY + amp * Math.sin((x / width) * freq * Math.PI * 2);
      pts.push(`${x},${y}`);
    }
    return `M ${pts.join(' L ')}`;
  };

  const W = 600; // 2× the viewBox width so loop is seamless
  const H = 160;

  const primaryPath = buildWave(22, 4, W, H, H / 2) + ' ' + buildWave(22, 4, W, H, H / 2).replace('M', 'M' + W + ',');
  const secondaryPath = buildWave(12, 6, W, H, H / 2) + ' ' + buildWave(12, 6, W, H, H / 2).replace('M', 'M' + W + ',');

  /* Build double-width paths for seamless loop */
  const wave1 = (() => {
    const pts = [];
    for (let x = 0; x <= W * 2; x += 3) {
      const y = H / 2 + 22 * Math.sin((x / W) * 4 * Math.PI);
      pts.push(`${x},${y}`);
    }
    return `M ${pts.join(' L ')}`;
  })();
  const wave2 = (() => {
    const pts = [];
    for (let x = 0; x <= W * 2; x += 3) {
      const y = H / 2 + 12 * Math.sin((x / W) * 6 * Math.PI + 1);
      pts.push(`${x},${y}`);
    }
    return `M ${pts.join(' L ')}`;
  })();

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col justify-center gap-3 px-2">
      {/* Channel labels */}
      <div className="absolute left-4 top-4 flex flex-col gap-3">
        {['CH1', 'CH2'].map((ch, i) => (
          <span key={ch} className="text-[8px] font-mono text-white/20 tracking-widest">{ch}</span>
        ))}
      </div>

      {/* Primary wave — violet */}
      <div className="relative overflow-hidden" style={{ height: 60 }}>
        <svg
          style={{
            width: W * 2,
            height: 60,
            animation: `wave-scroll ${3.5}s linear infinite`,
          }}
          viewBox={`0 0 ${W * 2} ${H}`}
          preserveAspectRatio="none"
        >
          <path d={wave1} fill="none" stroke="rgba(124,58,237,0.9)" strokeWidth="1.5" />
        </svg>
        {/* Moving dot on wave */}
        <motion.div
          className="absolute rounded-full"
          style={{ width: 7, height: 7, background: '#7c3aed', top: 'calc(50% - 3.5px)', boxShadow: '0 0 10px rgba(124,58,237,1)' }}
          animate={{ left: ['5%', '90%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Secondary wave — dim */}
      <div className="relative overflow-hidden" style={{ height: 40 }}>
        <svg
          style={{
            width: W * 2,
            height: 40,
            animation: `wave-scroll ${5}s linear infinite`,
            animationDirection: 'reverse',
          }}
          viewBox={`0 0 ${W * 2} ${H}`}
          preserveAspectRatio="none"
        >
          <path d={wave2} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </svg>
      </div>

      {/* Data readout */}
      <div className="absolute right-4 bottom-4 flex flex-col items-end gap-1">
        {['42.7 Hz', '1.8 ms'].map((val, i) => (
          <motion.span
            key={val}
            className="text-[8px] font-mono text-white/25 tabular-nums"
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.9 }}
          >
            {val}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   ANIMATION 4 — Motion Grid (Brand & Motion)
   Grid of squares that cascade in/out,
   two columns of color swatches animate up
════════════════════════════════════════════ */
const MotionGridViz = () => {
  const COLS = 9, ROWS = 4;
  const cells = Array.from({ length: COLS * ROWS }, (_, i) => i);

  /* A vertical stack of "brand color" bars rises on the right */
  const SWATCHES = [
    { color: '#ffffff', opacity: 0.9 },
    { color: '#a1a1aa', opacity: 0.7 },
    { color: '#3f3f46', opacity: 0.6 },
    { color: '#27272a', opacity: 0.5 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-6">
      {/* Pixel grid — left 65% */}
      <div
        className="grid gap-1.5 shrink-0"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {cells.map(i => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const isAccent = (col + row) % 4 === 0;
          return (
            <motion.div
              key={i}
              style={{
                width: 14, height: 14,
                background: isAccent ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.06)',
                borderRadius: 1,
              }}
              animate={{
                opacity: [0.06, isAccent ? 0.9 : 0.25, 0.06],
                scale: [1, isAccent ? 1.15 : 1.05, 1],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: (col * 0.12 + row * 0.2) % 2.4,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Swatch column — right */}
      <div className="flex flex-col gap-1.5 ml-5 shrink-0">
        {SWATCHES.map((sw, i) => (
          <motion.div
            key={i}
            style={{ width: 24, height: 24, background: sw.color, opacity: sw.opacity, borderRadius: 2 }}
            animate={{ y: [4, -4, 4], opacity: [sw.opacity * 0.5, sw.opacity, sw.opacity * 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
          />
        ))}
        <div className="mt-1 h-px w-full bg-white/10" />
        <motion.p
          className="text-[7px] font-mono text-white/25 tracking-widest"
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SYSTEM
        </motion.p>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   CARD DATA
════════════════════════════════════════════ */
const CARDS = [
  {
    icon: Code2,
    num: '01',
    title: 'Full-Stack Systems',
    body: 'Production-grade architectures. React + Node.js to AWS — designed to scale before you ever need it to.',
    tags: ['React', 'Node.js', 'AWS', 'CI/CD'],
    Viz: DataFlowViz,
    /* bento span — 3-col grid, 5-unit wide */
    gridCol: '1 / 4',    /* cols 1-3 of 5 (wide) */
    gridRow: '1',
  },
  {
    icon: Box,
    num: '02',
    title: 'Spatial Interfaces',
    body: 'WebGL and Three.js at 60fps. 3D environments that feel as fast as they look.',
    tags: ['Three.js', 'WebGL', 'GLSL', 'Spline'],
    Viz: WireframeViz,
    gridCol: '4 / 6',    /* cols 4-5 (narrow) */
    gridRow: '1',
  },
  {
    icon: Cpu,
    num: '03',
    title: 'Hardware & Telemetry',
    body: 'Firmware to dashboard. MQTT pipelines and real-time feeds — physical world, made software.',
    tags: ['MQTT', 'Firmware', 'WebSocket', 'Grafana'],
    Viz: PulseWaveViz,
    gridCol: '1 / 3',    /* cols 1-2 (narrow) */
    gridRow: '2',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Brand & Motion',
    body: 'Identity systems with a pulse. Logos, motion design, 3D — things people screenshot and share.',
    tags: ['Branding', 'Motion', '3D Assets', 'Video'],
    Viz: MotionGridViz,
    gridCol: '3 / 6',    /* cols 3-5 (wide) */
    gridRow: '2',
  },
];

/* ════════════════════════════════════════════
   FEATURE CARD
════════════════════════════════════════════ */
function FeatureCard({ card, index }) {
  const Icon = card.icon;
  const Viz = card.Viz;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      className="relative flex flex-col overflow-hidden"
      style={{
        gridColumn: card.gridCol,
        gridRow: card.gridRow,
        background: '#0A0A0A',
        border: '1px solid #1C1C1C',
        minHeight: 380,
      }}
    >
      {/* Animation area — top 55% */}
      <div
        className="relative flex-1 overflow-hidden"
        style={{ borderBottom: '1px solid #1C1C1C', minHeight: 200 }}
      >
        {/* Dot grid texture */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id={`dot-${index}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.04)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dot-${index})`} />
        </svg>

        <Viz />
      </div>

      {/* Text area — bottom */}
      <div className="p-6 flex flex-col gap-3">
        {/* Ordinal + icon row */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-[0.35em] text-white/20 uppercase">
            {card.num}
          </span>
          <Icon size={16} className="text-white/20" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3
          className="text-white font-bold leading-tight"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)', fontFamily: 'Poppins, sans-serif' }}
        >
          {card.title}
        </h3>

        {/* Body */}
        <p className="text-sm leading-relaxed" style={{ color: '#525252' }}>
          {card.body}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
          {card.tags.map(tag => (
            <span key={tag} className="text-[9px] font-mono tracking-widest uppercase text-white/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   SECTION
════════════════════════════════════════════ */
export const Dimensions = () => (
  <section id="dimensions" className="relative bg-black py-24 px-6 lg:px-12">
    {/* Section header */}
    <div className="max-w-7xl mx-auto mb-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: EASE }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="h-px w-8 bg-white/15" />
        <span className="text-[9px] font-mono tracking-[0.35em] text-white/30 uppercase">
          Capabilities
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
        className="font-black text-white uppercase leading-[0.9] tracking-tighter mb-5"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontFamily: 'Poppins, sans-serif' }}
      >
        What We Build
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
        className="text-sm leading-relaxed max-w-md"
        style={{ color: '#525252' }}
      >
        Four practice areas, one studio. From firmware to 3D — everything ships production-ready.
      </motion.p>
    </div>

    {/* Bento grid */}
    <div
      className="max-w-7xl mx-auto"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'auto auto',
        gap: 12,
      }}
    >
      {CARDS.map((card, i) => (
        <FeatureCard key={card.num} card={card} index={i} />
      ))}
    </div>
  </section>
);
