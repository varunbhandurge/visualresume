import React from 'react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';

export function ExecutiveHero() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="space-y-8">
        
        {/* Top Eyebrow: Clean, unboxed uppercase monospace */}
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
          <p className="font-mono text-xs uppercase tracking-widest text-mutedZinc/80 font-medium">
            Key Account Manager &nbsp;·&nbsp; Lead Business Analyst &nbsp;·&nbsp; Project Manager
          </p>
        </div>

        {/* Main Headline (H1): Large, breathing, with Instrument Serif italic emphasis */}
        <h1 className="font-heading font-semibold text-3xl sm:text-5xl md:text-[3.5rem] text-alabaster tracking-tighter leading-[1.12] max-w-4xl">
          I close enterprise deals, uncover{' '}
          <span className="font-serif italic font-normal text-white">
            what businesses miss from a tech POV
          </span>
          , and ship{' '}
          <span className="font-serif italic font-normal text-white">
            AI prototypes
          </span>{' '}
          to prove it.
        </h1>

        {/* Executive Summary: Exactly 2 crisp lines */}
        <p className="text-base sm:text-lg text-mutedZinc leading-relaxed max-w-2xl font-normal">
          End-to-end ownership across BFSI commercial negotiations, requirement elicitation, rapid AI prototyping, Agile SDLC governance, and multi-year contract renewals.
        </p>

        {/* Action Row: Strict monochrome + platinum restraint */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="#builds"
            className="inline-flex items-center gap-2 px-5 py-3 rounded bg-alabaster hover:bg-white text-obsidian font-medium text-sm transition-all shadow-sm"
          >
            <span>View Live Builds</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.03] text-alabaster font-medium text-sm transition-all"
          >
            <Download className="w-3.5 h-3.5 text-mutedZinc" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href="https://github.com/varunbhandurge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-3 text-mutedZinc hover:text-alabaster text-sm font-mono transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
