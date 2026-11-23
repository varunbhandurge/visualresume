'use client';

import React, { useState } from 'react';
import { Download, Mail, Github, Menu, X } from 'lucide-react';

export const ExecutiveNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Impact & Clients', href: '#impact' },
    { label: 'Execution Sequence', href: '#sequence' },
    { label: 'Live Builds', href: '#builds' },
    { label: 'Recruiter Specs', href: '#specs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.08] bg-[#07080A]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-white/30 transition-all">
            VB
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-semibold text-sm tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              Varun Bhandurge
            </span>
            <span className="text-[10px] text-zinc-400 font-sans flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Key Account Manager &amp; Lead BA
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-md hover:text-white hover:bg-white/[0.04] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white text-xs font-medium transition-all"
          >
            <Download className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resume (PDF)</span>
          </a>

          <a
            href="https://github.com/varunbhandurge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-all"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <a
            href="mailto:varun.bhandurge@gmail.com"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-white/[0.1] bg-white/[0.03] text-zinc-300"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#07080A]/95 backdrop-blur-2xl px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-md text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2 mt-2">
            <a
              href="/resume.pdf"
              download="Varun_Bhandurge_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/[0.1] bg-white/[0.02] text-xs font-medium text-zinc-200"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
            <a
              href="mailto:varun.bhandurge@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black text-xs font-semibold"
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
