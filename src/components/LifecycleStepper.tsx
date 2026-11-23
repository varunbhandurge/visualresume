'use client';

import React, { useState } from 'react';
import { LIFECYCLE_STAGES } from '../data/resumeData';
import { LifecycleStage } from '../data/types';
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Users,
  ShieldAlert,
  Target,
  FileText,
  Workflow,
} from 'lucide-react';

export const LifecycleStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStage: LifecycleStage =
    LIFECYCLE_STAGES.find((s) => s.step === activeStep) || LIFECYCLE_STAGES[0];

  return (
    <section id="lifecycle" className="py-16 md:py-24 border-b border-slatecard-border/60 bg-obsidian-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-3xl mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-emerald font-semibold">
              END-TO-END SDLC & ACCOUNT GOVERNANCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
            Interactive Account & SDLC Lifecycle Timeline
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
            Click through each phase of my end-to-end delivery framework to inspect deliverables, governance mechanisms, and stakeholder touchpoints.
          </p>
        </div>

        {/* 6-Stage Interactive Stepper Pipeline (Desktop Horizontal / Mobile Scroll) */}
        <div className="relative mb-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center justify-between min-w-[760px] gap-2 p-2 rounded-2xl bg-slatecard border border-slatecard-border">
            {LIFECYCLE_STAGES.map((stage) => {
              const isSelected = stage.step === activeStep;
              const isPast = stage.step < activeStep;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(stage.step)}
                  className={`flex-1 flex flex-col items-center py-3 px-2 rounded-xl transition-all duration-200 text-center relative ${
                    isSelected
                      ? 'bg-obsidian border border-slatecard-borderHover text-white shadow-lg'
                      : 'hover:bg-white/5 text-neutral-400 border border-transparent'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold mb-2 transition-all ${
                      isSelected
                        ? 'bg-brand-emerald text-obsidian shadow-emerald-glow'
                        : isPast
                        ? 'bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30'
                        : 'bg-slatecard-hover text-neutral-500 border border-slatecard-border'
                    }`}
                  >
                    {isPast ? <CheckCircle2 className="w-4 h-4" /> : stage.step}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider font-semibold truncate max-w-[110px]">
                    {stage.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detail Showcase */}
        <div className="rounded-2xl border border-slatecard-border bg-obsidian-elevated p-6 sm:p-8 md:p-10 shadow-2xl animate-fade-in">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slatecard-border/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-mono text-xs mb-2">
                <Workflow className="w-3.5 h-3.5" />
                <span>{currentStage.phaseName}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                {currentStage.title}
              </h3>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                disabled={activeStep === 1}
                className="p-2.5 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover disabled:opacity-30 disabled:pointer-events-none text-neutral-300 hover:text-white transition-all"
                title="Previous Stage"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-neutral-400 px-2">
                Stage {activeStep} of {LIFECYCLE_STAGES.length}
              </span>
              <button
                onClick={() => setActiveStep((prev) => Math.min(LIFECYCLE_STAGES.length, prev + 1))}
                disabled={activeStep === LIFECYCLE_STAGES.length}
                className="p-2.5 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover disabled:opacity-30 disabled:pointer-events-none text-neutral-300 hover:text-white transition-all"
                title="Next Stage"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Objective Statement */}
          <div className="mt-6 p-4 rounded-xl bg-obsidian border border-slatecard-border/70 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex-shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blueLight">
                Phase Objective & Strategic Intent
              </div>
              <p className="text-sm text-neutral-200 font-sans mt-0.5 leading-relaxed">
                {currentStage.objective}
              </p>
            </div>
          </div>

          {/* 3-Column Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Deliverables */}
            <div className="p-5 rounded-xl bg-obsidian border border-slatecard-border flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-emerald" />
                  Tangible Deliverables
                </h4>
                <ul className="space-y-2">
                  {currentStage.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stakeholders */}
            <div className="p-5 rounded-xl bg-obsidian border border-slatecard-border flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-blue" />
                  Stakeholder Touchpoints
                </h4>
                <ul className="space-y-2">
                  {currentStage.stakeholderTouchpoints.map((sh, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                      <span>{sh}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Governance & Risk Mitigation */}
            <div className="p-5 rounded-xl bg-obsidian border border-slatecard-border flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-purple-400" />
                  Governance & Risk Controls
                </h4>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {currentStage.governanceAndRisk}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slatecard-border/60">
                <div className="text-[10px] font-mono uppercase text-brand-emerald font-semibold">
                  Target Outcome
                </div>
                <div className="text-xs font-sans text-neutral-200 mt-0.5">
                  {currentStage.kpiOutcome}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
