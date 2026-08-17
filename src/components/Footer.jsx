import React from 'react';
import { HeartPulse, MapPin, PhoneCall } from 'lucide-react';
import Heading from './ui/Heading';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white pt-16 pb-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-800">
          {/* Col 1 */}
          <div className="lg:col-span-5 sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lime-400 text-brand-950 flex items-center justify-center font-bold">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="font-grotesk font-black text-xl tracking-tight text-white block">
                  POSKO SEHAT BPJS
                </span>
                <span className="text-sm font-bold text-lime-300 block">
                  KKN ARS CIBAREGBEG 2026
                </span>
              </div>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              Portal informasi dan edukasi kesehatan mandiri yang dikembangkan oleh Tim Mahasiswa KKN ARS CIBAREGBEG untuk mempermudah warga desa memahami alur dan hak pelayanan kesehatan.
            </p>
            <div className="text-sm text-slate-300">
              Inisiatif Program Kerja Bidang Kesehatan Masyarakat • KKN ARS CIBAREGBEG
            </div>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-2 sm:col-span-1">
            <Heading as="h4" level="4" color="light" className="text-base font-bold mb-4">
              Panduan Cepat
            </Heading>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <a href="#jenis-bpjs" className="hover:text-lime-400 transition-colors">
                  Kategori Kepesertaan
                </a>
              </li>
              <li>
                <a href="#alur-faskes" className="hover:text-lime-400 transition-colors">
                  Alur Berobat Puskesmas
                </a>
              </li>
              <li>
                <a href="#layanan-puskesmas" className="hover:text-lime-400 transition-colors">
                  Cakupan Tindakan & Poli
                </a>
              </li>
              <li>
                <a href="#layanan-digital" className="hover:text-lime-400 transition-colors">
                  Aplikasi Layanan Digital
                </a>
              </li>
              <li>
                <a href="#solusi-adm" className="hover:text-lime-400 transition-colors">
                  Aktivasi Kartu & Cicilan
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-2 sm:col-span-1">
            <Heading as="h4" level="4" color="light" className="text-base font-bold mb-4">
              Layanan Resmi
            </Heading>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <a
                  href="https://bpjs-kesehatan.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-lime-400 transition-colors"
                >
                  Portal BPJS Kesehatan
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628118750400"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-lime-400 transition-colors"
                >
                  CHIKA BPJS (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="tel:165"
                  className="hover:text-lime-400 transition-colors"
                >
                  Care Center BPJS 165
                </a>
              </li>
              <li>
                <a
                  href="tel:119"
                  className="text-rose-400 hover:text-rose-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  IGD & Ambulans 119
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="lg:col-span-3">
            <Heading as="h4" level="4" color="light" className="text-base font-bold mb-4">
              Posko KKN ARS Cibaregbeg
            </Heading>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>Posko Induk KKN ARS, Balai Pertemuan Warga, Desa Cibaregbeg</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="https://wa.me/6282145678901?text=Halo%20Kordes%20Raditya" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors">
                  Kordes Raditya: 0821-****-01
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="https://wa.me/6281234567890?text=Halo%20Divisi%20Kesehatan%20Anindya" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors">
                  Divisi Kesehatan Anindya: 0812-****-90
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <p>© 2026 Posko Edukasi Kesehatan • Karya Tim Mahasiswa KKN ARS CIBAREGBEG.</p>
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
