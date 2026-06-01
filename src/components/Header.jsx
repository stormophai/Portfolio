import { useState, useEffect } from 'react';
import Magnetic from './Magnetic';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`v2-nav-wrap ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="v2-nav">
        <div className="v2-brand">
          <span className="v2-brand-blob" />
          <span className="v2-brand-name">rethink<span>.</span></span>
        </div>
        <nav className="v2-nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#team">Team</a>
        </nav>
        <Magnetic as="a" href="#contact" className="cssbuttons-io-button">
          Say hello
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </Magnetic>
      </div>
    </header>
  );
}
