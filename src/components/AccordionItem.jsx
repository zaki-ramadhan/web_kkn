import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Badge from './ui/Badge';
import Heading from './ui/Heading';
import TopShimmer from './ui/TopShimmer';

export default function AccordionItem({
  id,
  category,
  question,
  answer,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ease-out ${
        isOpen
          ? 'border border-brand-400/80 bg-gradient-to-b from-white via-white to-brand-50/30 shadow-card-depth ring-1 ring-brand-400/20'
          : 'border border-slate-200/90 bg-white shadow-subtle hover:border-brand-400/50 hover:shadow-card-depth hover:-translate-y-0.5'
      }`}
    >
      <TopShimmer variant="brand" />

      <button
        type="button"
        onClick={() => onToggle(id)}
        className="w-full py-5 px-6 sm:px-7 flex items-start justify-between text-left gap-4 cursor-pointer focus:outline-none"
      >
        <div>
          {category && (
            <div className="mb-1.5">
              <Badge variant={isOpen ? 'brand' : 'slate'} size="xs">
                {category}
              </Badge>
            </div>
          )}
          <Heading as="h3" level="4" color="dark" className={`transition-colors ${isOpen ? 'text-brand-900 font-bold' : 'text-slate-900'}`}>
            {question}
          </Heading>
        </div>
        <div
          className={`shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-subtle ${
            isOpen ? 'bg-brand-900 text-lime-400 scale-105' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 sm:px-7 pb-6 pt-2 text-slate-800 text-sm sm:text-base leading-relaxed border-t border-brand-100/60 font-normal space-y-3">
          {typeof answer === 'string' ? (
            <p>{answer}</p>
          ) : (
            <>
              {answer.intro && (
                <p className="text-slate-700 leading-relaxed font-normal">
                  {answer.intro}
                </p>
              )}

              {answer.list && answer.list.length > 0 && (
                <ul className="space-y-2.5 pt-1">
                  {answer.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-brand-100/80 text-brand-850 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="text-slate-700 flex-1">
                        {item.title && (
                          <strong className="text-slate-900 font-semibold mr-1.5">
                            {item.title}:
                          </strong>
                        )}
                        <span>{item.text || item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
