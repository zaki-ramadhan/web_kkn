import React from 'react';
import Heading from './ui/Heading';
import Eyebrow from './ui/Eyebrow';
import PillCTAButton from './ui/PillCTAButton';
import AvatarStack from './ui/AvatarStack';
import StatCard from './ui/StatCard';
import Scanner from './reactbits/Scanner';
import { heroStats } from '../data/bpjsData';

export default function HeroSection({
  stats = heroStats,
  avatarText = '1.450+ Warga Terbantu Program Edukasi Mahasiswa',
}) {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-24 sm:pt-32 md:pt-36 md:pb-32 overflow-hidden bg-brand-950 text-white"
    >
      {/* Background Image with Crisp Object-Cover and Increased Clarity */}
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&h=1080&q=75&fm=webp"
        alt="Layanan Kesehatan Masyarakat"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-35 pointer-events-none"
      />

      {/* Multi-layer Dark Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-950/70 to-brand-950 pointer-events-none" />

      {/* ReactBits Scanner WebGL Interactive Signal Field */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-55 z-0">
        <Scanner
          color1="#10B981"
          color2="#A3E635"
          color3="#FFFFFF"
          speed={0.4}
          sweepSpeed={0.2}
          sweepWidth={1.8}
          sweepFalloff={5}
          scale={1.4}
          frequency={2}
          ripple={0.22}
          bandDensity={10}
          lineSharpness={5.0}
          glow={0.28}
          scanDirection="vertical"
          colorSpread={0.7}
          brightness={1.0}
          contrast={1.15}
          softness={1.4}
          vignette={0.45}
          scanline={false}
          grain={true}
          grainIntensity={0.04}
          opacity={0.85}
          mouseInteraction={true}
          mouseRadius={0.4}
          mouseStrength={0.4}
        />
      </div>

      {/* Ambient Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <Eyebrow variant="lime" className="mb-4 drop-shadow-sm">
          Program Pengabdian KKN ARS Cibaregbeg 2026
        </Eyebrow>

        {/* Heading */}
        <Heading
          as="h1"
          level="1"
          color="light"
          className="max-w-4xl mx-auto mb-6 text-balance text-white leading-tight drop-shadow-md"
        >
          Panduan Lengkap Layanan{' '}
          <span className="text-lime-300 underline decoration-lime-400 decoration-4 underline-offset-8">
            BPJS Kesehatan
          </span>{' '}
          & Puskesmas
        </Heading>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed mb-8 text-balance font-normal drop-shadow-sm">
          Media edukasi kesehatan dari mahasiswa KKN untuk warga: alur berobat mudah tanpa antre panjang,
          cara re-aktivasi kartu nonaktif, prosedur pindah faskes domisili, dan pemanfaatan antrean online.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <PillCTAButton href="#alur-faskes" variant="lime" size="lg">
            Pelajari Alur Pendaftaran
          </PillCTAButton>
          <PillCTAButton href="#darurat" variant="light" size="lg">
            Kontak Tim Mahasiswa KKN
          </PillCTAButton>
        </div>

        {/* Avatar Stack */}
        <div className="flex justify-center mb-14">
          <AvatarStack variant="dark" label={avatarText} />
        </div>

        {/* 4 Hero Stat Capsules (Pronounced Distorted Slider Arc Effect) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left items-stretch pt-3 pb-2">
          {stats.map((item, idx) => {
            const distortionClass =
              idx === 0
                ? 'md:-rotate-6 md:-translate-x-5 md:scale-95 md:origin-right hover:md:rotate-0 hover:md:translate-x-0 hover:md:scale-100 hover:md:opacity-100 transition-all duration-300'
                : idx === 3
                ? 'md:rotate-6 md:translate-x-5 md:scale-95 md:origin-left hover:md:rotate-0 hover:md:translate-x-0 hover:md:scale-100 hover:md:opacity-100 transition-all duration-300'
                : idx === 1
                ? 'md:-rotate-1 md:-translate-x-1.5 hover:md:rotate-0 hover:md:translate-x-0 transition-all duration-300'
                : 'md:rotate-1 md:translate-x-1.5 hover:md:rotate-0 hover:md:translate-x-0 transition-all duration-300';

            return (
              <div key={item.id} className={`h-full ${distortionClass}`}>
                <StatCard
                  variant="dark"
                  value={item.value}
                  label={item.label}
                  detail={item.detail}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
