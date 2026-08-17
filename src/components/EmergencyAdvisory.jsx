import React from 'react';
import Eyebrow from './ui/Eyebrow';
import { emergencyCriteria } from '../data/bpjsData';

export default function EmergencyAdvisory({
  criteria = emergencyCriteria,
  regulation = 'Permenkes RI No. 28 Tahun 2014 & Ketentuan BPJS Kesehatan',
}) {
  return (
    <div className="mt-14 bg-brand-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-brand-800 shadow-forest-card relative overflow-hidden">
      {/* Ambient subtle glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Directive & Legal Exemption */}
        <div className="lg:col-span-6 space-y-3">
          <Eyebrow variant="rose">
            Prosedur Gawat Darurat Medis
          </Eyebrow>

          <h3 className="font-grotesk text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Hak Bebas Rujukan Langsung ke IGD Rumah Sakit
          </h3>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            Dalam situasi medis darurat yang mengancam nyawa, pasien peserta BPJS berhak{' '}
            <strong className="text-white font-semibold">
              langsung ditangani di Instalasi Gawat Darurat (IGD) rumah sakit mana pun
            </strong>{' '}
            tanpa memerlukan surat rujukan dari FKTP/Puskesmas dan tanpa uang muka.
          </p>

          <div className="pt-2 text-sm text-slate-300 font-medium border-t border-white/10">
            Landasan Regulasi: {regulation}
          </div>
        </div>

        {/* Right Column: Clinical Emergency Criteria List with Cascading Tilt / Crumble Effect */}
        <div className="lg:col-span-6 space-y-3 pt-2 pb-2">
          <div className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">
            Kriteria Klinis Penanganan Gawat Darurat:
          </div>

          {criteria.map((item, idx) => {
            const tiltClass =
              idx === 1
                ? 'md:rotate-[1.5deg] md:translate-x-2.5 md:translate-y-0.5 md:scale-[0.99] origin-top-left hover:md:rotate-0 hover:md:translate-x-0 hover:md:translate-y-0 hover:md:scale-100'
                : idx === 2
                ? 'md:rotate-[3.2deg] md:translate-x-5 md:translate-y-1.5 md:scale-[0.98] origin-top-left hover:md:rotate-0 hover:md:translate-x-0 hover:md:translate-y-0 hover:md:scale-100'
                : 'md:rotate-0';

            return (
              <div
                key={item.code}
                className={`flex items-start gap-4 p-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-rose-400/40 transition-all duration-300 ${tiltClass}`}
              >
                <span className="font-grotesk font-black text-rose-400 text-lg shrink-0 mt-0.5">
                  {item.code}
                </span>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.title}
                  </div>
                  <div className="text-sm text-slate-300 mt-1 font-normal leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
