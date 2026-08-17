import React from 'react';
import { PhoneCall, MessageSquare, ArrowUpRight } from 'lucide-react';
import Badge from './ui/Badge';
import Heading from './ui/Heading';

export default function ContactCard({
  name,
  number,
  type,
  desc,
  actionText,
  link,
  urgent = false,
}) {
  return (
    <div className="group rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 hover:border-brand-400/70 transition-all duration-300 ease-out shadow-card-depth hover:shadow-card-hover hover:-translate-y-1.5 bg-gradient-to-b from-white via-white to-slate-50/60 relative overflow-hidden">
      {/* Top subtle highlight */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="brand" size="xs">
            {type}
          </Badge>
          <div className="w-8 h-8 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 shadow-subtle group-hover:scale-105 transition-transform duration-200">
            <MessageSquare className="w-4 h-4" />
          </div>
        </div>

        <Heading as="h3" level="4" color="dark" className="mb-1 group-hover:text-brand-850 transition-colors">
          {name}
        </Heading>

        <div className="font-grotesk text-2xl font-black text-slate-900 my-2 tracking-tight">
          {number}
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {desc}
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-full py-3 px-5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-between transition-all duration-200 shadow-subtle hover:shadow-elevation bg-brand-850 hover:bg-brand-950 text-lime-300 active:scale-95 group/btn"
      >
        <span className="flex items-center gap-2">
          <PhoneCall className="w-4 h-4" />
          <span>{actionText}</span>
        </span>
        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-lime-400 group-hover/btn:rotate-45 transition-transform duration-200">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </a>
    </div>
  );
}
