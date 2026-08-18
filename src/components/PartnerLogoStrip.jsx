import React from 'react';
import LogoLoop from './reactbits/LogoLoop';
import { institutionalLogos } from '../data/bpjsData';

export default function PartnerLogoStrip({ logos = institutionalLogos }) {
  return (
    <section className="py-7 sm:py-9 bg-slate-50/90 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span>Sinergi Kolaborasi Pelayanan Kesehatan Desa Cibaregbeg</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
        </p>
      </div>

      {/* ReactBits LogoLoop: Pure Clean Logos Without Cards or Extra Text */}
      <div className="w-full relative py-2">
        <LogoLoop
          logos={logos}
          speed={55}
          direction="left"
          gap={48}
          logoHeight={56}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="rgb(248 250 252)"
          scaleOnHover={true}
          ariaLabel="Institusi dan Mitra Kolaborasi Pelayanan Kesehatan"
        />
      </div>
    </section>
  );
}
