import React from 'react';

export default function SectionWrapper({
  id,
  children,
  bg = 'white',
  className = '',
  containerClassName = '',
  noContainer = false,
}) {
  const bgStyles = {
    white: 'bg-white',
    slate: 'bg-slate-50/90 border-y border-slate-200/90',
    slateTop: 'bg-slate-50/90 border-t border-slate-200/90',
    slateSoft: 'bg-slate-50/70 border-y border-slate-200/80',
    brandTint: 'bg-brand-50/40 border-y border-brand-100/70',
    dark: 'bg-brand-950 text-white',
  };

  return (
    <section
      id={id}
      className={`py-20 ${bgStyles[bg] || bgStyles.white} ${className}`}
    >
      {noContainer ? (
        children
      ) : (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
          {children}
        </div>
      )}
    </section>
  );
}
