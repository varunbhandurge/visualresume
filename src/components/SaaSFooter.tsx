'use client';

import React from 'react';
import { Mail, Github, Linkedin, Download, ArrowUp, ArrowUpRight } from 'lucide-react';

export const SaaSFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 md:py-24 border-t border-slatecard-border/80 bg-obsidian text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Call to Action Hook */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight max-w-2xl leading-tight">
          Ready to skip the generic BA interviews?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-400 font-sans max-w-xl">
          Let&apos;s talk about your roadmap, stakeholder bottlenecks, and shipping prototypes that get immediate executive buy-in.
        </p>

        {/* Large Prominent Get in Touch Button */}
        <div className="mt-8">
          <a
            href="mailto:varun.bhandurge@gmail.com"
            className="inline-flex items-center gap-3 px-9 py-5 rounded-2xl bg-white hover:bg-neutral-200 text-obsidian font-extrabold text-lg font-sans shadow-2xl transition-all duration-200 group"
          >
            <Mail className="w-5 h-5 text-obsidian" />
            <span>Get in Touch</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Secondary Links & Direct Profile Channels */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-400">
          <a
            href="https://github.com/varunbhandurge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slatecard-border bg-slatecard hover:bg-slatecard-hover hover:text-white transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/varunbhandurge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slatecard-border bg-slatecard hover:bg-slatecard-hover hover:text-white transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-brand-blue" />
            <span>LinkedIn</span>
          </a>

          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slatecard-border bg-slatecard hover:bg-slatecard-hover hover:text-white transition-all"
          >
            <Download className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Bottom Back-to-Top and Meta */}
        <div className="mt-16 pt-8 border-t border-slatecard-border/60 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Varun Bhandurge • Next.js &amp; Tailwind on Vercel
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
