import { useEffect, useRef, useCallback } from 'react';

export const SmartCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const rafId = useRef(null);

  const updateCursor = useCallback(() => {
    const el = cursorRef.current;
    if (!el) return;

    const hovering = isHovering.current;
    const size = hovering ? 48 : 16;
    const offset = size / 2;

    el.style.transform = `translate3d(${pos.current.x - offset}px, ${pos.current.y - offset}px, 0)`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.borderWidth = hovering ? '2px' : '1.5px';
    el.style.borderColor = hovering ? '#a78bfa' : 'var(--color-primary)';

    if (dotRef.current) {
      dotRef.current.style.opacity = hovering ? '0' : '1';
    }
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateCursor);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const wasHovering = isHovering.current;
      isHovering.current =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        !!target.closest('.interactive');

      if (wasHovering !== isHovering.current) {
        requestAnimationFrame(updateCursor);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [updateCursor]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        willChange: 'transform',
        border: '1.5px solid var(--color-primary)',
        mixBlendMode: 'difference',
        transition: 'width 0.15s ease, height 0.15s ease, border-color 0.15s ease, border-width 0.15s ease',
      }}
    >
      <div
        ref={dotRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary"
        style={{ transition: 'opacity 0.15s ease' }}
      />
    </div>
  );
};
