import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Badge from './ui/Badge';
import Heading from './ui/Heading';

export default function AccordionItem({
  id,
  category,
  question,
  answer,
  isOpen,
  onToggle,
}) {
  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-subtle transition-all duration-200 hover:border-slate-300">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="w-full py-5 px-6 flex items-start justify-between text-left gap-4 cursor-pointer focus:outline-none"
      >
        <div>
          {category && (
            <div className="mb-1.5">
              <Badge variant="brand" size="xs">
                {category}
              </Badge>
            </div>
          )}
          <Heading as="h3" level="4" color="dark">
            {question}
          </Heading>
        </div>
        <div
          className={`shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? 'bg-brand-900 text-lime-400' : 'bg-slate-100 text-slate-700'
          }`}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-slate-800 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/70 font-normal">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
