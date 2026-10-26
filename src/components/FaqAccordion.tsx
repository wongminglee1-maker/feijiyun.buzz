"use client";

import React, { useState } from "react";
import { FaqItem } from "@/config/faq";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenFirst?: boolean;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  defaultOpenFirst = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenFirst && items.length > 0 ? [items[0].id] : []
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full divide-y divide-[#D7D9D6] border-y border-[#D7D9D6]">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} id={item.id} className="py-4 sm:py-5 scroll-mt-24">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-start justify-between text-left gap-4 focus:outline-none group"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#868C96] uppercase tracking-wider block">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                  {item.question}
                </h3>
              </div>
              <div
                className={`w-6 h-6 rounded-full border border-[#D7D9D6] flex items-center justify-center shrink-0 mt-1 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#17191D] text-white border-[#17191D]" : "text-[#868C96]"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="mt-3 text-sm sm:text-base text-[#17191D] leading-relaxed pr-6 animate-fade-up pl-0"
              >
                <p className="bg-white p-4 rounded-lg border border-[#D7D9D6]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
