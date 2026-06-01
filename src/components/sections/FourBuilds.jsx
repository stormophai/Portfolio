import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BUILDS = [
  {
    id: "digital",
    tab: "Digital",
    label: "Digital Systems",
    description: "type into the canvas, full-stack precision from frontend to backend",
  },
  {
    id: "spatial",
    tab: "Spatial",
    label: "Spatial & Mobile",
    description: "dial the spatial layer, from React Native to 3D environments",
  },
  {
    id: "hardware",
    tab: "Hardware",
    label: "Hardware Telemetry",
    description: "firmware and command centers, physical fleet control",
  },
  {
    id: "immersive",
    tab: "Immersive",
    label: "Immersive Topology",
    description: "every WebGL shader ever built, indexed and ready",
  },
];

const PROJECTS = [
  { id: 0, title: "Aura Smarthome", badge: "↑ 128" },
  { id: 1, title: "FinEdge Mobile", badge: "→ 47" },
  { id: 2, title: "Nova Protocol", badge: "● 3 active" },
  { id: 3, title: "Virtua Showroom", badge: "↑ 89" },
];

export function FourBuilds() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeRow, setActiveRow] = useState(0);

  const handleSelect = (i) => {
    setActiveTab(i);
    setActiveRow(i);
  };

  return (
    <section
      id="work"
      style={{
        backgroundColor: "#0c0c14",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      className="py-32"
    >
      {/* Responsive grid: 1 col on mobile, 2 cols on md+ */}
      <div
        className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16"
        style={{ maxWidth: "72rem" }}
      >
        {/* ── LEFT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {/* Overline */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: "rgba(240,240,255,0.25)",
              textTransform: "uppercase",
            }}
          >
            • INSIDE THE STUDIO
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              color: "#f0f0ff",
              lineHeight: 1.1,
              maxWidth: "400px",
              marginTop: "20px",
            }}
          >
            Four kinds of build, one focused team.
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "15px",
              color: "rgba(240,240,255,0.5)",
              lineHeight: 1.7,
              maxWidth: "380px",
              marginTop: "24px",
            }}
          >
            Switch disciplines without leaving the workspace. The same pair of
            hands holds a frontend sprint, a spatial prototype, the firmware
            layer, and every source ever dropped in — indexed for recall.
          </p>

          {/* Bullet list */}
          <ul style={{ marginTop: "32px", listStyle: "none", padding: 0 }}>
            {BUILDS.map((build) => (
              <li
                key={build.id}
                style={{ marginBottom: "20px", display: "flex", gap: "12px" }}
              >
                <span
                  style={{
                    color: "#a78bfa",
                    fontSize: "16px",
                    lineHeight: 1,
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#f0f0ff",
                    }}
                  >
                    {build.label}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'Lora', serif",
                      fontSize: "13px",
                      color: "rgba(240,240,255,0.45)",
                      marginTop: "2px",
                    }}
                  >
                    {build.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── RIGHT COLUMN — Dark Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#0f0f18",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Tab bar */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "12px 16px",
              display: "flex",
              gap: "4px",
            }}
          >
            {BUILDS.map((build, i) => (
              <button
                key={build.id}
                onClick={() => handleSelect(i)}
                style={{
                  position: "relative",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "12px",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  color: activeTab === i ? "#a78bfa" : "rgba(240,240,255,0.4)",
                  backgroundColor: "transparent",
                  zIndex: 1,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== i)
                    e.currentTarget.style.color = "#f0f0ff";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== i)
                    e.currentTarget.style.color = "rgba(240,240,255,0.4)";
                }}
              >
                {activeTab === i && (
                  <motion.span
                    layoutId="activeTabBg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "6px",
                      backgroundColor: "rgba(124,58,237,0.15)",
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                {build.tab}
              </button>
            ))}
          </div>

          {/* Project rows */}
          <div style={{ flex: 1 }}>
            {PROJECTS.map((project, i) => (
              <button
                key={project.id}
                onClick={() => handleSelect(i)}
                style={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 16px",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  borderLeft:
                    activeRow === i
                      ? "2px solid #7c3aed"
                      : "2px solid transparent",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  textAlign: "left",
                  transition: "border-left-color 0.2s",
                }}
              >
                {/* Animated row background */}
                <AnimatePresence>
                  {activeRow === i && (
                    <motion.span
                      layoutId="activeRowBg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(124,58,237,0.08)",
                        zIndex: 0,
                      }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>

                {/* Colored dot */}
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    backgroundColor:
                      activeRow === i
                        ? "#a78bfa"
                        : "rgba(240,240,255,0.2)",
                    transition: "background-color 0.2s",
                  }}
                />

                {/* Title */}
                <span
                  style={{
                    flex: 1,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    fontWeight: activeRow === i ? 600 : 400,
                    color:
                      activeRow === i
                        ? "#f0f0ff"
                        : "rgba(240,240,255,0.55)",
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.2s",
                  }}
                >
                  {project.title}
                </span>

                {/* Stat badge */}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color:
                      activeRow === i
                        ? "#a78bfa"
                        : "rgba(240,240,255,0.3)",
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.2s",
                  }}
                >
                  {project.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "12px 16px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "12px",
              color: "rgba(240,240,255,0.25)",
            }}
          >
            2 team members collaborating on paragraph 3
          </div>
        </motion.div>
      </div>
    </section>
  );
}

