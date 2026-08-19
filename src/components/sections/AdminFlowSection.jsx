import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import AdminFlowTimeline from '../AdminFlowTimeline';
import { ShieldAlert, ArrowRight } from 'lucide-react';
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

              {/* Widget Card Kasus Gawat Darurat (Double-Layered Accent Frame Matching Reference) */}
              <div className="relative rounded-3xl bg-emerald-800 p-1.5 shadow-card-depth border border-emerald-700/80 overflow-hidden group transition-all duration-300 hover:shadow-2xl">
                {/* Inner Card Container */}
                <div className="bg-white rounded-2xl p-5 sm:p-5.5 text-slate-900 shadow-2xs">
                  {/* Header inside Card */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-600 shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <h4 className="font-grotesk font-bold text-base text-slate-950">
                      Kasus Gawat Darurat (UGD)
                    </h4>
                  </div>

                  {/* Narrative */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3.5">
                    Untuk kondisi medis kritis yang mengancam nyawa (sesak berat, trauma, penurunan kesadaran):
                  </p>

                  {/* Structured Criteria Checklist */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-800 font-medium">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span>Langsung menuju UGD RS terdekat</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span>100% Bebas surat rujukan FKTP Puskesmas</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span>Cukup bawa e-KTP / Kartu KIS Digital</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Action Bar (Matching Reference Image) */}
                <a
                  href="https://wa.me/628139931952?text=Halo%20BPJS%2C%20saya%20warga%20Cibaregbeg%20ingin%20tanya%20prosedur%20administrasi%20kesehatan"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 sm:py-3 flex items-center justify-between text-white hover:text-lime-300 transition-colors duration-200 text-xs sm:text-sm font-bold group/btn"
                >
                  <span>Konsultasi Alur via WhatsApp</span>
                  <div className="flex items-center gap-1">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover/btn:bg-lime-400 group-hover/btn:text-brand-950 flex items-center justify-center transition-all duration-200 shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </div>
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
