'use client';

import React from 'react';
import { Briefcase, FileCode, GitPullRequest, RefreshCw, CheckCircle2 } from 'lucide-react';

export function ConnectedEngineSequence() {
  const steps = [
    {
      step: '01',
      title: 'Commercial Structuring & SLAs',
      role: 'Key Account Manager',
      icon: Briefcase,
      color: 'from-amber-400 to-orange-400',
      badge: 'Account Management',
      description: 'Negotiating multi-crore enterprise BFSI agreements, structuring SLA penalty/incentive matrices, and securing executive alignment.',
      artifacts: [
        'Enterprise SLA contracts & penalty matrices',
        'Commercial proposal & RFP responses',
        'C-suite stakeholder alignment & P&L',
      ],
    },
    {
      step: '02',
      title: 'Elicitation & AI Prototyping',
      role: 'Lead BA · ECBA™ Certified',
      icon: FileCode,
      color: 'from-cyan-400 to-teal-400',
      badge: 'IIBA® Standards',
      description: 'Uncovering unstated technical and regulatory pain points. Authoring BRDs/PRDs and shipping interactive FastAPI/Ollama prototypes in days.',
      artifacts: [
        'Structured BRDs, PRDs & FRDs',
        'Interactive FastAPI & Ollama prototypes',
        'As-Is vs. To-Be BPMN process models',
      ],
    },
    {
      step: '03',
      title: 'Full-SDLC Agile Delivery',
      role: 'Project Manager · CSM® Certified',
      icon: GitPullRequest,
      color: 'from-emerald-400 to-teal-300',
      badge: 'Scrum Alliance',
      description: 'Governing cross-functional engineering squads, backlog grooming, daily sprint ceremonies, QA gates, and production go-lives.',
      artifacts: [
        'Sprint backlogs & velocity tracking (Jira)',
        'Zero-regression release gates & QA plans',
        'Cross-functional squad resource management',
      ],
    },
    {
      step: '04',
      title: 'BFSI Onboarding & Renewals',
      role: 'Key Account Manager',
      icon: RefreshCw,
      color: 'from-cyan-400 to-blue-400',
      badge: 'Client Success & Expansion',
      description: 'Driving customer change management, scaling automated KYC & Document AI pipelines to 95%+ precision, and securing multi-year renewals.',
      artifacts: [
        '95%+ precision document extraction pipelines',
        'GRC compliance & post-launch SLA audits',
        '100% renewal retention on managed contracts',
      ],
    },
  ];

  return (
    <section id="architecture" className="w-full max-w-5xl mx-auto px-6 py-24 sm:py-32">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 text-xs font-mono font-medium mb-3">
          <span>Execution Lifecycle</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          The 4-Stage Enterprise Delivery Engine
        </h2>
        <p className="text-sm sm:text-base text-mutedText mt-2 leading-relaxed">
          From ambiguous pre-sales to working AI code and multi-year renewals. A structured lifecycle eliminating technical and commercial delivery friction.
        </p>
      </div>

      {/* 4-Column Grid with Connected Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((st) => {
          const Icon = st.icon;
          return (
            <div
              key={st.step}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 relative overflow-hidden"
            >
              {/* Subtle Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded bg-white/[0.05] text-cyan-300 border border-white/10">
                    PHASE {st.step}
                  </span>
                  <span className="text-[10px] font-mono text-mutedText px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.06]">
                    {st.badge}
                  </span>
                </div>

                {/* Title & Role */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-cyan-400 shrink-0" />
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {st.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-mutedText/80 mb-2">
                    {st.role}
                  </div>
                  <p className="text-xs text-mutedText leading-relaxed">
                    {st.description}
                  </p>
                </div>

                {/* Specific Artifacts */}
                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  <span className="text-[10px] font-mono uppercase text-mutedText/60 block">Key Deliverables</span>
                  {st.artifacts.map((art) => (
                    <div key={art} className="flex items-start gap-2 text-[11px] text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{art}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-mutedText/60">
                <span>Verified Milestones</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
