import React from 'react';

export default function StatCard({
  value,
  label,
  detail,
  icon: Icon,
  variant = 'light',
  className = '',
}) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`group relative rounded-2xl p-5 transition-all duration-300 ease-out overflow-hidden ${
        isDark
          ? 'bg-brand-950/75 hover:bg-brand-900/85 border border-white/15 backdrop-blur-md text-white shadow-forest-card hover:-translate-y-1'
          : 'bg-gradient-to-b from-white via-white to-slate-50/70 border border-slate-200/90 shadow-card-depth hover:shadow-card-hover hover:-translate-y-1'
      } ${className}`}
    >
      {/* Subtle top inner light bar */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-lime-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center justify-between mb-3">
        <span className={`font-grotesk text-3xl font-extrabold tracking-tight ${isDark ? 'text-lime-400' : 'text-slate-900'}`}>
          {value}
        </span>
        {Icon && (
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-subtle group-hover:scale-105 transition-all duration-200 ${
              isDark
                ? 'bg-white/10 border border-white/15 text-lime-300 group-hover:bg-white/20'
                : 'bg-brand-50 border border-brand-100/80 text-brand-800 group-hover:bg-brand-100'
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{label}</p>
      <p className={`text-xs font-medium mt-0.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {detail}
      </p>
    </div>
  );
}
