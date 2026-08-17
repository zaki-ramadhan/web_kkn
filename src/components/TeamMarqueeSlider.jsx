import React from 'react';
import { kknTeamMembers } from '../data/bpjsData';
import TopShimmer from './ui/TopShimmer';

function MemberMiniCard({ member }) {
  return (
    <div className="w-[185px] sm:w-[205px] shrink-0 py-2 transition-all duration-300 ease-out group-hover/track:opacity-45 group-hover/track:grayscale-[40%] hover:!opacity-100 hover:!grayscale-0 hover:!scale-105 relative z-0 hover:z-20">
      <div className="group relative bg-white border border-slate-200/90 hover:border-emerald-400/80 rounded-2xl p-3 sm:p-3.5 transition-all duration-300 ease-out shadow-card-depth hover:shadow-card-hover hover:-translate-y-1.5 flex flex-col justify-between h-full overflow-hidden">
        <TopShimmer variant="lime" />

        {/* Portrait Photo */}
        <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-2.5 bg-slate-100 border border-slate-100">
          <img
            src={member.avatar}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          {member.isContact && (
            <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-md bg-brand-950/90 backdrop-blur-xs text-[10px] font-bold text-lime-400 border border-lime-400/30 shadow-subtle">
              Narahubung
            </span>
          )}
        </div>

        {/* Member Details */}
        <div>
          <h4
            title={member.name}
            className="font-grotesk font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1"
          >
            {member.name}
          </h4>
          <div className="text-[11px] sm:text-xs font-semibold text-emerald-600 mt-0.5 line-clamp-1">
            {member.role}
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-500 font-normal mt-0.5 line-clamp-1">
            {member.major}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamMarqueeSlider({
  members = kknTeamMembers,
  className = '',
}) {
  // Split 15 members into 2 balanced rows
  const row1 = members.slice(0, 8); // 8 members
  const row2 = members.slice(8);    // 7 members

  return (
    <div
      className={`space-y-1 relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] ${className}`}
    >
      {/* Row 1: Moves Left with Focus Spotlight on Hover */}
      <div className="marquee-row group/track overflow-hidden py-2">
        <div className="flex gap-3.5 sm:gap-4 animate-marquee">
          {[...row1, ...row1, ...row1].map((member, idx) => (
            <MemberMiniCard key={`r1-${member.id}-${idx}`} member={member} />
          ))}
        </div>
      </div>

      {/* Row 2: Moves Right with Focus Spotlight on Hover */}
      <div className="marquee-row group/track overflow-hidden py-2">
        <div className="flex gap-3.5 sm:gap-4 animate-marquee-reverse">
          {[...row2, ...row2, ...row2].map((member, idx) => (
            <MemberMiniCard key={`r2-${member.id}-${idx}`} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
