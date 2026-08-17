import React from 'react';
import Heading from './Heading';

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

  const kickerStyles = {
    brand: 'text-brand-800',
    light: 'text-lime-400',
    slate: 'text-slate-600',
  };

  return (
    <div className={`mb-16 ${alignStyles[align] || alignStyles.center} ${className}`}>
      {badge && (
        <span
          className={`block text-sm sm:text-base font-semibold mb-2.5 tracking-normal ${
            kickerStyles[kickerColor] || kickerStyles.brand
          }`}
        >
          {badge}
        </span>
      )}
      <Heading as="h2" level="2" color={headingColor}>
        {title}
      </Heading>
      {subtitle && (
        <p className="text-slate-700 mt-4 text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
