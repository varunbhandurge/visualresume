'use client';

import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check } from 'lucide-react';

export function SimpleHeader() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('varunbhandurge@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="w-full border-b border-white/[0.08] bg-[#0A0B0E]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        
        {/* Left: Identity */}
        <div>
          <a href="#" className="font-heading font-bold text-lg text-white hover:text-cyan-400 transition-colors">
            Varun Bhandurge
          </a>
          <p className="text-xs text-mutedText font-mono mt-0.5">
            Business & Technical Product Lead · CSM® · ECBA™
          </p>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <a
            href="mailto:varunbhandurge@gmail.com"
            className="text-mutedText hover:text-white transition-colors flex items-center gap-1.5"
            title="Email Varun"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">varunbhandurge@gmail.com</span>
          </a>

          <span className="text-white/20 select-none hidden md:inline">·</span>

          <a
            href="tel:+918108161200"
            className="text-mutedText hover:text-white transition-colors flex items-center gap-1.5"
            title="Call Varun"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 8108161200</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-1"
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight className="w-3 h-3 text-cyan-400" />
          </a>
        </div>

      </div>
    </header>
  );
}
