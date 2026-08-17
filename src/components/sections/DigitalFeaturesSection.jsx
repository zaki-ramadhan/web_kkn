import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Stabilo from '../ui/Stabilo';
import DigitalFeatureShowcase from '../DigitalFeatureShowcase';

export default function DigitalFeaturesSection() {
  return (
    <SectionWrapper id="layanan-digital" bg="white" className="border-t border-slate-200/80">
      <SectionHeader
        badge="Transformasi Layanan Digital"
        title={
          <>
            Fitur & Pemanfaatan <Stabilo>Layanan Digital JKN</Stabilo>
          </>
        }
        subtitle="Pelajari alur antrean online Puskesmas dari rumah, akses kartu KIS digital, skrining kesehatan mandiri, dan prosedur ganti domisili faskes."
      />

      <DigitalFeatureShowcase />
    </SectionWrapper>
  );
}
