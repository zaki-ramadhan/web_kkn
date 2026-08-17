import React from 'react';
import { HeartPulse, MapPin, PhoneCall } from 'lucide-react';
import Heading from './ui/Heading';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white border-t border-brand-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-800">
          {/* Col 1 */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center text-brand-950 font-bold">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="font-grotesk font-bold text-lg text-white tracking-tight block leading-tight">
                  POSKO SEHAT BPJS
                </span>
                <span className="text-[11px] font-medium text-lime-300 block">
                  Karya Tim Mahasiswa KKN 2026
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Portal informasi dan edukasi kesehatan mandiri yang dikembangkan oleh Tim Mahasiswa KKN Tematik 2026 untuk mempermudah warga desa memahami alur dan hak pelayanan kesehatan.
            </p>
            <div className="text-xs text-slate-400">
              Inisiatif Program Kerja Bidang Kesehatan Masyarakat Desa Sukamakmur
            </div>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-2 sm:col-span-1">
            <Heading as="h4" level="4" color="light" className="text-sm font-bold mb-4">
              Panduan Cepat
            </Heading>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#jenis-bpjs" className="hover:text-lime-400 transition-colors">
                  Jenis Kepesertaan
                </a>
              </li>
              <li>
                <a href="#alur-faskes" className="hover:text-lime-400 transition-colors">
                  Alur Berobat Faskes
                </a>
              </li>
              <li>
                <a href="#layanan-puskesmas" className="hover:text-lime-400 transition-colors">
                  Layanan Tercover
                </a>
              </li>
              <li>
                <a href="#layanan-digital" className="hover:text-lime-400 transition-colors">
                  Fitur Layanan Digital
                </a>
              </li>
              <li>
                <a href="#solusi-adm" className="hover:text-lime-400 transition-colors">
                  Aktivasi & Domisili
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-3 sm:col-span-1">
            <Heading as="h4" level="4" color="light" className="text-sm font-bold mb-4">
              Materi Edukasi
            </Heading>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#solusi-adm" className="hover:text-lime-400 transition-colors">
                  Panduan Cicilan REHAB
                </a>
              </li>
              <li>
                <a href="#solusi-adm" className="hover:text-lime-400 transition-colors">
                  Syarat Balik FKTP Domisili
                </a>
              </li>
              <li>
                <a href="#layanan-digital" className="hover:text-lime-400 transition-colors">
                  Tata Cara Antrean Online
                </a>
              </li>
              <li>
                <a href="#layanan-puskesmas" className="hover:text-lime-400 transition-colors">
                  Daftar Poli & Lab Puskesmas
                </a>
              </li>
              <li>
                <a href="#darurat" className="hover:text-lime-400 transition-colors">
                  Kriteria Gawat Darurat Medis
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="lg:col-span-3">
            <Heading as="h4" level="4" color="light" className="text-sm font-bold mb-4">
              Posko Mahasiswa KKN
            </Heading>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>Posko Induk KKN, Balai Pertemuan Warga RT 02 / RW 01, Desa Sukamakmur</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="https://wa.me/6282145678901?text=Halo%20Kordes%20Raditya" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors">
                  Kordes Raditya: 0821-4567-8901
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="https://wa.me/6281234567890?text=Halo%20Divisi%20Kesehatan%20Anindya" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors">
                  Divisi Kesehatan Anindya: 0812-3456-7890
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Posko Edukasi Kesehatan • Karya Tim Mahasiswa KKN Tematik Desa Sukamakmur.</p>
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
