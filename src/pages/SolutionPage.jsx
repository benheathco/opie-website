import { useParams } from 'react-router-dom';
import FeaturePage from '../components/FeaturePage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import { solutionPages } from '../data.js';

export default function SolutionPage() {
  const { slug } = useParams();
  const page = solutionPages.find((p) => p.slug === slug);

  if (!page) {
    return <NotFoundPage />;
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
