import React from 'react';
import { kknTeamMembers } from '../data/bpjsData';
import TopShimmer from './ui/TopShimmer';

function MemberMiniCard({ member }) {
  return (
    <div className="w-[195px] sm:w-[220px] shrink-0 py-2 transition-all duration-300 ease-out group-hover/track:opacity-40 group-hover/track:grayscale-[75%] hover:!opacity-100 hover:!grayscale-0 hover:!scale-105 relative z-0 hover:z-20">
      <div className="group relative bg-white border border-slate-200/90 hover:border-emerald-400/80 rounded-2xl p-3.5 sm:p-4 transition-all duration-300 ease-out shadow-card-depth hover:-translate-y-1.5 flex flex-col justify-between h-full overflow-hidden">
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
            <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-brand-950/90 backdrop-blur-xs text-sm font-bold text-lime-400 border border-lime-400/30 shadow-subtle">
              Narahubung
            </span>
          )}
        </div>

        {/* Member Details: Standardized font sizes (min text-sm = 14px) */}
        <div>
          <h4
            title={member.name}
            className="font-grotesk font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1 truncate"
          >
            {member.name}
          </h4>
          <div className="text-sm font-semibold text-emerald-600 mt-1 line-clamp-1 truncate">
            {member.role}
          </div>
          <div className="text-sm text-slate-500 font-normal mt-0.5 line-clamp-1 truncate">
            {member.nim ? `NIM. ${member.nim}` : member.major}
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
  // Split 20 members into 2 balanced rows (10 members each)
  const row1 = members.slice(0, 10);
  const row2 = members.slice(10, 20);

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
