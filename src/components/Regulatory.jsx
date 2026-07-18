import Placeholder from './Placeholder.jsx';
import { regItems } from '../data.js';

export default function Regulatory() {
  return (
    <section className="section">
      <div className="head-split">
        <h2 className="h2">Opie is built to meet regulatory standards</h2>
        <p className="sub">
          Our platform is designed to meet the requirements of financial institutions, legal
          firms &amp; regulated enterprises.
        </p>
      </div>
      <div className="grid2">
        {regItems.map((r) => (
          <div key={r.h} className="reg-card">
            <Placeholder label={r.shot} variant="deep" className="reg-media" />
            <div className="reg-body">
              <h3>{r.h}</h3>
              <p>{r.t}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
