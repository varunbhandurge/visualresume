'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ImpactGrid: React.FC = () => {
  const metrics = [
    {
      metric: '₹10 Cr+',
      label: 'Delivered 9 BFSI enterprise projects in 10 months.',
      tag: '01 // REVENUE',
    },
    {
      metric: '95%+',
      label: 'Automated KYC & OCR onboarding precision achieved.',
      tag: '02 // ACCURACY',
    },
    {
      metric: 'Zero to Production',
      label: 'Full SDLC ownership across ICICI, HDFC ERGO, ABSLI, Reliance ADAG.',
      tag: '03 // TRUST',
    },
  ];

  return (
    <section id="impact" className="border-b border-surface-border bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-border">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="py-10 px-6 sm:px-8 flex flex-col justify-between"
            >
              <div className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-4">
                {item.tag}
              </div>

              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white tracking-tight">
                {item.metric}
              </div>

              <p className="mt-3 text-xs sm:text-sm font-mono text-neutral-400 leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
