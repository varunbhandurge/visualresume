'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';

interface ExecutiveHeaderProps {
  onOpenDossier: () => void;
}

export function ExecutiveHeader({ onOpenDossier }: ExecutiveHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-obsidian/80 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Identity with subtle inline text (no heavy boxes) */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-heading font-semibold text-base tracking-tight text-alabaster hover:text-white transition-colors">
            Varun Bhandurge
          </a>
          <span className="text-white/20 select-none text-xs">/</span>
          <span className="font-mono text-xs text-mutedZinc/70 tracking-wider">
            CSM® · ECBA™
          </span>
        </div>

        {/* Right: Desktop Navigation Links & Clean Action Buttons */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-6 text-xs font-mono tracking-wide text-mutedZinc">
            <a href="#impact" className="hover:text-alabaster transition-colors">
              Impact
            </a>
            <a href="#capabilities" className="hover:text-alabaster transition-colors">
              Capabilities
            </a>
            <a href="#builds" className="hover:text-alabaster transition-colors">
              Builds
            </a>
          </nav>

          <div className="flex items-center gap-3 pl-4 border-l border-white/[0.08]">
            <button
              onClick={onOpenDossier}
              className="text-xs font-medium text-alabaster/90 hover:text-white px-3 py-1.5 rounded border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.03] transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-champagne" />
              <span>Full Dossier</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-obsidian bg-alabaster hover:bg-white px-3.5 py-1.5 rounded transition-all flex items-center gap-1 shadow-sm"
            >
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3 h-3 text-obsidian" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDossier}
            className="text-xs text-alabaster px-2.5 py-1 rounded border border-white/[0.1] bg-white/[0.03]"
          >
            Dossier
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-mutedZinc hover:text-alabaster"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 bg-obsidian border-b border-white/[0.08] space-y-3">
          <nav className="flex flex-col space-y-2.5 text-xs font-mono text-mutedZinc">
            <a
              href="#impact"
              onClick={() => setMobileOpen(false)}
              className="hover:text-alabaster py-1"
            >
              Impact
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileOpen(false)}
              className="hover:text-alabaster py-1"
            >
              Capabilities
            </a>
            <a
              href="#builds"
              onClick={() => setMobileOpen(false)}
              className="hover:text-alabaster py-1"
            >
              Builds
            </a>
          </nav>
          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenDossier();
              }}
              className="flex-1 text-xs py-2 text-center rounded border border-white/[0.1] text-alabaster bg-white/[0.02]"
            >
              Full Dossier
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-xs py-2 text-center rounded bg-alabaster text-obsidian font-medium flex items-center justify-center gap-1"
            >
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3 h-3 text-obsidian" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
