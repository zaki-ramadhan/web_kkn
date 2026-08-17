import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans">
      {/* Main Content (Centered) */}
      <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-auto">
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
      <footer className="w-full border-t border-slate-200/80 py-6 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          © 2026 Tim Pengabdian KKN Mahasiswa Desa Sukamakmur. Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
}
