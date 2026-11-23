'use client';

import React, { useState } from 'react';
import { CAPABILITY_PILLARS } from '../data/resumeData';
import { Sparkles, Kanban, ShieldCheck, CheckCircle2, FileText, Cpu, Award } from 'lucide-react';

export const CapabilityTabs: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(CAPABILITY_PILLARS[0].id);

  const activePillar =
    CAPABILITY_PILLARS.find((p) => p.id === activeTabId) || CAPABILITY_PILLARS[0];

  const getPillarIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Kanban':
        return <Kanban className={className} />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className={className} />;
    }
  };

  return (
    <section id="capabilities" className="py-16 md:py-24 border-b border-slatecard-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-blue font-semibold">
              EXECUTIVE LEADERSHIP MATRIX
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
            The 360° Capability Matrix
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
            A cohesive convergence of consultative revenue generation, precision requirements modeling, and battle-tested Agile SDLC governance.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-slatecard border border-slatecard-border mb-8">
          {CAPABILITY_PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTabId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTabId(pillar.id)}
                className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-obsidian border border-slatecard-borderHover text-white shadow-lg shadow-black/40'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg border transition-colors ${
                    isActive
                      ? 'bg-brand-blue/15 border-brand-blue/40 text-brand-blue'
                      : 'bg-slatecard-hover border-slatecard-border text-neutral-400'
                  }`}
                >
                  {getPillarIcon(pillar.iconName, 'w-5 h-5')}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-brand-emerald font-semibold uppercase tracking-wider">
                    {pillar.badge}
                  </div>
                  <div className="text-sm font-bold truncate font-sans text-neutral-100">
                    {pillar.shortTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Panel */}
        <div className="rounded-2xl border border-slatecard-border bg-obsidian-elevated p-6 sm:p-8 md:p-10 shadow-2xl animate-fade-in">
          {/* Pillar Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slatecard-border/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono text-xs mb-2">
                {getPillarIcon(activePillar.iconName, 'w-3.5 h-3.5')}
                <span>{activePillar.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                {activePillar.title}
              </h3>
              <p className="text-brand-blueLight text-sm font-sans mt-1">
                {activePillar.tagline}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian border border-slatecard-border max-w-md">
              <div className="flex items-center gap-2 text-brand-emerald text-xs font-mono font-semibold">
                <Award className="w-4 h-4" />
                <span>EXECUTIVE PROOF POINT</span>
              </div>
              <p className="text-xs text-neutral-300 font-sans mt-1 leading-relaxed">
                {activePillar.executiveProof}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans mt-6">
            {activePillar.description}
          </p>

          {/* Responsibilities & Bullet Points Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 pt-6 border-t border-slatecard-border/60">
            {/* Core Competencies (7 cols) */}
            <div className="lg:col-span-7">
              <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-neutral-200 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                Strategic Responsibilities & Methodologies
              </h4>
              <ul className="space-y-3">
                {activePillar.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables & Toolsets (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Deliverables */}
              <div className="p-5 rounded-xl bg-obsidian border border-slatecard-border/80">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-blue" />
                  Key Business Artifacts & Deliverables
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activePillar.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slatecard border border-slatecard-border text-neutral-300 text-xs font-sans"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="p-5 rounded-xl bg-obsidian border border-slatecard-border/80">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  Enterprise Tooling & Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activePillar.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slatecard border border-slatecard-border text-neutral-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
