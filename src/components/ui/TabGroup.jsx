import React from 'react';

export default function TabGroup({
  tabs = [],
  activeTab,
  onTabChange,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-2 overflow-x-auto pb-4 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
            activeTab === tab.id
              ? 'bg-brand-850 text-lime-300 shadow-subtle'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
