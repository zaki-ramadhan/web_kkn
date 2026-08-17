import React from 'react';
import TopShimmer from './TopShimmer';

export default function CalloutBox({
  icon: Icon,
  title,
  description,
  children,
  variant = 'brand',
  interactive = false,
  className = '',
}) {
  const staticStyles = {
    brand: 'bg-gradient-to-r from-brand-50 via-brand-50/70 to-white border-brand-200/90 text-slate-900 shadow-card-depth',
    slate: 'bg-gradient-to-r from-slate-50 via-white to-slate-50 border-slate-200/90 text-slate-900 shadow-card-depth',
    rose: 'bg-gradient-to-r from-rose-50 via-rose-50/60 to-white border-rose-200 text-rose-950 shadow-card-depth',
    dark: 'bg-gradient-to-br from-brand-850 via-brand-900 to-brand-950 border-brand-700/80 text-white shadow-forest-card',
  };

  const hoverStyles = {
    brand: 'hover:border-brand-400/60 hover:-translate-y-1',
    slate: 'hover:border-slate-400/60 hover:-translate-y-1',
    rose: 'hover:border-rose-400/60 hover:-translate-y-1',
    dark: 'hover:border-white/30 hover:-translate-y-1',
  };

  const titleStyles = {
    brand: 'text-slate-900',
    slate: 'text-slate-900',
    rose: 'text-rose-950',
    dark: 'text-white',
  };

  const descStyles = {
    brand: 'text-slate-800',
    slate: 'text-slate-800',
    rose: 'text-rose-900',
    dark: 'text-slate-200',
  };

  const iconBgStyles = {
    brand: 'bg-gradient-to-br from-brand-850 to-brand-950 text-lime-400 border border-white/10 shadow-elevation',
    slate: 'bg-gradient-to-br from-slate-800 to-slate-950 text-white border border-white/10 shadow-elevation',
    rose: 'bg-gradient-to-br from-rose-600 to-rose-700 text-white border border-white/10 shadow-elevation',
    dark: 'bg-lime-400 text-brand-950 shadow-glow-lime',
  };

  return (
    <div
      className={`group relative border rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 ease-out ${
        staticStyles[variant] || staticStyles.brand
      } ${interactive ? hoverStyles[variant] || hoverStyles.brand : ''} ${className}`}
    >
      {interactive && <TopShimmer variant="brand" />}

      <div className="flex flex-col md:flex-row items-start justify-between gap-6 relative z-10">
        <div className="flex items-start gap-4">
          {Icon && (
            <div
              className={`p-3.5 rounded-2xl shrink-0 mt-0.5 ${
                iconBgStyles[variant] || iconBgStyles.brand
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
          )}
          <div>
            <h4
              className={`font-grotesk font-bold text-lg leading-snug ${
                titleStyles[variant] || titleStyles.brand
              }`}
            >
              {title}
            </h4>
            {description && (
              <p
                className={`text-sm sm:text-base mt-2 leading-relaxed max-w-3xl font-normal ${
                  descStyles[variant] || descStyles.brand
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
        {children && <div className="shrink-0">{children}</div>}
      </div>
    </div>
  );
}
