import React from 'react';
import Badge from './ui/Badge';
import Heading from './ui/Heading';
import TopShimmer from './ui/TopShimmer';

export default function StepCard({
  step,
  title,
  desc,
  highlight,
  tip,
  variant = 'light',
  className = '',
}) {
  if (variant === 'dark') {
    return (
      <div
        className={`group relative bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 rounded-2xl p-5 transition-all duration-300 ease-out flex items-start gap-4 backdrop-blur-sm shadow-sm hover:shadow-card-hover hover:-translate-y-1 overflow-hidden ${className}`}
      >
        <TopShimmer variant="brand" />

        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lime-400 to-lime-500 text-brand-950 font-black flex items-center justify-center shrink-0 text-sm shadow-glow-lime group-hover:scale-105 transition-transform duration-200 mt-0.5">
          {step}
        </div>
        <div className="flex-1">
          <Heading as="h4" level="4" color="light" className="mb-1 text-white group-hover:text-lime-300 transition-colors text-base font-bold">
            {title}
          </Heading>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-2.5 font-normal">
            {desc}
          </p>
          {tip && (
            <div className="text-sm font-medium text-lime-300 bg-black/40 px-3.5 py-1 rounded-lg border border-lime-400/25 inline-block">
              <span className="font-bold text-lime-400">Tips: </span>
              {tip}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative bg-gradient-to-b from-white via-white to-slate-50/70 border border-slate-200/90 hover:border-brand-400/60 rounded-2xl p-6 transition-all duration-300 ease-out flex flex-col justify-between shadow-card-depth hover:shadow-card-hover hover:-translate-y-1.5 overflow-hidden ${className}`}
    >
      <TopShimmer variant="brand" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-100/90 flex items-center justify-center font-grotesk text-xl font-extrabold text-brand-850 shadow-subtle group-hover:bg-lime-400 group-hover:text-brand-950 group-hover:border-lime-500/40 group-hover:scale-105 transition-all duration-300">
            {step}
          </div>
          <Badge variant="brand" size="xs">
            Langkah {step}
          </Badge>
        </div>
        <Heading as="h3" level="4" color="dark" className="mb-2 leading-snug group-hover:text-brand-850 transition-colors text-base sm:text-lg font-bold">
          {title}
        </Heading>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 font-normal">
          {desc}
        </p>
      </div>
      {highlight && (
        <div className="pt-3.5 border-t border-slate-100 text-sm font-bold text-brand-800 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-500 shrink-0" />
          <span>{highlight}</span>
        </div>
      )}
    </div>
  );
}
