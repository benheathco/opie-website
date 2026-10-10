import { useEffect, useId, useRef, useState } from 'react';
import TeamWorkflow, { TeamIcon } from './TeamWorkflow.jsx';
import { teams } from '../data.js';

export default function Teams() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const panelsRef = useRef(null);
  const tabRefs = useRef([]);
  const id = useId();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.15 });
    observer.observe(panelsRef.current);
    return () => observer.disconnect();
  }, []);

  function handleKeyDown(event, index) {
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % teams.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + teams.length) % teams.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = teams.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className="section teams-section" data-in-view={inView} aria-labelledby={`${id}-heading`}>
      <div className="head-center teams-head">
        <span className="eyebrow">Built around your team</span>
        <h2 className="h2" id={`${id}-heading`}>Every team gets smarter with Opie</h2>
        <p className="sub">Different expertise. One connected workspace. Turn your team's knowledge into work that moves forward.</p>
      </div>
      <div className="teams-grid">
        <div className="teams-selector">
          <p className="teams-label">Find your team</p>
          <div className="teams-tabs" role="tablist" aria-label="Choose a team" aria-orientation="vertical">
            {teams.map((t, i) => (
              <button
                key={t.name}
                ref={(node) => { tabRefs.current[i] = node; }}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`${id}-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                className={`team-tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                onKeyDown={(event) => handleKeyDown(event, i)}
              >
                <span className="team-icon"><TeamIcon type={t.icon} /></span>
                <span>{t.name}</span>
                <span className="team-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <p className="teams-note">Your expertise. Opie's intelligence.</p>
        </div>
        <div className="teams-panels" ref={panelsRef}>
          {teams.map((team, index) => (
            <div key={team.name} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={index !== active} tabIndex={0} className="team-panel">
              {index === active && <TeamWorkflow team={team} />}
              <div className="team-caption">
                <p className="teams-label">{team.name}</p>
                <p className="team-desc">{team.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
