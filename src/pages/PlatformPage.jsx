import { useParams } from 'react-router-dom';
import FeaturePage from '../components/FeaturePage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import { platformPages } from '../data.js';

export default function PlatformPage() {
  const { slug } = useParams();
  const page = platformPages.find((p) => p.slug === slug);

  if (!page) {
    return <NotFoundPage />;
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
