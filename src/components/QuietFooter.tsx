import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function QuietFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0A0A0B] py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mutedZinc">
        
        {/* Identity */}
        <div className="text-alabaster font-heading font-medium tracking-tight">
          Varun Bhandurge
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:varunbhandurge@gmail.com"
            className="hover:text-alabaster transition-colors"
          >
            varunbhandurge@gmail.com
          </a>

          <a
            href="https://github.com/varunbhandurge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-alabaster transition-colors inline-flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-alabaster transition-colors inline-flex items-center gap-1"
          >
            <span>Resume PDF</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </footer>
  );
}
