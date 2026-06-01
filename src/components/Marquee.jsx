export default function Marquee({ items, speed = 40, separator = '•', className = '' }) {
  return (
    <div className={`rt-marquee ${className}`}>
      <div className="rt-marquee-track" style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="rt-marquee-item">
            <span>{it}</span>
            <span className="rt-marquee-sep" aria-hidden="true">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
