import React from 'react';

export default function TabGroup({
  tabs = [],
  activeTab,
  onTabChange,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-brand-900 text-lime-400 shadow-card-depth'
                : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
