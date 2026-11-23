'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const TerminalNavbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between font-mono text-xs">
        {/* Brand Terminal Identifier */}
        <div className="flex items-center gap-3">
          <span className="text-terminal font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-none bg-terminal animate-pulse"></span>
            VB://EXECUTIVE_POW
          </span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="hidden sm:inline text-neutral-400">Varun Bhandurge</span>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#pedigree"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            [ Pedigree ]
          </a>
          <a
            href="#proof"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            [ Proof ]
          </a>
          <a
            href="#trifecta"
            className="hidden md:inline text-neutral-400 hover:text-white transition-colors"
          >
            [ Method ]
          </a>
          <a
            href="mailto:varun.bhandurge@gmail.com"
            className="px-2.5 py-1 border border-terminal/40 text-terminal hover:bg-terminal hover:text-black font-semibold transition-all"
          >
            Connect ↗
          </a>
        </div>
      </div>
    </header>
  );
};
