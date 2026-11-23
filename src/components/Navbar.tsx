'use client';

import React, { useState } from 'react';
import { PERSONAL_DETAILS } from '../data/resumeData';
import { useToast } from './Toast';
import { Download, Mail, Menu, X, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.email);
      showToast('Email Copied to Clipboard', PERSONAL_DETAILS.email, 'success');
    } catch {
      showToast('Contact Email', PERSONAL_DETAILS.email, 'info');
    }
  };

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Impact KPIs', href: '#metrics' },
    { label: '360° Matrix', href: '#capabilities' },
    { label: 'BFSI Enterprise', href: '#clients' },
    { label: 'Projects & AI', href: '#projects' },
    { label: 'SDLC Pipeline', href: '#lifecycle' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slatecard-border/80 bg-obsidian/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-slatecard-hover border border-slatecard-border flex items-center justify-center font-mono font-bold text-sm text-neutral-100 group-hover:border-brand-emerald/50 group-hover:text-brand-emerald transition-all">
            VB
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-neutral-100 group-hover:text-white transition-colors">
              Varun Bhandurge
            </span>
            <span className="font-mono text-[10px] text-brand-emerald uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
              CSM® Certified
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md hover:text-neutral-100 hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slatecard-border bg-slatecard/80 hover:bg-slatecard-hover hover:border-slatecard-borderHover text-neutral-300 hover:text-white text-xs font-medium transition-all"
            title="Copy email address"
          >
            <Mail className="w-3.5 h-3.5 text-brand-blue" />
            <span>Copy Email</span>
          </button>

          <a
            href={PERSONAL_DETAILS.resumePdfUrl}
            download="Varun_Bhandurge_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-brand-emerald/40 bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald text-xs font-semibold shadow-emerald-glow transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg border border-slatecard-border bg-slatecard text-neutral-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slatecard-border bg-obsidian-elevated px-4 pt-3 pb-5 flex flex-col gap-2 animate-fade-in">
          <div className="py-2 border-b border-slatecard-border/60 mb-2">
            <span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              {PERSONAL_DETAILS.availabilityBadge}
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slatecard-border flex flex-col gap-2 mt-2">
            <button
              onClick={() => {
                handleCopyEmail();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slatecard-border bg-slatecard text-neutral-200 text-xs font-medium"
            >
              <Mail className="w-4 h-4 text-brand-blue" />
              Copy Email Address
            </button>
            <a
              href={PERSONAL_DETAILS.resumePdfUrl}
              download="Varun_Bhandurge_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-brand-emerald/40 bg-brand-emerald/15 text-brand-emerald text-xs font-semibold"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
