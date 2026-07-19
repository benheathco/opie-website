export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow l" />
      <div className="hero-glow r" />
      <div className="hero-inner">
        <h1 className="hero-h1">The compliance operations platform for regulated teams</h1>
        <p className="hero-sub">
          Automate document-heavy processes, enforce compliance &amp; maintain a complete
          audit trail, without any guesswork.
        </p>
        <div className="hero-cta">
          <a className="btn-teal" href="#">
            Sign up Free <span className="chevron">&rsaquo;</span>
          </a>
        </div>

        <div className="hero-window">
          <div className="window-bar">
            <span className="win-dot" />
            <span className="win-dot" />
            <span className="win-dot" />
            <span className="win-url" />
          </div>
          <div className="window-body">
            <div className="chat-card">
              <p>Share documents that you want Opie to automate&hellip;</p>
              <div className="chat-row">
                <span className="chip">All Scopes</span>
                <span className="chip">Add files</span>
                <span className="chat-send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
