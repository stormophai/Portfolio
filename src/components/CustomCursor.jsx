import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hover, setHover] = useState(false);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px';
        ringRef.current.style.top = e.clientY + 'px';
      }
    };
    const onEnter = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHover(true);
    };
    const onLeave = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHover(false);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor" style={{ position: 'fixed', left: -100, top: -100 }} />
      <div ref={ringRef} className={`cursor-ring${hover ? ' hover' : ''}`} style={{ position: 'fixed', left: -100, top: -100 }} />
    </>
  );
}
