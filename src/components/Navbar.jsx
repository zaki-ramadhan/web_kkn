import React, { useState, useEffect, useRef } from 'react';
import {
  HeartPulse,
  Menu,
  X,
  MessageSquare,
  ChevronDown,
  ShieldCheck,
  Stethoscope,
  Laptop,
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import PillCTAButton from './ui/PillCTAButton';

// Grouped sub-items for educational guides
const educationalModules = [
  {
    href: '#jenis-bpjs',
    title: 'Jenis Kepesertaan BPJS',
    desc: 'Kategori PBI, Mandiri (PBPU), dan PPU beserta iurannya',
    icon: ShieldCheck,
  },
  {
    href: '#layanan-puskesmas',
    title: 'Layanan Tercover Puskesmas',
    desc: 'Cakupan poli umum, KIA/KB, gigi, dan laboratorium gratis',
    icon: Stethoscope,
  },
  {
    href: '#layanan-digital',
    title: 'Fitur Layanan Digital JKN',
    desc: 'Antrean online mandiri, kartu digital KIS, dan skrining',
    icon: Laptop,
  },
  {
    href: '#solusi-adm',
    title: 'Aktivasi & Balik Domisili',
    desc: 'Solusi kartu nonaktif, cicilan REHAB, dan pindah faskes',
    icon: RefreshCw,
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
        rootMargin: '-80px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(heroEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
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

            {/* Dropdown Menu Flyout: SOLID OPAQUE WHITE for Guaranteed Clarity */}
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-3 w-80 sm:w-96 rounded-2xl p-3 bg-white border border-slate-200/90 text-slate-900 shadow-2xl ring-1 ring-black/10 z-50 animate-in fade-in slide-in-from-top-2"
              >
                <div className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 mb-1 text-slate-500">
                  Modul Edukasi Kesehatan
                </div>
                <div className="space-y-1">
                  {educationalModules.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 text-slate-900 transition-all duration-150 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100/90 text-brand-850 group-hover:bg-brand-900 group-hover:text-lime-400 flex items-center justify-center shrink-0 shadow-subtle transition-colors duration-200 mt-0.5">
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-slate-900 group-hover:text-brand-850 leading-tight">
                            {item.title}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-600 line-clamp-1 mt-0.5 font-normal leading-relaxed">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
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

      {/* Mobile Menu Drawer: SOLID OPAQUE WHITE */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-b border-slate-200 bg-white text-slate-900 shadow-2xl px-5 pt-4 pb-6 space-y-3"
        >
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider pt-1">
            Materi & Panduan
          </div>
          <div className="space-y-1">
            {educationalModules.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-1">
            <a
              href="#alur-faskes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Alur Berobat Puskesmas
            </a>
            <a
              href="#darurat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-xl text-base font-bold text-brand-850 hover:bg-slate-100 transition-colors"
            >
              Kontak Posko KKN
            </a>
          </div>

          <div className="pt-3">
            <PillCTAButton
              href="#darurat"
              onClick={() => setMobileMenuOpen(false)}
              variant="dark"
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
