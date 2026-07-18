import { useParams, Link } from 'react-router-dom';
import FeaturePage from '../components/FeaturePage.jsx';
import { solutionPages } from '../data.js';

export default function SolutionPage() {
  const { slug } = useParams();
  const page = solutionPages.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="section head-center">
        <h1 className="h2">Page not found</h1>
        <p className="sub"><Link to="/">Back to home</Link></p>
      </div>
    );
  }

  return (
    <FeaturePage
      eyebrow="Solutions"
      title={page.title}
      description={page.description}
      shot="solution overview"
    />
  );
}
