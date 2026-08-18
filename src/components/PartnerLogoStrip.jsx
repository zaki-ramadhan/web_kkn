import React from 'react';
import LogoLoop from './reactbits/LogoLoop';
import { institutionalLogos } from '../data/bpjsData';

export default function PartnerLogoStrip({ logos = institutionalLogos }) {
  return (
    <section className="py-8 sm:py-10 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-600 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span>Kolaborasi & Sinergi Pelayanan Kesehatan Desa Cibaregbeg</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
        </p>
      </div>

      {/* ReactBits LogoLoop Continuous Nonstop Slider */}
      <div className="w-full relative">
        <LogoLoop
          logos={logos}
          speed={60}
          direction="left"
          gap={24}
          logoHeight={48}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="rgb(248 250 252)"
          scaleOnHover={true}
          ariaLabel="Institusi dan Mitra Kolaborasi Pelayanan Kesehatan"
          renderItem={(item) => (
            <div className="flex items-center gap-3.5 px-5 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-subtle hover:border-emerald-300 hover:bg-emerald-50/40 transition-all duration-200 cursor-pointer group">
              <img
                src={item.src}
                alt={item.alt}
                className="w-10 h-10 object-contain rounded-full bg-slate-50 ring-1 ring-slate-200/80 p-0.5 group-hover:scale-110 transition-transform duration-200 shrink-0"
                loading="lazy"
                decoding="async"
              />
              <div className="text-left select-none">
                <span className="block text-xs sm:text-sm font-bold text-slate-800 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                  {item.title}
                </span>
                <span className="block text-[11px] text-slate-600 font-medium leading-tight whitespace-nowrap">
                  Mitra Kolaborasi Resmi
                </span>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}
