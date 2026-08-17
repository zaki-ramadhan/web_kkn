import React from 'react';
import { avatarList } from '../../data/bpjsData';

export default function AvatarStack({
  label = '1.450+ Warga Terbantu Edukasi Mahasiswa',
  avatars = avatarList,
  className = '',
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-full py-1.5 px-3 shadow-subtle ${className}`}
    >
      <div className="flex -space-x-2 overflow-hidden">
        {avatars.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Relawan Mahasiswa"
            className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
          />
        ))}
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-brand-950 text-xs font-bold ring-2 ring-white">
          +
        </span>
      </div>
      <span className="text-xs font-semibold text-slate-700 pr-1">{label}</span>
    </div>
  );
}
