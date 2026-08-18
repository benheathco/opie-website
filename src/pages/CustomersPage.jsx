import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { caseStudies, industries } from '../caseStudies.js';

export default function CustomersPage() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? caseStudies : caseStudies.filter((c) => c.industry === filter);

  return (
    <>
      <Nav />
      <section className="feature-hero-section customers-hero">
        <div className="customers-hero-inner">
          <span className="eyebrow">Customer stories</span>
          <h1 className="feature-title">How regulated teams work with Opie</h1>
          <p className="feature-sub">
            Fund managers, law firms, accountants and financial institutions on how they automate
            document-heavy work, keep humans in the loop and prove every decision.
          </p>
        </div>
      </section>

      <section className="section customers-index">
        <div className="customers-filters" role="tablist" aria-label="Filter by industry">
          {['All', ...industries].map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={filter === name}
              className={`customers-filter${filter === name ? ' active' : ''}`}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="customers-grid">
          {visible.map((c) => (
            <Link key={c.slug} to={`/customers/${c.slug}`} className="customer-card">
              <div className="customer-card-cover" style={{ backgroundImage: `url(${c.cover})` }}>
                <span className="customer-logo-text">{c.logoText}</span>
              </div>
              <div className="customer-card-body">
                <span className="customer-card-industry">{c.industry}</span>
                <h2 className="customer-card-result">{c.result}</h2>
                <p className="customer-card-summary">{c.summary}</p>
                <span className="customer-card-link">
                  Read the story <span className="chevron">&rsaquo;</span>
                </span>
              </div>
            </Link>
          ))}
          {visible.length === 0 && (
            <p className="customers-empty">No stories in this category yet.</p>
          )}
        </div>
      </section>

      <section className="section customers-cta">
        <div className="cs-cta">
          <div>
            <h2 className="h2">Tell us your challenge.</h2>
            <p className="sub">We’ll show you how teams like yours run it in Opie.</p>
          </div>
          <a className="btn-teal" href="#">
            Book a Demo <span className="chevron">&rsaquo;</span>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
