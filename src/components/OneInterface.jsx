import Placeholder from './Placeholder.jsx';
import { bentoFeatures, stats } from '../data.js';

export default function OneInterface() {
  return (
    <section className="dark">
      <div className="dark-glow" />
      <div className="dark-inner">
        <div className="head-center">
          <h2 className="h2">One interface, every capability</h2>
          <p className="sub">
            A seamless, beautiful way to bring AI into your company's apps, knowledge, and
            culture.
          </p>
        </div>

        <div className="grid6">
          {bentoFeatures.map((b) => (
            <div key={b.title} className={`col-${b.span}`}>
              <div className="bento-card">
                <Placeholder label={b.shot} variant="dark" className="bento-media" />
                <p className="bento-title">{b.title}</p>
              </div>
            </div>
          ))}
        </div>

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
