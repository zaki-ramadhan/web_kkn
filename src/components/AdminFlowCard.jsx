import React from 'react';
import TopShimmer from './ui/TopShimmer';
import { ArrowRight, Check } from 'lucide-react';

export default function AdminFlowCard({
  step,
  icon: Icon,
  title,
  desc,
  why,
  requirements,
  quickFlow,
  details,
  className = '',
}) {
  return (
    <div
      className={`group relative bg-white border border-slate-200/90 hover:border-emerald-400/70 rounded-3xl p-6 sm:p-7 transition-all duration-300 ease-out flex flex-col justify-between shadow-card-depth hover:-translate-y-1.5 overflow-hidden ${className}`}
    >
      <TopShimmer variant="lime" />

      <div>
        {/* Top Bar: Step Number & Thematic Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-800 shadow-xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors duration-300">
              {Icon ? <Icon className="w-5 h-5" /> : null}
            </div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 font-grotesk">
              Tahap {step}
            </span>
          </div>

          <span className="font-grotesk font-black text-3xl sm:text-4xl text-slate-200 group-hover:text-emerald-700/20 select-none transition-colors">
            {step}
          </span>
        </div>

        {/* Heading & Main Narrative */}
        <h3 className="font-grotesk font-bold text-lg sm:text-xl text-slate-950 group-hover:text-emerald-700 transition-colors leading-snug mb-2.5">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-5">
          {desc}
        </p>
      </div>

      {/* Contextual Value-Add Sub-blocks (Human-crafted, No AI Junk) */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        {/* Why / Mengapa Perlu Box */}
        {why && (
          <div className="bg-slate-50/90 border border-slate-200/70 rounded-2xl p-3.5 sm:p-4">
            <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
              <span>Mengapa perlu dilakukan?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {why}
            </p>
          </div>
        )}

        {/* Requirements / Yang Perlu Disiapkan (Step 01) */}
        {requirements && requirements.length > 0 && (
          <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-2xl p-3.5 sm:p-4">
            <div className="text-xs sm:text-sm font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
              <span>Yang perlu disiapkan:</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-normal">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quick Horizontal Flow (Step 03) */}
        {quickFlow && quickFlow.length > 0 && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4">
            <div className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5">
              Sederhananya:
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {quickFlow.map((node, i) => (
                <React.Fragment key={i}>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold shadow-2xs">
                    {node}
                  </span>
                  {i < quickFlow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Service Details (Step 05) */}
        {details && (
          <div className="bg-slate-50/90 border border-slate-200/70 rounded-2xl p-3.5 sm:p-4">
            <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
              <span>Bentuk Pelayanan:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {details}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
