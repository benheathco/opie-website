import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Placeholder from '../components/Placeholder.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import { caseStudies, getCaseStudy } from '../caseStudies.js';

function Quote({ quote, large = false }) {
  if (!quote) return null;
  return (
    <figure className={`cs-quote${large ? ' cs-quote-large' : ''}`}>
      <blockquote>“{quote.text}”</blockquote>
      <figcaption>
        <strong>{quote.name}</strong>
        <span>{quote.title}</span>
      </figcaption>
    </figure>
  );
}

function CtaStrip() {
  return (
    <div className="cs-cta">
      <div>
        <h2 className="h2">Tell us your challenge.</h2>
        <p className="sub">We’re here to help.</p>
      </div>
      <a className="btn-teal" href="#">
        Book a Demo <span className="chevron">&rsaquo;</span>
      </a>
    </div>
  );
}

function AboutBlock({ story }) {
  return (
    <div className="cs-about">
      <aside className="cs-meta">
        <div className="cs-meta-logo" style={{ backgroundImage: `url(${story.cover})` }}>
          <span className="customer-logo-text">{story.logoText}</span>
        </div>
        <dl>
          <dt>Industry</dt>
          <dd>{story.industry}</dd>
          <dt>Location</dt>
          <dd>{story.location}</dd>
          <dt>Size</dt>
          <dd>{story.size}</dd>
          <dt>Products used</dt>
          <dd>
            <ul className="cs-products">
              {story.products.map((p) => (
                <li key={p.to}>
                  <Link to={p.to}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </aside>
      <div className="cs-about-copy">
        <h2>About {story.name}</h2>
        {story.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const story = getCaseStudy(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!story) return <NotFoundPage />;

  const index = caseStudies.indexOf(story);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <Nav />
      <article className="cs">
        <header className="feature-hero-section cs-hero">
          <div className="cs-hero-inner">
            <Link to="/customers" className="cs-crumb">
              &lsaquo; Customer stories
            </Link>
            <div className="cs-hero-logo" style={{ backgroundImage: `url(${story.cover})` }}>
              <span className="customer-logo-text">{story.logoText}</span>
            </div>
            <h1 className="cs-title">{story.headline}</h1>
            <p className="cs-result">{story.result}</p>
            {story.fictional && (
              <p className="cs-fictional-note">
                Illustrative example. Names, people and figures are fictional.
              </p>
            )}
          </div>
        </header>

        <div className="cs-body">
          <AboutBlock story={story} />

          <CtaStrip />

          <section className="cs-results">
            <h2 className="cs-section-h">Results</h2>
            <ul className="cs-results-grid">
              {story.results.map((r) => (
                <li key={r.label} className="cs-result-item">
                  <span className="cs-result-value">{r.value}</span>
                  <span className="cs-result-label">{r.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="cs-prose">
            <Quote quote={story.quote} large />
            <h2>{story.challenge.h}</h2>
            {story.challenge.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {story.sections.map((s) => (
            <section key={s.h} className="cs-prose">
              <h2>{s.h}</h2>
              {s.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Quote quote={s.quote} />
              {s.image && (
                <figure className="cs-figure">
                  <Placeholder label={s.image.shot} variant="deep" className="cs-figure-media" />
                  {s.image.caption && <figcaption>{s.image.caption}</figcaption>}
                </figure>
              )}
            </section>
          ))}

          {story.next && (
            <section className="cs-prose">
              <h2>{story.next.h}</h2>
              {story.next.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Quote quote={story.next.quote} />
            </section>
          )}

          <CtaStrip />

          <AboutBlock story={story} />

          <nav className="cs-pager" aria-label="More customer stories">
            <Link to={`/customers/${prev.slug}`} className="cs-pager-link">
              <span className="cs-pager-dir">&lsaquo; Previous</span>
              <span className="cs-pager-name">{prev.name}</span>
            </Link>
            <Link to="/customers" className="cs-pager-all">All stories</Link>
            <Link to={`/customers/${next.slug}`} className="cs-pager-link right">
              <span className="cs-pager-dir">Next &rsaquo;</span>
              <span className="cs-pager-name">{next.name}</span>
            </Link>
          </nav>
        </div>
      </article>
      <Footer />
    </>
  );
}
