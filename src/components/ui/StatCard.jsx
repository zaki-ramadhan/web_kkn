import React from 'react';

export default function StatCard({
  value,
  label,
  detail,
  icon: Icon,
  className = '',
}) {
  return (
    <div className={`bg-white border border-slate-200 rounded-xl p-5 shadow-soft hover:shadow-elevation transition-shadow duration-200 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-grotesk text-3xl font-bold text-slate-900">{value}</span>
        {Icon && <Icon className="w-5 h-5 text-brand-700" />}
      </div>
      <p className="text-sm font-bold text-slate-900">{label}</p>
      <p className="text-xs text-slate-600 font-medium mt-0.5">{detail}</p>
    </div>
  );
}
