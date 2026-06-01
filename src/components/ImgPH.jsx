const TONES = {
  warm:   { bg: '#e8dfd1', stripe: 'rgba(60,42,30,.06)',  ink: '#5a4a36' },
  mint:   { bg: '#cfe4d6', stripe: 'rgba(20,60,40,.06)',  ink: '#2e4f3d' },
  peach:  { bg: '#f3d4c2', stripe: 'rgba(80,40,20,.06)',  ink: '#643322' },
  butter: { bg: '#f3e1a8', stripe: 'rgba(70,55,10,.06)',  ink: '#5e4d18' },
  sky:    { bg: '#cfd9e8', stripe: 'rgba(20,40,80,.06)',  ink: '#324a6e' },
  lilac:  { bg: '#dccfe8', stripe: 'rgba(60,20,80,.06)',  ink: '#4a2f6e' },
  dark:   { bg: '#1a1a1a', stripe: 'rgba(255,255,255,.04)', ink: 'rgba(255,255,255,.55)' },
};

export default function ImgPH({ label, ratio = '4/3', tone = 'warm', radius = 16, style = {}, className = '' }) {
  const c = TONES[tone] || TONES.warm;
  return (
    <div
      className={`rt-imgph ${className}`}
      style={{
        aspectRatio: ratio,
        background: `repeating-linear-gradient(135deg, ${c.bg} 0 14px, ${c.stripe} 14px 15px), ${c.bg}`,
        borderRadius: radius,
        color: c.ink,
        ...style,
      }}
    >
      <span className="rt-imgph-label">{label}</span>
    </div>
  );
}
