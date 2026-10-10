const icons = {
  funds: <path d="M4 20V10h4v10m4 0V4h4v16m4 0V7M3 20h18" />,
  accounts: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h1m6 0h1m-8 4h1m6 0h1m-8 3h1m6 0h1" /></>,
  legal: <><path d="M12 3v17m-5 1h10M4 7h16M6 7l-3 7h6L6 7Zm12 0-3 7h6l-3-7Z" /></>,
  compliance: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  institution: <path d="m3 8 9-5 9 5H3Zm2 3v7m7-7v7m7-7v7M3 21h18" />,
  operations: <><rect x="8" y="3" width="8" height="5" rx="1" /><rect x="2" y="16" width="7" height="5" rx="1" /><rect x="15" y="16" width="7" height="5" rx="1" /><path d="M12 8v4m-7 4v-4h14v4" /></>,
  document: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" /><path d="M14 3v6h6M8 13h8m-8 4h5" /></>,
  check: <path d="m5 12 4 4L19 6" />,
};

export function TeamIcon({ type }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[type]}</svg>;
}

export default function TeamWorkflow({ team }) {
  return (
    <div className="team-workflow" aria-hidden="true">
      <div className="workflow-heading">
        <span className="workflow-kicker">Knowledge into action</span>
        <span className="workflow-example">Example workflow</span>
      </div>
      <h3>{team.workflow}</h3>
      <div className="workflow-diagram">
        <div className="workflow-sources">
          {team.sources.map((source, index) => (
            <div className="workflow-source" key={source} style={{ '--step': index }}>
              <span className={`workflow-document document-${index}`}><TeamIcon type="document" /></span>
              <span>{source}</span>
            </div>
          ))}
        </div>
        <svg className="workflow-connectors" viewBox="0 0 600 104" preserveAspectRatio="none">
          {['M100 0V20Q100 36 116 36H276Q300 36 300 60V104', 'M300 0V104', 'M500 0V20Q500 36 484 36H324Q300 36 300 60V104'].map((path, index) => (
            <g key={path}>
              <path className="workflow-track" d={path} />
              <path className="workflow-flow" d={path} pathLength="1" style={{ '--step': index }} />
            </g>
          ))}
        </svg>
        <div className="workflow-hub"><img src="/opie-logo-mark-dark-purple-rgb-teal.svg" alt="" width="36" height="36" /><span>Opie</span></div>
        <div className="workflow-output">
          <div className="workflow-output-heading"><span>{team.output}</span><span className="workflow-badge">Human in the loop</span></div>
          {team.checks.map((check, index) => (
            <div className="workflow-result" key={check} style={{ '--step': index }}>
              <span className="workflow-check"><TeamIcon type="check" /></span>
              <span>{check}</span>
              <span className="workflow-evidence" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
