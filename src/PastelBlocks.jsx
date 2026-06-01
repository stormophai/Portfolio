import Magnetic from './components/Magnetic';
import Marquee from './components/Marquee';
import ImgPH from './components/ImgPH';
import Reveal from './components/Reveal';
import Count from './components/Count';
import './styles/pastel.css';

const SERVICES = [
  { t: 'Web Development',  d: 'Marketing sites, dashboards, internal tools.', bg: 'peach',  Icon: '◐' },
  { t: 'App Development',  d: 'Native iOS, Android & cross-platform.',         bg: 'mint',   Icon: '◇' },
  { t: 'Automations',      d: 'Workflows that run while you sleep.',           bg: 'butter', Icon: '✦' },
  { t: 'IoT & Embedded',   d: 'From firmware to fleet dashboards.',            bg: 'sky',    Icon: '◉' },
  { t: 'Online Marketing', d: 'SEO, ads, lifecycle. Measured.',                bg: 'lilac',  Icon: '✺' },
  { t: 'AI Engineering',   d: 'Agents, RAG, evals. Production-grade.',         bg: 'peach',  Icon: '✸' },
];

const WORK = [
  { t: 'Hearth Companion', d: 'iOS · AI · 2025',   tone: 'peach',  big: true },
  { t: 'Folio CMS',        d: 'Web · 2024',         tone: 'butter' },
  { t: 'Northwind Gateway',d: 'Embedded · 2025',    tone: 'sky' },
  { t: 'Meander Travel',   d: 'Web · App · 2025',   tone: 'mint',   big: true },
  { t: 'Orbital Ops',      d: 'Automation · 2026',  tone: 'lilac' },
  { t: 'Sunup Wellness',   d: 'Marketing · 2025',   tone: 'peach' },
];

const PROCESS = [
  { n: '01', t: 'Discover', d: 'Listen, audit, map.',      bg: 'mint' },
  { n: '02', t: 'Define',   d: 'Brief, scope, metrics.',   bg: 'peach' },
  { n: '03', t: 'Design',   d: 'Prototype with users.',    bg: 'butter' },
  { n: '04', t: 'Deliver',  d: 'Ship every two weeks.',    bg: 'sky' },
];

const STACK = [
  'Next.js','Astro','Rails','Phoenix','Postgres','Swift',
  'Kotlin','React Native','ESP32','Zephyr','Rust','MQTT',
  'LangGraph','Anthropic','pgvector','Tailwind','Framer',
  'Figma','Vercel','Fly.io','Grafana','n8n',
];

const TEAM = [
  { name: 'Aarav',  role: 'Engineering', tone: 'peach' },
  { name: 'Léa',    role: 'Design',      tone: 'mint' },
  { name: 'Kenji',  role: 'Embedded',    tone: 'butter' },
  { name: 'Priya',  role: 'Product',     tone: 'sky' },
  { name: 'Marco',  role: 'AI',          tone: 'lilac' },
  { name: 'Hannah', role: 'Marketing',   tone: 'peach' },
  { name: 'Sara',   role: 'Frontend',    tone: 'mint' },
  { name: 'Devi',   role: 'Backend',     tone: 'butter' },
];

const STATS = [
  { n: 48, s: '+',  l: 'Products shipped' },
  { n: 11, s: 'yr', l: 'Senior tenure' },
  { n: 96, s: '%',  l: 'Retention' },
  { n: 17, s: '',   l: 'Countries' },
];

const TESTS = [
  { q: 'They quietly replaced three vendors and shipped what we couldn\'t in eighteen months. Best call of the year.', who: 'Maya R.', role: 'CTO, Fennel', bg: 'peach' },
  { q: 'The kind of studio that says no when it should. We trust them with the roadmap, not just the brief.',          who: 'Tom L.',  role: 'VP Product, Hearth', bg: 'mint' },
  { q: 'They write firmware like designers — slow when it counts, fast when it doesn\'t. Rare and welcome.',           who: 'Jana K.', role: 'Head of Hardware, Northwind', bg: 'butter' },
];

