import React from 'react';
import Heading from './ui/Heading';
import Eyebrow from './ui/Eyebrow';
import PillCTAButton from './ui/PillCTAButton';
import AvatarStack from './ui/AvatarStack';
import StatCard from './ui/StatCard';
import Scanner from './reactbits/Scanner';
import AnimatedContent from './reactbits/AnimatedContent';
import { heroData } from '../data/bpjsData';

export default function HeroSection({ hero = heroData }) {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-24 sm:pt-32 md:pt-36 md:pb-32 overflow-hidden bg-brand-950 text-white"
    >
      {/* Background Image with Crisp Object-Cover and High Priority LCP */}
      <img
        src="/images/hero-bg.webp"
        alt="Layanan Kesehatan Masyarakat"
        fetchPriority="high"
        decoding="async"
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
        <AnimatedContent distance={20} duration={0.5} delay={0.05}>
          <Eyebrow variant="lime" className="mb-4 drop-shadow-sm">
            {hero.eyebrow}
          </Eyebrow>
        </AnimatedContent>

        {/* Heading */}
        <AnimatedContent distance={30} duration={0.65} delay={0.15}>
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
        </AnimatedContent>

        {/* Subtitle */}
        <AnimatedContent distance={25} duration={0.6} delay={0.25}>
          <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed mb-8 text-balance font-normal drop-shadow-sm">
            {hero.subtitle}
          </p>
        </AnimatedContent>

        {/* Action Buttons */}
        <AnimatedContent distance={20} duration={0.55} delay={0.35}>
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
        </AnimatedContent>

        {/* Avatar Stack */}
        <AnimatedContent distance={15} duration={0.5} delay={0.4}>
          <div className="flex justify-center mb-14">
            <AvatarStack variant="dark" label={hero.avatarText} />
          </div>
        </AnimatedContent>

        {/* 4 Hero Stat Capsules with Staggered Scroll-Reveal Animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left items-stretch pt-3 pb-2">
          {hero.stats.map((item, idx) => {
            const distortionClass =
              idx === 0
                ? 'md:-rotate-6 md:-translate-x-5 md:scale-95 md:origin-right hover:md:rotate-0 hover:md:translate-x-0 hover:md:scale-100 hover:md:opacity-100 transition-all duration-300'
                : idx === 3
                ? 'md:rotate-6 md:translate-x-5 md:scale-95 md:origin-left hover:md:rotate-0 hover:md:translate-x-0 hover:md:scale-100 hover:md:opacity-100 transition-all duration-300'
                : idx === 1
                ? 'md:-rotate-1 md:-translate-x-1.5 hover:md:rotate-0 hover:md:translate-x-0 transition-all duration-300'
                : 'md:rotate-1 md:translate-x-1.5 hover:md:rotate-0 hover:md:translate-x-0 transition-all duration-300';

            return (
              <AnimatedContent
                key={item.id}
                distance={35}
                duration={0.6}
                delay={0.45 + idx * 0.1}
                className="h-full"
              >
                <div className={`h-full ${distortionClass}`}>
                  <StatCard
                    variant="dark"
                    value={item.value}
                    label={item.label}
                    detail={item.detail}
                    className="h-full"
                  />
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
