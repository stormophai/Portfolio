import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiThreedotjs, SiTypescript,
  SiNodedotjs, SiGraphql, SiVercel, SiDocker,
  SiFramer, SiTailwindcss, SiPython, SiWebrtc,
  SiMqtt, SiWeb3Dotjs, SiWebgl,
} from 'react-icons/si';
import teamImg from '../../assets/team.png';

const ICONS = [
  SiReact, SiNextdotjs, SiThreedotjs, SiTypescript, SiNodedotjs,
  SiGraphql, SiVercel, SiDocker, SiFramer, SiTailwindcss,
  SiPython, SiWebrtc, SiMqtt, SiWeb3Dotjs, SiWebgl,
];

const ICON_POSITIONS = [
  { top:  4, left:  3 }, { top:  6, left: 18 }, { top:  3, left: 35 },
  { top:  5, left: 52 }, { top:  4, left: 68 }, { top:  6, left: 82 },
  { top:  3, left: 93 }, { top: 14, left:  8 }, { top: 12, left: 25 },
  { top: 16, left: 44 }, { top: 13, left: 60 }, { top: 15, left: 75 },
  { top: 14, left: 90 }, { top: 25, left:  2 }, { top: 26, left: 15 },
  { top: 24, left: 30 }, { top: 27, left: 72 }, { top: 25, left: 86 },
  { top: 24, left: 96 }, { top: 36, left:  6 }, { top: 38, left: 20 },
  { top: 35, left: 76 }, { top: 37, left: 90 }, { top: 48, left:  1 },
  { top: 50, left: 12 }, { top: 47, left: 85 }, { top: 49, left: 96 },
  { top: 60, left:  5 }, { top: 62, left: 18 }, { top: 59, left: 78 },
  { top: 61, left: 91 }, { top: 72, left:  3 }, { top: 70, left: 16 },
  { top: 73, left: 28 }, { top: 71, left: 70 }, { top: 72, left: 83 },
  { top: 70, left: 95 }, { top: 82, left:  8 }, { top: 84, left: 22 },
  { top: 81, left: 38 }, { top: 83, left: 62 }, { top: 82, left: 76 },
  { top: 84, left: 90 }, { top: 92, left:  4 }, { top: 93, left: 20 },
  { top: 91, left: 50 }, { top: 94, left: 78 }, { top: 92, left: 94 },
];

const MEMBERS = [
  { name: 'Samar Singh',       role: 'Backend & DevOps',      emoji: '⚙️',  tags: ['Node.js','Docker','AWS','CI/CD'] },
  { name: 'Mayank Tiwari',     role: 'Creative & Media',      emoji: '🎨',  tags: ['Branding','Motion','3D','Video'] },
  { name: 'Sumit Kumar Patel', role: 'UI & UX',               emoji: '✦',   tags: ['Figma','Design Systems','Research','Prototyping'] },
  { name: 'Shivam Singh',      role: 'Full Stack & Embedded', emoji: '⚡',  tags: ['React','Next.js','Firmware','WebGL'] },
];

const AURORA_RADIUS = 220;
const NEON = '#7c3aed';
const NEON_LIGHT = '#a78bfa';
const HIDDEN_GRAD = `radial-gradient(circle ${AURORA_RADIUS}px at -9999px -9999px, black 0%, black 30%, transparent 100%)`;

