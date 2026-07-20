import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Placeholder from './Placeholder.jsx';

export default function FeaturePage({
  eyebrow,
  slug,
  lead,
  title,
  description,
  bullets,
  shot,
  sections = [],
  splitFeatures = [],
  metrics = [],
  audiences = [],
  highlights = [],
  useCases = [],
  useCasesTitle,
  useCasesIntro,
  cta,
}) {
  const pageClass = slug ? `feature-page-${slug}` : '';

  return (
    <>
      <Nav />
      <section className={`feature-hero-section ${pageClass}`}>
        <div className="feature-hero-grid">
          <div className="feature-hero-copy">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="feature-title">{title}</h1>
            <p className="feature-sub">
              {lead && <strong className="sub-lead">{lead} </strong>}
              {description}
            </p>
            <div className="feature-actions">
              <a className="btn-teal" href="#">
                Book a Demo <span className="chevron">&rsaquo;</span>
              </a>
              <span className="feature-proof">Source-backed AI, approvals and evidence by default.</span>
            </div>
          </div>
          <Placeholder label={shot} variant="deep" className="feature-product-shot" />
        </div>
      </section>

      <section className="section feature-page">

        {highlights.length > 0 && (
          <div className="feature-highlights">
            {highlights.map((item) => (
              <div key={item.h} className="feature-highlight">
                <div className="feature-highlight-copy">
                  <span className="overview-kicker">{item.kicker}</span>
                  <h2>{item.h}</h2>
                  <p>{item.t}</p>
                </div>
                {item.items && item.items.length > 0 && (
                  <div className={`feature-highlight-list count-${Math.min(item.items.length, 3)}`}>
                    {item.items.map((child) => (
                      <div key={child.h} className="feature-highlight-item">
                        <h3>{child.h}</h3>
                        <p>{child.t}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

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

      {splitFeatures.length > 0 && (
        <section className="section">
          <div className="feature-split">
            {splitFeatures.map((item, i) => (
              <div key={item.h} className={`feature-split-row${i % 2 === 1 ? ' reverse' : ''}`}>
                <Placeholder label={item.shot} variant="deep" className="feature-split-media" />
                <div className="feature-split-copy">
                  <span className="overview-kicker">{item.kicker}</span>
                  <h2>{item.h}</h2>
                  <p>{item.t}</p>
                  {item.items && item.items.length > 0 && (
                    <div className="feature-split-list">
                      {item.items.map((child) => (
                        <div key={child.h} className="feature-split-item">
                          <h3>{child.h}</h3>
                          <p>{child.t}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {(sections.length > 0 || metrics.length > 0) && (
        <section className="dark">
          <div className="dark-glow" />
          <div className="dark-inner">
            {sections.length > 0 && (
              <div className="overview-dark-grid">
                {sections.map((item) => (
                  <div key={item.h} className="overview-dark-card">
                    <span className="overview-kicker">{item.kicker}</span>
                    <h2>{item.h}</h2>
                    <p>{item.t}</p>
                  </div>
                ))}
              </div>
            )}

            {metrics.length > 0 && (
              <div className="overview-stat-list">
                {metrics.map((metric) => (
                  <div key={metric.value} className="overview-stat-row">
                    <div className="overview-stat-value">{metric.value}</div>
                    <p className="overview-stat-label">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {useCases.length > 0 && (
        <section className="section">
          <div className="head-split">
            <h2 className="h2">{useCasesTitle || 'How teams use it'}</h2>
            {useCasesIntro && <p className="sub">{useCasesIntro}</p>}
          </div>
          <div className="feature-use-grid">
            {useCases.map((item) => (
              <div key={item.h} className="feature-use-card">
                <h3>{item.h}</h3>
                <p>{item.t}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(audiences.length > 0 || cta) && (
        <section className="section">
          {audiences.length > 0 && (
            <div className="overview-audiences">
              <div className="head-split">
                <h2 className="h2">Built for teams running regulated work</h2>
                <p className="sub">
                  Opie gives each operator the same source-backed context, while keeping
                  permissions, approvals and evidence attached to the work.
                </p>
              </div>
              <div className="grid2">
                {audiences.map((audience) => (
                  <div key={audience.h} className="overview-audience">
                    <h3>{audience.h}</h3>
                    <p>{audience.t}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cta && (
            <div className="overview-cta">
              <h2>{cta.h}</h2>
              <p>{cta.t}</p>
              <a className="btn-teal" href="#">
                {cta.button} <span className="chevron">&rsaquo;</span>
              </a>
            </div>
          )}
        </section>
      )}

      <Footer />
    </>
  );
}
