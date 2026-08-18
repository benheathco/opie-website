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
    function measure() {
      const track = trackRef.current;
      if (!track || window.innerWidth <= MOBILE_BREAKPOINT) {
        setMaxTranslate(0);
        return;
      }
      setMaxTranslate(Math.max(track.scrollWidth - window.innerWidth, 0));
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (maxTranslate <= 0) {
      setTranslateX(0);
      return undefined;
    }

    let ticking = false;
    function update() {
      ticking = false;
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / maxTranslate, 0), 1);
      setTranslateX(-progress * maxTranslate);
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [maxTranslate]);

  return (
    <section className="dark">
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
        <div className="bento-scroll-sticky">
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
