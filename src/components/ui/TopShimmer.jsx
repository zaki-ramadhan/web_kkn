import React from 'react';

export default function TopShimmer({ variant = 'lime', className = '' }) {
  const variantMap = {
    lime: 'from-transparent via-lime-400/80 to-transparent',
    subtle: 'from-transparent via-lime-400/60 to-transparent',
    brand: 'from-transparent via-brand-400/70 to-transparent',
  };

  return (
    <div
      className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${
        variantMap[variant] || variantMap.lime
      } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${className}`}
    />
  );
}
