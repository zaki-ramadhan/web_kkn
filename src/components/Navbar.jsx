import React, { useState, useRef } from 'react';
import {
  Menu,
  X,
  MessageSquare,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import PillCTAButton from './ui/PillCTAButton';
import { useScrolledState } from '../hooks/useScrolledState';
import { useClickOutside } from '../hooks/useClickOutside';
import { brandData, navEducationalModules } from '../data/bpjsData';

export default function Navbar({ modules = navEducationalModules }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // Precision scroll detection via custom hook
  const isScrolled = useScrolledState('hero-section', 0.15);

  // Click outside handling via custom hooks
  useClickOutside(dropdownRef, () => setDropdownOpen(false), dropdownOpen);
  useClickOutside(headerRef, () => setMobileMenuOpen(false), mobileMenuOpen);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-card-depth'
            : 'bg-transparent backdrop-blur-[2px] border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/images/logo/KKN_UIMA.png"
              alt="Logo KKN ARS Cibaregbeg"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shadow-sm ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-200 shrink-0 bg-white"
            />
            <div>
              <span
                className={`font-grotesk font-bold text-lg tracking-tight block leading-tight transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white drop-shadow-sm'
                }`}
              >
                {brandData.navBrandTitle}
              </span>
              <span
                className={`text-sm font-bold block transition-colors duration-300 ${
                  isScrolled ? 'text-brand-700' : 'text-lime-300 drop-shadow-sm'
                }`}
              >
                {brandData.navBrandSubtitle}
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
                      ? 'bg-brand-50 text-emerald-600 font-bold'
                      : 'bg-white/25 text-white font-bold'
                    : isScrolled
                    ? 'text-slate-700 hover:text-emerald-600 hover:bg-slate-100'
                    : 'text-slate-100 hover:text-lime-300 hover:bg-white/10 drop-shadow-sm'
                }`}
              >
                <span>Panduan Layanan</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu Flyout: 3 Columns x 2 Rows Mega Menu */}
              {dropdownOpen && (
                <div
                  className="absolute top-full -left-12 lg:-left-20 mt-3 w-[720px] lg:w-[820px] max-w-[95vw] rounded-3xl p-5 bg-white border border-slate-200/90 text-slate-900 shadow-2xl ring-1 ring-black/10 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-lime-500" />
                      <span>Modul Panduan & Layanan Kesehatan</span>
                    </div>
                    <span className="text-xs text-slate-600 font-medium">6 Panduan Utama</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {modules.map((item, idx) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="relative flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/70 hover:bg-emerald-50 border border-slate-200/70 hover:border-emerald-300 transition-all duration-200 group shadow-2xs hover:shadow-subtle"
                      >
                        <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white text-slate-700 font-grotesk font-bold text-xs flex items-center justify-center shrink-0 transition-colors mt-0.5 shadow-xs">
                          0{idx + 1}
                        </div>
                        <div className="flex-1 min-w-0 pr-4">
                          <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-600 line-clamp-1 mt-1 font-normal leading-normal">
                            {item.desc}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5 absolute top-3.5 right-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Link 1: Alur Pendaftaran & Pelayanan */}
            <a
              href="#alur-faskes"
              className={`transition-colors duration-200 py-1.5 px-3 rounded-lg ${
                isScrolled
                  ? 'text-slate-700 hover:text-emerald-600'
                  : 'text-slate-100 hover:text-lime-300 drop-shadow-sm'
              }`}
            >
              Alur Puskesmas
            </a>

            {/* Direct Link 2: Pusat Informasi & Kontak */}
            <a
              href="#darurat"
              className={`font-bold transition-colors duration-200 py-1.5 px-3 rounded-lg ${
                isScrolled
                  ? 'text-brand-850 hover:text-emerald-600'
                  : 'text-lime-400 hover:text-lime-300 drop-shadow-sm'
              }`}
            >
              Kontak Darurat
            </a>
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <PillCTAButton
              href="https://wa.me/628892120024?text=Halo%20Kader%20Posyandu%2C%20saya%20warga%20Cibaregbeg%20ingin%20konsultasi"
              target="_blank"
              rel="noreferrer"
              variant={isScrolled ? 'dark' : 'lime'}
              size="sm"
              icon={MessageSquare}
            >
              Tanya Kader
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
            <div className="space-y-1.5">
              {modules.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-900 hover:bg-emerald-50 hover:text-emerald-700 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white text-[11px] font-grotesk font-bold flex items-center justify-center text-slate-600 transition-colors">
                      0{idx + 1}
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-1">
              <a
                href="#alur-faskes"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
              >
                Alur Pendaftaran & Pelayanan
              </a>
              <a
                href="#darurat"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-base font-bold text-brand-850 hover:bg-brand-50 hover:text-emerald-600 transition-colors"
              >
                Pusat Informasi & Kontak Darurat
              </a>
            </div>

            <div className="pt-3">
              <PillCTAButton
                href="https://wa.me/628892120024?text=Halo%20Kader%20Posyandu%2C%20saya%20warga%20Cibaregbeg%20ingin%20konsultasi"
                target="_blank"
                rel="noreferrer"
                variant="dark"
                size="md"
                icon={MessageSquare}
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tanya Kader Posyandu
              </PillCTAButton>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu: Closes on outside tap */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 bg-black/40 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
