import React from 'react';

// Shell & Navigation
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ui/ScrollToTop';

// Modular Page Sections
import HeroSection from './components/HeroSection';
import PartnerLogoStrip from './components/PartnerLogoStrip';
import CategorySection from './components/sections/CategorySection';
import FlowSection from './components/sections/FlowSection';
import PuskesmasServicesSection from './components/sections/PuskesmasServicesSection';
import DigitalFeaturesSection from './components/sections/DigitalFeaturesSection';
import AdministrationSection from './components/sections/AdministrationSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  // Check 404 fallback for non-root URL paths
  const isNotFound =
    typeof window !== 'undefined' &&
    window.location.pathname !== '/' &&
    window.location.pathname !== '';

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-lime-400 selection:text-brand-950 relative">
      <Navbar />
      <main>
        <HeroSection />
        <PartnerLogoStrip />
        <CategorySection />
        <FlowSection />
        <PuskesmasServicesSection />
        <DigitalFeaturesSection />
        <AdministrationSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
