import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { researchIntelligence as content } from '../data.js';

function ResearchIcon({ type }) {
  const paths = {
    document: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" /><path d="M14 3v6h6M8 13h8m-8 4h5" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    library: <><rect x="3" y="4" width="5" height="16" rx="1" /><path d="M11 4v16m4-15 4-1 3 15-4 1-3-15Z" /></>,
    replay: <><path d="M4 9a8 8 0 1 1 0 6M4 3v6h6" /></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

export default function ResearchIntelligence() {
  const id = useId();
  const previewRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [replay, setReplay] = useState(0);
  const [source, setSource] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section research-section" aria-labelledby={`${id}-heading`}>
      <div className="research-grid">
        <div className="research-copy">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="h2" id={`${id}-heading`}>{content.title}</h2>
          <p className="sub">{content.description}</p>
          <ol className="research-features">
            {content.features.map((feature, index) => (
              <li key={feature.title}>
                <span className="research-feature-number" aria-hidden="true">0{index + 1}</span>
                <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
              </li>
            ))}
          </ol>
          <Link className="research-link" to="/platform/vault">Explore your knowledge workspace <ResearchIcon type="arrow" /></Link>
        </div>

        <div className="research-preview" ref={previewRef} data-in-view={inView}>
          <div className="research-preview-top">
            <span><ResearchIcon type="library" />Research workspace</span>
            <span className="research-example">Interactive example</span>
          </div>
          <div className="research-demo" key={replay}>
            <div className="research-documents" role="group" aria-label="Explore example source documents">
              {content.sources.map((item, index) => (
                <button className={`research-document${source === index ? ' selected' : ''}`} key={item.title} style={{ '--order': index }} type="button" aria-pressed={source === index} aria-controls={`${id}-source`} onClick={() => setSource(index)}>
                  <span className="research-file-type"><ResearchIcon type="document" />{item.type}</span>
                  <span className="research-document-title">{item.title}</span>
                  <span className="research-document-lines" aria-hidden="true"><i /><i /><i /></span>
                </button>
              ))}
            </div>

            <svg className="research-connections" viewBox="0 0 600 46" preserveAspectRatio="none" aria-hidden="true">
              {['M100 0V10Q100 24 114 24H286Q300 24 300 38V46', 'M300 0V46', 'M500 0V10Q500 24 486 24H314Q300 24 300 38V46'].map((d) => <g key={d}><path d={d} /><path className="research-connection-pulse" d={d} pathLength="1" /></g>)}
            </svg>

            <div className="research-index">
              <span><ResearchIcon type="library" />Workspace knowledge</span>
              <span className="research-index-status">3 sources indexed</span>
              <span className="research-index-progress" aria-hidden="true" />
            </div>

            <div className="research-answer">
              <div className="research-question"><ResearchIcon type="search" /><span>What needs a closer look?</span></div>
              <div className="research-answer-body">
                <div className="research-answer-label"><img src="/opie-logo-mark-dark-purple-rgb-teal.svg" alt="" width="20" height="20" />A finding to explore</div>
                <p>Supplier concentration needs review <button className="research-citation" type="button" aria-label="View source 1: Supplier report" aria-pressed={source === 0} aria-controls={`${id}-source`} onClick={() => setSource(0)}>1</button>. Check the risk policy before sign-off <button className="research-citation" type="button" aria-label="View source 2: Risk policy" aria-pressed={source === 1} aria-controls={`${id}-source`} onClick={() => setSource(1)}>2</button>.</p>
              </div>
            </div>

            <div className="research-source" id={`${id}-source`} role="region" aria-label="Selected source excerpt" aria-live="polite" aria-atomic="true">
              <div className="research-source-content" key={source}>
                <span className="research-source-label">Back to the source</span>
                <h3><ResearchIcon type="document" />{content.sources[source].location}</h3>
                <blockquote>{content.sources[source].excerpt}</blockquote>
              </div>
            </div>
          </div>
          <div className="research-preview-footer">
            <span>Try a source or a numbered citation.</span>
            <button className="research-replay" type="button" onClick={() => setReplay(value => value + 1)} aria-label="Replay document indexing animation"><ResearchIcon type="replay" />Replay</button>
          </div>
        </div>
      </div>
    </section>
  );
}
