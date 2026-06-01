import { motion } from "framer-motion";
import { Share2, Bookmark, Cloud, Clock, AlignLeft } from "lucide-react";

const projects = [
  { id: 1, name: "Aura Smarthome", active: true },
  { id: 2, name: "FinEdge Mobile", active: false },
  { id: 3, name: "Nova Protocol", active: false },
  { id: 4, name: "Virtua Showroom", active: false },
  { id: 5, name: "Research", active: false },
  { id: 6, name: "Archive", active: false },
];

export function AppPreview() {
  return (
    <section id="preview" className="relative py-16 px-4 md:px-8 overflow-hidden">
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Section label */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(240,240,255,0.35)",
              marginBottom: "0.75rem",
            }}
          >
            Studio Interface
          </span>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 600,
              color: "#f0f0ff",
              margin: 0,
            }}
          >
            Where ideas become{" "}
            <span style={{ color: "#a78bfa" }}>precision work</span>
          </h2>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            borderColor: "rgba(255,255,255,0.13)",
          }}
          style={{
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0f0f18",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            overflow: "hidden",
            transition: "border-color 0.2s ease",
          }}
        >
          {/* Browser chrome bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              background: "#0c0c14",
            }}
          >
            {/* Traffic lights */}
            <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#febc2e",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#28c840",
                }}
              />
            </div>

            {/* URL bar — centered */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "6px",
                  padding: "3px 14px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "rgba(240,240,255,0.30)",
                  letterSpacing: "0.02em",
                  userSelect: "none",
                }}
              >
                rethink.studio/studio
              </div>
            </div>

            {/* Action icons */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                color: "rgba(240,240,255,0.25)",
                flexShrink: 0,
              }}
            >
              <Share2 size={13} />
              <Bookmark size={13} />
            </div>
          </div>

          {/* Main UI — 3 columns */}
          <div
            style={{
              display: "flex",
              minHeight: "360px",
            }}
          >
            {/* Left sidebar */}
            <div
              style={{
                width: "160px",
                flexShrink: 0,
                borderRight: "1px solid rgba(255,255,255,0.06)",
                padding: "14px 0",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(240,240,255,0.20)",
                  padding: "0 14px",
                  marginBottom: "8px",
                }}
              >
                Workspace
              </div>

              {projects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "5px 14px",
                    margin: "0 6px",
                    borderRadius: "6px",
                    background: project.active
                      ? "rgba(124,58,237,0.15)"
                      : "transparent",
                    cursor: "default",
                  }}
                >
                  {/* Indicator dot/square */}
                  {project.active ? (
                    <motion.div
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#a78bfa",
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        border: "1px solid rgba(240,240,255,0.18)",
                        borderRadius: "1px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "11px",
                      color: project.active
                        ? "#c4b5fd"
                        : "rgba(240,240,255,0.40)",
                      fontWeight: project.active ? 500 : 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {project.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Center main content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Top bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#f0f0ff",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Aura Smarthome
                </span>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    background: "rgba(124,58,237,0.20)",
                    color: "#a78bfa",
                    borderRadius: "4px",
                    padding: "2px 7px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Draft
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "rgba(240,240,255,0.22)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  <Clock size={9} />
                  Updated 2h ago
                </span>

                <span
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "rgba(240,240,255,0.22)",
                  }}
                >
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#28c840",
                    }}
                  />
                  Saved
                </span>
              </div>

              {/* Text content area */}
              <div
                style={{
                  flex: 1,
                  padding: "22px 22px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  overflow: "hidden",
                }}
              >
                {/* Title */}
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#f0f0ff",
                    lineHeight: 1.4,
                  }}
                >
                  Twilight, building out loud
                </div>

                {/* Body paragraph 1 */}
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "12px",
                    color: "rgba(240,240,255,0.40)",
                    lineHeight: 1.7,
                  }}
                >
                  We have been thinking about smart home systems differently —
                  not as a collection of devices, but as a unified telemetry
                  fabric that learns from how people actually live.
                </div>

                {/* Highlighted line */}
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "12px",
                    color: "#c4b5fd",
                    lineHeight: 1.7,
                    background: "rgba(124,58,237,0.15)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    borderLeft: "2px solid #7c3aed",
                  }}
                >
                  The dashboard surfaces real-time MQTT streams with sub-50ms
                  latency, giving residents precise, actionable insight.
                </div>

                {/* Body paragraph 2 */}
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "12px",
                    color: "rgba(240,240,255,0.30)",
                    lineHeight: 1.7,
                  }}
                >
                  Every interaction is logged, versioned, and surfaced through a
                  clean React interface backed by Node.js event streams and
                  Docker-orchestrated microservices.
                </div>
              </div>

              {/* Bottom status bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "7px 22px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "rgba(240,240,255,0.20)",
                  }}
                >
                  <AlignLeft size={9} />
                  4 lines · 312 words
                </span>

                <span
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "rgba(240,240,255,0.20)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  <Cloud size={9} />
                  Saved to Cloud
                </span>
              </div>
            </div>

            {/* Right panel */}
            <div
              style={{
                width: "200px",
                flexShrink: 0,
                borderLeft: "1px solid rgba(255,255,255,0.06)",
                padding: "14px 0",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(240,240,255,0.20)",
                  padding: "0 14px",
                  marginBottom: "12px",
                }}
              >
                Team Suggests
              </div>

              {/* Suggestion card */}
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px 12px",
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.18)",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Quote icon */}
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "22px",
                    color: "rgba(167,139,250,0.35)",
                    lineHeight: 1,
                    marginTop: "-4px",
                  }}
                >
                  "
                </div>

                <p
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "11px",
                    color: "#c4b5fd",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Consider adding a latency benchmark comparison to strengthen
                  the technical narrative.
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "#a78bfa",
                    cursor: "default",
                  }}
                >
                  Try &lsquo;precision&rsquo; →
                </div>
              </div>

              {/* Separator */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.06)",
                  margin: "12px 0",
                }}
              />

              {/* Action items */}
              {[
                { label: "Add tech notes", icon: "+" },
                { label: "Review milestone", icon: "✓" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 14px",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "4px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "9px",
                      color: "rgba(240,240,255,0.30)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "11px",
                      color: "rgba(240,240,255,0.35)",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
