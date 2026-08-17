import React from 'react';

export default function Badge({
  children,
  variant = 'brand',
  size = 'xs',
  pulseDot = false,
  dotColor = 'bg-lime-500',
  className = '',
}) {
  const variantStyles = {
    brand: 'bg-brand-50 text-brand-850 border-brand-200/80',
    brandDark: 'bg-white/10 text-lime-300 border-white/15',
    lime: 'bg-lime-400 text-brand-950 border-lime-500/40 font-semibold',
    rose: 'bg-rose-50 text-rose-800 border-rose-200',
    slate: 'bg-slate-100 text-slate-800 border-slate-200',
    amber: 'bg-amber-50 text-amber-900 border-amber-200',
    glass: 'bg-black/30 text-lime-300 border-lime-400/20',
  };

  const sizeStyles = {
    xs: 'text-xs px-2.5 py-0.5',
    sm: 'text-xs px-3 py-1',
    md: 'text-xs sm:text-sm px-3.5 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium tracking-normal border ${
        variantStyles[variant] || variantStyles.brand
      } ${sizeStyles[size]} ${className}`}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
