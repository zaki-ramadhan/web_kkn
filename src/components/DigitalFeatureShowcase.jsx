import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { digitalFeatures as defaultFeatures } from '../data/bpjsData';

export default function DigitalFeatureShowcase({ features = defaultFeatures }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* Left Column: Authentic Real Context Photo & Village Assistance Banner */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
        <div className="relative rounded-3xl overflow-hidden shadow-card-depth border border-slate-200/90 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&h=1000&q=80&fm=webp"
            alt="Pendampingan Layanan Digital Kesehatan"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white">
            <div className="text-sm font-bold text-lime-400 uppercase tracking-wider mb-1">
              Edukasi Digital Mahasiswa KKN
            </div>
            <p className="text-sm sm:text-base text-slate-100 leading-snug font-medium">
              Pendampingan warga Desa Sukamakmur dalam memanfaatkan fitur antrean mandiri dan KIS digital dari ponsel.
            </p>
          </div>
        </div>

        {/* Posko Assistance Box */}
        <div className="bg-brand-50 border border-brand-200/80 rounded-2xl p-6 flex flex-col justify-between gap-4">
          <div>
            <h4 className="font-grotesk font-bold text-base sm:text-lg text-brand-950 mb-1">
              Butuh Konsultasi Alur Layanan BPJS?
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Kunjungi Posko Mahasiswa KKN di Balai Pertemuan Desa Sukamakmur untuk konsultasi langsung alur berobat Puskesmas dan panduan administrasi faskes.
            </p>
          </div>
          <a
            href="#darurat"
            className="w-full py-3 px-5 rounded-full bg-brand-850 hover:bg-brand-950 text-lime-300 font-bold text-sm flex items-center justify-between transition-colors shadow-subtle"
          >
            <span>Hubungi Narahubung Posko</span>
            <ArrowUpRight className="w-4 h-4 text-lime-400" />
          </a>
        </div>
      </div>

      {/* Right Column: Editorial Step Flow with Clean Dividers (No Card Boxes) */}
      <div className="lg:col-span-7 divide-y divide-slate-200/90">
        {features.map((item) => (
          <div key={item.number} className="py-7 first:pt-0 last:pb-0">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="font-grotesk font-black text-3xl sm:text-4xl text-brand-850 shrink-0 mt-0.5">
                {item.number}
              </span>
              <div className="space-y-2 flex-1">
                <h3 className="font-grotesk font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 pt-1 text-sm font-semibold text-brand-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
