import React from 'react';
import LogoLoop from './reactbits/LogoLoop';
import { institutionalLogos } from '../data/bpjsData';

export default function PartnerLogoStrip({ logos = institutionalLogos }) {
  return (
    <section className="py-3.5 sm:py-4.5 bg-slate-50/70 border-y border-slate-200/70 relative overflow-hidden">
      <div className="w-full relative">
        <LogoLoop
          logos={logos}
          speed={48}
          direction="left"
          gap={64}
          logoHeight={72}
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
