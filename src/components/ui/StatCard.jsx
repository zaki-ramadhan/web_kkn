import React from 'react';
import TopShimmer from './TopShimmer';

export default function StatCard({
  value,
  label,
  detail,
  variant = 'light',
  className = '',
}) {
  if (variant === 'dark') {
    return (
      <div
        className={`group relative bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 hover:border-lime-400/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 ease-out backdrop-blur-md shadow-card-depth hover:shadow-elevation flex flex-col justify-between overflow-hidden ${className}`}
      >
        <TopShimmer variant="lime" />

        <div>
          <div className="font-grotesk font-black text-3xl sm:text-4xl text-lime-400 tracking-tight leading-none group-hover:scale-105 transition-transform duration-200 origin-left">
            {value}
          </div>
          <div className="text-sm sm:text-base font-bold text-white mt-2 leading-snug">
            {label}
          </div>
        </div>
        {detail && (
          <div className="text-sm text-slate-200 mt-3 pt-3 border-t border-white/10 font-normal">
            {detail}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`group relative bg-white border border-slate-200/90 hover:border-brand-400/60 rounded-2xl p-6 transition-all duration-300 ease-out shadow-card-depth hover:shadow-card-hover hover:-translate-y-1 overflow-hidden ${className}`}
    >
      <TopShimmer variant="brand" />

      <div className="font-grotesk font-black text-3xl sm:text-4xl text-brand-850 tracking-tight leading-none group-hover:text-lime-600 transition-colors">
        {value}
      </div>
      <div className="text-base font-bold text-slate-900 mt-2">
        {label}
      </div>
      {detail && (
        <div className="text-sm text-slate-700 mt-2 pt-2 border-t border-slate-100 font-normal">
          {detail}
        </div>
      )}
    </div>
  );
}
