'use client';

import React, { useState } from 'react';
import { PERSONAL_DETAILS } from '../data/resumeData';
import { useToast } from './Toast';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Terminal,
  Copy,
  ExternalLink,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.email);
      setCopiedEmail(true);
      showToast('Email Copied to Clipboard', PERSONAL_DETAILS.email, 'success');
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      showToast('Contact Email', PERSONAL_DETAILS.email, 'info');
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slatecard-border/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-brand-emerald/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Executive Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald text-xs font-mono w-fit shadow-emerald-glow">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              <span className="font-semibold tracking-wide">ENTERPRISE COMMAND CENTER</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300 font-sans">{PERSONAL_DETAILS.experienceYears} Proven Track Record</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.1]">
                {PERSONAL_DETAILS.name}
              </h1>
              <h2 className="mt-3 text-lg sm:text-xl font-medium text-brand-blueLight font-sans tracking-wide flex items-center flex-wrap gap-2">
                <span>Key Account Manager</span>
                <span className="text-neutral-600 font-mono">|</span>
                <span>Lead Business Analyst</span>
                <span className="text-neutral-600 font-mono">|</span>
                <span className="text-brand-emerald font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 inline" />
                  Project Manager (CSM®)
                </span>
              </h2>
            </div>

            {/* Value Proposition */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl font-normal">
              {PERSONAL_DETAILS.tagline}
            </p>

            {/* Specialization Pill Strips */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-slatecard border border-slatecard-border text-neutral-300">
                Tier-1 BFSI Digital Onboarding
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slatecard border border-slatecard-border text-neutral-300">
                Automated KYC & Google Doc AI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slatecard border border-slatecard-border text-neutral-300">
                Cybersecurity & GRC Sales
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slatecard border border-slatecard-border text-neutral-300">
                Multi-Agent AI Workflows
              </span>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Resume PDF Download */}
              <a
                href={PERSONAL_DETAILS.resumePdfUrl}
                download="Varun_Bhandurge_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-emerald text-obsidian font-bold text-sm hover:bg-brand-emeraldLight shadow-emerald-glow transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Explore GitHub */}
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover hover:border-slatecard-borderHover text-white font-medium text-sm transition-all"
              >
                <Github className="w-4 h-4 text-neutral-300" />
                <span>Explore GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              {/* Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slatecard-border bg-slatecard/80 hover:bg-slatecard-hover text-neutral-300 hover:text-white font-medium text-sm transition-all"
                title="Copy direct email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                    <span className="text-brand-emerald">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-brand-blue" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* LinkedIn */}
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover hover:border-slatecard-borderHover text-neutral-300 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-brand-blueLight" />
              </a>
            </div>
          </div>

          {/* Right Column: Executive Command Panel / Proof Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slatecard-border bg-obsidian-elevated/90 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
              {/* Header bar of the card */}
              <div className="flex items-center justify-between pb-4 border-b border-slatecard-border/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 font-mono text-xs text-neutral-400">executive-terminal: varun-bhandurge</span>
                </div>
                <div className="font-mono text-[11px] text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded">
                  VERIFIED DEPLOYED
                </div>
              </div>

              {/* Command Center Stats Grid */}
              <div className="mt-5 space-y-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-obsidian border border-slatecard-border/70 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Flagship Commercial Impact</div>
                    <div className="text-sm font-bold text-white mt-0.5 font-sans">
                      ₹10 Cr+ Enterprise Banking Portfolio
                    </div>
                    <div className="text-neutral-400 text-[11px] mt-0.5 font-sans">
                      Accounted for 55% of corporate revenue across 9 bank-wide rollouts.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-obsidian border border-slatecard-border/70 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Regulatory Compliance & KYC</div>
                    <div className="text-sm font-bold text-white mt-0.5 font-sans">
                      95%+ Automated OCR Precision
                    </div>
                    <div className="text-neutral-400 text-[11px] mt-0.5 font-sans">
                      Zero regulatory penalties; reduced document verification from 48h to 4m.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-obsidian border border-slatecard-border/70 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Engineering & AI Fluency</div>
                    <div className="text-sm font-bold text-white mt-0.5 font-sans">
                      Autonomous Swarms & Next.js Stacks
                    </div>
                    <div className="text-neutral-400 text-[11px] mt-0.5 font-sans">
                      Active GitHub builder shipping multi-agent tools, FastAPI microservices, and trading intelligence.
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick interactive trigger */}
              <div className="mt-5 pt-4 border-t border-slatecard-border/80 flex items-center justify-between text-xs text-neutral-400 font-sans">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                  status: ready_for_deployment
                </span>
                <a
                  href="#capabilities"
                  className="text-brand-blue hover:text-brand-blueLight flex items-center gap-1 font-medium transition-colors"
                >
                  View 360° Matrix →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
