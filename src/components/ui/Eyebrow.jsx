import React from 'react';

export default function Eyebrow({
  children,
  variant = 'brand',
  as: Tag = 'span',
  className = '',
}) {
  const variantStyles = {
    brand: 'text-brand-800',
    lime: 'text-lime-400',
    rose: 'text-rose-400',
    slate: 'text-slate-600',
  };

  return (
    <Tag
      className={`block text-sm sm:text-base font-semibold mb-2.5 tracking-normal ${
        variantStyles[variant] || variantStyles.brand
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
