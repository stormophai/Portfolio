import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import showcaseImg from '../../assets/virtua-showroom.png';

const CircleBadge = () => (
  <div className="absolute top-7 left-7 w-[100px] h-[100px] select-none pointer-events-none">
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <defs>
        <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" fill="none" />
      </defs>
      <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <text fill="rgba(255,255,255,0.7)" fontSize="8.5" letterSpacing="3.2" fontFamily="sans-serif" fontWeight="500">
        <textPath href="#badge-circle">AWARD WINNING DESIGN &amp; DEV ✦ </textPath>
      </text>
    </motion.svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
        <span className="text-white/80 text-sm leading-none">✦</span>
      </div>
    </div>
  </div>
);

const AvatarStack = () => (
  <div className="flex items-center gap-3">
    <div className="flex -space-x-2.5">
      {['#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95'].map((c, i) => (
        <div key={i} className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold text-white"
          style={{ backgroundColor: c, zIndex: 4 - i }}>
          {['S', 'M', 'A', 'R'][i]}
        </div>
      ))}
    </div>
    <div>
      <p className="text-base font-bold text-white leading-none">50<span className="text-violet-400">+</span></p>
      <p className="text-xs text-white/40 mt-0.5">Satisfied Clients</p>
    </div>
  </div>
);

// Build puzzle-piece clip-path for left card (concave notch on right edge)
const buildLeftPath = (W, H) => {
  const r = 32;
  const nr = H * 0.14; // notch radius
  const ny = H * 0.5;  // notch center Y
  const y1 = ny - nr, y2 = ny + nr;
  return `M${r},0 L${W - r},0 Q${W},0 ${W},${r} L${W},${y1} A${nr},${nr} 0 0,0 ${W},${y2} L${W},${H - r} Q${W},${H} ${W - r},${H} L${r},${H} Q0,${H} 0,${H - r} L0,${r} Q0,0 ${r},0 Z`;
};

// Build puzzle-piece clip-path for right card (convex bump on left edge)
const buildRightPath = (W, H) => {
  const r = 32;
  const nr = H * 0.14;
  const ny = H * 0.5;
  const y1 = ny - nr, y2 = ny + nr;
  return `M${r},0 L${W - r},0 Q${W},0 ${W},${r} L${W},${H - r} Q${W},${H} ${W - r},${H} L${r},${H} Q0,${H} 0,${H - r} L0,${y2} A${nr},${nr} 0 0,1 0,${y1} L0,${r} Q0,0 ${r},0 Z`;
};

const PuzzleLeft = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [clip, setClip] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const { width: W, height: H } = el.getBoundingClientRect();
      if (W > 0 && H > 0) setClip(`path('${buildLeftPath(W, H)}')`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ clipPath: clip || undefined }} className={className}>
      {children}
    </div>
  );
};

const PuzzleRight = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [clip, setClip] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const { width: W, height: H } = el.getBoundingClientRect();
      if (W > 0 && H > 0) setClip(`path('${buildRightPath(W, H)}')`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ clipPath: clip || undefined }} className={className}>
      {children}
    </div>
  );
};

export const Showcase = () => (
  <section id="showcase" className="py-24 bg-black overflow-hidden border-t border-white/[0.05]">
    <div className="max-w-[1200px] mx-auto px-8">

      {/* Top: heading + stats */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 flex-wrap"
        >
          <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
            Craft bold digital products that last
          </h2>
          <div className="flex items-center gap-3 text-violet-400 mt-1">
            <span className="text-3xl leading-none">✦</span>
            <div className="w-24 h-px bg-white/20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shrink-0 lg:pt-2"
        >
          <AvatarStack />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-white/45 text-sm leading-relaxed max-w-[420px] mb-10"
      >
        We transform complex ideas into elegant digital systems for founders, teams and enterprises worldwide.
      </motion.p>

      {/* Cards row — puzzle geometry on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 items-stretch">

        {/* Left — image card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <PuzzleLeft className="relative min-h-[420px] bg-[#0a0a0f] overflow-hidden">
            <img
              src={showcaseImg}
              alt="Rethink Studio showcase"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Violet decorative circle */}
            <div className="absolute bottom-[30%] right-[20%] w-36 h-36 rounded-full pointer-events-none"
              style={{ background: 'rgba(109,40,217,0.35)', filter: 'blur(2px)' }} />

            <CircleBadge />

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70 whitespace-nowrap bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
              Where design meets engineering precision.
            </p>
          </PuzzleLeft>
        </motion.div>

        {/* Right — violet card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <PuzzleRight className="relative bg-violet-700 p-9 flex flex-col justify-between min-h-[420px] overflow-hidden">
            {/* Small decorative square */}
            <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-violet-500/60" />

            <div className="flex flex-col gap-5 relative z-10">
              <p className="text-violet-200/80 text-base leading-snug">
                Our work has never been so impactful.
              </p>
              <h3 className="text-3xl lg:text-4xl font-sans font-bold text-white leading-[1.1] tracking-tight">
                Ship faster, smarter and bolder than before.
              </h3>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-black text-white font-semibold text-sm tracking-wide hover:bg-zinc-900 transition-colors"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </motion.a>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at bottom, rgba(167,139,250,0.15) 0%, transparent 70%)' }} />
          </PuzzleRight>
        </motion.div>

      </div>
    </div>
  </section>
);
