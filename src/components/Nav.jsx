import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { platformPages, solutionPages } from '../data.js';

function Logo({ light = false }) {
  return (
    <img
      className={`logo${light ? ' light' : ''}`}
      src="/opie-logo-dark-purple-rgb.svg"
      alt="Opie"
    />
  );
}

const MENUS = {
  platform: { label: 'Platform', base: '/platform', items: platformPages },
  solutions: { label: 'Solutions', base: '/solutions', items: solutionPages },
};

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const triggerRefs = useRef({});
  const location = useLocation();

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  function handleKeyDown(event) {
    if (event.key !== 'Escape') return;
    if (open) {
      triggerRefs.current[open]?.focus();
      setOpen(null);
    } else if (mobileOpen) {
      setMobileOpen(false);
      toggleRef.current?.focus();
    }
  }

  function toggle(key) {
    setOpen((current) => (current === key ? null : key));
  }

  return (
    <header className="header" ref={headerRef} onKeyDown={handleKeyDown}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(null);
          setMobileOpen(false);
        }
      }}>
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" aria-label="Opie home" onClick={() => { setOpen(null); setMobileOpen(false); }}>
          <Logo />
        </Link>
        <button ref={toggleRef} className="nav-mobile-toggle" type="button"
          aria-expanded={mobileOpen} aria-controls="main-navigation"
          onClick={() => { setMobileOpen(!mobileOpen); setOpen(null); }}>
          {mobileOpen ? 'Close' : 'Menu'}
          <span aria-hidden="true">{mobileOpen ? '×' : '☰'}</span>
        </button>
        <div id="main-navigation" className={`nav-links${mobileOpen ? ' is-open' : ''}`}>
          {Object.entries(MENUS).map(([key, menu]) => (
            <div className="nav-menu" key={key}>
              <button
                ref={(node) => { triggerRefs.current[key] = node; }}
                id={`nav-trigger-${key}`}
                type="button"
                className={`nav-trigger${open === key || location.pathname.startsWith(menu.base + '/') ? ' active' : ''}`}
                onClick={() => toggle(key)}
                aria-expanded={open === key}
                aria-controls={`nav-dropdown-${key}`}
              >
                {menu.label}
                <span className="nav-trigger-icon" aria-hidden="true" />
              </button>
              <div id={`nav-dropdown-${key}`} className="nav-dropdown" hidden={open !== key}
                aria-labelledby={`nav-trigger-${key}`}>
                <div className="nav-dd-grid">
                  {menu.items.map((item) => (
                    <Link key={item.slug} to={`${menu.base}/${item.slug}`} className="nav-dd-item"
                      aria-current={location.pathname === `${menu.base}/${item.slug}` ? 'page' : undefined}
                      onClick={() => { setOpen(null); setMobileOpen(false); }}>
                      <span className="nav-dd-title">{item.navTitle}<span className="nav-dd-arrow" aria-hidden="true">&rarr;</span></span>
                      <span className="nav-dd-desc">{item.navDesc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link className="nav-link" to="/customers" aria-current={location.pathname.startsWith('/customers') ? 'page' : undefined}>Customers</Link>
          <a className="nav-link" href="#">Blog</a>
          <a className="nav-link" href="#">Contact</a>
          <a className="btn-teal sm" href="#">
            Book a Demo <span className="chevron">&rsaquo;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export { Logo };
