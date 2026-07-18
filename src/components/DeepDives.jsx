import Placeholder from './Placeholder.jsx';
import { deepDives } from '../data.js';

export default function DeepDives() {
  return (
    <>
      {deepDives.map((d) => (
        <section key={d.title} className="section">
          <div className="head-split">
            <h2 className="h2">{d.title}</h2>
            <p className="sub">{d.sub}</p>
          </div>
          <Placeholder label={d.shot} variant="deep" className="dd-hero" />
          <div className="dd-points">
            {d.points.map((p) => (
              <div key={p.h} className="point">
                <div className="point-icon"><span /></div>
                <h3 className="point-h">{p.h}</h3>
                <p className="point-t">{p.t}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
