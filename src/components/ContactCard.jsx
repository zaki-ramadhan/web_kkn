import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import TopShimmer from './ui/TopShimmer';

export default function ContactCard({
  name,
  number,
  type,
  avatar,
  desc,
  actionText,
  link,
  urgent = false,
  index = 0,
}) {
  const isOdd = index % 2 !== 0;

  return (
    <div className="group rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 hover:border-brand-400/70 transition-all duration-300 ease-out shadow-card-depth hover:-translate-y-2 bg-gradient-to-b from-white via-white to-slate-50/60 relative overflow-hidden">
      <TopShimmer variant="lime" />

      <div>
        {/* Tooltip / Speech Bubble Tag with Alternating Nonstop Floating Animation */}
        <div
          className={`relative inline-block mb-3.5 ${
            isOdd ? 'animate-float-bubble-alt' : 'animate-float-bubble'
          }`}
        >
          <div
            className={`px-3.5 py-1 rounded-xl text-sm font-bold tracking-wide inline-flex items-center shadow-subtle ${
              urgent
                ? 'bg-lime-400 text-brand-950 border border-lime-500/40'
                : 'bg-brand-50 text-brand-900 border border-brand-200/90'
            }`}
          >
            {type}
          </div>
          {/* Downward Arrow Caret pointing to Avatar */}
          <div
            className={`absolute left-4 -bottom-1 w-2.5 h-2.5 rotate-45 transform ${
              urgent
                ? 'bg-lime-400 border-r border-b border-lime-500/40'
                : 'bg-brand-50 border-r border-b border-brand-200/90'
            }`}
          />
        </div>

        {/* Identity Lockup: Avatar on Left, 2-Line Clamped Name on Right */}
        <div className="flex items-center gap-3.5 mb-3.5">
          {avatar && (
            <img
              src={avatar}
              alt={name}
              loading="lazy"
              decoding="async"
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-brand-100/90 shadow-subtle group-hover:scale-105 group-hover:border-lime-400 transition-all duration-300 shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <h3
              title={name}
              className="text-slate-900 group-hover:text-brand-850 transition-colors font-bold text-base sm:text-lg leading-snug line-clamp-2"
            >
              {name}
            </h3>
          </div>
        </div>

        {/* Dedicated Phone Number Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-50/80 border border-brand-200/80 text-brand-900 font-grotesk font-black text-sm sm:text-base tracking-tight mb-3.5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse shrink-0" />
          <span className="truncate">{number}</span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {desc}
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-full py-3.5 px-5 rounded-full text-sm font-bold flex items-center justify-between transition-all duration-200 shadow-subtle hover:shadow-elevation bg-brand-850 hover:bg-brand-950 text-lime-300 active:scale-95 group/btn"
      >
        <span>{actionText}</span>
        <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-lime-400 group-hover/btn:rotate-45 transition-transform duration-200">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </a>
    </div>
  );
}
