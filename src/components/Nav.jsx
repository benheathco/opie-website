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
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggle(key) {
    setOpen((current) => (current === key ? null : key));
  }

  const activeMenu = open ? MENUS[open] : null;

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav">
        <Link to="/" onClick={() => setOpen(null)}>
          <Logo />
        </Link>
        <div className="nav-links">
          {Object.entries(MENUS).map(([key, menu]) => (
            <button
              key={key}
              type="button"
              className={`nav-trigger${open === key ? ' active' : ''}`}
              onClick={() => toggle(key)}
              aria-expanded={open === key}
            >
              {menu.label}
              <span className="nav-trigger-icon" aria-hidden="true" />
            </button>
          ))}
          <a className="nav-link" href="#">Blog</a>
          <a className="nav-link" href="#">Contact</a>
          <a className="btn-teal sm" href="#">
            Book a Demo <span className="chevron">&rsaquo;</span>
          </a>
        </div>
      </nav>
      {activeMenu && (
        <div className="nav-dropdown">
          <div className="nav-dd-grid">
            {activeMenu.items.map((item) => (
              <Link
                key={item.slug}
                to={`${activeMenu.base}/${item.slug}`}
                className="nav-dd-item"
                onClick={() => setOpen(null)}
              >
                <span className="nav-dd-title">
                  {item.navTitle}
                  <span className="nav-dd-arrow">&rarr;</span>
                </span>
                <span className="nav-dd-desc">{item.navDesc}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export { Logo };
