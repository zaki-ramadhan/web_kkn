import React from 'react';

export default function StatCard({
  value,
  label,
  detail,
  icon: Icon,
  className = '',
}) {
  return (
    <div
      className={`group relative bg-gradient-to-b from-white via-white to-slate-50/70 border border-slate-200/90 rounded-2xl p-5 shadow-card-depth hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden ${className}`}
    >
      {/* Subtle top inner light bar */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-lime-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center justify-between mb-3">
        <span className="font-grotesk text-3xl font-extrabold text-slate-900 tracking-tight">
          {value}
        </span>
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100/80 flex items-center justify-center text-brand-800 shadow-subtle group-hover:scale-105 group-hover:bg-brand-100 transition-all duration-200">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <p className="text-sm font-bold text-slate-900">{label}</p>
      <p className="text-xs text-slate-600 font-medium mt-0.5 leading-relaxed">{detail}</p>
    </div>
  );
}
