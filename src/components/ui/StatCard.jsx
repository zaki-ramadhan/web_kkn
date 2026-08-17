import React from 'react';

export default function StatCard({
  value,
  label,
  detail,
  variant = 'light',
  className = '',
}) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`group relative rounded-2xl p-6 transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between ${
        isDark
          ? 'bg-brand-950/75 hover:bg-brand-900/85 border border-white/15 backdrop-blur-md text-white shadow-forest-card hover:-translate-y-1'
          : 'bg-gradient-to-b from-white via-white to-slate-50/70 border border-slate-200/90 shadow-card-depth hover:shadow-card-hover hover:-translate-y-1'
      } ${className}`}
    >
      {/* Subtle top inner light bar */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-lime-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="mb-2">
          <span className={`font-grotesk text-3xl sm:text-4xl font-extrabold tracking-tight block ${isDark ? 'text-lime-400' : 'text-slate-900'}`}>
            {value}
          </span>
        </div>
        <p className={`text-sm sm:text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {label}
        </p>
      </div>

      <p className={`text-sm font-medium mt-2 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {detail}
      </p>
    </div>
  );
}
