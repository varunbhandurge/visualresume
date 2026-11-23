'use client';

import React from 'react';
import { PERSONAL_DETAILS } from '../data/resumeData';
import { useToast } from './Toast';
import { Github, Linkedin, Mail, Download, ArrowUp, ShieldCheck, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const { showToast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.email);
      showToast('Email Copied to Clipboard', PERSONAL_DETAILS.email, 'success');
    } catch {
      showToast('Contact Email', PERSONAL_DETAILS.email, 'info');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-slatecard-border/80 bg-obsidian py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slatecard-border/60">
          {/* Left Column: Brand & Executive Summary */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slatecard border border-slatecard-border flex items-center justify-center font-mono font-bold text-sm text-neutral-100">
                VB
              </div>
              <span className="font-sans font-bold text-lg text-white">
                {PERSONAL_DETAILS.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-md leading-relaxed mt-1">
              Key Account Manager & Lead Business Analyst orchestrating enterprise BFSI digital onboarding, AI prototyping, and Agile SDLC governance.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              <span className="font-mono text-xs text-neutral-300">
                {PERSONAL_DETAILS.availabilityBadge}
              </span>
            </div>
          </div>

          {/* Right Column: Quick Contact & Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover text-neutral-200 hover:text-white text-xs font-mono transition-all"
              >
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>{PERSONAL_DETAILS.email}</span>
              </button>

              <a
                href={PERSONAL_DETAILS.resumePdfUrl}
                download="Varun_Bhandurge_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-brand-emerald/40 bg-brand-emerald/15 hover:bg-brand-emerald/25 text-brand-emerald text-xs font-mono font-semibold transition-all shadow-emerald-glow"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover text-neutral-300 hover:text-white transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover text-neutral-300 hover:text-white transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-brand-blueLight" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & tech details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_DETAILS.name}. Designed & Built for Vercel Deployment.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
            <span>Next.js App Router • Tailwind CSS • TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
