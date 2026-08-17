import React from 'react';

export default function Stabilo({
  children,
  variant = 'yellow',
  className = '',
}) {
  const variants = {
    yellow: 'bg-yellow-300 text-slate-950 px-2 py-0.5 inline-block my-0.5',
    amber: 'bg-amber-300 text-slate-950 px-2 py-0.5 inline-block my-0.5',
    lemon: 'bg-[#FACC15] text-slate-950 px-2 py-0.5 inline-block my-0.5',
  };

  return (
    <span
      className={`${variants[variant] || variants.yellow} font-extrabold ${className}`}
    >
      {children}
    </span>
  );
}
