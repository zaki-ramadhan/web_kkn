import React, { useState, useEffect, useRef } from 'react';
import {
  HeartPulse,
  Menu,
  X,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import PillCTAButton from './ui/PillCTAButton';

// Grouped sub-items for educational guides
const educationalModules = [
  {
    href: '#jenis-bpjs',
    title: 'Jenis Kepesertaan BPJS',
    desc: 'Kategori PBI, Mandiri (PBPU), dan PPU beserta iurannya',
  },
  {
    href: '#layanan-puskesmas',
    title: 'Layanan Tercover Puskesmas',
    desc: 'Cakupan poli umum, KIA/KB, gigi, dan laboratorium',
  },
  {
    href: '#layanan-digital',
    title: 'Fitur Layanan Digital JKN',
    desc: 'Antrean online mandiri, kartu digital KIS, dan skrining',
  },
  {
    href: '#solusi-adm',
    title: 'Aktivasi & Balik Domisili',
    desc: 'Solusi kartu nonaktif, cicilan REHAB, dan pindah faskes',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Precision scroll detection using IntersectionObserver on #hero-section
  useEffect(() => {
    const heroEl = document.getElementById('hero-section');
    if (!heroEl) {
      const handleScrollFallback = () => {
        setIsScrolled(window.scrollY > 400);
      };
      window.addEventListener('scroll', handleScrollFallback, { passive: true });
      return () => window.removeEventListener('scroll', handleScrollFallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        <a href="#" className="flex items-center gap-3 group shrink-0">
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
              className={`text-xs sm:text-sm font-medium block transition-colors duration-300 ${
                isScrolled ? 'text-brand-700' : 'text-lime-300 drop-shadow-sm'
              }`}
            >
              Program KKN Tematik 2026
            </span>
          </div>
        </a>

        {/* Compact Single-Line Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm sm:text-base font-medium">
          {/* Dropdown Group: Panduan Edukasi BPJS */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 py-2 px-3.5 rounded-full transition-all duration-200 cursor-pointer ${
                dropdownOpen
                  ? isScrolled
                    ? 'bg-brand-50 text-brand-900 font-bold'
                    : 'bg-white/25 text-white font-bold'
                  : isScrolled
                  ? 'text-slate-700 hover:text-brand-850 hover:bg-slate-100'
                  : 'text-slate-100 hover:text-white hover:bg-white/10 drop-shadow-sm'
              }`}
            >
              <span>Panduan Layanan</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu Flyout: Clean Typographic Editorial Links */}
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-3 w-80 sm:w-88 rounded-2xl p-2.5 bg-white border border-slate-200/90 text-slate-900 shadow-2xl ring-1 ring-black/10 z-50 animate-in fade-in slide-in-from-top-2"
              >
                <div className="space-y-1">
                  {educationalModules.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="text-sm font-bold text-slate-900 group-hover:text-brand-850 transition-colors leading-tight">
                        {item.title}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 line-clamp-1 mt-1 font-normal leading-relaxed">
                        {item.desc}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Direct Link 1: Alur Berobat */}
          <a
            href="#alur-faskes"
            className={`transition-colors duration-200 py-1.5 px-3 rounded-lg ${
              isScrolled
                ? 'text-slate-700 hover:text-brand-850'
                : 'text-slate-100 hover:text-white drop-shadow-sm'
            }`}
          >
            Alur Berobat Puskesmas
          </a>

          {/* Direct Link 2: Narahubung Tim KKN */}
          <a
            href="#darurat"
            className={`font-bold transition-colors duration-200 py-1.5 px-3 rounded-lg ${
              isScrolled
                ? 'text-brand-850 hover:text-lime-600'
                : 'text-lime-400 hover:text-lime-300 drop-shadow-sm'
            }`}
          >
            Kontak Posko KKN
          </a>
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-b border-slate-200 bg-white text-slate-900 shadow-2xl px-5 pt-4 pb-6 space-y-3"
        >
          <div className="space-y-1">
            {educationalModules.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-base font-semibold text-slate-900 hover:bg-slate-100 hover:text-brand-850 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-1">
            <a
              href="#alur-faskes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-brand-850 transition-colors"
            >
              Alur Berobat Puskesmas
            </a>
            <a
              href="#darurat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-xl text-base font-bold text-brand-850 hover:bg-brand-50 transition-colors"
            >
              Kontak Posko KKN
            </a>
          </div>

          <div className="pt-3">
            <PillCTAButton
              href="#darurat"
              variant="dark"
              size="md"
              icon={MessageSquare}
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Konsultasi Posko
            </PillCTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
