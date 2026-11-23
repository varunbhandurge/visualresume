'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Rocket } from 'lucide-react';

export const SecretSauceGrid: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Elicit',
      icon: <Search className="w-5 h-5 text-brand-emerald" />,
      text: 'Translating technical blind spots into clear business value.',
      accent: 'border-brand-emerald/30 bg-brand-emerald/5',
      glow: 'group-hover:border-brand-emerald/50',
    },
    {
      num: '02',
      title: 'Prototype',
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
      text: 'Building rapid AI workflows (FastAPI/Ollama) to validate customer journeys in hours, not weeks.',
      accent: 'border-brand-blue/30 bg-brand-blue/5',
      glow: 'group-hover:border-brand-blue/50',
    },
    {
      num: '03',
      title: 'Ship & Scale',
      icon: <Rocket className="w-5 h-5 text-purple-400" />,
      text: 'Full SDLC delivery, SLA governance, and enterprise renewals.',
      accent: 'border-purple-500/30 bg-purple-500/5',
      glow: 'group-hover:border-purple-500/50',
    },
  ];

  return (
    <section id="secret-sauce" className="py-20 md:py-24 border-b border-slatecard-border/60 bg-obsidian-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill & Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="font-mono text-xs text-brand-emerald uppercase tracking-widest font-semibold mb-2">
            THE SECRET SAUCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            How I Turn Ambiguity into Shipped Software
          </h2>
        </div>

        {/* 3-Column Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group relative rounded-2xl border border-slatecard-border bg-slatecard/90 p-8 flex flex-col justify-between transition-all duration-300 hover:bg-slatecard-hover ${step.glow} shadow-card-subtle`}
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-extrabold text-neutral-500 group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  <div className={`p-2.5 rounded-xl border ${step.accent}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white font-sans tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Exact Copy (Max 15 words) */}
                <p className="text-neutral-300 text-base font-sans leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-slatecard-border/60 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Phase {step.num}</span>
                <span className="text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  Autonomous Execution →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
