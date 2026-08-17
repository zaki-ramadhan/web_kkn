import React, { useState, useEffect } from 'react';
import { HeartPulse, Menu, X, MessageSquare } from 'lucide-react';
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
      // Switch when scrolled past 100px down
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-card-depth'
          : 'bg-transparent backdrop-blur-[2px] border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled
                ? 'bg-brand-850 text-lime-400 shadow-subtle group-hover:bg-brand-950'
                : 'bg-white/15 text-lime-400 border border-white/20 backdrop-blur-sm group-hover:bg-white/25 shadow-sm'
            }`}
          >
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <span
              className={`font-grotesk font-bold text-lg tracking-tight block leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white drop-shadow-sm'
              }`}
            >
              POSKO SEHAT BPJS
            </span>
            <span
              className={`text-[11px] font-medium block transition-colors duration-300 ${
                isScrolled ? 'text-brand-700' : 'text-lime-300 drop-shadow-sm'
              }`}
            >
              Program KKN Tematik 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex items-center gap-7 text-sm font-medium transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-slate-100'
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
                      : 'text-lime-400 hover:text-lime-300 drop-shadow-sm'
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
                    : 'hover:text-white drop-shadow-sm'
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
              : 'text-white hover:bg-white/15'
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
  );
}
