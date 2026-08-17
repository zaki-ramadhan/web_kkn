import React from 'react';
import { PhoneCall, MessageSquare } from 'lucide-react';
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
    <div className="rounded-2xl p-6 flex flex-col justify-between border border-slate-200 hover:border-brand-500/50 transition-all duration-200 shadow-soft bg-white">
      <div>
        <div className="flex items-center justify-between mb-3">
          <Badge variant="brand" size="xs">
            {type}
          </Badge>
          <MessageSquare className="w-5 h-5 text-brand-700" />
        </div>

        <Heading as="h3" level="4" color="dark" className="mb-1">
          {name}
        </Heading>

        <div className="font-grotesk text-2xl font-black text-slate-900 my-2">
          {number}
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-full py-2.5 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-subtle bg-brand-850 hover:bg-brand-950 text-lime-300"
      >
        <PhoneCall className="w-3.5 h-3.5" />
        <span>{actionText}</span>
      </a>
    </div>
  );
}
