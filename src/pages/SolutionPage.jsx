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
      slug={page.slug}
      lead={page.lead}
      title={page.title}
      description={page.description}
      bullets={page.bullets}
      shot={page.shot}
      sections={page.sections}
      splitFeatures={page.splitFeatures}
      metrics={page.metrics}
      audiences={page.audiences}
      highlights={page.highlights}
      useCases={page.useCases}
      useCasesTitle={page.useCasesTitle}
      useCasesIntro={page.useCasesIntro}
      cta={page.cta}
    />
  );
}
