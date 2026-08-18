import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Stabilo from '../ui/Stabilo';
import StepCard from '../StepCard';
import CalloutBox from '../ui/CalloutBox';
import PillCTAButton from '../ui/PillCTAButton';
import AnimatedContent from '../reactbits/AnimatedContent';
import { registrationSteps } from '../../data/bpjsData';

export default function FlowSection({ steps = registrationSteps }) {
  return (
    <section id="alur-faskes" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Section 02 • Alur Faskes"
          title={
            <>
              Alur Pendaftaran & Pelayanan <Stabilo>Puskesmas</Stabilo>
            </>
          }
          subtitle="Ikuti 5 tahapan prosedur berobat mulai dari antrean online, loket pendaftaran, pemeriksaan dokter, farmasi obat generik gratis, hingga rujukan online."
        />
      </div>

      {/* Continuous 60fps Nonstop Slider Track with Focus Spotlight on Hover */}
      <AnimatedContent distance={30} duration={0.65} delay={0.1}>
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
      </AnimatedContent>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={25} duration={0.6} delay={0.2}>
          <CalloutBox
            variant="brand"
            title="PENTING - KASUS GAWAT DARURAT (UGD) BEBAS RUJUKAN"
            description={
              <>
                Berdasarkan <strong className="font-semibold text-slate-900">Permenkes RI No. 28/2014</strong>, dalam{' '}
                <strong className="font-semibold text-slate-900">kondisi gawat darurat yang mengancam nyawa</strong> (seperti henti jantung, sesak napas akut berat, penurunan kesadaran/koma, cedera fisik berat akibat kecelakaan, pendarahan hebat, atau kejang demam anak), pasien{' '}
                <strong className="font-bold text-brand-950 underline decoration-lime-500 decoration-2 underline-offset-2">
                  BERHAK LANGSUNG ke IGD Rumah Sakit mana saja tanpa surat rujukan dari Puskesmas
                </strong>{' '}
                dan <strong className="font-semibold text-slate-900">dijamin 100% oleh BPJS Kesehatan</strong>.
              </>
            }
            className="mt-12"
          >
            <PillCTAButton href="#darurat" variant="dark" size="sm">
              Lihat Kontak & Narahubung
            </PillCTAButton>
          </CalloutBox>
        </AnimatedContent>
      </div>
    </section>
  );
}
