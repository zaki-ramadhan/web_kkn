import React from 'react';
import { Check, Lightbulb } from 'lucide-react';
import Badge from './ui/Badge';
import Heading from './ui/Heading';

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
        className={`bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-200 flex items-start gap-4 ${className}`}
      >
        <div className="w-8 h-8 rounded-full bg-lime-400 text-brand-950 font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
          {step}
        </div>
        <div className="flex-1">
          <Heading as="h4" level="4" color="light" className="mb-1">
            {title}
          </Heading>
          <p className="text-xs text-slate-200 leading-relaxed mb-2">
            {desc}
          </p>
          {tip && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-lime-300 bg-black/30 px-2.5 py-0.5 rounded-md border border-lime-400/20">
              <Lightbulb className="w-3.5 h-3.5 text-lime-400 shrink-0" />
              <span>Tips: {tip}</span>
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-slate-50 border border-slate-200 hover:border-brand-500/50 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between shadow-soft group ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-grotesk text-2xl font-black text-brand-850 group-hover:text-lime-600 transition-colors">
            {step}
          </span>
          <Badge variant="brand" size="xs">
            Langkah
          </Badge>
        </div>
        <Heading as="h3" level="4" color="dark" className="mb-2 leading-tight">
          {title}
        </Heading>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {desc}
        </p>
      </div>
      {highlight && (
        <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-brand-700 flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-lime-600 shrink-0" />
          <span>{highlight}</span>
        </div>
      )}
    </div>
  );
}
