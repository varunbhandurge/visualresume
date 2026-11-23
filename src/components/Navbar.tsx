'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Mail, Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Secret Sauce', href: '#secret-sauce' },
    { label: 'Live Prototypes', href: '#prototypes' },
    { label: 'Impact', href: '#stats' },
    { label: 'Traditional Resume', href: '#resume-stuff' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slatecard-border/80 bg-obsidian/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-slatecard border border-slatecard-border flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-brand-emerald/50 group-hover:text-brand-emerald transition-all">
            VB
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-white group-hover:text-brand-emerald transition-colors">
              Varun Bhandurge
            </span>
            <span className="font-mono text-[10px] text-neutral-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
              Active Builder & Lead BA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-mono text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slatecard-border bg-slatecard hover:bg-slatecard-hover hover:border-slatecard-borderHover text-neutral-300 hover:text-white text-xs font-mono transition-all"
          >
            <Download className="w-3.5 h-3.5 text-neutral-400" />
            <span>PDF Resume</span>
          </a>

          <a
            href="mailto:varun.bhandurge@gmail.com"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-obsidian text-xs font-bold font-sans hover:bg-neutral-200 transition-all shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-slatecard-border bg-slatecard text-neutral-300"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slatecard-border bg-obsidian-elevated px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slatecard-border flex flex-col gap-2 mt-2">
            <a
              href="/resume.pdf"
              download="Varun_Bhandurge_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slatecard-border bg-slatecard text-xs font-mono text-neutral-200"
            >
              <Download className="w-4 h-4" />
              Download PDF Resume
            </a>
            <a
              href="mailto:varun.bhandurge@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-obsidian text-xs font-bold font-sans"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
