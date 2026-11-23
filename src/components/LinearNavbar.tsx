'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FileText, Menu, X, Sparkles } from 'lucide-react';

interface LinearNavbarProps {
  onOpenDossier: () => void;
}

export function LinearNavbar({ onOpenDossier }: LinearNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4 transition-all">
      <header
        className={`w-full max-w-5xl rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-[#0B0E14]/85 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-2.5 px-5 sm:px-6'
            : 'bg-[#0B0E14]/60 backdrop-blur-md border-white/[0.08] py-3 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Left Brand & Live Status */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Varun Bhandurge
              </span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 pl-2.5 border-l border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-emerald-400 font-medium tracking-wide">
                CSM® · ECBA™
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider text-mutedText">
            <a href="#pedigree" className="hover:text-white transition-colors">
              Impact
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              Engine
            </a>
            <a href="#systems" className="hover:text-white transition-colors">
              Live Systems
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenDossier}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-white/90 bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-cyan-500/40 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-brand-gold" />
              <span>Full Dossier</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold text-[#08090C] bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-glow-cyan"
            >
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#08090C]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenDossier}
              className="p-1.5 rounded-full bg-white/[0.05] border border-white/10 text-brand-gold text-xs"
              title="Full Dossier"
            >
              <FileText className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-mutedText hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden pt-3 mt-3 border-t border-white/[0.08] flex flex-col gap-2.5 pb-2">
            <nav className="flex flex-col gap-2 text-xs font-mono text-mutedText">
              <a
                href="#pedigree"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Track Record & Impact
              </a>
              <a
                href="#architecture"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Delivery Engine
              </a>
              <a
                href="#systems"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Live Systems & GitHub
              </a>
            </nav>
            <div className="pt-2 border-t border-white/[0.08] flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="flex-1 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white font-mono flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-brand-gold" />
                <span>Full Dossier</span>
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-300 text-[#08090C] text-xs font-heading font-semibold flex items-center justify-center gap-1"
              >
                <span>Resume PDF</span>
                <ArrowUpRight className="w-3 h-3 text-[#08090C]" />
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
