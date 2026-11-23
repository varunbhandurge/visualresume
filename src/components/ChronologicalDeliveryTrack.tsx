import React from 'react';
import { Briefcase, FileCode2, GitBranch, RefreshCw, CheckCircle2 } from 'lucide-react';

export function ChronologicalDeliveryTrack() {
  const steps = [
    {
      num: '01',
      role: 'Commercial & Pre-Sales AM',
      icon: Briefcase,
      badge: 'Account Management',
      color: 'text-goldWarm',
      borderColor: 'border-goldWarm/30',
      summary: 'Enterprise contract negotiation, SLA scoping, and executive stakeholder alignment.',
      points: [
        'Multi-million deal structuring',
        'Enterprise SLA negotiation',
        'Stakeholder & P&L mapping',
      ],
    },
    {
      num: '02',
      role: 'Elicitation & AI Prototyping BA',
      icon: FileCode2,
      badge: 'ECBA™ Certified',
      color: 'text-cobalt',
      borderColor: 'border-cobalt/30',
      summary: 'Translating ambiguous business demands into BRDs/PRDs and functional AI prototypes.',
      points: [
        'BRD, PRD & FRD authoring',
        'FastAPI/Ollama working mocks',
        'Implicit gap & risk discovery',
      ],
    },
    {
      num: '03',
      role: 'Full-SDLC Governance PM',
      icon: GitBranch,
      badge: 'CSM® Certified',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400/30',
      summary: 'Sprint orchestration, backlog grooming, cross-functional engineering leadership.',
      points: [
        'Agile sprint squad leadership',
        'Engineering release gates',
        'Zero-regression QA delivery',
      ],
    },
    {
      num: '04',
      role: 'Onboarding & Renewals AM',
      icon: RefreshCw,
      badge: 'Enterprise Success',
      color: 'text-goldWarm',
      borderColor: 'border-goldWarm/30',
      summary: 'Client change management, high-volume onboarding, and recurring contract renewals.',
      points: [
        '95%+ automated KYC onboarding',
        'SLA compliance & GRC audits',
        'Multi-year contract renewals',
      ],
    },
  ];

  return (
    <section id="sequence" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3">
          <span className="font-mono text-[11px] uppercase tracking-wider text-slateMuted">
            Execution Lifecycle
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-alabaster tracking-tight">
          The End-to-End Enterprise Delivery Track
        </h2>
        <p className="text-sm sm:text-base text-slateMuted mt-2 leading-relaxed">
          From commercial origination to functional code and recurring renewals. A battle-tested 4-stage pipeline that eliminates delivery ambiguity.
        </p>
      </div>

      {/* 4-Stage Horizontal Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Subtle Horizontal Connector Line (Desktop) */}
        <div 
          className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-white/[0.08] z-0" 
          aria-hidden="true"
        />

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="relative z-10 rounded-xl bg-[#0D0F14] border border-white/[0.08] hover:border-white/20 p-6 flex flex-col justify-between transition-all group shadow-sm hover:shadow-tactile"
            >
              <div>
                {/* Step Top Meta */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/[0.04] text-alabaster border border-white/10">
                      {step.num}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-slateMuted">
                      Phase
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.08] ${step.color}`}>
                    {step.badge}
                  </span>
                </div>

                {/* Role & Summary */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className={`w-4 h-4 ${step.color}`} />
                    <h3 className="text-sm font-bold text-alabaster group-hover:text-white transition-colors">
                      {step.role}
                    </h3>
                  </div>
                  <p className="text-xs text-slateMuted leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                {/* Specific Deliverables */}
                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  {step.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slateMuted shrink-0" />
                      <span className="text-[11px] text-alabaster/80 font-mono">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] font-mono text-slateMuted/60">Stage Verified</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors" />
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
