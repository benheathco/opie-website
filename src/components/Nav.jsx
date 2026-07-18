function Logo({ light = false }) {
  return (
    <img
      className={`logo${light ? ' light' : ''}`}
      src="/opie-logo-dark-purple-rgb.svg"
      alt="Opie"
    />
  );
}

export default function Nav() {
  return (
    <header className="header">
      <nav className="nav">
        <Logo />
        <div className="nav-links">
          <a className="nav-link" href="#">Blog</a>
          <a className="nav-link" href="#">Contact</a>
          <a className="btn-teal sm" href="#">
            Sign Up <span className="chevron">&rsaquo;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export { Logo };
