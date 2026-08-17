import React from 'react';
import { Info } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import StepCard from '../StepCard';
import CalloutBox from '../ui/CalloutBox';
import PillCTAButton from '../ui/PillCTAButton';
import { registrationSteps } from '../../data/bpjsData';

export default function FlowSection({ steps = registrationSteps }) {
  return (
    <section id="alur-faskes" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Alur Pelayanan Faskes"
          title="Alur Pelayanan Pasien BPJS di FKTP / Puskesmas"
          subtitle="Ikuti 5 langkah terpadu mulai dari pengambilan antrean hingga pengambilan obat tanpa biaya tambahan."
        />
      </div>

      {/* Continuous 60fps Nonstop Slider Track with Focus Spotlight on Hover */}
      <div className="relative w-full overflow-hidden marquee-container group/track py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex gap-6 animate-marquee py-3">
          {[...steps, ...steps].map((step, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] shrink-0 py-1 transition-all duration-300 ease-out group-hover/track:opacity-45 group-hover/track:grayscale-[40%] hover:!opacity-100 hover:!grayscale-0 hover:!scale-105 relative z-0 hover:z-20"
            >
              <StepCard
                step={step.step}
                icon={step.icon}
                title={step.title}
                desc={step.desc}
                highlight={step.highlight}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CalloutBox
          icon={Info}
          variant="brand"
          title="Prinsip Pelayanan Rujukan Berjenjang"
          description="Pasien BPJS wajib berobat ke Faskes Tingkat Pertama (FKTP) tempat terdaftar terlebih dahulu. Pasien hanya dapat langsung ke UGD Rumah Sakit tanpa surat rujukan jika berada dalam kondisi gawat darurat mengancam jiwa."
          className="mt-12"
        >
          <PillCTAButton href="#layanan-digital" variant="dark" size="sm">
            Cek FKTP Anda di Layanan Digital JKN
          </PillCTAButton>
        </CalloutBox>
      </div>
    </section>
  );
}
