import { useState } from 'react';
import Placeholder from './Placeholder.jsx';
import { teams } from '../data.js';

export default function Teams() {
  const [active, setActive] = useState(0);

  return (
    <section className="section">
      <div className="teams-grid">
        <Placeholder label="teams illustration" variant="deep" className="teams-media" />
        <div className="teams-col">
          <div className="head-center teams-head">
            <h2 className="h2">Every team gets smarter with Opie</h2>
            <p className="sub">
              Everything in Opie is designed to keep your work safe and secure. Because your
              business is nobody else's business.
            </p>
          </div>
          <div className="teams-switch">
            <div className="teams-tabs">
              {teams.map((t, i) => (
                <button
                  key={t.name}
                  className={`team-tab${i === active ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="team-arrow">&rarr;</span>
                  {t.name}
                </button>
              ))}
            </div>
            <p className="team-desc">{teams[active].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
