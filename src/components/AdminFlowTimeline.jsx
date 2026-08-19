import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import TopShimmer from './ui/TopShimmer';

export default function AdminFlowTimeline({ steps }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start calculating when container enters viewport (e.g. top at middle of screen)
      const startOffset = windowHeight * 0.65;
      const totalHeight = rect.height;
      const currentScroll = startOffset - rect.top;

      let progress = (currentScroll / totalHeight) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setScrollProgress(progress);

      // Determine active step index based on progress
      const stepFraction = 100 / steps.length;
      const currentIdx = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor((progress + stepFraction * 0.3) / stepFraction))
      );
      setActiveStepIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-8">
      {/* Background Static Line */}
      <div className="absolute top-8 bottom-8 left-6 sm:left-8 w-1 bg-slate-200 rounded-full" />

      {/* Dynamic Animated Scroll Progress Line */}
      <div
        style={{ height: `${scrollProgress}%` }}
        className="absolute top-8 left-6 sm:left-8 w-1 bg-gradient-to-b from-emerald-500 via-emerald-600 to-lime-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(16,185,129,0.5)]"
      />

      {/* Timeline Steps Stack */}
      <div className="space-y-12 sm:space-y-16 relative">
        {steps.map((step, idx) => {
          const isPassed = scrollProgress > ((idx + 0.85) / steps.length) * 100;
          const isActive = idx === activeStepIndex;
          const Icon = step.icon;

          return (
            <div
              key={step.step}
              className="relative flex items-start gap-5 sm:gap-8 group"
            >
              {/* Step Circle Indicator Node */}
              <div className="relative z-10 shrink-0">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-grotesk font-black text-sm sm:text-base transition-all duration-300 shadow-card-depth ${
                    isPassed
                      ? 'bg-emerald-600 text-white border-2 border-emerald-600 ring-4 ring-emerald-100'
                      : isActive
                      ? 'bg-emerald-700 text-white border-2 border-lime-400 ring-4 ring-emerald-200/70 scale-105 shadow-lg'
                      : 'bg-white text-slate-500 border-2 border-slate-300 group-hover:border-emerald-400 group-hover:text-emerald-700'
                  }`}
                >
                  {isPassed ? (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
                  ) : Icon ? (
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <span>{step.step}</span>
                  )}
                </div>
              </div>

              {/* Main Content Card with Active Highlighting */}
              <div
                className={`flex-1 rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-white border-2 border-emerald-500/80 shadow-2xl ring-4 ring-emerald-500/10 -translate-y-1'
                    : isPassed
                    ? 'bg-white border border-slate-200/90 shadow-card-depth hover:border-emerald-300'
                    : 'bg-white/80 border border-slate-200/80 shadow-subtle hover:border-slate-300'
                }`}
              >
                <TopShimmer variant={isActive ? 'lime' : 'slate'} />

                {/* Step Eyebrow & Number */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-grotesk ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : isPassed
                        ? 'bg-slate-100 text-slate-700'
                        : 'bg-slate-50 text-slate-500'
                    }`}
                  >
                    Langkah {step.step} dari 0{steps.length}
                  </span>

                  <span className="font-grotesk font-black text-2xl sm:text-3xl text-slate-200 select-none">
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3
                  className={`font-grotesk font-bold text-lg sm:text-2xl tracking-tight leading-snug mb-3 transition-colors ${
                    isActive
                      ? 'text-emerald-950'
                      : 'text-slate-900 group-hover:text-emerald-700'
                  }`}
                >
                  {step.title}
                </h3>

                {/* Step Main Narrative */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-5">
                  {step.desc}
                </p>

                {/* Sub-blocks: Why, Requirements, Quick Flow */}
                <div className="space-y-3.5 pt-4 border-t border-slate-100">
                  {/* Why Box */}
                  {step.why && (
                    <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                        <span>Mengapa perlu dilakukan?</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {step.why}
                      </p>
                    </div>
                  )}

                  {/* Requirements List (Step 01) */}
                  {step.requirements && step.requirements.length > 0 && (
                    <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4">
                      <div className="text-xs sm:text-sm font-bold text-emerald-950 mb-2.5">
                        Yang perlu disiapkan:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-normal">
                        {step.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                              ✓
                            </span>
                            <span className="font-medium text-slate-800">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Quick Horizontal Flow (Step 03) */}
                  {step.quickFlow && step.quickFlow.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
                        Sederhananya:
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {step.quickFlow.map((node, i) => (
                          <React.Fragment key={i}>
                            <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-2xs">
                              {node}
                            </span>
                            {i < step.quickFlow.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Details (Step 05) */}
                  {step.details && (
                    <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                        <span>Bentuk Pelayanan:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
