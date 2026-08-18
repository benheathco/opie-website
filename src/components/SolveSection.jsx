import Placeholder from './Placeholder.jsx';
import LottiePlayer from './LottiePlayer.jsx';
import { solveFeatures } from '../data.js';

export default function SolveSection() {
  return (
    <section className="section solve">
      <div className="head-center">
        <h2 className="h2">Opie solves it all in one AI-driven workspace</h2>
        <p className="sub">
          Our Operational Intelligence Engine replaces manual compliance processes with
          AI-powered automations.
        </p>
      </div>
      <div className="grid6">
        {solveFeatures.map((f) => (
          <div key={f.title} className={`col-${f.span}`}>
            <div className="card">
              <div className="card-head">
                <h3 className="card-title">{f.title}</h3>
                <p className="card-desc">{f.desc}</p>
              </div>
              {f.lottie ? (
                <LottiePlayer path={f.lottie} className="card-media" />
              ) : (
                <Placeholder label={f.shot} className="card-media" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
