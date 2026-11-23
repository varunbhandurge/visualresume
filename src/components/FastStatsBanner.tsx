'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FastStatsBanner: React.FC = () => {
  const stats = [
    {
      value: '₹10 Cr+',
      label: 'Revenue Driven via BFSI Delivery',
      accent: 'text-brand-emerald',
    },
    {
      value: '95%',
      label: 'Automated KYC Accuracy Achieved',
      accent: 'text-white',
    },
    {
      value: '100%',
      label: 'SDLC Ownership: Pre-Sales to Renewals',
      accent: 'text-brand-blue',
    },
  ];

  return (
    <section id="stats" className="py-14 sm:py-16 border-b border-slatecard-border/80 bg-obsidian-surface/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slatecard-border/70">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-6 md:py-4 px-4 sm:px-8 text-center flex flex-col items-center justify-center"
            >
              <div
                className={`text-5xl sm:text-6xl md:text-7xl font-extrabold font-mono tracking-tight ${stat.accent}`}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