const GlassCard = ({ member, x, y }) => {
  const isLeft = member.name.includes('Mayank') || member.name.includes('Samar');
  const cardWidth = 208;
  const tx = isLeft ? x - cardWidth - 16 : x + 16;
  const ty = y + 16;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, x: tx, y: ty }}
      animate={{ opacity: 1, scale: 1, x: tx, y: ty }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        x: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      }}
      className="absolute w-52 pointer-events-none left-0 top-0"
    >
      <div
        className="rounded-2xl overflow-hidden px-5 py-4"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(124,58,237,0.12) 60%, rgba(255,255,255,0.1) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px rgba(109,40,217,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)' }} />
        <p className="text-lg mb-0.5 leading-none">{member.emoji}</p>
        <p className="text-white font-sans font-bold text-sm tracking-tight leading-snug">{member.name}</p>
        <p className="text-violet-300 text-[11px] font-sans font-medium mt-0.5 mb-3">{member.role}</p>
        <div className="flex flex-wrap gap-1">
          {member.tags.map(t => (
            <span key={t} className="text-[10px] font-sans px-2 py-0.5 rounded-full text-white/70" style={{ background: 'rgba(124,58,237,0.25)', border: '1px solid rgba(167,139,250,0.2)' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MemberZone = ({ index, onHover, onLeave, isHovered }) => (
  <div
    className="absolute top-0 h-full cursor-pointer z-30"
    style={{ left: `${index * 25}%`, width: '25%' }}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div
      className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse 70% 40% at 50% 65%, rgba(124,58,237,0.22) 0%, transparent 80%)',
        opacity: isHovered ? 1 : 0,
      }}
    />
  </div>
);

const RandomGlowingIcons = () => {
  const [glowingIndices, setGlowingIndices] = useState([]);

  useEffect(() => {
    const tick = () => {
      const count = 15 + Math.floor(Math.random() * 6);
      const set = new Set();
      while (set.size < count) set.add(Math.floor(Math.random() * ICON_POSITIONS.length));
      setGlowingIndices(Array.from(set));
    };
    tick();
    const id = setInterval(tick, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {ICON_POSITIONS.map(({ top, left }, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div
            key={`glow-${i}`}
            className="absolute transition-all duration-[2500ms] ease-in-out"
            style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%,-50%)', opacity: glowingIndices.includes(i) ? 0.6 : 0 }}
          >
            <Icon size={28} style={{ color: NEON_LIGHT, filter: `drop-shadow(0 0 16px ${NEON})` }} />
          </div>
        );
      })}
    </div>
  );
};

export const Team = () => {
  // React state only for GlassCard position (shown on hover, not continuous)
  const [mouse, setMouse] = useState({ x: -2000, y: -2000 });
  const [hoveredMemberIndex, setHoveredMemberIndex] = useState(null);
  const leaveTimeout = useRef(null);

  // DOM refs for perf-critical continuous updates (bypass React reconciler)
  const sectionRef  = useRef(null);
  const maskRef     = useRef(null);
  const coreWrapRef = useRef(null);
  const ringWrapRef = useRef(null);
  const rafRef      = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) return; // rAF throttle
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // React state — only for GlassCard, still rAF-throttled
      setMouse({ x, y });

      // Direct DOM — mask + aurora blobs (no React, no layout triggers)
      if (maskRef.current) {
        const grad = `radial-gradient(circle ${AURORA_RADIUS}px at ${x}px ${y}px, black 0%, black 30%, transparent 100%)`;
        maskRef.current.style.webkitMaskImage = grad;
        maskRef.current.style.maskImage = grad;
      }
      if (coreWrapRef.current) {
        coreWrapRef.current.style.transform = `translate3d(${x - AURORA_RADIUS * 1.2}px, ${y - AURORA_RADIUS * 1.2}px, 0)`;
        coreWrapRef.current.style.opacity = '1';
      }
      if (ringWrapRef.current) {
        ringWrapRef.current.style.transform = `translate3d(${x - AURORA_RADIUS * 1.8}px, ${y - AURORA_RADIUS * 1.8}px, 0)`;
        ringWrapRef.current.style.opacity = '1';
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    setMouse({ x: -2000, y: -2000 });
    setHoveredMemberIndex(null);
    if (maskRef.current) {
      maskRef.current.style.webkitMaskImage = HIDDEN_GRAD;
      maskRef.current.style.maskImage = HIDDEN_GRAD;
    }
    if (coreWrapRef.current) coreWrapRef.current.style.opacity = '0';
    if (ringWrapRef.current) ringWrapRef.current.style.opacity = '0';
  }, []);

  const setHovered = (index) => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    setHoveredMemberIndex(index);
  };

  const clearHovered = () => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    leaveTimeout.current = setTimeout(() => setHoveredMemberIndex(null), 50);
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative bg-black overflow-hidden border-t border-white/[0.04]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Autonomous glowing icons — CSS transition only, no continuous rAF */}
      <RandomGlowingIcons />

      {/* Cursor-revealed icon grid */}
      <div
        ref={maskRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{ WebkitMaskImage: HIDDEN_GRAD, maskImage: HIDDEN_GRAD }}
      >
        {ICON_POSITIONS.map(({ top, left }, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={i} className="absolute" style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%,-50%)' }}>
              <Icon size={28} style={{ color: NEON_LIGHT, filter: `drop-shadow(0 0 8px ${NEON}) drop-shadow(0 0 16px ${NEON_LIGHT})` }} />
            </div>
          );
        })}
      </div>

      {/* Aurora core — wrapper positions via transform3d, inner div handles CSS scale animation */}
      <div
        ref={coreWrapRef}
        className="absolute pointer-events-none z-0"
        style={{ left: 0, top: 0, width: `${AURORA_RADIUS * 2.4}px`, height: `${AURORA_RADIUS * 2.4}px`, transform: 'translate3d(-9999px,-9999px,0)', willChange: 'transform', opacity: 0, transition: 'opacity 0.3s ease', borderRadius: '50%' }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: `radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(109,40,217,0.1) 45%, transparent 75%)`, animation: 'aurora-pulse 2.8s ease-in-out infinite', filter: 'blur(18px)' }} />
      </div>

      {/* Aurora outer ring */}
      <div
        ref={ringWrapRef}
        className="absolute pointer-events-none z-0"
        style={{ left: 0, top: 0, width: `${AURORA_RADIUS * 3.6}px`, height: `${AURORA_RADIUS * 3.6}px`, transform: 'translate3d(-9999px,-9999px,0)', willChange: 'transform', opacity: 0, transition: 'opacity 0.3s ease', borderRadius: '50%' }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: `radial-gradient(circle, rgba(167,139,250,0.08) 0%, rgba(124,58,237,0.04) 50%, transparent 80%)`, animation: 'aurora-ring 4s ease-in-out infinite', filter: 'blur(32px)' }} />
      </div>

      {/* GlassCard tooltip layer */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {hoveredMemberIndex !== null && (
            <GlassCard member={MEMBERS[hoveredMemberIndex]} x={mouse.x} y={mouse.y} />
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-8 pt-24 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-sans text-white/30 uppercase tracking-[0.3em] mb-4 block">The Team</span>
          <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-white">
            People behind{' '}
            <span className="font-bold" style={{ color: NEON_LIGHT, textShadow: `0 0 24px ${NEON}88, 0 0 48px ${NEON}44` }}>
              Rethink
            </span>
          </h2>
          <p className="text-white/35 text-sm mt-4 max-w-md mx-auto">
            A focused crew of builders who care deeply about craft and outcomes.
          </p>
        </motion.div>

        {/* Mobile: member cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden relative z-20">
          {MEMBERS.map((member, i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/10 flex flex-col gap-3" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(124,58,237,0.05) 100%)', backdropFilter: 'blur(12px)' }}>
              <div className="flex items-center gap-4">
                <span className="text-3xl">{member.emoji}</span>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{member.name}</h3>
                  <p className="text-violet-400 text-sm font-medium">{member.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {member.tags.map(t => (
                  <span key={t} className="text-xs font-sans px-2.5 py-1 rounded-full text-white/80 bg-violet-500/20 border border-violet-400/20">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: team photo (no hover zones) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex lg:hidden justify-center mt-12 relative z-20"
        >
          <div className="relative w-full max-w-[500px]">
            <img src={teamImg} alt="Rethink team" className="w-full object-contain select-none pointer-events-none opacity-90" draggable={false} />
          </div>
        </motion.div>

        {/* Desktop: team photo + hover zones */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex justify-center mb-4"
        >
          <div className="relative w-full max-w-[860px]">
            <img src={teamImg} alt="Rethink team" className="w-full object-contain select-none pointer-events-none" draggable={false} />
            {MEMBERS.map((member, i) => (
              <MemberZone
                key={i}
                index={i}
                onHover={() => setHovered(i)}
                onLeave={clearHovered}
                isHovered={hoveredMemberIndex === i}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
