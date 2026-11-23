'use client';

import React, { useEffect, useState } from 'react';
import { X, Download, ArrowUpRight, Mail, CheckCircle2, ShieldCheck, Award, Copy, Check } from 'lucide-react';

interface SlideOverDossierProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SlideOverDossier({ isOpen, onClose }: SlideOverDossierProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText('varunbhandurge@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const taxonomy = {
    'Key Account Management & Commercials': [
      'Enterprise SLA Structuring',
      'P&L Accountability',
      'Contract Negotiations & Renewals',
      'C-Suite Stakeholder Governance',
      'Pricing & Commercial Proposals',
      '100% Client Retention',
    ],
    'Business Analysis & Documentation': [
      'BRD Authoring',
      'PRD Specifications',
      'FRD Detailing',
      'User Story Mapping',
      'Acceptance Criteria (Gherkin)',
      'Traceability Matrices',
      'As-Is / To-Be Process Flow (BPMN)',
    ],
    'BFSI Domain & Compliance': [
      'Digital Customer Onboarding',
      'Regulatory KYC Verification',
      'Google Document AI & Vision OCR',
      'Cybersecurity GRC Audits',
      'Red Teaming Verification',
      'RBI & Data Privacy Compliance',
    ],
    'Technical Systems & AI Prototyping': [
      'FastAPI & Python',
      'Ollama & Local LLMs',
      'LangChain & Multi-Agent Swarms',
      'Next.js 14 & React',
      'Supabase (PostgreSQL)',
      'Google Cloud Platform (GCP)',
      'Docker Containers',
      'Vercel Serverless & Crons',
    ],
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <aside
        className="relative z-10 w-full max-w-xl h-full bg-[#090C12] border-l border-white/10 shadow-drawer flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
        aria-label="Executive Recruiter Dossier"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] flex items-center justify-between sticky top-0 bg-[#090C12]/95 backdrop-blur-md z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Recruiter & Executive Dossier
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              Varun Bhandurge
            </h2>
            <p className="text-xs text-mutedText mt-0.5 font-mono">
              Key Account Manager · Lead BA · Project Manager (CSM® · ECBA™)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-mutedText hover:text-white rounded-lg border border-transparent hover:border-white/10 hover:bg-white/[0.04] transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Executive Value Proposition */}
          <div>
            <h3 className="font-mono text-xs uppercase text-amber-300 font-bold tracking-wider mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Core Value Proposition</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              A hybrid enterprise operator bridging commercial origination, technical requirement elicitation, and high-velocity engineering delivery. Certified ScrumMaster (CSM®) with deep hands-on fluency in AI prototyping (FastAPI, Ollama), BFSI customer onboarding, and multi-million-dollar account renewals.
            </p>
          </div>

          {/* Formal Certifications */}
          <div>
            <h3 className="font-mono text-xs uppercase text-cyan-400 font-bold tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Formal Certifications & Credentials</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-heading font-bold text-sm text-white">CSM®</span>
                </div>
                <p className="text-xs text-mutedText mt-1">Certified ScrumMaster®</p>
                <p className="text-[11px] font-mono text-mutedText/60">Scrum Alliance • Active</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span className="font-heading font-bold text-sm text-white">ECBA™</span>
                </div>
                <p className="text-xs text-mutedText mt-1">Entry Certificate in Business Analysis</p>
                <p className="text-[11px] font-mono text-mutedText/60">IIBA® Frameworks</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span className="font-heading font-bold text-sm text-white">Cyber GRC</span>
                </div>
                <p className="text-xs text-mutedText mt-1">Audits & Red-Teaming Readiness</p>
                <p className="text-[11px] font-mono text-mutedText/60">ISO 27001 & BFSI Standards</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span className="font-heading font-bold text-sm text-white">Cloud & AI Delivery</span>
                </div>
                <p className="text-xs text-mutedText mt-1">FastAPI, GCP, Docker & Local LLMs</p>
                <p className="text-[11px] font-mono text-mutedText/60">Vercel • Supabase • Ollama</p>
              </div>
            </div>
          </div>

          {/* Recruiter Skill Taxonomy */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase text-mutedText font-bold tracking-wider">
              Recruiter Keyword & Competency Matrix
            </h3>

            {Object.entries(taxonomy).map(([category, items]) => (
              <div key={category} className="space-y-1.5">
                <span className="text-xs font-semibold text-white/90">{category}</span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((it) => (
                    <span
                      key={it}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-mutedText hover:text-white border border-white/[0.06] hover:border-cyan-500/30 transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:p-8 border-t border-white/[0.08] bg-[#090C12] sticky bottom-0 space-y-3 z-10">
          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-[#08090C] font-heading font-bold text-sm transition-all shadow-glow-cyan"
          >
            <Download className="w-4 h-4 text-[#08090C]" />
            <span>Download Complete Resume (PDF)</span>
          </a>

          <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 transition-colors"
            >
              {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{emailCopied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            <a
              href="https://linkedin.com/in/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
