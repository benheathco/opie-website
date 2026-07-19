import Placeholder from './Placeholder.jsx';

export default function CustomAgents() {
  return (
    <section className="agents">
      <div className="agents-card">
        <div className="agents-glow" />
        <div className="agents-text">
          <span className="eyebrow">Custom Agents</span>
          <h2>Build your own agents for policy-driven automations</h2>
          <p>
            Define scope boundaries, retrieval rules, response formatting, compliance
            constraints, and tone. Deploy them alongside Opie's specialist teams or as
            standalone tools for your team.
          </p>
          <a className="btn-teal" href="#">
            Sign up Free <span className="chevron">&rsaquo;</span>
          </a>
        </div>
        <div className="agents-media">
          <Placeholder label="agent builder" variant="dark" />
        </div>
      </div>
    </section>
  );
}
