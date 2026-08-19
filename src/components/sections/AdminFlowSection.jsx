import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import AdminFlowTimeline from '../AdminFlowTimeline';
import CalloutBox from '../ui/CalloutBox';
import PillCTAButton from '../ui/PillCTAButton';
import AnimatedContent from '../reactbits/AnimatedContent';
import { adminFlowSteps } from '../../data/bpjsData';

export default function AdminFlowSection({ steps = adminFlowSteps }) {
  return (
    <section id="alur-administrasi" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Kolom Kiri: True Sticky Guide */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
            <div>
              <Eyebrow variant="brand">
                Tahapan Administrasi Resmi
              </Eyebrow>
              <h2 className="font-grotesk text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-950 tracking-tight leading-[1.15] mb-4">
                Pahami Alur Administrasi <Stabilo>Pelayanan Kesehatan</Stabilo>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                Mendapatkan pelayanan kesehatan tidak hanya tentang mengetahui manfaat BPJS, tetapi juga memahami bagaimana tahapan administrasi pelayanan kesehatan dilakukan dari persiapan berkas hingga pasca-pelayanan.
              </p>

              {/* Quick Public Health Protocol Callout in Left Column */}
              <CalloutBox
                variant="brand"
                title="KASUS GAWAT DARURAT (UGD)"
                description={
                  <span>
                    Untuk kondisi gawat darurat medis yang mengancam nyawa, warga dapat <strong>langsung menuju UGD RS terdekat 24 Jam bebas rujukan</strong>.
                  </span>
                }
                action={
                  <PillCTAButton
                    href="https://wa.me/628139931952?text=Halo%20BPJS%2C%20saya%20warga%20Cibaregbeg%20ingin%20tanya%20prosedur%20administrasi%20kesehatan"
                    target="_blank"
                    rel="noreferrer"
                    variant="brand"
                    size="sm"
                  >
                    Konsultasi Alur via WA
                  </PillCTAButton>
                }
              />
            </div>
          </div>

          {/* Kolom Kanan: Vertical Interactive Scroll Progress Timeline */}
          <div className="lg:col-span-7">
            <AdminFlowTimeline steps={steps} />
          </div>

        </div>
      </div>
    </section>
  );
}
