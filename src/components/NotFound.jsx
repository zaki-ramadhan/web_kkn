import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between p-6 sm:p-12 font-sans">
      {/* Minimal Header */}
      <div className="max-w-3xl mx-auto w-full">
        <a
          href="/"
          className="text-sm font-bold text-brand-900 hover:text-brand-700 transition-colors inline-flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-lime-500" />
          <span>Panduan Layanan BPJS Kesehatan • KKN Desa Sukamakmur</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto w-full py-16 sm:py-24">
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
      </div>

      {/* Minimal Footer */}
      <div className="max-w-3xl mx-auto w-full pt-8 border-t border-slate-100 text-xs text-slate-400">
        © 2026 Tim Pengabdian KKN Mahasiswa Desa Sukamakmur.
      </div>
    </div>
  );
}
