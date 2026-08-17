import React from 'react';
import { Check } from 'lucide-react';

export default function CheckList({
  items = [],
  theme = 'light',
  size = 'sm',
  className = '',
}) {
  const themeStyles = {
    light: {
      text: 'text-slate-700',
      iconBg: 'bg-brand-50 text-brand-700 border-brand-200/80',
    },
    forest: {
      text: 'text-slate-200',
      iconBg: 'bg-lime-400 text-brand-950 border-lime-400',
    },
    dark: {
      text: 'text-slate-100',
      iconBg: 'bg-lime-400/20 text-lime-300 border-lime-400/30',
    },
  };

  const sizeStyles = {
    xs: 'text-sm',
    sm: 'text-sm sm:text-base',
    md: 'text-base',
  };

  const selectedTheme = themeStyles[theme] || themeStyles.light;

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span
            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 shadow-subtle ${selectedTheme.iconBg}`}
          >
            <Check className="w-3 h-3 stroke-[3]" />
          </span>
          <span className={`leading-relaxed font-normal ${selectedTheme.text} ${sizeStyles[size] || sizeStyles.sm}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
