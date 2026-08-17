import React, { useState, useEffect } from 'react';
import { HeartPulse, PhoneCall, Menu, X, MessageSquare } from 'lucide-react';
import PillCTAButton from './ui/PillCTAButton';

const navLinks = [
  { href: '#jenis-bpjs', label: 'Jenis Kepesertaan' },
  { href: '#alur-faskes', label: 'Alur Pelayanan' },
  { href: '#layanan-puskesmas', label: 'Layanan Tercover' },
  { href: '#layanan-digital', label: 'Fitur Layanan Digital' },
  { href: '#solusi-adm', label: 'Aktivasi & Domisili' },
  { href: '#darurat', label: 'Kontak Tim KKN', isHighlight: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold set to approximately the hero section height (480px)
      if (window.scrollY > 480) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Ribbon */}
      <div className="bg-brand-950 text-white text-xs py-2 px-4 border-b border-brand-800/80 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="font-bold text-lime-300">Posko Mahasiswa KKN:</span>
            <span className="text-slate-300">Siaga Edukasi & Pendampingan Kesehatan Warga Desa Sukamakmur</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#darurat" className="text-lime-400 hover:underline font-semibold flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5" /> Kontak Tim Mahasiswa
            </a>
          </div>
        </div>
      </div>

      {/* Main Header (Dynamic Glassmorphism when on top, Solid White when scrolled) */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-card-depth'
            : 'bg-brand-950/40 backdrop-blur-[2px] border-b border-white/10 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-brand-850 text-lime-400 shadow-subtle group-hover:bg-brand-950'
                  : 'bg-white/10 text-lime-400 border border-white/15 backdrop-blur-sm group-hover:bg-white/20'
              }`}
            >
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span
                className={`font-grotesk font-bold text-lg tracking-tight block leading-tight transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                POSKO SEHAT BPJS
              </span>
              <span
                className={`text-[11px] font-medium block transition-colors duration-300 ${
                  isScrolled ? 'text-brand-700' : 'text-lime-300'
                }`}
              >
                Program KKN Tematik 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center gap-7 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? 'text-slate-600' : 'text-slate-200'
            }`}
          >
            {navLinks.map((item) => {
              if (item.isHighlight) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`font-bold transition-colors ${
                      isScrolled
                        ? 'text-brand-850 hover:text-lime-600'
                        : 'text-lime-400 hover:text-lime-300'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    isScrolled
                      ? 'hover:text-brand-850'
                      : 'hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Nav CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <PillCTAButton
              href="#darurat"
              variant={isScrolled ? 'dark' : 'lime'}
              size="sm"
              icon={MessageSquare}
            >
              Konsultasi Posko
            </PillCTAButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors cursor-pointer ${
              isScrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-b px-5 pt-3 pb-6 space-y-3 transition-colors ${
              isScrolled
                ? 'bg-white border-slate-200 shadow-lg text-slate-800'
                : 'bg-brand-950/95 border-brand-800/80 shadow-forest-card text-white backdrop-blur-md'
            }`}
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-semibold py-1.5 transition-colors ${
                  item.isHighlight
                    ? isScrolled
                      ? 'text-brand-850 font-bold'
                      : 'text-lime-400 font-bold'
                    : isScrolled
                    ? 'text-slate-800 hover:text-brand-850'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <PillCTAButton
                href="#darurat"
                onClick={() => setMobileMenuOpen(false)}
                variant={isScrolled ? 'dark' : 'lime'}
                icon={MessageSquare}
                className="w-full justify-center"
              >
                Konsultasi Tim Mahasiswa KKN
              </PillCTAButton>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
