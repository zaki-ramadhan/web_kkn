import React from 'react';
import {
  Smartphone,
  CreditCard,
  Stethoscope,
  Pill,
  FileText,
  HelpCircle
} from 'lucide-react';
import TopShimmer from './ui/TopShimmer';

const stepIconMap = {
  '01': Smartphone,
  '02': CreditCard,
  '03': Stethoscope,
  '04': Pill,
  '05': FileText,
};

export default function StepCard({
  step,
  title,
  desc,
  highlight,
  className = '',
}) {
  const IconComponent = stepIconMap[step] || HelpCircle;

  return (
    <div
      className={`group relative bg-gradient-to-b from-white via-white to-slate-50/80 border border-slate-200/90 hover:border-brand-500/60 rounded-3xl p-6 sm:p-7 transition-all duration-300 ease-out flex flex-col justify-between shadow-card-depth hover:shadow-card-hover hover:-translate-y-2 overflow-hidden ${className}`}
    >
      <TopShimmer variant="lime" />

      <div>
        {/* Top Header: Thematic Micro-Icon & Translucent Watermark Number */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-100/90 flex items-center justify-center text-brand-850 shadow-subtle group-hover:bg-lime-400 group-hover:text-brand-950 group-hover:border-lime-500/40 group-hover:scale-105 transition-all duration-300">
            <IconComponent className="w-5 h-5" />
          </div>

          <span className="font-grotesk font-black text-4xl text-slate-200 group-hover:text-brand-800/25 transition-colors select-none">
            {step}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-grotesk font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug mb-2.5">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
          {desc}
        </p>
      </div>

      {/* Bottom Capsule Highlight Chip */}
      {highlight && (
        <div className="pt-3 border-t border-slate-100/90 flex items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50/80 text-brand-900 border border-brand-100/90 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-500 shrink-0" />
            <span>{highlight}</span>
          </div>
        </div>
      )}
    </div>
  );
}
