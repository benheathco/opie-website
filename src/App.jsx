import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { platformPages, solutionPages } from './data.js';
import { getCaseStudy } from './caseStudies.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import SolveSection from './components/SolveSection.jsx';
import OneInterface from './components/OneInterface.jsx';
import DeepDives from './components/DeepDives.jsx';
import CustomAgents from './components/CustomAgents.jsx';
import Regulatory from './components/Regulatory.jsx';
import Teams from './components/Teams.jsx';
import Security from './components/Security.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import PlatformPage from './pages/PlatformPage.jsx';
import SolutionPage from './pages/SolutionPage.jsx';
import CustomersPage from './pages/CustomersPage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';

function Home() {
  return (
    <>
      <Hero />
      <SolveSection />
      <OneInterface />
      <DeepDives />
      <CustomAgents />
      <Regulatory />
      <Teams />
      <Security />
      <FinalCTA />
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const routePath = pathname.replace(/\/+$/, '') || '/';
    const [, category, slug] = routePath.split('/');
    const page = category === 'platform' ? platformPages.find((item) => item.slug === slug)
      : category === 'solutions' ? solutionPages.find((item) => item.slug === slug)
      : category === 'customers' && slug ? getCaseStudy(slug) : null;
    const title = routePath === '/' ? 'Compliance operations for regulated teams'
      : routePath === '/customers' ? 'Customer stories'
      : page?.title || page?.headline || 'Page not found';
    document.title = `${title} | Opie`;
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform/:slug" element={<PlatformPage />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/customers/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
