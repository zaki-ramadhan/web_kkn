import React from 'react';

export default function Heading({
  as: Tag = 'h2',
  level = '2',
  color = 'dark',
  children,
  className = '',
}) {
  const levelStyles = {
    '1': 'text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.18]',
    '2': 'text-3xl sm:text-4xl font-bold tracking-tight leading-tight',
    '3': 'text-xl sm:text-2xl font-bold tracking-tight',
    '4': 'text-base sm:text-lg font-bold tracking-tight',
  };

  const colorStyles = {
    dark: 'text-slate-900',
    light: 'text-white',
    brand: 'text-brand-850',
    rose: 'text-rose-900',
    inherit: 'text-inherit',
  };

  return (
    <Tag
      className={`font-grotesk ${levelStyles[level] || levelStyles['2']} ${
        colorStyles[color] || colorStyles.dark
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
