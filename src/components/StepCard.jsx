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
      className={`group relative bg-gradient-to-b from-white via-white to-slate-50/80 border border-slate-200/90 hover:border-brand-400/70 rounded-3xl p-6 sm:p-7 transition-all duration-300 ease-out flex flex-col justify-between shadow-card-depth hover:shadow-card-hover hover:-translate-y-2 overflow-hidden h-full ${className}`}
    >
      <TopShimmer variant="lime" />

      {/* Top Row: Thematic Icon Pod (Left) & Oversized Watermark Number (Right) */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100/90 flex items-center justify-center text-brand-850 shadow-subtle group-hover:bg-lime-400 group-hover:text-brand-950 group-hover:border-lime-500/40 group-hover:scale-105 transition-all duration-300">
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

      {/* Bottom: Refined Capsule Chip */}
      {highlight && (
        <div className="pt-3 border-t border-slate-100/90">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50/80 border border-brand-100/80 text-xs font-semibold text-brand-900 group-hover:bg-lime-50 group-hover:border-lime-300 group-hover:text-brand-950 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-lime-500 shrink-0 transition-colors" />
            <span>{highlight}</span>
          </div>
        </div>
      )}
    </div>
  );
}
