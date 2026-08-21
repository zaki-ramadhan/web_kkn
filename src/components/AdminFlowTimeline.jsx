import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import TopShimmer from './ui/TopShimmer';

export default function AdminFlowTimeline({ steps }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start calculating when container enters viewport
            const startOffset = windowHeight * 0.6;
            const totalHeight = rect.height;
            const currentScroll = startOffset - rect.top;

            let progress = (currentScroll / totalHeight) * 100;
            progress = Math.max(0, Math.min(100, progress));
            setScrollProgress(progress);

            // Determine active step index based on progress
            const stepFraction = 100 / steps.length;
            const currentIdx = Math.min(
              steps.length - 1,
              Math.max(0, Math.floor((progress + stepFraction * 0.35) / stepFraction))
            );
            setActiveStepIndex(currentIdx);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <div ref={containerRef} className="relative py-2 sm:py-4">
      {/* Background Static Track Line */}
      <div className="absolute top-6 bottom-6 left-5 sm:left-6 w-0.5 sm:w-1 bg-slate-200 rounded-full" />

      {/* Dynamic Animated Scroll Progress Line */}
      <div
        style={{ height: `${scrollProgress}%` }}
        className="absolute top-6 left-5 sm:left-6 w-0.5 sm:w-1 bg-gradient-to-b from-emerald-500 via-emerald-600 to-lime-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(16,185,129,0.45)]"
      />

      {/* Timeline Steps Stack */}
      <div className="space-y-6 sm:space-y-8 relative">
        {steps.map((step, idx) => {
          const isPassed = scrollProgress > ((idx + 0.85) / steps.length) * 100;
          const isActive = idx === activeStepIndex;
          const Icon = step.icon;

          return (
            <div
              key={step.step}
              className="relative flex items-start gap-4 sm:gap-6 group"
            >
              {/* Step Circle Indicator Node */}
              <div className="relative z-10 shrink-0 mt-1">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-grotesk font-bold text-xs sm:text-sm transition-all duration-300 shadow-card-depth ${
                    isPassed
                      ? 'bg-emerald-600 text-white border-2 border-emerald-600 ring-2 ring-emerald-100'
                      : isActive
                      ? 'bg-emerald-700 text-white border-2 border-lime-400 ring-4 ring-emerald-200/60 scale-105 shadow-md'
                      : 'bg-white text-slate-500 border-2 border-slate-300 group-hover:border-emerald-400 group-hover:text-emerald-700'
                  }`}
                >
                  {isPassed ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
                  ) : Icon ? (
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <span>{step.step}</span>
                  )}
                </div>
              </div>

              {/* Main Content Card with Active Highlighting */}
              <div
                className={`flex-1 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-white border-2 border-emerald-500/80 shadow-card-depth ring-4 ring-emerald-500/10 -translate-y-0.5'
                    : isPassed
                    ? 'bg-white border border-slate-200/90 shadow-subtle hover:border-emerald-300'
                    : 'bg-white/90 border border-slate-200/80 shadow-2xs hover:border-slate-300'
                }`}
              >
                <TopShimmer variant={isActive ? 'lime' : 'slate'} />

                {/* Step Eyebrow & Number */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider font-grotesk ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : isPassed
                        ? 'bg-slate-100 text-slate-700'
                        : 'bg-slate-50 text-slate-500'
                    }`}
                  >
                    Tahap {step.step}
                  </span>

                  <span className="font-grotesk font-bold text-lg sm:text-xl text-slate-300 select-none">
                    {step.step} / 0{steps.length}
                  </span>
                </div>

                {/* Step Title */}
                <h3
                  className={`font-grotesk font-bold text-base sm:text-lg tracking-tight leading-snug mb-2 transition-colors ${
                    isActive
                      ? 'text-emerald-950'
                      : 'text-slate-900 group-hover:text-emerald-700'
                  }`}
                >
                  {step.title}
                </h3>

                {/* Step Main Narrative */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-3.5">
                  {step.desc}
                </p>

                {/* Sub-blocks: Why, Requirements, Quick Flow */}
                <div className="space-y-3 pt-3.5 border-t border-slate-100">
                  {/* Why Box */}
                  {step.why && (
                    <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 sm:p-4">
                      <div className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                        Mengapa perlu dilakukan?
                      </div>
                      <p className="text-sm text-slate-600 font-normal leading-relaxed">
                        {step.why}
                      </p>
                    </div>
                  )}

                  {/* Requirements List (Step 01) */}
                  {step.requirements && step.requirements.length > 0 && (
                    <div className="bg-emerald-50/60 border border-emerald-200/70 rounded-xl p-3.5 sm:p-4">
                      <div className="text-sm sm:text-base font-bold text-emerald-950 mb-2">
                        Yang perlu disiapkan:
                      </div>
                      <ul className="space-y-2 text-sm text-slate-800 font-medium">
                        {step.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                              ✓
                            </span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Quick Horizontal Flow (Step 03) */}
                  {step.quickFlow && step.quickFlow.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4">
                      <div className="text-sm sm:text-base font-bold text-slate-900 mb-2.5">
                        Sederhananya:
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {step.quickFlow.map((node, i) => (
                          <React.Fragment key={i}>
                            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-2xs">
                              {node}
                            </span>
                            {i < step.quickFlow.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Details (Step 05) */}
                  {step.details && (
                    <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 sm:p-4">
                      <div className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                        Bentuk Pelayanan:
                      </div>
                      <p className="text-sm text-slate-600 font-normal leading-relaxed">
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
