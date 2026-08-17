import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Badge from './ui/Badge';
import Heading from './ui/Heading';

export default function ContactCard({
  name,
  number,
  type,
  avatar,
  desc,
  actionText,
  link,
  urgent = false,
}) {
  return (
    <div className="group rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 hover:border-brand-400/70 transition-all duration-300 ease-out shadow-card-depth hover:shadow-card-hover hover:-translate-y-2 bg-gradient-to-b from-white via-white to-slate-50/60 relative overflow-hidden">
      {/* Top shimmer accent on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Header: Avatar + Role Badge */}
        <div className="flex items-center gap-3.5 mb-4">
          {avatar && (
            <img
              src={avatar}
              alt={name}
              loading="lazy"
              decoding="async"
              className="w-12 h-12 rounded-full object-cover border-2 border-brand-100/90 shadow-subtle group-hover:scale-105 group-hover:border-lime-400 transition-all duration-300 shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <Badge variant={urgent ? 'lime' : 'brand'} size="xs">
              {type}
            </Badge>
          </div>
        </div>

        <Heading as="h3" level="4" color="dark" className="mb-1 text-slate-900 group-hover:text-brand-850 transition-colors font-bold text-base sm:text-lg">
          {name}
        </Heading>

        {/* Plain Bold Masked Number */}
        <div className="font-grotesk text-2xl font-black text-slate-900 my-2 tracking-tight">
          {number}
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
