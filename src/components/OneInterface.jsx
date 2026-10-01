import { useEffect, useRef, useState } from 'react';
import Placeholder from './Placeholder.jsx';
import { bentoFeatures, stats } from '../data.js';

const MOBILE_BREAKPOINT = 900;

export default function OneInterface() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    function measure() {
      const track = trackRef.current;
      if (!track || window.innerWidth <= MOBILE_BREAKPOINT || motion.matches) {
        setMaxTranslate(0);
        return;
      }
      setMaxTranslate(Math.max(track.scrollWidth - window.innerWidth, 0));
    }
    measure();
    window.addEventListener('resize', measure);
    motion.addEventListener('change', measure);
    return () => {
      window.removeEventListener('resize', measure);
      motion.removeEventListener('change', measure);
    };
  }, []);

  useEffect(() => {
    if (maxTranslate <= 0) {
      setTranslateX(0);
      return undefined;
    }

    let frame = null;
    function update() {
      frame = null;
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / maxTranslate, 0), 1);
      setTranslateX(-progress * maxTranslate);
    }
    function onScroll() {
      if (frame === null) {
        frame = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [maxTranslate]);

  return (
    <section className="dark capabilities-section">
      <div className="dark-glow" />
      <div className="dark-inner dark-inner-top">
        <div className="head-center">
          <h2 className="h2">One interface, every capability</h2>
          <p className="sub">
            A seamless, beautiful way to bring AI into your company's apps, knowledge, and
            culture.
          </p>
        </div>
      </div>

      <div
        ref={wrapRef}
        className="bento-scroll-wrap"
        style={maxTranslate > 0 ? { height: `calc(100vh + ${maxTranslate}px)` } : undefined}
      >
        <div className="bento-scroll-sticky" tabIndex={maxTranslate > 0 ? undefined : 0}
          role="region" aria-label="Platform capabilities">
          <div
            ref={trackRef}
            className="bento-track"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {bentoFeatures.map((b) => (
              <div key={b.title} className="bento-slide">
                <div className="bento-card">
                  {b.img ? (
                    <img src={b.img} alt={b.title} className="bento-media" />
                  ) : (
                    <Placeholder label={b.shot} variant="dark" className="bento-media" />
                  )}
                  <p className="bento-title">{b.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dark-inner dark-inner-bottom">
        <div className="stats-wrap">
          <h3 className="stats-title">Driving AI adoption together at scale</h3>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.value} className="stat">
                <div className="stat-value">{s.value}</div>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
