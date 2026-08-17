import React from 'react';
import { Home, PhoneCall, ArrowLeft } from 'lucide-react';
import Heading from './ui/Heading';
import PillCTAButton from './ui/PillCTAButton';

export default function NotFound() {
  const currentPath = window.location.pathname;

  return (
    <div className="min-h-screen bg-brand-950 text-white flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-lime-400 selection:text-brand-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-lime-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-forest-card">
        {/* Big 404 Typography */}
        <div className="font-grotesk font-black text-7xl sm:text-8xl text-lime-400 tracking-tight mb-3 select-none">
          404
        </div>

        <Heading as="h1" level="2" color="light" className="mb-3">
          Halaman Tidak Ditemukan
        </Heading>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
          Alamat <span className="font-mono text-xs sm:text-sm text-lime-300 bg-white/10 px-2 py-0.5 rounded">{currentPath}</span> tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda panduan resmi.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-brand-950 font-bold text-sm transition-all duration-200 shadow-subtle hover:shadow-elevation flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </a>
          <a
            href="/#darurat"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-lime-400" />
            <span>Kontak Posko KKN</span>
          </a>
        </div>
      </div>
    </div>
  );
}
