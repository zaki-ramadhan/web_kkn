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
      className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
        isForest
          ? 'bg-brand-850 text-white shadow-elevation border border-brand-700/50 lg:-translate-y-2 ring-1 ring-white/10'
          : 'bg-white text-slate-800 border border-slate-200 shadow-soft hover:shadow-elevation'
      }`}
    >
      {isForest && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="lime" size="xs" className="shadow-subtle">
            Paling Banyak Dipakai
          </Badge>
        </div>
      )}

      <div>
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
          className={`rounded-xl p-4 mb-6 ${
            isForest
              ? 'bg-brand-900/80 border border-white/10'
              : 'bg-brand-50/60 border border-brand-100'
          }`}
        >
          <div
            className={`font-grotesk text-2xl font-extrabold ${
              isForest ? 'text-lime-400' : 'text-brand-850'
            }`}
          >
            {price}
          </div>
          <p
            className={`text-xs font-semibold mt-0.5 ${
              isForest ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {priceSub}
          </p>
        </div>

        <p
          className={`text-xs leading-relaxed mb-6 font-medium ${
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

      <div className="pt-4 border-t border-dashed border-slate-200/30">
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
