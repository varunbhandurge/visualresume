'use client';

import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Download, Github, Linkedin, Copy, Check, MapPin } from 'lucide-react';

export function SimpleHero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('varunbhandurge@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="space-y-6">
        
        {/* Core Statement */}
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-[1.25]">
          I understand customer needs from both the{' '}
          <span className="text-cyan-400">business</span> and{' '}
          <span className="text-emerald-400">technical</span> point of view — translating ambiguous operational problems into engineered software and rapid AI prototypes.
        </h1>

        <p className="text-base text-mutedText leading-relaxed max-w-3xl">
          Lead Business Analyst and Certified ScrumMaster (CSM® · ECBA™). I uncover what stakeholders need, author clear requirements (BRDs/PRDs), ship functional prototypes to test customer journeys, and guide engineering teams to deliver right the first time.
        </p>

        {/* Contact Strip */}
        <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
          <a
            href="mailto:varunbhandurge@gmail.com"
            className="px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-cyan-500/30 transition-colors flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>varunbhandurge@gmail.com</span>
          </a>

          <a
            href="tel:+918108161200"
            className="px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-emerald-500/30 transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 8108161200</span>
          </a>

          <span className="px-3.5 py-2 rounded-lg bg-white/[0.02] text-mutedText border border-white/[0.06] flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Mumbai / Pune, India</span>
          </span>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#0A0B0E] font-heading font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Traditional Resume (PDF)</span>
          </a>
        </div>

        {/* Profiles */}
        <div className="pt-1 flex items-center gap-4 text-xs font-mono text-mutedText">
          <a
            href="https://github.com/varunbhandurge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3 text-mutedText/60" />
          </a>

          <span className="text-white/20 select-none">·</span>

          <a
            href="https://www.linkedin.com/in/varun-bhandurge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3 h-3 text-mutedText/60" />
          </a>
        </div>

      </div>
    </section>
  );
}
