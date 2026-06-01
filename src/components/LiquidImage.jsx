import { useState, useEffect, useRef } from 'react';

export default function LiquidImage({ src, alt, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);
  const filterId = useRef(`liquid-${Math.random().toString(36).substr(2, 9)}`);
  const [scale, setScale] = useState(0);
  const reqRef = useRef();
  
  useEffect(() => {
    let targetScale = isHovered ? 25 : 0;
    
    const animate = () => {
      setScale(prev => {
        const diff = targetScale - prev;
        if (Math.abs(diff) < 0.5) return targetScale;
        return prev + diff * 0.15;
      });
      reqRef.current = requestAnimationFrame(animate);
    };
    
    reqRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqRef.current);
  }, [isHovered]);

  return (
    <div 
      className={`v2-liquid-wrap ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ filter: `url(#${filterId.current})` }}
    >
      <svg width="0" height="0" className="v2-liquid-svg">
        <filter id={filterId.current}>
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.02" 
            numOctaves="2" 
            result="noise" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale={scale} 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>
      <img 
        src={src} 
        alt={alt} 
        className={`v2-liquid-img ${isHovered ? 'is-active' : ''}`}
      />
    </div>
  );
}
