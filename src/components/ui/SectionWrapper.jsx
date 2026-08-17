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
    slate: 'bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-y border-slate-200/80',
    slateTop: 'bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-t border-slate-200/80',
    slateSoft: 'bg-gradient-to-b from-slate-50 via-slate-50/70 to-white border-t border-slate-200/80',
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
