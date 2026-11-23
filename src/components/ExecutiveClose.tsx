'use client';

import React from 'react';
import { Mail, Download, ArrowUpRight, Github, Linkedin } from 'lucide-react';

export const ExecutiveClose: React.FC = () => {
  return (
    <footer className="py-24 md:py-32 bg-black text-center border-t border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* The Close Line */}
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
          // FINAL SEPARATION
        </p>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight max-w-3xl leading-snug">
          &ldquo;You can read a PDF, or we can talk about your Q3 deployment bottlenecks.&rdquo;
        </h2>

        {/* Primary Action: Initialize Contact */}
        <div className="mt-10">
          <a
            href="mailto:varun.bhandurge@gmail.com"
            className="inline-flex items-center gap-2 px-9 py-4 bg-terminal text-black font-mono font-bold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-terminal-glow"
          >
            <span>[ Initialize Contact ]</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Secondary Action: Muted Traditional Resume Link for HR Compliance */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="font-mono text-xs text-neutral-500 hover:text-neutral-300 underline underline-offset-4 transition-colors"
          >
            [ Download Traditional Resume.pdf ]
          </a>
        </div>

        {/* Direct Channels */}
        <div className="mt-16 pt-8 border-t border-surface-border w-full flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          <div>
            VB://POW • Varun Bhandurge • Mumbai, India
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
