import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, y = 24, className = '', style = {} }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        opacity: shown ? 1 : 0,
        transition: 'transform .9s cubic-bezier(.2,.7,.2,1), opacity .9s ease',
      }}
    >
      {children}
    </div>
  );
}
