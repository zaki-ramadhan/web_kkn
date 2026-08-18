import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Stabilo from '../ui/Stabilo';
import DigitalFeatureShowcase from '../DigitalFeatureShowcase';

export default function DigitalFeaturesSection() {
  return (
    <SectionWrapper id="layanan-digital" bg="white" className="border-t border-slate-200/80">
      <SectionHeader
        badge="Section 04 • Layanan Digital"
        title={
          <>
            Fitur & Pemanfaatan <Stabilo>Layanan Digital JKN</Stabilo>
          </>
        }
        subtitle="Panduan mandiri booking antrean Puskesmas dari rumah, KIS digital, skrining kesehatan berkala, mutasi faskes domisili, dan info ketersediaan tempat tidur RS."
      />

      <DigitalFeatureShowcase />
    </SectionWrapper>
  );
}
