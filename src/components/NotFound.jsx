import React from 'react';
import { HeartPulse, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans">
      {/* Top Navbar Header with Unclickable Logo */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo (Static / Non-clickable) */}
          <div className="flex items-center gap-3 select-none">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-850 text-lime-400 shadow-subtle">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="font-grotesk font-bold text-lg tracking-tight block leading-tight text-slate-900">
                POSKO SEHAT BPJS
              </span>
              <span className="text-xs sm:text-sm font-medium block text-brand-700">
                Program KKN Tematik 2026
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-36 pb-16 sm:pt-44 sm:pb-24 my-auto">
        <span className="font-grotesk font-black text-sm text-slate-400 tracking-wider uppercase block mb-3">
          Error 404
        </span>

        <h1 className="font-grotesk font-bold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight mb-4">
          Halaman tidak ditemukan.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
          Alamat halaman yang Anda tuju tidak tersedia atau tautan telah dipindahkan. Silakan kembali ke beranda untuk melihat panduan lengkap layanan faskes dan BPJS Kesehatan.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-900 hover:bg-brand-950 text-white font-bold text-sm transition-colors shadow-subtle"
        >
          <ArrowLeft className="w-4 h-4 text-lime-400" />
          <span>Kembali ke Halaman Utama</span>
        </a>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full border-t border-slate-200/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          © 2026 Tim Pengabdian KKN Mahasiswa Desa Sukamakmur. Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
}
