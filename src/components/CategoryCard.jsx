import React from 'react';
import Badge from './ui/Badge';
import Heading from './ui/Heading';
import CheckList from './ui/CheckList';
import PillCTAButton from './ui/PillCTAButton';

export default function CategoryCard({
  badge,
  name,
  price,
  priceSub,
  target,
  features = [],
  ctaText,
  ctaLink,
  theme = 'white',
}) {
  const isForest = theme === 'forest';

  return (
    <div
      className={`group rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ease-out relative overflow-hidden ${
        isForest
          ? 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-800 via-brand-850 to-brand-950 text-white shadow-forest-card border border-brand-700/80 ring-1 ring-white/15 lg:-translate-y-2 hover:-translate-y-3.5 hover:shadow-card-hover'
          : 'bg-gradient-to-b from-white via-white to-slate-50/60 text-slate-800 border border-slate-200/90 hover:border-brand-400/60 shadow-card-depth hover:shadow-card-hover hover:-translate-y-2'
      }`}
    >
      {/* Top shimmer highlight on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Subtle ambient light for dark cards */}
      {isForest && (
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-lime-400/15 rounded-full blur-3xl pointer-events-none" />
      )}

      {isForest && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <Badge variant="lime" size="xs" className="shadow-elevation ring-2 ring-brand-950">
            Paling Banyak Dipakai
          </Badge>
        </div>
      )}

      <div className="relative z-10">
        <div className="mb-4">
          <Badge variant={isForest ? 'brandDark' : 'slate'} size="xs">
            {badge}
          </Badge>
        </div>

        <Heading
          as="h3"
          level="3"
          color={isForest ? 'light' : 'dark'}
          className="mb-4"
        >
          {name}
        </Heading>

        {/* Price capsule */}
        <div
          className={`rounded-2xl p-5 mb-6 transition-colors ${
            isForest
              ? 'bg-brand-900/90 border border-white/10 shadow-inner-glow'
              : 'bg-gradient-to-r from-brand-50/80 to-white border border-brand-100/90 shadow-subtle'
          }`}
        >
          <div
            className={`font-grotesk text-2xl sm:text-3xl font-extrabold ${
              isForest ? 'text-lime-400' : 'text-brand-850'
            }`}
          >
            {price}
          </div>
          <p
            className={`text-sm font-semibold mt-1 ${
              isForest ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {priceSub}
          </p>
        </div>

        <p
          className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
            isForest ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {target}
        </p>

        <CheckList
          items={features}
          theme={isForest ? 'forest' : 'light'}
          size="sm"
          className="space-y-3 mb-8"
        />
      </div>

      <div className="pt-5 border-t border-slate-200/40 relative z-10">
        <PillCTAButton
          href={ctaLink}
          target={ctaLink?.startsWith('http') ? '_blank' : undefined}
          rel={ctaLink?.startsWith('http') ? 'noreferrer' : undefined}
          variant={isForest ? 'lime' : 'dark'}
          className="w-full justify-between"
        >
          {ctaText}
        </PillCTAButton>
      </div>
    </div>
  );
}
