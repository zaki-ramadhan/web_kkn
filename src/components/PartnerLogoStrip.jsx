import React from 'react';
import LogoLoop from './reactbits/LogoLoop';
import { institutionalLogos } from '../data/bpjsData';

export default function PartnerLogoStrip({ logos = institutionalLogos }) {
  return (
    <section className="py-6 sm:py-7 bg-slate-50/70 border-y border-slate-200/70 relative overflow-hidden">
      <div className="w-full relative">
        <LogoLoop
          logos={logos}
          speed={50}
          direction="left"
          gap={56}
          logoHeight={52}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="rgb(248 250 252)"
          scaleOnHover={true}
          grayscaleByDefault={true}
          ariaLabel="Institusi dan Mitra Kolaborasi Pelayanan Kesehatan"
        />
      </div>
    </section>
  );
}
