'use client';

import React from 'react';
import { Mail, Github, Linkedin, FileText, Download, ArrowUpRight } from 'lucide-react';

interface EditorialFooterProps {
  onOpenDossier: () => void;
}

export function EditorialFooter({ onOpenDossier }: EditorialFooterProps) {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#07080B] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Identity & Subtext */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-alabaster">
              Varun Bhandurge
            </h3>
            <p className="text-xs sm:text-sm text-slateMuted max-w-md leading-relaxed">
              Key Account Manager • Lead Business Analyst • Project Manager (CSM®). Bridging commercial revenue origination with functional technical execution.
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenDossier}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-alabaster bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-goldWarm" />
              <span>Full Recruiter Dossier</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-white bg-cobalt hover:bg-cobalt-light transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Resume</span>
            </a>
          </div>

        </div>

        {/* Bottom Strip: Social Links & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slateMuted">
          <div className="flex items-center gap-6">
            <a
              href="mailto:varunbhandurge@gmail.com"
              className="flex items-center gap-1.5 hover:text-alabaster transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>varunbhandurge@gmail.com</span>
            </a>
            <a
              href="https://github.com/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-alabaster transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-alabaster transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="text-[11px] text-slateMuted/70">
            Deployed on Vercel &bull; Next.js 14 &bull; © 2026 Varun Bhandurge
          </div>
        </div>
      </div>
    </footer>
  );
}
