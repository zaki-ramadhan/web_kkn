import React from 'react';
import { kknTeamMembers } from '../data/bpjsData';
import TopShimmer from './ui/TopShimmer';

export default function TeamMarqueeSlider({
  members = kknTeamMembers,
  className = '',
}) {
  return (
    <div
      className={`relative w-full overflow-hidden marquee-container py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] ${className}`}
    >
      <div className="flex gap-4 sm:gap-5 animate-marquee">
        {[...members, ...members].map((member, idx) => (
          <div
            key={`${member.id}-${idx}`}
            className="w-[200px] sm:w-[220px] shrink-0"
          >
            <div className="group relative bg-white border border-slate-200/90 hover:border-emerald-400/70 rounded-2xl p-3.5 sm:p-4 transition-all duration-300 ease-out shadow-card-depth hover:shadow-card-hover hover:-translate-y-1.5 flex flex-col justify-between h-full overflow-hidden">
              <TopShimmer variant="lime" />

              {/* Portrait Photo */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-slate-100 border border-slate-100">
                <img
                  src={member.avatar}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {member.isContact && (
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-brand-950/85 backdrop-blur-xs text-[10px] font-bold text-lime-400 border border-lime-400/30 shadow-subtle">
                    Narahubung
                  </span>
                )}
              </div>

              {/* Member Details */}
              <div>
                <h4
                  title={member.name}
                  className="font-grotesk font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1"
                >
                  {member.name}
                </h4>
                <div className="text-xs font-semibold text-emerald-600 mt-0.5 line-clamp-1">
                  {member.role}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-normal mt-0.5 line-clamp-1">
                  {member.major}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
