'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Terminal, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-slatecard-border/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[250px] bg-brand-emerald/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Micro-Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slatecard-border bg-slatecard/80 text-xs font-mono text-neutral-300 mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
          <span className="text-white font-semibold">VARUN BHANDURGE</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">EXECUTIVE COMMAND &amp; BUILDER</span>
        </motion.div>

        {/* Massive Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.08] max-w-4xl"
        >
          I uncover what your business needs but can&apos;t articulate—
          <span className="bg-gradient-to-r from-brand-emerald via-teal-300 to-brand-blue bg-clip-text text-transparent">
            and I ship the AI prototypes to prove it.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-neutral-300 font-sans max-w-3xl leading-relaxed"
        >
          Key Account Manager, Lead BA, and Project Manager. I bridge the gap between ambiguous stakeholder demands and deployed technical reality.
        </motion.p>

        {/* Prominent Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="#prototypes"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emeraldLight text-obsidian font-bold text-base font-sans shadow-emerald-glow transition-all duration-200 group"
          >
            <span>View Live Prototypes</span>
            <ArrowDownRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-slatecard-border bg-slatecard/80 hover:bg-slatecard-hover hover:border-slatecard-borderHover text-white font-medium text-base font-sans transition-all duration-200"
          >
            <Download className="w-4 h-4 text-neutral-400" />
            <span>Download PDF Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
