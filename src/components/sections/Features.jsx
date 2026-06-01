import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Cpu } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Precision Architecture",
    body: "High-performance React & Next.js systems. Interfaces that feel native, pipelines that process complexity without noise.",
    link: "Explore systems →",
    popular: false,
  },
  {
    icon: Layers,
    title: "Spatial Intelligence",
    body: "Cross-platform mobile and 3D environments. Devices treated as spatial lenses — blending the digital and the physical world.",
    link: "Explore spatial →",
    popular: true,
  },
  {
    icon: Cpu,
    title: "Connected Hardware",
    body: "Firmware design and real-time telemetry command centers. Absolute control over physical fleets through precise data structures.",
    link: "Explore hardware →",
    popular: false,
  },
];

function FeatureCard({ icon: Icon, title, body, link, popular, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "16px",
        padding: "1px",
        background: hovered ? "transparent" : "rgba(255,255,255,0.07)",
        overflow: "hidden",
        transition: "background 300ms",
      }}
    >
      {/* Rotating beam — conic-gradient spins inside the 1px border slot */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-60%",
          background: "conic-gradient(from 0deg, transparent 0deg, #a78bfa 15deg, #7c3aed 30deg, transparent 50deg)",
          animation: "border-beam-rotate 2.4s linear infinite",
          opacity: hovered ? 1 : 0,
          transition: "opacity 350ms ease",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Inner card surface — sits on top, clips the beam to 1px border */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(12,12,20,0.97)",
          borderRadius: "15px",
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100%",
        }}
      >
      {popular && (
        <span
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "10px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#a78bfa",
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "999px",
            padding: "3px 10px",
          }}
        >
          Most Popular
        </span>
      )}

      {/* Icon container */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          background: "rgba(124,58,237,0.12)",
          border: "1px solid rgba(124,58,237,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={18} color="#a78bfa" strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "20px",
          fontWeight: 600,
          color: "#f0f0ff",
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        style={{
          fontFamily: "'Lora', serif",
          fontSize: "14px",
          color: "rgba(240,240,255,0.5)",
          lineHeight: 1.7,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {body}
      </p>

      {/* Footer link */}
      <a
        href="#"
        style={{
          fontSize: "12px",
          color: "#a78bfa",
          fontFamily: "'Poppins', sans-serif",
          textDecoration: "none",
          display: "inline-block",
          marginTop: "4px",
        }}
        className="hover:underline"
      >
        {link}
      </a>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section
      id="services"
      style={{
        background: "#0c0c14",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "128px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "rgba(240,240,255,0.35)",
            textAlign: "center",
            margin: "0 0 24px",
          }}
        >
          • WHAT WE BUILD WITH
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            color: "#f0f0ff",
            textAlign: "center",
            margin: "0 0 20px",
            lineHeight: 1.15,
          }}
        >
          A studio that earns its dark room
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: "'Lora', serif",
            fontStyle: "italic",
            fontSize: "15px",
            color: "rgba(240,240,255,0.45)",
            textAlign: "center",
            maxWidth: "512px",
            margin: "0 auto 64px",
            lineHeight: 1.7,
          }}
        >
          Three quiet pillars: a precision-first codebase, spatial intelligence
          that blurs digital and physical, and connected systems that speak to
          hardware.
        </motion.p>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {cards.map((card, i) => (
            <FeatureCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
