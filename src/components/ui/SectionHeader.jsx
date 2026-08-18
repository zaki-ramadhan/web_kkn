import React from 'react';
import Heading from './Heading';
import Eyebrow from './Eyebrow';
import AnimatedContent from '../reactbits/AnimatedContent';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  kickerColor = 'brand',
  headingColor = 'dark',
  className = '',
}) {
  const alignStyles = {
    center: 'text-center max-w-3xl mx-auto',
    left: 'text-left max-w-2xl',
  };

  return (
    <AnimatedContent
      distance={30}
      direction="vertical"
      duration={0.6}
      threshold={0.1}
      className={`mb-16 ${alignStyles[align] || alignStyles.center} ${className}`}
    >
      {badge && (
        <Eyebrow variant={kickerColor}>
          {badge}
        </Eyebrow>
      )}
      <Heading as="h2" level="2" color={headingColor}>
        {title}
      </Heading>
      {subtitle && (
        <p className="text-slate-700 mt-4 text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </AnimatedContent>
  );
}
