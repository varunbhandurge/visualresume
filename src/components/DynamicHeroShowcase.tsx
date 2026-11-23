'use client';

import React, { useState } from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Download, 
  Activity, 
  Terminal, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export function DynamicHeroShowcase() {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'impact' | 'prototype'>('telemetry');
  const [activePrompt, setActivePrompt] = useState<'rfp' | 'ocr' | 'gherkin'>('rfp');
  const [copied, setCopied] = useState(false);

  const promptOutputs = {
    rfp: `{
  "client": "Tier-1 BFSI Institution",
  "domain": "Customer Onboarding & Regulatory KYC",
  "status": "Commercial SLA Scoped",
  "elicited_dependencies": [
    "Core Banking API Gateway (ISO 8583)",
    "Document AI OCR with <0.1% False Positive Threshold",
    "Audit Logging for RBI Compliance"
  ],
  "contract_value": "₹3.8 Cr Annual Recurring",
  "projected_velocity_gain": "45% reduction in onboarding TAT"
}`,
    ocr: `{
  "document_type": "Official Financial Statement / Invoice",
  "processing_engine": "BillVault AI (Vision + LLM)",
  "confidence_score": 0.984,
  "extracted_entities": {
    "account_number": "XXXX-XXXX-8921",
    "pan_verification": "VALIDATED_ACTIVE",
    "address_match_confidence": "99.2%",
    "tampering_flags": "NONE_DETECTED"
  },
  "audit_trail_id": "aud_bfsi_9921b"
}`,
    gherkin: `Feature: Automated BFSI Institutional KYC Verification

  Scenario: High-confidence document OCR extraction
    Given an encrypted customer identity PDF is received via webhook
    When the Document AI pipeline extracts fields with confidence > 95%
    Then the customer profile is staged in Supabase with status "APPROVED"
    And an automated SLA compliance receipt is dispatched to the audit vault.`
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Top Eyebrow Status Pill */}
      <div className="flex items-center gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 shadow-glow-cyan backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-xs text-white/90 font-medium tracking-wider uppercase">
            Key Account Manager · Lead BA · AI Builder (CSM® · ECBA™)
          </span>
        </div>
      </div>

      {/* Main Headline (H1): High-Impact Gradient Typography */}
      <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-[3.65rem] text-white tracking-tight leading-[1.12] max-w-4xl">
        I close enterprise deals, uncover{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
          what businesses miss from a tech POV
        </span>
        , and ship{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
          AI prototypes
        </span>{' '}
        to prove it.
      </h1>

      {/* Subtext */}
      <p className="text-base sm:text-lg text-mutedText leading-relaxed max-w-3xl mt-6 font-normal">
        <span className="text-white font-medium">₹10 Cr+ delivered</span> across Tier-1 BFSI (ICICI Bank, HDFC ERGO, ABSLI). Bridging executive commercial negotiations, BRD/PRD documentation, and working AI systems.
      </p>

      {/* Action Buttons */}
      <div className="pt-8 flex flex-wrap items-center gap-4">
        <a
          href="#systems"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-semibold text-sm text-[#08090C] bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-glow-cyan group"
        >
          <span>Explore Live Systems</span>
          <ArrowDown className="w-4 h-4 text-[#08090C] group-hover:translate-y-0.5 transition-transform" />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-heading font-medium text-sm text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-md"
        >
          <Download className="w-4 h-4 text-cyan-400" />
          <span>Download Resume (PDF)</span>
        </a>

        <a
          href="https://github.com/varunbhandurge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-mono text-mutedText hover:text-white transition-colors"
        >
          <span>GitHub Codebases</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Interactive Live Telemetry & Prototype Deck (Above the Fold) */}
      <div className="mt-14 rounded-2xl glass-card overflow-hidden border border-white/10 shadow-glow-card">
        
        {/* Deck Header & Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] px-5 py-3 bg-[#0A0D14]/90 gap-3">
          
          {/* Left: Window Dots & Title */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-xs text-mutedText pl-2 hidden sm:inline-block">
              executive-telemetry-console v2.4
            </span>
          </div>

          {/* Right: Tab Switcher */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.03] rounded-lg border border-white/[0.06]">
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all flex items-center gap-1.5 ${
                activeTab === 'telemetry'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-mutedText hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Live App Telemetry</span>
            </button>

            <button
              onClick={() => setActiveTab('impact')}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all flex items-center gap-1.5 ${
                activeTab === 'impact'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-mutedText hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BFSI Impact</span>
            </button>

            <button
              onClick={() => setActiveTab('prototype')}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all flex items-center gap-1.5 ${
                activeTab === 'prototype'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                  : 'text-mutedText hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>AI Prototype Sandbox</span>
            </button>
          </div>

        </div>

        {/* Tab 1: Live Production App Telemetry (MaximusOne) */}
        {activeTab === 'telemetry' && (
          <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-lg sm:text-xl text-white">
                    MaximusOne / TradeBuddy
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    Production SaaS
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-mutedText mt-1">
                  Autonomous 24/7 algorithmic execution engine with FastAPI backend and Supabase Realtime synchronization.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://maximusone.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#08090C] text-xs font-heading font-bold flex items-center gap-1.5 transition-all shadow-glow-cyan"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/varunbhandurge/tradebuddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-mono border border-white/10 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-mutedText uppercase block">Execution Latency</span>
                <span className="text-emerald-400 font-bold text-lg">74ms</span>
                <span className="text-[10px] text-mutedText/60 block mt-0.5">High-frequency webhook</span>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-mutedText uppercase block">Daemon Status</span>
                <span className="text-cyan-400 font-bold text-lg">24/7 Active</span>
                <span className="text-[10px] text-mutedText/60 block mt-0.5">Vercel Crons + Python</span>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-mutedText uppercase block">Database State</span>
                <span className="text-white font-bold text-lg">Supabase</span>
                <span className="text-[10px] text-mutedText/60 block mt-0.5">Realtime WebSockets</span>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-mutedText uppercase block">Risk Containment</span>
                <span className="text-amber-400 font-bold text-lg">Automated</span>
                <span className="text-[10px] text-mutedText/60 block mt-0.5">Max drawdown safeguard</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: BFSI Delivery Impact */}
        {activeTab === 'impact' && (
          <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="font-mono text-xs uppercase text-amber-300 font-semibold tracking-wider">
                Audited Institutional Impact
              </span>
              <span className="text-xs font-mono text-mutedText">
                10 Months Execution Footprint
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="font-mono text-3xl font-extrabold text-amber-300">
                  ₹10 Cr+
                </div>
                <div className="font-heading font-semibold text-sm text-white mt-1.5">
                  Enterprise Value Delivered
                </div>
                <p className="text-xs text-mutedText mt-1 leading-relaxed">
                  9 enterprise BFSI rollouts delivered in 10 months, accounting for 55% of total company revenue.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="font-mono text-3xl font-extrabold text-cyan-400">
                  95%+
                </div>
                <div className="font-heading font-semibold text-sm text-white mt-1.5">
                  KYC & OCR Automation
                </div>
                <p className="text-xs text-mutedText mt-1 leading-relaxed">
                  Document AI extraction scaled with &lt;0.1% false positives and &lt;4% false negatives across millions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="font-mono text-3xl font-extrabold text-emerald-400">
                  40%
                </div>
                <div className="font-heading font-semibold text-sm text-white mt-1.5">
                  Sprint Velocity Gain
                </div>
                <p className="text-xs text-mutedText mt-1 leading-relaxed">
                  Cycle time compressed from ambiguous RFP discovery to working engineering sprint through rapid AI prototypes.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-mutedText/70 mr-2">Verified Across:</span>
              {['ICICI Bank', 'HDFC ERGO', 'ICICI Prudential', 'ABSLI', 'Reliance ADAG'].map((b) => (
                <span key={b} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-heading font-medium text-white/90">
                  {b}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Interactive AI Prototype Sandbox */}
        {activeTab === 'prototype' && (
          <div className="p-6 sm:p-8 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-heading font-bold text-base text-white">
                  Live AI Workflow Simulation
                </h3>
                <p className="text-xs text-mutedText mt-0.5">
                  Select a workflow scenario to see how Varun bridges business requirements into structured engineering payloads.
                </p>
              </div>

              {/* Copy Output Button */}
              <button
                onClick={() => handleCopy(promptOutputs[activePrompt])}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-white/90 border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copied ? 'Copied Payload!' : 'Copy Payload'}</span>
              </button>
            </div>

            {/* Scenario Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActivePrompt('rfp')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activePrompt === 'rfp'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'bg-white/[0.02] text-mutedText hover:text-white border border-white/[0.06]'
                }`}
              >
                01. Ingest Unstructured RFP &rarr; BRD Matrix
              </button>

              <button
                onClick={() => setActivePrompt('ocr')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activePrompt === 'ocr'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'bg-white/[0.02] text-mutedText hover:text-white border border-white/[0.06]'
                }`}
              >
                02. Document AI Extraction Payload
              </button>

              <button
                onClick={() => setActivePrompt('gherkin')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activePrompt === 'gherkin'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'bg-white/[0.02] text-mutedText hover:text-white border border-white/[0.06]'
                }`}
              >
                03. User Story & Gherkin AC Schema
              </button>
            </div>

            {/* Code Output Viewer */}
            <div className="rounded-xl bg-[#060709] border border-white/[0.08] p-4 font-mono text-xs overflow-x-auto text-emerald-300">
              <pre className="leading-relaxed">
                <code>{promptOutputs[activePrompt]}</code>
              </pre>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
