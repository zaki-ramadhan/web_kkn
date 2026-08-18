import React from 'react';
import { MapPin, PhoneCall, Instagram, Video } from 'lucide-react';
import Heading from './ui/Heading';
import { brandData, footerData } from '../data/bpjsData';

export default function Footer({ f = footerData }) {
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
                  {brandData.navBrandTitle}
                </span>
                <span className="text-sm font-bold text-lime-300 block">
                  {brandData.navBrandSubtitle}
                </span>
              </div>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              {f.desc}
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
                  1. Jenis & Kategori Kepesertaan
                </a>
              </li>
              <li>
                <a href="#alur-faskes" className="hover:text-lime-400 transition-colors">
                  2. Alur Pendaftaran & Pelayanan
                </a>
              </li>
              <li>
                <a href="#layanan-puskesmas" className="hover:text-lime-400 transition-colors">
                  3. Cakupan Layanan & Poli
                </a>
              </li>
              <li>
                <a href="#layanan-digital" className="hover:text-lime-400 transition-colors">
                  4. Fitur Layanan Digital JKN
                </a>
              </li>
              <li>
                <a href="#solusi-adm" className="hover:text-lime-400 transition-colors">
                  5. Panduan Administrasi (FAQ)
                </a>
              </li>
              <li>
                <a href="#darurat" className="hover:text-lime-400 transition-colors">
                  6. Pusat Informasi & Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Posko & Kontak Resmi */}
          <div className="lg:col-span-4 sm:col-span-1">
            <Heading as="h4" level="4" color="light" className="text-base font-bold mb-4">
              Posko & Kontak Resmi
            </Heading>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>{f.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-lime-400 shrink-0" />
                <a
                  href={f.posyanduLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-lime-400 transition-colors"
                >
                  Posyandu: {f.posyanduContact}
                </a>
              </div>

              {/* Social Media Links: TikTok & Instagram */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={f.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-slate-200 hover:text-white text-xs font-semibold transition-all duration-200 border border-white/15"
                >
                  <Instagram className="w-3.5 h-3.5 text-lime-400" />
                  <span>{f.instagram}</span>
                </a>
                <a
                  href={f.tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-black text-slate-200 hover:text-white text-xs font-semibold transition-all duration-200 border border-white/15"
                >
                  <Video className="w-3.5 h-3.5 text-lime-400" />
                  <span>TikTok {f.tiktok}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{f.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#jenis-bpjs" className="hover:text-slate-200 transition-colors">
              Ketentuan Layanan
            </a>
            <a href="#darurat" className="hover:text-slate-200 transition-colors">
              Pusat Bantuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
