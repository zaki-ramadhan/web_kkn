import React from 'react';
import Heading from './ui/Heading';
import Eyebrow from './ui/Eyebrow';
import PillCTAButton from './ui/PillCTAButton';
import AvatarStack from './ui/AvatarStack';
import StatCard from './ui/StatCard';
import { heroData } from '../data/bpjsData';

export default function HeroSection({ hero = heroData }) {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-24 sm:pt-32 md:pt-36 md:pb-32 overflow-hidden bg-brand-950 text-white"
    >
      {/* Background Image with High Priority Instant LCP */}
      <img
        src="/images/hero-bg.webp"
        alt="Layanan Kesehatan Masyarakat"
        fetchPriority="high"
        decoding="async"
        width="1600"
        height="900"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none"
      />

      {/* Multi-layer Dark Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-950/75 to-brand-950 pointer-events-none" />

      {/* Ultra-light Pure CSS Radiant Aura & Grid (0% CPU load, 0s Main Thread Lock) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.25),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.14),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-lime-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow - Instant Render */}
        <div className="mb-4">
          <Eyebrow variant="lime" className="drop-shadow-sm">
            {hero.eyebrow}
          </Eyebrow>
        </div>

        {/* Heading <h1> - Immediate Non-Delayed LCP */}
        <Heading
          as="h1"
          level="1"
          color="light"
          className="max-w-4xl mx-auto mb-6 text-balance text-white leading-tight drop-shadow-md"
        >
          {hero.titlePrefix}{' '}
          <span className="text-lime-300 underline decoration-lime-400 decoration-4 underline-offset-8">
            {hero.titleHighlight}
          </span>{' '}
          {hero.titleSuffix}
        </Heading>

        {/* Subtitle - Instant Render */}
        <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed mb-8 text-balance font-normal drop-shadow-sm">
          {hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <PillCTAButton href={hero.ctaPrimary.href} variant="lime" size="lg">
            {hero.ctaPrimary.text}
          </PillCTAButton>
          <PillCTAButton
            href={hero.ctaSecondary.href}
            variant="light"
            size="lg"
            isExternal={hero.ctaSecondary.href.startsWith('http')}
          >
            {hero.ctaSecondary.text}
          </PillCTAButton>
        </div>

        {/* Avatar Stack */}
        <div className="flex justify-center mb-14">
          <AvatarStack variant="dark" label={hero.avatarText} />
        </div>

        {/* 4 Hero Stat Capsules */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left items-stretch pt-3 pb-2">
          {hero.stats.map((item, idx) => {
            const distortionClass =
              idx === 0
                ? 'rounded-tl-3xl rounded-br-2xl'
                : idx === 1
                ? 'rounded-tr-3xl rounded-bl-2xl'
                : idx === 2
                ? 'rounded-bl-3xl rounded-tr-2xl'
                : 'rounded-br-3xl rounded-tl-2xl';

            return (
              <div key={item.id} className="h-full">
                <StatCard
                  value={item.value}
                  label={item.label}
                  detail={item.detail}
                  distortionClass={distortionClass}
                  variant="forest"
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
