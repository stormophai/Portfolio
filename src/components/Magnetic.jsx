import { useEffect, useRef, useState } from 'react';

export default function Magnetic({ children, strength = 0.25, className = '', style = {}, as: As = 'button', ...rest }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      setT({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
    };
    const onLeave = () => setT({ x: 0, y: 0 });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <As
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: 'transform .25s cubic-bezier(.2,.7,.3,1)',
      }}
      {...rest}
    >
      {children}
    </As>
  );
}
