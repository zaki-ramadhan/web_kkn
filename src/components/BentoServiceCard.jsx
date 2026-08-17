import React from 'react';
import { Check } from 'lucide-react';
import Badge from './ui/Badge';
import Heading from './ui/Heading';

export default function BentoServiceCard({
  title,
  tag,
  desc,
  stat,
  image,
  span = 'col-span-12 lg:col-span-4',
  className = '',
}) {
  return (
    <div
      className={`${span} group relative rounded-2xl overflow-hidden shadow-soft min-h-[340px] flex flex-col justify-end border border-slate-200 bg-slate-900 ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
      <div className="relative z-10 p-6 sm:p-8 text-white">
        <div className="flex items-center gap-2 mb-2">
          {tag && (
            <Badge variant="lime" size="xs">
              {tag}
            </Badge>
          )}
          {stat && (
            <span className="inline-flex items-center gap-1 text-xs text-lime-300 font-semibold">
              <Check className="w-3.5 h-3.5 text-lime-400" />
              <span>{stat}</span>
            </span>
          )}
        </div>
        <Heading as="h3" level="3" color="light" className="mb-2">
          {title}
        </Heading>
        <p className="text-slate-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
