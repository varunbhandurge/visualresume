'use client';

import React from 'react';
import {
  GitMerge,
  Cpu,
  Kanban,
  Building2,
  ShieldCheck,
  RefreshCw,
  ArrowUpRight,
} from 'lucide-react';

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  accent: string;
  glow: string;
}

export const CoreCapabilities: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    {
      id: 'bridging-business-tech',
      title: 'Bridging Business & Tech',
      badge: 'Discovery & Modeling',
      icon: <GitMerge className="w-5 h-5 text-brand-emerald" />,
      accent: 'border-brand-emerald/30 bg-brand-emerald/5',
      glow: 'group-hover:border-brand-emerald/50',
      description:
        'Eliciting complex requirements, uncovering unstated stakeholder needs, and authoring critical documentation (BRDs, PRDs) to align business vision with technical reality.',
    },
    {
      id: 'rapid-ai-prototyping',
      title: 'Rapid AI Prototyping',
      badge: 'FastAPI & Local LLMs',
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
      accent: 'border-brand-blue/30 bg-brand-blue/5',
      glow: 'group-hover:border-brand-blue/50',
      description:
        'Building and shipping functional AI prototypes directly to engineering teams to validate customer journeys and accelerate development.',
    },
    {
      id: 'sdlc-agile-leadership',
      title: 'End-to-End SDLC & Agile Leadership',
      badge: 'Certified Scrum Master (CSM®)',
      icon: <Kanban className="w-5 h-5 text-purple-400" />,
      accent: 'border-purple-500/30 bg-purple-500/5',
      glow: 'group-hover:border-purple-500/50',
      description:
        'Full-lifecycle project management—running Agile sprints, daily standups, process optimization, and strict SLA governance from kickoff to production.',
    },
    {
      id: 'enterprise-bfsi-delivery',
      title: 'Enterprise BFSI Delivery',
      badge: 'Tier-1 Banking Trust',
      icon: <Building2 className="w-5 h-5 text-teal-400" />,
      accent: 'border-teal-500/30 bg-teal-500/5',
      glow: 'group-hover:border-teal-500/50',
      description:
        'Spearheading customer onboarding, digital KYC, and OCR (Document AI) pipelines for industry leaders including ICICI Bank, HDFC ERGO, ICICI Prudential, ABSLI, and Reliance ADAG.',
    },
    {
      id: 'cybersecurity-sales-kam',
      title: 'Cybersecurity Sales & Key Account Management',
      badge: 'Revenue & Deal Defense',
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      accent: 'border-blue-500/30 bg-blue-500/5',
      glow: 'group-hover:border-blue-500/50',
      description:
        'Closing enterprise deals, negotiating complex SLAs, and driving consultative sales across GRC, Red Teaming, resource planning, and Managed Services.',
    },
    {
      id: 'client-lifecycle-ownership',
      title: 'Client Lifecycle Ownership',
      badge: 'Account Expansion',
      icon: <RefreshCw className="w-5 h-5 text-emerald-400" />,
      accent: 'border-emerald-500/30 bg-emerald-500/5',
      glow: 'group-hover:border-emerald-500/50',
      description:
        'Managing the complete customer journey from initial onboarding and stakeholder management through to successful enterprise contract renewals.',
    },
  ];

  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-slatecard-border/60 bg-obsidian-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-emerald uppercase tracking-widest font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
              End-to-End Execution &amp; Enterprise Delivery
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base font-sans max-w-md leading-relaxed">
            The 6-point operational engine behind ₹10 Cr+ in enterprise delivery, institutional BFSI trust, and production code.
          </p>
        </div>

        {/* 2x3 Elevated Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl border border-slatecard-border bg-slatecard/90 p-7 flex flex-col justify-between transition-all duration-300 hover:bg-slatecard-hover hover:-translate-y-1 ${item.glow} shadow-card-subtle`}
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-2.5 rounded-xl border ${item.accent}`}>
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-400 font-semibold">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-sans tracking-tight mb-3 group-hover:text-brand-emeraldLight transition-colors">
                  {item.title}
                </h3>

                {/* Exact Copy */}
                <p className="text-neutral-300 text-sm font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Index Marker */}
              <div className="mt-6 pt-4 border-t border-slatecard-border/60 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>0{idx + 1} / 06</span>
                <span className="text-neutral-400 group-hover:text-neutral-200 transition-colors flex items-center gap-1">
                  Engineered Execution
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
