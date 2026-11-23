'use client';

import React from 'react';
import { CLIENT_LOGOS, DOMAIN_HIGHLIGHTS } from '../data/resumeData';
import { Building, ShieldAlert, FileCheck, CheckCircle2, Award, Lock } from 'lucide-react';

export const ClientGrid: React.FC = () => {
  return (
    <section id="clients" className="py-16 md:py-24 border-b border-slatecard-border/60 bg-obsidian-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-emerald font-semibold">
              INSTITUTIONAL TRUST & CLIENT PEDIGREE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
            BFSI Enterprise Client & Domain Showcase
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
            Stewardship and consultative execution across India’s most strictly regulated banking, insurance, and financial conglomerates.
          </p>
        </div>

        {/* Enterprise Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.id}
              className="group relative rounded-xl border border-slatecard-border bg-slatecard/80 p-5 flex flex-col justify-between transition-all duration-300 hover:border-brand-emerald/40 hover:bg-slatecard-hover hover:shadow-emerald-glow"
            >
              <div>
                <div className="font-mono text-[10px] text-brand-emerald font-semibold uppercase tracking-wider mb-2">
                  {client.statusBadge}
                </div>
                {/* Wordmark logo card */}
                <div className="text-lg font-bold font-sans text-neutral-200 group-hover:text-white transition-colors">
                  {client.name}
                </div>
                <div className="text-xs text-neutral-500 font-sans mt-0.5">
                  {client.category}
                </div>
                <p className="text-xs text-neutral-400 font-sans mt-3 leading-relaxed">
                  {client.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slatecard-border/60 font-mono text-[10px] text-neutral-300 group-hover:text-brand-emerald transition-colors">
                {client.impactMetrics}
              </div>
            </div>
          ))}
        </div>

        {/* Two Domain Highlight Deep-Dives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DOMAIN_HIGHLIGHTS.map((domain) => {
            const isOcr = domain.id === 'bfsi-onboarding-ocr';
            return (
              <div
                key={domain.id}
                className="rounded-2xl border border-slatecard-border bg-obsidian-elevated p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                {/* Accent glow on top edge */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isOcr ? 'bg-brand-emerald' : 'bg-brand-blue'
                  }`}
                />

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md border font-semibold ${
                        isOcr
                          ? 'bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald'
                          : 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue'
                      }`}
                    >
                      {domain.badge}
                    </span>
                    <div
                      className={`p-2 rounded-lg border ${
                        isOcr
                          ? 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald'
                          : 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue'
                      }`}
                    >
                      {isOcr ? <FileCheck className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                    {domain.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 mt-1 mb-4">
                    {domain.subtitle}
                  </div>

                  <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                    {domain.description}
                  </p>

                  {/* Quantified Metrics Grid */}
                  <div className="mb-6 p-4 rounded-xl bg-obsidian border border-slatecard-border/70 space-y-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
                      Validated Benchmark Metrics
                    </div>
                    {domain.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                            isOcr ? 'text-brand-emerald' : 'text-brand-blue'
                          }`}
                        />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Capabilities */}
                  <div className="mb-6">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-3">
                      Core Functional Capabilities
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domain.keyCapabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slatecard border border-slatecard-border text-neutral-300 text-xs font-sans"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Regulatory / Compliance Strip */}
                <div className="pt-4 border-t border-slatecard-border/60">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    Regulatory Governance & Standards
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.governanceAndStandards.map((std, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-400"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
