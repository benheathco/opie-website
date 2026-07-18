import { useParams, Link } from 'react-router-dom';
import FeaturePage from '../components/FeaturePage.jsx';
import { platformPages } from '../data.js';

export default function PlatformPage() {
  const { slug } = useParams();
  const page = platformPages.find((p) => p.slug === slug);

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
      eyebrow="Platform"
      title={page.title}
      description={page.description}
      bullets={page.bullets}
      shot={page.shot}
    />
  );
}
