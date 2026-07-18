import Placeholder from './Placeholder.jsx';
import { securityItems } from '../data.js';

export default function Security() {
  return (
    <section className="section">
      <div className="head-center">
        <h2 className="h2">Built for the future, with security in mind</h2>
        <p className="sub">
          Everything in Opie is designed to keep your work safe and secure. Because your
          business is nobody else's business.
        </p>
      </div>
      <div className="grid2">
        {securityItems.map((s) => (
          <div key={s.h} className="sec-card">
            <Placeholder label={s.shot} variant="deep" className="sec-media" />
            <h3>{s.h}</h3>
            <p>{s.t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
