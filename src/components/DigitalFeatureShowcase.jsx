import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import AnimatedContent from './reactbits/AnimatedContent';
import { useVersion } from '../context/VersionContext';

export default function DigitalFeatureShowcase() {
  const { currentData, isNewVersion } = useVersion();
  const features = currentData.digitalFeatures;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* Left Column: Authentic Real Context Photo & Village Assistance Banner */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
        <AnimatedContent distance={30} duration={0.65} delay={0.05}>
          <div className="relative rounded-3xl overflow-hidden shadow-card-depth border border-slate-200/90 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&h=1000&q=80&fm=webp"
              alt="Pendampingan Layanan Digital Kesehatan"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white">
              <div className="text-sm font-bold text-lime-400 uppercase tracking-wider mb-1">
                {isNewVersion ? 'SMART DIGITAL - KKN ARS' : 'Edukasi KKN ARS Cibaregbeg'}
              </div>
              <p className="text-sm sm:text-base text-slate-100 leading-snug font-medium">
                Pendampingan warga Desa Cibaregbeg dalam memanfaatkan fitur antrean mandiri, KIS digital, dan informasi faskes.
              </p>
            </div>
          </div>
        </AnimatedContent>

        {/* Posko Assistance Box */}
        <AnimatedContent distance={25} duration={0.6} delay={0.15}>
          <div className="bg-brand-50 border border-brand-200/80 rounded-2xl p-6 flex flex-col justify-between gap-4">
            <div>
              <h4 className="font-grotesk font-bold text-base sm:text-lg text-brand-950 mb-1">
                Konsultasi Alur & Layanan Digital
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {isNewVersion
                  ? 'Hubungi Ibu Risma (Kader Posyandu Sirna Asih) di Kp. Nyalindung & Talaga untuk panduan langsung alur berobat dan aktivasi administrasi faskes.'
                  : 'Kunjungi Posko Mahasiswa KKN ARS di Kp. Nyalindung / Talaga, Desa Cibaregbeg untuk konsultasi langsung alur berobat Puskesmas dan panduan faskes.'}
              </p>
            </div>
            <a
              href={isNewVersion ? 'https://wa.me/628892120024?text=Halo%20Ibu%20Risma%2C%20saya%20warga%20Cibaregbeg%20ingin%20tanya%20layanan%20kesehatan' : '#darurat'}
              target={isNewVersion ? '_blank' : undefined}
              rel={isNewVersion ? 'noreferrer' : undefined}
              className="w-full py-3 px-5 rounded-full bg-brand-850 hover:bg-brand-950 text-lime-300 font-bold text-sm flex items-center justify-between transition-colors shadow-subtle"
            >
              <span>{isNewVersion ? 'Tanya Kader Posyandu' : 'Hubungi Narahubung Posko'}</span>
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
