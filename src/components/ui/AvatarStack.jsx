import React from 'react';
import { avatarList } from '../../data/bpjsData';

export default function AvatarStack({
  label = '20 Mahasiswa KKN ARS Cibaregbeg',
  avatars = avatarList,
  variant = 'light',
  className = '',
}) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full py-2 px-4 backdrop-blur-md shadow-subtle transition-all ${
        isDark
          ? 'bg-black/50 border border-white/15 text-slate-200'
          : 'bg-white/95 border border-slate-200 text-slate-700'
      } ${className}`}
    >
      <div className="flex -space-x-2 overflow-hidden">
        {avatars.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Mahasiswa KKN ARS"
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-950 object-cover object-center shrink-0 bg-slate-800"
          />
        ))}
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-brand-950 text-xs font-bold ring-2 ring-brand-950 shrink-0">
          +16
        </span>
      </div>
      <span className={`text-sm font-semibold pr-1 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
        {label}
      </span>
    </div>
  );
}
