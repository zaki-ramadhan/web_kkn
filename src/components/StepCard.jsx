import React from 'react';
import TopShimmer from './ui/TopShimmer';

export default function StepCard({
  step,
  icon: Icon,
  title,
  desc,
  highlight,
  className = '',
}) {
  return (
    <div
      className={`group relative bg-gradient-to-b from-white via-white to-slate-50/80 border border-slate-200/90 hover:border-emerald-400/60 rounded-3xl p-6 sm:p-7 transition-all duration-300 ease-out flex flex-col justify-between shadow-card-depth hover:shadow-card-hover hover:-translate-y-2 overflow-hidden h-full ${className}`}
    >
      <TopShimmer variant="lime" />

      {/* Top Row: Thematic Icon Pod & Oversized Watermark Number */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100/90 flex items-center justify-center text-brand-850 shadow-subtle group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:scale-105 transition-all duration-300">
          {Icon ? (
            <Icon className="w-6 h-6" />
          ) : (
            <span className="font-grotesk font-black text-lg">{step}</span>
          )}
        </div>

        {/* Oversized Subtle Watermark Number */}
        <span className="font-grotesk font-black text-4xl sm:text-5xl text-slate-200 group-hover:text-brand-850/15 tracking-tight transition-colors select-none leading-none pt-0.5">
          {step}
        </span>
      </div>

      {/* Body: Title & Concise Description */}
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="font-grotesk font-bold text-base sm:text-lg text-slate-950 group-hover:text-emerald-600 transition-colors leading-snug mb-2.5">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
          {desc}
        </p>
      </div>

      {/* Bottom: Clean Editorial Note (No Chip / Badge AI Slop) */}
      {highlight && (
        <div className="pt-3.5 border-t border-slate-100 text-sm font-semibold text-slate-700 group-hover:text-slate-950 transition-colors flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
          <span>{highlight}</span>
        </div>
      )}
    </div>
  );
}
