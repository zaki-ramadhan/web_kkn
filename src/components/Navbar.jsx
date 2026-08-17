import React, { useState } from 'react';
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

  return (
    <>
      {/* Top Ribbon */}
      <div className="bg-brand-950 text-white text-xs py-2 px-4 border-b border-brand-800">
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

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-850 flex items-center justify-center text-lime-400 shadow-subtle group-hover:bg-brand-950 transition-colors">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="font-grotesk font-bold text-lg text-slate-900 tracking-tight block leading-tight">
                POSKO SEHAT BPJS
              </span>
              <span className="text-[11px] font-medium text-brand-700 block">
                Program KKN Tematik 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  item.isHighlight
                    ? 'text-brand-850 font-bold hover:text-lime-600 transition-colors'
                    : 'hover:text-brand-850 transition-colors'
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Nav CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <PillCTAButton href="#darurat" variant="dark" size="sm" icon={MessageSquare}>
              Konsultasi Posko
            </PillCTAButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 space-y-3 shadow-lg">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-semibold py-1.5 ${
                  item.isHighlight ? 'text-brand-850 font-bold' : 'text-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
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
    </>
  );
}
