import {
  SiReact, SiNextdotjs, SiThreedotjs, SiTypescript,
  SiNodedotjs, SiGraphql, SiVercel, SiDocker,
  SiFramer, SiTailwindcss, SiPython, SiWebrtc,
  SiMqtt, SiWeb3Dotjs, SiWebgl,
} from 'react-icons/si';
import { Sparkles } from '../ui/sparkles';

const ROW_1 = [
  { Icon: SiReact,       name: 'React' },
  { Icon: SiNextdotjs,   name: 'Next.js' },
  { Icon: SiThreedotjs,  name: 'Three.js' },
  { Icon: SiWebgl,       name: 'WebGL' },
  { Icon: SiTypescript,  name: 'TypeScript' },
  { Icon: SiNodedotjs,   name: 'Node.js' },
  { Icon: SiGraphql,     name: 'GraphQL' },
  { Icon: SiVercel,      name: 'Vercel' },
];

const ROW_2 = [
  { Icon: SiDocker,      name: 'Docker' },
  { Icon: SiFramer,      name: 'Framer' },
  { Icon: SiTailwindcss, name: 'Tailwind' },
  { Icon: SiWebrtc,      name: 'WebRTC' },
  { Icon: SiMqtt,        name: 'MQTT' },
  { Icon: SiPython,      name: 'Python' },
  { Icon: SiWeb3Dotjs,   name: 'Web3' },
  { Icon: SiReact,       name: 'React Native' },
];

const MarqueeRow = ({ items, reverse = false, speed = 30 }) => {
  const repeated = [...items, ...items, ...items, ...items];
  const duration = speed * 2;
  return (
    <div style={{
      overflow: 'hidden',
      width: '100%',
      maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: `${reverse ? 'marquee-rtl' : 'marquee-ltr'} ${duration}s linear infinite`,
        willChange: 'transform',
      }}>
        {repeated.map(({ Icon, name }, i) => (
          <div
            key={`${name}-${i}`}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 28px', userSelect: 'none', cursor: 'default', transition: 'all 250ms' }}
            onMouseEnter={e => {
              e.currentTarget.querySelector('svg').style.color = '#a78bfa';
              e.currentTarget.querySelector('svg').style.filter = 'drop-shadow(0 0 8px #7c3aed)';
              e.currentTarget.querySelector('span').style.color = '#a78bfa';
              e.currentTarget.querySelector('span').style.textShadow = '0 0 12px rgba(124,58,237,0.7)';
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('svg').style.color = 'rgba(240,240,255,0.3)';
              e.currentTarget.querySelector('svg').style.filter = 'none';
              e.currentTarget.querySelector('span').style.color = 'rgba(240,240,255,0.3)';
              e.currentTarget.querySelector('span').style.textShadow = 'none';
            }}
          >
            <Icon size={22} style={{ color: 'rgba(240,240,255,0.3)', transition: 'color 250ms, filter 250ms' }} />
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,255,0.3)', whiteSpace: 'nowrap', transition: 'color 250ms, text-shadow 250ms' }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TechStack = () => (
  <section id="stack" style={{
    position: 'relative',
    backgroundColor: '#0c0c14',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: '96px',
    paddingBottom: '96px',
    overflow: 'hidden',
  }}>
    {/* Sparkles particle field */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Sparkles color="#a78bfa" density={350} speed={0.6} size={0.9} opacity={0.55} background="transparent" className="w-full h-full" />
    </div>
    {/* Violet radial glow */}
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,40,217,0.18) 0%, transparent 70%)' }} />
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', marginBottom: '64px', textAlign: 'center' }}>
      <span style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(240,240,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.25em', display: 'block', marginBottom: '16px' }}>
        • WHAT WE BUILD WITH
      </span>
      <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#f0f0ff', marginBottom: '12px', lineHeight: 1.2 }}>
        The stack behind every build.
      </h2>
      <p style={{ fontFamily: 'Lora, serif', fontSize: '14px', color: 'rgba(240,240,255,0.45)', maxWidth: '448px', margin: '0 auto', lineHeight: 1.6 }}>
        Carefully chosen tools — each one battle-tested across dozens of production deployments.
      </p>
    </div>
    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <MarqueeRow items={ROW_1} reverse={false} speed={30} />
      <MarqueeRow items={ROW_2} reverse={true}  speed={30} />
    </div>
  </section>
);
