import React from 'react';

export default function CalloutBox({
  icon: Icon,
  title,
  description,
  children,
  variant = 'brand',
  className = '',
}) {
  const variantStyles = {
    brand: 'bg-brand-50 border-brand-200 text-slate-900',
    slate: 'bg-slate-50 border-slate-200 text-slate-900',
    rose: 'bg-rose-50 border-rose-200 text-rose-900',
    dark: 'bg-brand-900/80 border-white/10 text-white',
  };

  const iconBgStyles = {
    brand: 'bg-brand-850 text-lime-400',
    slate: 'bg-slate-800 text-white',
    rose: 'bg-rose-600 text-white',
    dark: 'bg-lime-400 text-brand-950',
  };

  return (
    <div
      className={`border rounded-2xl p-6 sm:p-8 ${
        variantStyles[variant] || variantStyles.brand
      } ${className}`}
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          {Icon && (
            <div
              className={`p-3 rounded-xl shrink-0 mt-0.5 ${
                iconBgStyles[variant] || iconBgStyles.brand
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
          )}
          <div>
            <h4 className="font-grotesk font-bold text-lg">{title}</h4>
            {description && (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 mt-1 leading-relaxed max-w-3xl">
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
