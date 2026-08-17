import React from 'react';

export default function Stabilo({
  children,
  variant = 'lime',
  className = '',
}) {
  const variants = {
    lime: 'bg-lime-300 text-brand-950 px-2 py-0.5 rounded-lg shadow-xs inline-block my-0.5',
    emerald: 'bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded-lg border border-emerald-200 inline-block my-0.5',
    yellow: 'bg-amber-200 text-amber-950 px-2 py-0.5 rounded-lg inline-block my-0.5',
  };

  return (
    <span
      className={`${variants[variant] || variants.lime} font-extrabold ${className}`}
    >
      {children}
    </span>
  );
}
