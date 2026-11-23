import React from 'react';
import { Mail, Phone, Download, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export function SimpleFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#07080B] py-14">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Contact Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div>
            <h3 className="font-heading font-bold text-lg text-white">
              Varun Bhandurge
            </h3>
            <p className="text-xs text-mutedText mt-1">
              Business & Technical Product Lead · CSM® · ECBA™
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <a
              href="mailto:varunbhandurge@gmail.com"
              className="px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 flex items-center gap-2 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>varunbhandurge@gmail.com</span>
            </a>

            <a
              href="tel:+918108161200"
              className="px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 8108161200</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#07080B] font-heading font-bold flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Traditional Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Links & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mutedText">
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-mutedText/50" />
            </a>

            <a
              href="https://www.linkedin.com/in/varun-bhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-mutedText/50" />
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
