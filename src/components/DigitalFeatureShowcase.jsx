import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import AnimatedContent from './reactbits/AnimatedContent';
import { digitalFeatures } from '../data/bpjsData';

export default function DigitalFeatureShowcase({ features = digitalFeatures }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* Left Column: Authentic Real Context Photo & Village Assistance Banner */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
        <AnimatedContent distance={30} duration={0.65} delay={0.05}>
          <div className="relative rounded-3xl overflow-hidden shadow-card-depth border border-slate-200/90 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] bg-slate-100">
            <img
              src="/images/services/edukasi kkn.webp"
              alt="Pendampingan Layanan Digital Kesehatan Tim KKN ARS"
              width="600"
              height="450"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white">
              <div className="text-sm font-bold text-lime-400 uppercase tracking-wider mb-1">
                ASLI SEHAT CIBAREGBEG
              </div>
              <p className="text-sm sm:text-base text-slate-100 leading-snug font-medium">
                Pendampingan warga Desa Cibaregbeg dalam memanfaatkan fitur antrean mandiri, KIS digital, dan informasi faskes.
              </p>
            </div>
          </div>
        </AnimatedContent>

        {/* Posyandu Assistance Box */}
        <AnimatedContent distance={25} duration={0.6} delay={0.15}>
          <div className="bg-brand-50 border border-brand-200/80 rounded-2xl p-6 flex flex-col justify-between gap-4">
            <div>
              <h4 className="font-grotesk font-bold text-base sm:text-lg text-brand-950 mb-1">
                Konsultasi Alur & Layanan Digital
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Hubungi Kader Posyandu (Sirna Asih) di Kp. Nyalindung & Talaga untuk panduan langsung alur berobat dan aktivasi administrasi faskes di posyandu.
              </p>
            </div>
            <a
              href="https://wa.me/628892120024?text=Halo%20Kader%20Posyandu%2C%20saya%20warga%20Cibaregbeg%20ingin%20tanya%20layanan%20kesehatan"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-5 rounded-full bg-brand-850 hover:bg-brand-950 text-lime-300 font-bold text-sm flex items-center justify-between transition-colors shadow-subtle"
            >
              <span>Tanya Kader Posyandu</span>
              <ArrowUpRight className="w-4 h-4 text-lime-400" />
            </a>
          </div>
        </AnimatedContent>
      </div>

      {/* Right Column: Editorial Step Flow with Clean Dividers (No Card Boxes) */}
      <div className="lg:col-span-7 divide-y divide-slate-200/90">
        {features.map((item, idx) => (
          <AnimatedContent
            key={item.number}
            distance={25}
            duration={0.55}
            delay={0.1 + idx * 0.1}
            className="py-7 first:pt-0 last:pb-0"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="font-grotesk font-black text-3xl sm:text-4xl text-brand-850 shrink-0 mt-0.5">
                {item.number}
              </span>
              <div className="space-y-2 flex-1">
                <h3 className="font-grotesk font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 pt-1 text-sm font-semibold text-brand-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}
