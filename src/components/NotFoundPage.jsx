import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
      <section className="section head-center not-found">
        <span className="eyebrow">404</span>
        <h1 className="h2">Page not found</h1>
        <p className="sub">This page may have moved, or the address may be incorrect.</p>
        <Link className="btn-teal" to="/">Back to home</Link>
      </section>
  );
}
