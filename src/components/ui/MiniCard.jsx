import React from 'react';

export default function MiniCard({
  icon: Icon,
  title,
  description,
  footer,
  variant = 'white',
  className = '',
}) {
  const variantStyles = {
    white: 'bg-white border-slate-200 text-slate-800 shadow-soft',
    brand: 'bg-brand-50/60 border-brand-100 text-brand-950',
    forest: 'bg-brand-900/80 border-white/10 text-white',
    rose: 'bg-white border-slate-200 text-slate-800 shadow-subtle',
    darkGlass: 'bg-white/5 border-white/10 text-white',
  };

  const iconStyles = {
    white: 'text-brand-700',
    brand: 'text-brand-850',
    forest: 'text-lime-400',
    rose: 'text-rose-600',
    darkGlass: 'text-lime-400',
  };

  return (
    <div
      className={`border rounded-2xl p-6 transition-all duration-200 ${
        variantStyles[variant] || variantStyles.white
      } ${className}`}
    >
      {Icon && (
        <div className="flex items-center gap-3 mb-2">
          <Icon className={`w-6 h-6 ${iconStyles[variant] || iconStyles.white}`} />
          {title && (
            <span className="font-grotesk font-bold text-base">
              {title}
            </span>
          )}
        </div>
      )}

      {!Icon && title && (
        <h4 className="font-grotesk font-bold text-base mb-2">
          {title}
        </h4>
      )}

      {description && (
        <p className="text-xs leading-relaxed opacity-90">
          {description}
        </p>
      )}

      {footer && (
        <div className="pt-3 mt-3 border-t border-slate-100/30 text-xs font-bold flex items-center gap-1.5">
          {footer}
        </div>
      )}
    </div>
  );
}