export default function PastelBlocks() {
  return (
    <div className="v2">

      {/* ── Hero ── */}
      <section className="v2-hero">
        <h1 className="v2-hero-h">
          We build the<br />
          <span className="v2-hero-pill v2-pill-peach">soft</span>
          {' '}+{' '}
          <span className="v2-hero-pill v2-pill-mint">hard</span><br />
          things people<br />
          actually use.
        </h1>
        <p className="v2-hero-sub">
          A multi-disciplinary studio for web, apps, IoT and the
          automations that hold it all together.
        </p>
        <div className="v2-hero-ctas">
          <Magnetic as="a" href="#contact" className="v2-btn v2-btn-dark">
            Start a project <span aria-hidden="true">↗</span>
          </Magnetic>
          <Magnetic as="a" href="#work" className="v2-btn v2-btn-ghost">
            See our work
          </Magnetic>
        </div>
        <div className="v2-hero-blobs">
          <div className="v2-blob v2-blob-1" />
          <div className="v2-blob v2-blob-2" />
          <div className="v2-blob v2-blob-3" />
        </div>
      </section>

      {/* ── Logo strip ── */}
      <div className="v2-logo-strip">
        <span className="v2-logo-strip-l">Trusted by friendly humans at</span>
        <Marquee
          items={['fennel/', 'hearth.labs', 'NORTHWIND', 'folio◎', 'paper&plant', 'meander', 'wildcard', 'sunup', 'orbital']}
          separator="•"
          speed={50}
          className="v2-marquee"
        />
      </div>

      {/* ── Services ── */}
      <section className="v2-services" id="services">
        <div className="v2-sec-head">
          <span className="v2-eyebrow">— Services</span>
          <h2 className="v2-sec-h">Six things,<br />done well.</h2>
        </div>
        <div className="v2-svc-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 60} className={`v2-svc v2-bg-${s.bg}`}>
              <div className="v2-svc-icon">{s.Icon}</div>
              <h3 className="v2-svc-t">{s.t}</h3>
              <p className="v2-svc-d">{s.d}</p>
              <div className="v2-svc-foot">
                <span>Learn more</span>
                <span className="v2-svc-arrow" aria-hidden="true">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Featured case study ── */}
      <section className="v2-feat">
        <div className="v2-feat-card">
          <div className="v2-feat-meta">
            <span className="v2-feat-eyebrow">Case study · 2026</span>
            <h3 className="v2-feat-h">Fennel Fleet OS</h3>
            <p className="v2-feat-d">
              We built a realtime fleet platform for 2,400 vehicles —
              firmware, gateway, mobile app and ops dashboard.
              Shipped in 14 weeks, replacing three legacy tools.
            </p>
            <div className="v2-feat-kpis">
              <div><b>14<small>wk</small></b><span>delivery</span></div>
              <div><b>2.4<small>k</small></b><span>vehicles</span></div>
              <div><b>3<small>×</small></b><span>vendor replace</span></div>
            </div>
            <a href="#work" className="v2-feat-cta">Read the case <span aria-hidden="true">↗</span></a>
          </div>
          <div className="v2-feat-art">
            <ImgPH label="fennel · fleet os" ratio="4/3" tone="mint" radius={28} />
            <div className="v2-feat-chip v2-feat-chip-1">live · 2,438 units</div>
            <div className="v2-feat-chip v2-feat-chip-2">↑ 38% uptime</div>
          </div>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section className="v2-work" id="work">
        <div className="v2-sec-head v2-sec-head-row">
          <div>
            <span className="v2-eyebrow">— Selected work</span>
            <h2 className="v2-sec-h">Recent things.</h2>
          </div>
          <a href="#work" className="v2-link">All work →</a>
        </div>
        <div className="v2-work-grid">
          {WORK.map((w, i) => (
            <a key={i} href="#" className={`v2-work-card ${w.big ? 'v2-work-big' : ''}`}>
              <ImgPH label={w.t} ratio={w.big ? '16/10' : '4/3'} tone={w.tone} radius={24} />
              <div className="v2-work-meta">
                <div className="v2-work-t">{w.t}</div>
                <div className="v2-work-d">{w.d}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="v2-process" id="process">
        <div className="v2-sec-head">
          <span className="v2-eyebrow">— Process</span>
          <h2 className="v2-sec-h">How we ship.</h2>
        </div>
        <div className="v2-proc-rail">
          {PROCESS.map((p) => (
            <div key={p.n} className={`v2-proc-card v2-bg-${p.bg}`}>
              <div className="v2-proc-n">{p.n}</div>
              <div className="v2-proc-t">{p.t}</div>
              <p className="v2-proc-d">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stack ── */}
      <section className="v2-stack">
        <div className="v2-sec-head">
          <span className="v2-eyebrow">— Stack</span>
          <h2 className="v2-sec-h">Tools we love.</h2>
        </div>
        <div className="v2-chips">
          {STACK.map((c, i) => (
            <span key={c} className={`v2-chip v2-chip-${i % 5}`}>{c}</span>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="v2-team" id="team">
        <div className="v2-sec-head">
          <span className="v2-eyebrow">— The studio</span>
          <h2 className="v2-sec-h">Twelve friendly humans.</h2>
        </div>
        <div className="v2-team-grid">
          {TEAM.map((p, i) => (
            <Reveal key={p.name} delay={i * 30} className="v2-mem">
              <div className={`v2-mem-avatar v2-bg-${p.tone}`}>
                <ImgPH label={p.name} ratio="1/1" tone={p.tone} radius={1000} style={{ width: 140, height: 140 }} />
              </div>
              <div className="v2-mem-n">{p.name}</div>
              <div className="v2-mem-r">{p.role}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="v2-stats">
        <div className="v2-stats-card">
          {STATS.map((s, i) => (
            <div key={i} className="v2-stat">
              <div className="v2-stat-n"><Count to={s.n} suffix={s.s} /></div>
              <div className="v2-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="v2-tests">
        <div className="v2-sec-head">
          <span className="v2-eyebrow">— Word of mouth</span>
          <h2 className="v2-sec-h">Kind things people say.</h2>
        </div>
        <div className="v2-test-grid">
          {TESTS.map((q, i) => (
            <figure key={i} className={`v2-test v2-bg-${q.bg}`}>
              <div className="v2-test-mark">&ldquo;</div>
              <blockquote>{q.q}</blockquote>
              <figcaption>
                <b>{q.who}</b>
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="v2-cta" id="contact">
        <div className="v2-cta-card">
          <h2 className="v2-cta-h">
            Got something<br />
            <span className="v2-cta-pill">in mind?</span>
          </h2>
          <p className="v2-cta-sub">
            One call. Twenty minutes. We&rsquo;ll tell you straight
            whether we&rsquo;re the right fit.
          </p>
          <div className="v2-cta-row">
            <Magnetic as="a" href="mailto:hello@rethink.studio" className="v2-btn v2-btn-dark">
              Book a call <span aria-hidden="true">↗</span>
            </Magnetic>
            <a href="mailto:hello@rethink.studio" className="v2-btn v2-btn-ghost-dark">
              hello@rethink.studio
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="v2-foot">
        <div className="v2-foot-grid">
          <div className="v2-foot-brand">
            <span className="v2-brand-blob" />
            <div>
              <div className="v2-foot-name">rethink<span>.</span></div>
              <div className="v2-foot-tag">A studio for soft + hard things.</div>
            </div>
          </div>
          <div className="v2-foot-col">
            <div className="v2-foot-cat">Studio</div>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#team">About</a>
            <a href="#">Journal</a>
          </div>
          <div className="v2-foot-col">
            <div className="v2-foot-cat">Contact</div>
            <a href="mailto:hello@rethink.studio">hello@rethink.studio</a>
            <a href="#">Bangalore IN</a>
          </div>
          <div className="v2-foot-col">
            <div className="v2-foot-cat">Elsewhere</div>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
        <div className="v2-foot-baseline">
          <span>© 2026 Rethink</span>
          <span>Made with care.</span>
        </div>
      </footer>
    </div>
  );
}
