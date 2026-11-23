'use client';

import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';

interface EditorialNavbarProps {
  onOpenDossier: () => void;
}

export function EditorialNavbar({ onOpenDossier }: EditorialNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-obsidian/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Identity & Badges */}
        <div className="flex items-center gap-3">
          <a href="#" className="group flex items-center gap-2">
            <span className="font-bold text-base sm:text-lg tracking-tight text-alabaster group-hover:text-white transition-colors">
              Varun Bhandurge
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-white/10">
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-white/[0.04] text-slateMuted border border-white/[0.08]">
              CSM®
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-white/[0.04] text-slateMuted border border-white/[0.08]">
              ECBA™
            </span>
          </div>
        </div>

        {/* Center / Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-slateMuted">
          <a href="#pedigree" className="hover:text-alabaster transition-colors">
            Track Record
          </a>
          <a href="#sequence" className="hover:text-alabaster transition-colors">
            Execution
          </a>
          <a href="#builds" className="hover:text-alabaster transition-colors">
            Live Builds
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDossier}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-alabaster bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/20 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-goldWarm" />
            <span>Full Dossier</span>
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-cobalt hover:bg-cobalt-light transition-all shadow-sm"
          >
            <span>Resume PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenDossier}
            className="p-1.5 text-xs text-alabaster bg-white/[0.04] border border-white/10 rounded-md"
            title="Open Dossier"
          >
            <FileText className="w-4 h-4 text-goldWarm" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slateMuted hover:text-alabaster focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 border-b border-white/[0.08] bg-obsidian space-y-3">
          <nav className="flex flex-col space-y-2 text-xs font-medium tracking-wide uppercase text-slateMuted">
            <a
              href="#pedigree"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-alabaster transition-colors"
            >
              Track Record
            </a>
            <a
              href="#sequence"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-alabaster transition-colors"
            >
              Execution
            </a>
            <a
              href="#builds"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-alabaster transition-colors"
            >
              Live Builds
            </a>
          </nav>
          <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-alabaster bg-white/[0.04] border border-white/10"
            >
              <FileText className="w-3.5 h-3.5 text-goldWarm" />
              <span>Full Recruiter Dossier</span>
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white bg-cobalt"
            >
              <span>Download PDF Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
