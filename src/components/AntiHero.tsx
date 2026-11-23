'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal } from 'lucide-react';

export const AntiHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 border-b border-surface-border bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          {/* Identity Tag */}
          <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
            <span className="text-terminal">&gt;</span>
            <span>Varun Bhandurge. Key Account Manager • Lead BA • AI Builder.</span>
          </div>

          {/* Massive Typography (H1) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white font-sans leading-[0.98]">
            Stop losing months to misaligned requirements.
          </h1>

          {/* The Hook (H2) */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-300 font-sans tracking-tight max-w-4xl mt-2 leading-snug">
            I map the business problem, negotiate the SLAs, and ship the AI prototype in days.
          </h2>

          {/* The Only CTA that matters */}
          <div className="pt-6">
            <a
              href="#proof"
              className="inline-flex items-center gap-3 px-8 py-4 bg-terminal text-black font-mono font-bold text-sm hover:bg-white transition-all duration-150 uppercase tracking-wider shadow-terminal-glow"
            >
              <span>[ Execute: View Live Prototypes ↗ ]</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
