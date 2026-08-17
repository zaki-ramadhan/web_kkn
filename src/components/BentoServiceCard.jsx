import React from 'react';
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
      className={`${span} group relative rounded-3xl overflow-hidden shadow-card-depth hover:shadow-card-hover hover:-translate-y-1.5 min-h-[350px] flex flex-col justify-end border border-slate-200/90 hover:border-brand-400/50 bg-slate-900 transition-all duration-300 ease-out ${className}`}
    >
      {/* Top shimmer accent on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />

      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out opacity-75"
      />
      {/* Multi-stop cinematic gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-8 text-white">
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          {tag && (
            <Badge variant="lime" size="xs" className="shadow-subtle">
              {tag}
            </Badge>
          )}
          {stat && (
            <span className="inline-block text-sm text-lime-300 font-medium bg-black/50 px-3 py-1 rounded-full border border-lime-400/20 backdrop-blur-sm">
              {stat}
            </span>
          )}
        </div>
        <Heading as="h3" level="3" color="light" className="mb-2 group-hover:text-lime-200 transition-colors">
          {title}
        </Heading>
        <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
          {desc}
        </p>
      </div>
    </div>
  );
}
