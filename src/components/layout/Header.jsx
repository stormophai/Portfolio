import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import rethinkLogo from '../../assets/rethink-wordmark.png';

const NAV_ITEMS = [
  { name: 'Home', href: '#', hasDropdown: false },
  { name: 'Services', href: '#services', hasDropdown: false },
  { name: 'Projects', href: '#showcase', hasDropdown: false },
  { name: 'Team', href: '#team', hasDropdown: false },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.97,
    transition: { duration: 0.13, ease: 'easeIn' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.16, ease: 'easeOut' },
  }),
};

const Logo = () => (
  <img
    src={rethinkLogo}
    alt="Rethink"
    style={{
      width: 160,
      height: 38,
      objectFit: 'cover',
      objectPosition: 'center 42%',
      filter: 'invert(1)',
      mixBlendMode: 'screen',
      display: 'block',
      userSelect: 'none',
      flexShrink: 0,
    }}
    draggable={false}
  />
);

const DropdownMenu = ({ items }) => (
  <motion.div
    variants={dropdownVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 z-50"
  >
    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#0f0f13] border-l border-t border-white/10" />
    <div className="bg-[#0f0f13] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/60 py-1.5">
      {items.map((item, i) => (
        <motion.a
          key={item.label}
          href="#"
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="group flex flex-col px-4 py-2.5 hover:bg-white/5 transition-colors duration-150 cursor-pointer"
        >
          <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
            {item.label}
          </span>
          <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors mt-0.5">
            {item.desc}
          </span>
        </motion.a>
      ))}
    </div>
  </motion.div>
);

const ExploreButton = ({ href = '#contact' }) => (
  <a href={href} className="rethink-btn" style={{ '--clr': '#7c3aed' }}>
    <span className="rethink-btn__icon-wrapper">
      <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rethink-btn__icon-svg" width={10}>
        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 14 15" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="rethink-btn__icon-svg rethink-btn__icon-svg--copy">
        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
      </svg>
    </span>
    Get Started
  </a>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setIsScrolled(v > 40));

  const openDropdown = (name) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      <style>{`
        .rethink-btn {
          line-height: 1;
          text-decoration: none;
          display: inline-flex;
          border: none;
          cursor: pointer;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--clr);
          color: #fff;
          border-radius: 10rem;
          font-weight: 600;
          font-size: 14px;
          padding: 0.65rem 1.25rem 0.65rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: background-color 0.3s;
        }
        .rethink-btn__icon-wrapper {
          flex-shrink: 0;
          width: 25px;
          height: 25px;
          position: relative;
          color: var(--clr);
          background-color: #fff;
          border-radius: 50%;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .rethink-btn:hover {
          background-color: #000;
        }
        .rethink-btn:hover .rethink-btn__icon-wrapper {
          color: #000;
        }
        .rethink-btn__icon-svg--copy {
          position: absolute;
          transform: translate(-150%, 150%);
        }
        .rethink-btn:hover .rethink-btn__icon-svg:first-child {
          transition: transform 0.3s ease-in-out;
          transform: translate(150%, -150%);
        }
        .rethink-btn:hover .rethink-btn__icon-svg--copy {
          transition: transform 0.3s ease-in-out 0.1s;
          transform: translate(0);
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto px-8 max-w-[1200px] flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group select-none outline-none">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Logo />
            </motion.div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && openDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && closeDropdown()}
              >
                <a
                  href={item.href || '#'}
                  className={`group flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 select-none outline-none ${
                    activeDropdown === item.name
                      ? 'text-white bg-white/5'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                  </span>
                  {item.hasDropdown && (
                    <motion.span
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <ChevronDown size={13} className="opacity-70" />
                    </motion.span>
                  )}
                </a>

                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <DropdownMenu items={item.items} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <ExploreButton href="#contact" />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors outline-none"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0e]/98 backdrop-blur-xl border-b border-white/[0.07] pt-20 pb-6 px-8 lg:hidden flex flex-col gap-1"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href || '#'}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.18 }}
                onClick={() => setIsMobileOpen(false)}
                className="group flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                </span>
                {item.hasDropdown && <ChevronDown size={15} className="opacity-40" />}
              </motion.a>
            ))}

            <div className="flex justify-center mt-4 pt-4 border-t border-white/[0.07]">
              <ExploreButton href="#contact" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
