import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Stabilo from '../ui/Stabilo';
import AdminFlowCard from '../AdminFlowCard';
import CalloutBox from '../ui/CalloutBox';
import PillCTAButton from '../ui/PillCTAButton';
import AnimatedContent from '../reactbits/AnimatedContent';
import { LayoutGrid, MoveRight } from 'lucide-react';
import { adminFlowSteps } from '../../data/bpjsData';

export default function AdminFlowSection({ steps = adminFlowSteps }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'slider'

  return (
    <section id="alur-administrasi" className="py-20 bg-slate-50/70 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tahapan Administrasi Resmi"
          title={
            <>
              Pahami Alur Administrasi <Stabilo>Pelayanan Kesehatan</Stabilo>
            </>
          }
          subtitle="Mendapatkan pelayanan kesehatan tidak hanya tentang mengetahui manfaat BPJS, tetapi juga memahami bagaimana tahapan administrasi pelayanan kesehatan dilakukan dari persiapan hingga pasca-pelayanan."
        />

        {/* View Mode Toggle Controls (Pilihan Seleksi Desain untuk User/Klien) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-subtle gap-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Tampilan Grid (7 Langkah)</span>
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                viewMode === 'slider'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <MoveRight className="w-4 h-4" />
              <span>Tampilan Alur Slider</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Modern Responsive Structured Grid (Recommended for high readability) */}
        {viewMode === 'grid' && (
          <AnimatedContent distance={30} duration={0.65} delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-12">
              {steps.map((step, idx) => (
                <div
                  key={step.step}
                  className={idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}
                >
                  <AdminFlowCard
                    step={step.step}
                    icon={step.icon}
                    title={step.title}
                    desc={step.desc}
                    why={step.why}
                    requirements={step.requirements}
                    quickFlow={step.quickFlow}
                    details={step.details}
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          </AnimatedContent>
        )}
      </div>

      {/* View Mode 2: 60fps Continuous Marquee Slider with Hover Spotlight */}
      {viewMode === 'slider' && (
        <AnimatedContent distance={30} duration={0.65} delay={0.1}>
          <div className="relative w-full overflow-hidden marquee-container group/track py-6 sm:py-8 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] mb-12">
            <div className="flex gap-6 animate-marquee py-4">
              {[...steps, ...steps].map((step, idx) => (
                <div
                  key={idx}
                  className="w-[310px] sm:w-[360px] shrink-0 py-1 transition-all duration-300 ease-out group-hover/track:opacity-45 group-hover/track:grayscale-[40%] hover:!opacity-100 hover:!grayscale-0 hover:!scale-105 relative z-0 hover:z-20"
                >
                  <AdminFlowCard
                    step={step.step}
                    icon={step.icon}
                    title={step.title}
                    desc={step.desc}
                    why={step.why}
                    requirements={step.requirements}
                    quickFlow={step.quickFlow}
                    details={step.details}
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      )}

      {/* Editorial Public Health Emergency Protocol Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={25} duration={0.6} delay={0.2}>
          <CalloutBox
            variant="brand"
            title="PENTING - KASUS GAWAT DARURAT (UGD) BEBAS RUJUKAN"
            description={
              <span>
                Untuk kondisi medis darurat yang mengancam nyawa (sesak napas berat, nyeri dada akut, luka trauma/pendarahan hebat, kejang, atau penurunan kesadaran), warga dapat <strong>langsung menuju UGD Rumah Sakit terdekat 24 Jam tanpa memerlukan surat rujukan</strong> dari Puskesmas.
              </span>
            }
            action={
              <PillCTAButton
                href="https://wa.me/628139931952?text=Halo%20BPJS%2C%20saya%20warga%20Cibaregbeg%20ingin%20tanya%20prosedur%20administrasi%20kesehatan"
                target="_blank"
                rel="noreferrer"
                variant="brand"
                size="md"
              >
                Konsultasi Alur via WA
              </PillCTAButton>
            }
          />
        </AnimatedContent>
      </div>
    </section>
  );
}
