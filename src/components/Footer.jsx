import React from 'react';
import { HeartPulse, MapPin, PhoneCall, Instagram } from 'lucide-react';
import Heading from './ui/Heading';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white pt-16 pb-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-800">
          {/* Col 1: Profil Program KKN */}
          <div className="lg:col-span-5 sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo/logo_kkn_ars.webp"
                alt="Logo KKN ARS Cibaregbeg"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm ring-1 ring-white/20 shrink-0 bg-white"
              />
              <div>
                <span className="font-grotesk font-black text-xl tracking-tight text-white block">
                  POSKO SEHAT BPJS
                </span>
                <span className="text-sm font-bold text-lime-300 block">
                  KKN ARS Cibaregbeg 2026
                </span>
              </div>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              Portal informasi dan edukasi kesehatan mandiri yang dikembangkan oleh Tim Mahasiswa KKN S1 Administrasi Rumah Sakit (ARS) Universitas Indonesia Maju (UIMA) untuk mempermudah warga desa memahami alur dan hak pelayanan kesehatan.
            </p>
            <div className="text-sm text-lime-400 font-semibold">
              S1 Administrasi Rumah Sakit, Universitas Indonesia Maju (UIMA)
            </div>
          </div>

          {/* Col 2: Modul Panduan Edukasi */}
          <div className="lg:col-span-3 sm:col-span-1">
            <Heading as="h4" level="4" color="light" className="text-base font-bold mb-4">
              Panduan Edukasi
            </Heading>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <a href="#jenis-bpjs" className="hover:text-lime-400 transition-colors">
                  Kategori Kepesertaan BPJS
                </a>
              </li>
              <li>
                <a href="#alur-faskes" className="hover:text-lime-400 transition-colors">
                  Alur Berobat di Puskesmas
                </a>
              </li>
              <li>
                <a href="#layanan-puskesmas" className="hover:text-lime-400 transition-colors">
                  Cakupan Tindakan & Poli
                </a>
              </li>
              <li>
                <a href="#layanan-digital" className="hover:text-lime-400 transition-colors">
                  Aplikasi Layanan Digital JKN
                </a>
              </li>
              <li>
                <a href="#solusi-adm" className="hover:text-lime-400 transition-colors">
                  Aktivasi Kartu & Cicilan REHAB
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Posko Mahasiswa KKN ARS */}
          <div className="lg:col-span-4 sm:col-span-1">
            <Heading as="h4" level="4" color="light" className="text-base font-bold mb-4">
              Posko KKN ARS Cibaregbeg
            </Heading>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>Kp. Nyalindung / Talaga, Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="https://wa.me/6282145678901?text=Halo%20Ketua%20KKN%20ARS" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors">
                  Ketua KKN: 0821-****-01
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="https://wa.me/6281234567890?text=Halo%20Divisi%20Humas%20KKN%20ARS" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors">
                  Divisi Humas KKN: 0812-****-90
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/kknars_cibaregbeg/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 border border-white/15"
                >
                  <Instagram className="w-4 h-4 text-lime-400 group-hover:text-white" />
                  <span>@kknars_cibaregbeg</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <p>© 2026 KKN ARS Cibaregbeg, Universitas Indonesia Maju (UIMA).</p>
          <div className="flex items-center gap-6">
            <a href="#jenis-bpjs" className="hover:text-white transition-colors">
              Materi Edukasi
            </a>
            <a href="#layanan-digital" className="hover:text-white transition-colors">
              Layanan Digital
            </a>
            <a href="#darurat" className="hover:text-white transition-colors">
              Kontak Mahasiswa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
