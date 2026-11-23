'use client';

import React, { useState } from 'react';
import { 
  ArrowDown, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Briefcase, 
  Code2, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  TrendingUp,
  Cpu,
  FileCheck
} from 'lucide-react';

export function AsymmetricHero() {
  const [activeTab, setActiveTab] = useState<'impact' | 'live-app' | 'credentials'>('impact');

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 lg:pb-24">
      {/* 12-Column Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: 7 Columns — Executive Thesis, Headline & 6 Execution Bullets */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slateMuted font-medium">
              Key Account Manager • Lead BA • Project Manager
            </span>
          </div>

          {/* Main Headline (H1) with Editorial Instrument Serif Emphasis */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-alabaster tracking-tight leading-[1.15]">
            I close enterprise deals,{' '}
            <span className="font-serif italic font-normal text-white">
              uncover what businesses can&apos;t see
            </span>{' '}
            from a tech POV, and ship the AI prototypes to prove it.
          </h1>

          {/* 6 Punchy Execution Bullets */}
          <div className="pt-2">
            <p className="font-mono text-xs uppercase tracking-wider text-slateMuted font-medium mb-3">
              Core Execution Capabilities
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-goldWarm shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-bold text-alabaster">Commercial & SLA Closure</h2>
                    <p className="text-[11px] text-slateMuted mt-0.5 leading-relaxed">
                      Negotiating high-value multi-year BFSI contracts and enterprise SLAs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-bold text-alabaster">Requirement Elicitation & Docs</h2>
                    <p className="text-[11px] text-slateMuted mt-0.5 leading-relaxed">
                      Uncovering unstated stakeholder pain points; authoring BRDs, PRDs, & FRDs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-bold text-alabaster">Rapid AI Prototyping</h2>
                    <p className="text-[11px] text-slateMuted mt-0.5 leading-relaxed">
                      Shipping functional AI workflows (FastAPI, Ollama, Vercel) in days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-bold text-alabaster">Full-SDLC Agile Delivery</h2>
                    <p className="text-[11px] text-slateMuted mt-0.5 leading-relaxed">
                      Leading cross-functional sprint squads with CSM® and ECBA™ rigor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-goldWarm shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-bold text-alabaster">BFSI Onboarding & OCR</h2>
                    <p className="text-[11px] text-slateMuted mt-0.5 leading-relaxed">
                      Automated KYC pipelines scaling to 95%+ precision across millions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-bold text-alabaster">Cybersecurity & Renewals</h2>
                    <p className="text-[11px] text-slateMuted mt-0.5 leading-relaxed">
                      Aligning GRC audits, red-teaming checks, and recurring client renewals.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#builds"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cobalt hover:bg-cobalt-light text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-cobalt/20"
            >
              <span>Explore Live Builds</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-alabaster font-medium text-xs sm:text-sm border border-white/10 hover:border-white/20 transition-all"
            >
              <Download className="w-4 h-4 text-slateMuted" />
              <span>Download Resume.pdf</span>
            </a>

            <a
              href="https://github.com/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-slateMuted hover:text-alabaster hover:bg-white/[0.03] text-xs sm:text-sm transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Right Column: 5 Columns — Tactile Proof Switcher Card */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-xl bg-[#0D0F14] border border-white/10 p-6 shadow-tactile">
            
            {/* Top Navigation Tabs */}
            <div className="flex items-center gap-1 p-1 bg-white/[0.03] rounded-lg border border-white/[0.06] mb-6">
              <button
                onClick={() => setActiveTab('impact')}
                className={`flex-1 py-1.5 px-2 rounded-md font-mono text-[11px] font-medium transition-all ${
                  activeTab === 'impact'
                    ? 'bg-white/10 text-alabaster shadow-sm border border-white/10'
                    : 'text-slateMuted hover:text-alabaster'
                }`}
              >
                01. BFSI Impact
              </button>

              <button
                onClick={() => setActiveTab('live-app')}
                className={`flex-1 py-1.5 px-2 rounded-md font-mono text-[11px] font-medium transition-all ${
                  activeTab === 'live-app'
                    ? 'bg-white/10 text-alabaster shadow-sm border border-white/10'
                    : 'text-slateMuted hover:text-alabaster'
                }`}
              >
                02. Live AI App
              </button>

              <button
                onClick={() => setActiveTab('credentials')}
                className={`flex-1 py-1.5 px-2 rounded-md font-mono text-[11px] font-medium transition-all ${
                  activeTab === 'credentials'
                    ? 'bg-white/10 text-alabaster shadow-sm border border-white/10'
                    : 'text-slateMuted hover:text-alabaster'
                }`}
              >
                03. Credentials
              </button>
            </div>

            {/* TAB CONTENT: 01. BFSI IMPACT */}
            {activeTab === 'impact' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-xs uppercase tracking-wider text-slateMuted">
                    Institutional Track Record
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Production Audited
                  </span>
                </div>

                {/* Metric 1 */}
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-3xl font-bold text-alabaster">₹10 Cr+</span>
                    <span className="font-mono text-xs text-goldWarm">9 Projects</span>
                  </div>
                  <p className="text-xs text-slateMuted mt-1">
                    Enterprise delivery value rolled out across BFSI leaders in 10 months.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-3xl font-bold text-alabaster">95%+</span>
                    <span className="font-mono text-xs text-emerald-400">KYC & OCR</span>
                  </div>
                  <p className="text-xs text-slateMuted mt-1">
                    Automated document extraction precision across millions of institutional onboardings.
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-3xl font-bold text-alabaster">40%</span>
                    <span className="font-mono text-xs text-cobalt">Velocity Gain</span>
                  </div>
                  <p className="text-xs text-slateMuted mt-1">
                    Cycle time reduction from ambiguous RFP scoping to working engineering sprint.
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slateMuted/80 text-center">
                  Verified deployments: ICICI Bank • HDFC ERGO • ABSLI
                </div>
              </div>
            )}

            {/* TAB CONTENT: 02. LIVE AI APP */}
            {activeTab === 'live-app' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-xs uppercase tracking-wider text-slateMuted">
                    Flagship Deployment
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-cobalt/10 text-cobalt border border-cobalt/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-cobalt animate-ping" />
                    Live on Vercel
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.08] space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-bold text-alabaster">MaximusOne / TradeBuddy</h3>
                      <p className="text-xs text-slateMuted mt-0.5 font-mono">maximusone.vercel.app</p>
                    </div>
                    <Cpu className="w-5 h-5 text-cobalt" />
                  </div>

                  <p className="text-xs text-alabaster/80 leading-relaxed">
                    Full-stack autonomous multi-asset trading engine with real-time telemetry, automated risk-adjusted position sizing, and Supabase cloud synchronization.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Next.js 14', 'FastAPI', 'Vercel Crons', 'Supabase'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slateMuted border border-white/[0.08]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="https://maximusone.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-cobalt hover:bg-cobalt-light text-white text-xs font-medium transition-colors"
                  >
                    <span>Launch App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/varunbhandurge/tradebuddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-alabaster text-xs font-medium border border-white/10 transition-colors"
                  >
                    <span>Codebase</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slateMuted" />
                  </a>
                </div>
              </div>
            )}

            {/* TAB CONTENT: 03. CREDENTIALS */}
            {activeTab === 'credentials' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-xs uppercase tracking-wider text-slateMuted">
                    Formal Certifications
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-goldWarm/10 text-goldWarm border border-goldWarm/20">
                    Industry Standard
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-alabaster">CSM® — Certified ScrumMaster®</div>
                      <div className="text-[11px] text-slateMuted">Scrum Alliance • Agile Squad Governance</div>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Active</span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-alabaster">ECBA™ — Business Analysis</div>
                      <div className="text-[11px] text-slateMuted">IIBA® • Requirements Engineering & BABOK®</div>
                    </div>
                    <span className="font-mono text-[10px] text-cobalt bg-cobalt/10 px-2 py-0.5 rounded">Verified</span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-alabaster">Cyber GRC & Audit Readiness</div>
                      <div className="text-[11px] text-slateMuted">ISO 27001 • Red-Teaming • BFSI Audits</div>
                    </div>
                    <span className="font-mono text-[10px] text-goldWarm bg-goldWarm/10 px-2 py-0.5 rounded">Security</span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-alabaster">Cloud & AI Prototyping</div>
                      <div className="text-[11px] text-slateMuted">GCP, Docker, Ollama, LangChain, Vercel</div>
                    </div>
                    <span className="font-mono text-[10px] text-alabaster bg-white/10 px-2 py-0.5 rounded">Hands-on</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
