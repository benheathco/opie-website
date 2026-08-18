import { Routes, Route } from 'react-router-dom';
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
      <Nav />
      <Hero />
      <SolveSection />
      <OneInterface />
      <DeepDives />
      <CustomAgents />
      <Regulatory />
      <Teams />
      <Security />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform/:slug" element={<PlatformPage />} />
      <Route path="/solutions/:slug" element={<SolutionPage />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/customers/:slug" element={<CaseStudyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
