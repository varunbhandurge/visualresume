'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface TrifectaItem {
  num: string;
  title: string;
  text: string;
}

export const ExecutionTrifecta: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items: TrifectaItem[] = [
    {
      num: '01',
      title: 'Elicit & Negotiate',
      text: 'I translate executive blind spots into hard technical requirements and negotiate the enterprise SLAs.',
    },
    {
      num: '02',
      title: 'Prototype & Ship',
      text: "I don't just write PRDs. I build and deploy the initial AI/FastAPI architecture to validate the customer journey immediately.",
    },
    {
      num: '03',
      title: 'Govern & Scale',
      text: 'Certified Scrum Master (CSM®). I drive the Agile sprints, manage the engineering delivery, and secure the contract renewals.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="trifecta" className="py-20 md:py-28 border-b border-surface-border bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
            <span className="text-terminal">&gt;</span>
            <span>THE EXECUTION TRIFECTA // HOW I OPERATE</span>
          </div>
          <span className="font-mono text-xs text-neutral-600">[ 3 GATES ]</span>
        </div>

        {/* Stark 3-Point Accordion List */}
        <div className="divide-y divide-surface-border border-y border-surface-border">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.num} className="transition-colors hover:bg-surface/50">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base font-bold text-terminal">
                      {item.num}.
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <div className="font-mono text-xs text-neutral-500 flex-shrink-0">
                    {isOpen ? <Minus className="w-5 h-5 text-terminal" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-10 sm:pl-12 pr-4">
                        <p className="font-mono text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
