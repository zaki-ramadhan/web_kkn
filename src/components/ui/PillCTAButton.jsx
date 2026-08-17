import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PillCTAButton({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'dark',
  size = 'md',
  className = '',
  icon: CustomIcon,
}) {
  const variantStyles = {
    dark: 'bg-brand-900 hover:bg-brand-950 text-white pl-5 pr-2 py-2 border border-brand-800',
    light: 'bg-white hover:bg-slate-50 text-brand-950 pl-5 pr-2 py-2 border border-slate-200',
    lime: 'bg-lime-400 hover:bg-lime-300 text-brand-950 pl-5 pr-2 py-2 border border-lime-500/30 font-bold',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white pl-5 pr-2 py-2 border border-rose-700 font-bold',
  };

  const badgeStyles = {
    dark: 'bg-lime-400 text-brand-950 group-hover:bg-lime-300 group-hover:rotate-45',
    light: 'bg-brand-900 text-lime-400 group-hover:bg-brand-950 group-hover:rotate-45',
    lime: 'bg-brand-950 text-lime-400 group-hover:rotate-45',
    danger: 'bg-white text-rose-600 group-hover:rotate-45',
  };

  const sizeStyles = {
    sm: 'text-sm py-2 pl-4 pr-2',
    md: 'text-sm sm:text-base py-2.5 pl-5 pr-2.5',
    lg: 'text-base sm:text-lg py-3 pl-6 pr-3',
  };

  const content = (
    <>
      <span className="font-semibold tracking-tight">{children}</span>
      <span
        className={`flex items-center justify-center rounded-full p-1.5 transition-transform duration-200 ${
          badgeStyles[variant] || badgeStyles.dark
        }`}
      >
        {CustomIcon ? (
          <CustomIcon className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
        ) : (
          <ArrowUpRight className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} strokeWidth={2.5} />
        )}
      </span>
    </>
  );

  const baseClasses = `group inline-flex items-center justify-between gap-3 rounded-full font-medium transition-all duration-200 cursor-pointer shadow-subtle hover:shadow-elevation active:scale-[0.98] ${
    variantStyles[variant] || variantStyles.dark
  } ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className={baseClasses}>
      {content}
    </button>
  );
}
