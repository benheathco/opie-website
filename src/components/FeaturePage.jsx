import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Placeholder from './Placeholder.jsx';

export default function FeaturePage({ eyebrow, title, description, bullets, shot }) {
  return (
    <>
      <Nav />
      <section className="section feature-page">
        <div className="head-center">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h2">{title}</h1>
          <p className="sub">{description}</p>
          <div className="hero-cta">
            <a className="btn-teal" href="#">
              Sign up Free <span className="chevron">&rsaquo;</span>
            </a>
          </div>
        </div>
        <Placeholder label={shot} variant="deep" className="dd-hero" />
        {bullets && bullets.length > 0 && (
          <div className="dd-points">
            {bullets.map((b) => (
              <div key={b.h} className="point">
                <div className="point-icon"><span /></div>
                <h3 className="point-h">{b.h}</h3>
                <p className="point-t">{b.t}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
