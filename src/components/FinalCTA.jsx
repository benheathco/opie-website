export default function FinalCTA() {
  return (
    <section className="dark">
      <div className="dark-glow" style={{ top: '-40px', width: '740px', height: '340px' }} />
      <div className="cta-inner">
        <h2 className="h2">Driving AI adoption together at scale</h2>
        <p className="sub">
          A seamless, beautiful way to bring AI into your company's apps, knowledge, and
          culture.
        </p>
        <div style={{ marginTop: 30 }}>
          <a className="btn-teal" href="#">
            Book a Demo <span className="chevron">&rsaquo;</span>
          </a>
        </div>
        <div className="cta-window">
          <img src="/assets/home/product-workspace.png" alt="Opie product workspace" className="cta-shot" />
        </div>
      </div>
    </section>
  );
}
