import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  padding: '12px 16px',
  fontSize: '14px',
  color: '#f0f0ff',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  fontFamily: 'Poppins, sans-serif',
};

const inputFocusStyle = {
  borderColor: '#7c3aed',
  boxShadow: '0 0 0 2px rgba(124,58,237,0.15)',
};

const labelStyle = {
  display: 'block',
  fontSize: '11px',
  fontFamily: '"JetBrains Mono", monospace',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: 'rgba(240,240,255,0.35)',
  marginBottom: '8px',
};

const FEATURES = [
  'Unlimited revisions and iterations',
  'All 4 build disciplines included',
  'Real-time team collaboration',
  'Encrypted offline delivery option',
  'Export to GitHub, Vercel, and AWS',
];

const GitHubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);


export const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [email, setEmail] = useState('');
  const [building, setBuilding] = useState('');
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      style={{
        background: '#0c0c14',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '128px 24px',
      }}
    >
      {/* ── Top heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        {/* Overline */}
        <p
          style={{
            fontSize: '10px',
            fontFamily: '"JetBrains Mono", monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: 'rgba(240,240,255,0.35)',
            marginBottom: '20px',
          }}
        >
          • PICK A BUILD
        </p>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontFamily: 'Lora, serif',
            fontWeight: 400,
            color: '#f0f0ff',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}
        >
          Start sharp. Stay sharp.
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: '15px',
            fontFamily: 'Lora, serif',
            color: 'rgba(240,240,255,0.45)',
            maxWidth: '440px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          One studio, two engagement modes. No bloat, no account managers, no
          tiers hidden behind a sales call.
        </p>
      </motion.div>

      {/* ── 2-column grid ── */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {/* ── LEFT CARD — Studio plan ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#0f0f18',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '32px',
            position: 'relative',
          }}
        >
          {/* MOST POPULAR badge */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(124,58,237,0.15)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '100px',
              padding: '3px 10px',
              fontSize: '10px',
              fontFamily: '"JetBrains Mono", monospace',
              color: '#a78bfa',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            MOST POPULAR
          </div>

          {/* Plan tag */}
          <p
            style={{
              fontSize: '10px',
              fontFamily: '"JetBrains Mono", monospace',
              color: '#a78bfa',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            STUDIO
          </p>

          {/* Price */}
          <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span
              style={{
                fontSize: '40px',
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 700,
                color: '#f0f0ff',
                lineHeight: 1,
              }}
            >
              ₹25k
            </span>
            <span
              style={{
                fontSize: '14px',
                fontFamily: 'Lora, serif',
                color: 'rgba(240,240,255,0.45)',
              }}
            >
              /project
            </span>
          </div>

          {/* Price subtext */}
          <p
            style={{
              fontSize: '13px',
              fontFamily: 'Lora, serif',
              color: 'rgba(240,240,255,0.45)',
              lineHeight: 1.6,
              marginBottom: '0',
            }}
          >
            For startups, founders, and researchers who want one focused team on
            their build.
          </p>

          {/* Features */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              paddingTop: '24px',
              marginTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {FEATURES.map((feat) => (
              <div
                key={feat}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
              >
                <span
                  style={{
                    color: '#a78bfa',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '14px',
                    lineHeight: 1.5,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    color: 'rgba(240,240,255,0.7)',
                    lineHeight: 1.5,
                  }}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <motion.button
            whileHover={{
              boxShadow: '0 0 24px rgba(124,58,237,0.4)',
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              marginTop: '32px',
              width: '100%',
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 0',
              color: '#fff',
              fontSize: '14px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'box-shadow 0.25s ease',
            }}
          >
            Start the build →
          </motion.button>
        </motion.div>

        {/* ── RIGHT CARD — Open a studio room ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '32px',
          }}
        >
          {/* Header */}
          <h3
            style={{
              fontSize: '20px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              color: '#f0f0ff',
              marginBottom: '8px',
            }}
          >
            Open a studio room
          </h3>
          <p
            style={{
              fontSize: '13px',
              fontFamily: 'Lora, serif',
              color: 'rgba(240,240,255,0.45)',
              lineHeight: 1.65,
              marginBottom: '28px',
            }}
          >
            Fourteen days of the full Studio plan, with two builders on the house.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Email row */}
            <div>
              <label style={labelStyle}>Work email</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="alex@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle,
                    flex: 1,
                    ...(focused === 'email' ? inputFocusStyle : {}),
                  }}
                />
                <motion.button
                  type="button"
                  whileHover={{ background: '#6d28d9' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: '#7c3aed',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    color: '#fff',
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  Send →
                </motion.button>
              </div>
            </div>

            {/* What are you building? */}
            <div>
              <label style={labelStyle}>What are you building?</label>
              <textarea
                rows={3}
                placeholder="A startup, a product, a prototype..."
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                onFocus={() => setFocused('building')}
                onBlur={() => setFocused(null)}
                style={{
                  ...inputStyle,
                  resize: 'none',
                  ...(focused === 'building' ? inputFocusStyle : {}),
                }}
              />
            </div>

            {/* Checkbox */}
            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                cursor: 'pointer',
              }}
            >
              <button
                type="button"
                onClick={() => setChecked((v) => !v)}
                aria-checked={checked}
                role="checkbox"
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '4px',
                  border: checked
                    ? '1px solid #7c3aed'
                    : '1px solid rgba(255,255,255,0.2)',
                  background: checked ? 'rgba(124,58,237,0.2)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  marginTop: '1px',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
              >
                {checked && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path
                      d="M1 3l2 2 4-4"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <span
                style={{
                  fontSize: '13px',
                  fontFamily: 'Poppins, sans-serif',
                  color: 'rgba(240,240,255,0.5)',
                  lineHeight: 1.55,
                }}
              >
                Send me one quiet email per week.{' '}
                <a
                  href="#"
                  style={{
                    color: '#a78bfa',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  Terms
                </a>
              </span>
            </label>

            {/* GitHub button */}
            <motion.button
              type="button"
              whileHover={{
                background: 'rgba(255,255,255,0.09)',
                borderColor: 'rgba(255,255,255,0.18)',
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '12px 0',
                color: '#f0f0ff',
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}
            >
              <GitHubIcon />
              Continue with GitHub
            </motion.button>

            {/* Submit / success */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: '14px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    background: 'rgba(124,58,237,0.1)',
                    border: '1px solid rgba(124,58,237,0.25)',
                    color: '#a78bfa',
                    fontSize: '13px',
                    fontFamily: '"JetBrains Mono", monospace',
                  }}
                >
                  ✓ Message sent — we'll reply within 24h
                </motion.div>
              ) : (
                <motion.button
                  key="submit"
                  type="submit"
                  whileHover={{
                    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                    boxShadow: '0 0 20px rgba(124,58,237,0.35)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '13px 0',
                    color: '#fff',
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'box-shadow 0.25s ease',
                  }}
                >
                  Get early access →
                </motion.button>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
