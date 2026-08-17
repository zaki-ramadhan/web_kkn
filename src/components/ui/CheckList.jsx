import React from 'react';
import { CheckCircle2, Check } from 'lucide-react';

export function CheckListItem({
  children,
  icon: CustomIcon,
  theme = 'light',
  size = 'sm',
  className = '',
}) {
  const iconThemeStyles = {
    light: 'text-brand-700',
    forest: 'text-lime-400',
    rose: 'text-rose-600',
    lime: 'text-brand-950',
  };

  const textThemeStyles = {
    light: 'text-slate-700',
    forest: 'text-slate-200',
    rose: 'text-slate-800',
    dark: 'text-slate-200',
  };

  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-xs sm:text-sm',
    md: 'text-sm sm:text-base',
  };

  const IconComponent = CustomIcon || CheckCircle2;

  return (
    <li className={`flex items-start gap-2.5 ${sizeStyles[size]} ${className}`}>
      <IconComponent
        className={`w-4 h-4 shrink-0 mt-0.5 ${iconThemeStyles[theme] || iconThemeStyles.light}`}
      />
      <span className={textThemeStyles[theme] || textThemeStyles.light}>
        {children}
      </span>
    </li>
  );
}

export default function CheckList({
  items = [],
  theme = 'light',
  size = 'sm',
  className = 'space-y-3',
}) {
  return (
    <ul className={className}>
      {items.map((item, idx) => (
        <CheckListItem key={idx} theme={theme} size={size}>
          {item}
        </CheckListItem>
      ))}
    </ul>
  );
}
