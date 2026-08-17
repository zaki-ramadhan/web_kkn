import React from 'react';
import Badge from './Badge';
import Heading from './Heading';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  badgeVariant = 'brand',
  headingColor = 'dark',
  className = '',
}) {
  const alignStyles = {
    center: 'text-center max-w-3xl mx-auto',
    left: 'text-left max-w-2xl',
  };

  return (
    <div className={`mb-16 ${alignStyles[align] || alignStyles.center} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
        </div>
      )}
      <Heading as="h2" level="2" color={headingColor}>
        {title}
      </Heading>
      {subtitle && (
        <p className="text-slate-600 mt-4 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
