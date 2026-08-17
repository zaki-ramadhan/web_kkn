import React, { useState } from 'react';

// Shell & Navigation
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Modular Page Sections
import HeroSection from './components/HeroSection';
import CategorySection from './components/sections/CategorySection';
import FlowSection from './components/sections/FlowSection';
import PuskesmasServicesSection from './components/sections/PuskesmasServicesSection';
import DigitalFeaturesSection from './components/sections/DigitalFeaturesSection';
import AdministrationSection from './components/sections/AdministrationSection';
import ContactSection from './components/sections/ContactSection';
import TeamSection from './components/sections/TeamSection';

export default function App() {
  // Mode switcher for team gallery layout: 'option1' | 'option2' | 'option3'
  const [teamGalleryMode, setTeamGalleryMode] = useState('option1');

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
        <CategorySection />
        <FlowSection />
        <PuskesmasServicesSection />
        <DigitalFeaturesSection />
        <AdministrationSection />
        <ContactSection
          previewOption={teamGalleryMode}
          onSelectOption={setTeamGalleryMode}
        />
        {teamGalleryMode === 'option2' && <TeamSection />}
      </main>
      <Footer />

      {/* Interactive Switcher Toolbar for User to test Options 1, 2, and 3 */}
      <div className="fixed bottom-5 inset-x-4 sm:inset-x-auto sm:right-6 z-50 bg-brand-950/95 text-white rounded-2xl sm:rounded-full p-2 shadow-forest-card border border-white/20 flex flex-wrap items-center justify-center gap-1.5 backdrop-blur-md">
        <span className="text-xs font-bold pl-2 pr-1 text-lime-400 select-none">
          Pilihan Layout Tim:
        </span>
        <button
          type="button"
          onClick={() => setTeamGalleryMode('option1')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            teamGalleryMode === 'option1'
              ? 'bg-lime-400 text-brand-950 shadow-subtle'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Opsi 1 (Langsung)
        </button>
        <button
          type="button"
          onClick={() => setTeamGalleryMode('option2')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            teamGalleryMode === 'option2'
              ? 'bg-lime-400 text-brand-950 shadow-subtle'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Opsi 2 (Section Khusus)
        </button>
        <button
          type="button"
          onClick={() => setTeamGalleryMode('option3')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            teamGalleryMode === 'option3'
              ? 'bg-lime-400 text-brand-950 shadow-subtle'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Opsi 3 (Tombol Buka)
        </button>
      </div>
    </div>
  );
}
