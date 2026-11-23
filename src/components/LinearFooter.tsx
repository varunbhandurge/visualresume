'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, FileText } from 'lucide-react';

interface LinearFooterProps {
  onOpenDossier: () => void;
}

export function LinearFooter({ onOpenDossier }: LinearFooterProps) {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#07080B] py-14">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Top Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="font-heading font-bold text-lg text-white">
              Varun Bhandurge
            </span>
            <p className="text-xs text-mutedText mt-1">
              Key Account Manager · Lead BA · Project Manager (CSM® · ECBA™)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDossier}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-white/90 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-brand-gold" />
              <span>Full Recruiter Dossier</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-medium text-[#08090C] bg-cyan-400 hover:bg-cyan-300 transition-all shadow-glow-cyan"
            >
              <span>Download PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mutedText">
          <div className="flex items-center gap-6">
            <a
              href="mailto:varunbhandurge@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>varunbhandurge@gmail.com</span>
            </a>
            <a
              href="https://github.com/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="text-[11px] text-mutedText/60">
            Deployed on Vercel · Next.js 14 App Router · © 2026 Varun Bhandurge
          </div>
        </div>

      </div>
    </footer>
  );
}
