'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, ArrowUpRight } from 'lucide-react';

export const ExecutiveHero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/[0.08]">
      {/* Linear-style subtle radial spotlight at top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.07), transparent 70%)',
        }}
      />
      {/* Subtle Indigo Ambient Backlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-xs font-mono text-zinc-300 mb-8 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
          <span className="tracking-wider uppercase font-semibold text-zinc-200">
            VARUN BHANDURGE • KEY ACCOUNT MANAGER | LEAD BA | PROJECT MANAGER (CSM®)
          </span>
        </motion.div>

        {/* Main Headline (H1) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.08] max-w-4xl"
        >
          From deal closure and AI prototyping to{' '}
          <span className="text-zinc-400 font-bold">
            full-SDLC enterprise delivery.
          </span>
        </motion.h1>

        {/* Chronological Execution Sub-headline (H2) */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-zinc-400 font-sans max-w-3xl leading-relaxed font-normal"
        >
          I negotiate commercial deals and SLAs, elicit requirements to uncover what businesses miss from a tech POV, ship rapid AI prototypes to engineering teams, and govern full-SDLC Agile delivery through client onboarding, managed services, and renewals.
        </motion.h2>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          {/* Primary Solid White / Platinum Button */}
          <a
            href="#builds"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-md group"
          >
            <span>Explore Live Builds</span>
            <ArrowDown className="w-4 h-4 text-zinc-600 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary Glass Button */}
          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-sm transition-all duration-200"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span>Download Resume (PDF)</span>
          </a>

          {/* GitHub Profile Button */}
          <a
            href="https://github.com/varunbhandurge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200"
          >
            <Github className="w-4 h-4 text-zinc-400" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
