'use client';

import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Mail, CheckCircle2, Award, ShieldCheck, Terminal, Layers, FileText } from 'lucide-react';

interface RecruiterDossierDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterDossierDrawer({ isOpen, onClose }: RecruiterDossierDrawerProps) {
  // Lock body scroll when drawer is open
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

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside 
        className="relative z-10 w-full max-w-xl h-full bg-[#0C0E13] border-l border-white/10 shadow-drawer flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
        aria-label="Executive Recruiter Dossier"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] flex items-center justify-between sticky top-0 bg-[#0C0E13]/95 backdrop-blur-md z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-slateMuted">Recruiter & Executive Dossier</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-alabaster tracking-tight">
              Varun Bhandurge
            </h2>
            <p className="text-xs sm:text-sm text-slateMuted mt-0.5">
              Key Account Manager • Lead BA • Project Manager (CSM®)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slateMuted hover:text-alabaster hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Executive Overview */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-goldWarm font-medium mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> Core Value Proposition
            </h3>
            <p className="text-sm text-alabaster/90 leading-relaxed bg-white/[0.02] p-4 rounded-lg border border-white/[0.06]">
              A hybrid enterprise operator bridging commercial origination, technical requirement elicitation, and high-velocity engineering delivery. Certified ScrumMaster (CSM®) with deep hands-on fluency in AI prototyping (FastAPI, Ollama), BFSI customer onboarding, and multi-million-dollar account renewals.
            </p>
          </div>

          {/* Verified Credentials */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slateMuted font-medium mb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cobalt" /> Formal Certifications & Credentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-bold text-sm text-alabaster">CSM®</span>
                </div>
                <p className="text-xs text-slateMuted mt-1">Certified ScrumMaster®</p>
                <p className="text-[11px] font-mono text-slateMuted/70">Scrum Alliance • Active</p>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0" />
                  <span className="font-bold text-sm text-alabaster">ECBA™</span>
                </div>
                <p className="text-xs text-slateMuted mt-1">Entry Certificate in Business Analysis</p>
                <p className="text-[11px] font-mono text-slateMuted/70">IIBA® Frameworks</p>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-goldWarm shrink-0" />
                  <span className="font-bold text-sm text-alabaster">Cyber GRC</span>
                </div>
                <p className="text-xs text-slateMuted mt-1">Audits & Red-Teaming Readiness</p>
                <p className="text-[11px] font-mono text-slateMuted/70">ISO 27001 & BFSI Standards</p>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-bold text-sm text-alabaster">AI & Cloud Delivery</span>
                </div>
                <p className="text-xs text-slateMuted mt-1">GCP, Docker & Local LLMs</p>
                <p className="text-[11px] font-mono text-slateMuted/70">FastAPI • Vercel • Supabase</p>
              </div>
            </div>
          </div>

          {/* Recruiter Skill Matrix / Taxonomy */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slateMuted font-medium flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-goldWarm" /> Recruiter Keyword & Competency Matrix
            </h3>

            {/* Category 1 */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slateMuted">Key Account Management & Commercials</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Enterprise SLA Scoping',
                  'Client Governance',
                  'Contract Renewals',
                  'P&L Accountability',
                  'Stakeholder Engagement',
                  'Pricing & Commercial Proposals',
                  'Churn Prevention',
                ].map((kw) => (
                  <span key={kw} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-alabaster/90 border border-white/[0.08]">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slateMuted">Business Analysis & Documentation</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'BRD Authoring',
                  'PRD Specifications',
                  'FRD Drafting',
                  'User Story Mapping',
                  'Acceptance Criteria (Gherkin)',
                  'Traceability Matrices',
                  'Gap Analysis',
                  'As-Is / To-Be Process Flow',
                ].map((kw) => (
                  <span key={kw} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-alabaster/90 border border-white/[0.08]">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3 */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slateMuted">BFSI Domain & Regulatory Compliance</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Customer Onboarding',
                  'Regulatory KYC',
                  'Document AI & OCR Extraction',
                  'Fraud Prevention',
                  'GRC Compliance Audits',
                  'Red-Teaming Verification',
                  'Data Privacy & Masking',
                ].map((kw) => (
                  <span key={kw} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-alabaster/90 border border-white/[0.08]">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 4 */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slateMuted">Technical Stack & AI Prototyping</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'FastAPI',
                  'Python',
                  'Ollama & Local LLMs',
                  'LangChain Multi-Agent',
                  'Next.js 14',
                  'TypeScript',
                  'Tailwind CSS',
                  'REST APIs',
                  'Supabase & PostgreSQL',
                  'GCP (Google Cloud)',
                  'Docker Containers',
                  'Vercel Deployment',
                ].map((kw) => (
                  <span key={kw} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-alabaster/90 border border-white/[0.08]">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 5 */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slateMuted">Tools & Agile Governance</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Jira Software',
                  'Confluence',
                  'Zoho CRM',
                  'Miro',
                  'Postman',
                  'Scrum Ceremonies',
                  'Sprint Planning & Retros',
                  'Git & GitHub',
                ].map((kw) => (
                  <span key={kw} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-alabaster/90 border border-white/[0.08]">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Institutional Delivery Pedigree */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slateMuted font-medium block">
              Proven Delivery Footprint
            </span>
            <p className="text-xs text-alabaster/80 leading-relaxed">
              Successfully delivered 9 mission-critical enterprise engagements representing ₹10 Cr+ in portfolio impact across top-tier Indian financial institutions:
            </p>
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-bold text-alabaster">
              <span className="px-2.5 py-1 rounded bg-[#161A22] border border-white/10">ICICI Bank</span>
              <span className="px-2.5 py-1 rounded bg-[#161A22] border border-white/10">HDFC ERGO</span>
              <span className="px-2.5 py-1 rounded bg-[#161A22] border border-white/10">ICICI Prudential</span>
              <span className="px-2.5 py-1 rounded bg-[#161A22] border border-white/10">ABSLI</span>
              <span className="px-2.5 py-1 rounded bg-[#161A22] border border-white/10">Reliance ADAG</span>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 sm:p-8 border-t border-white/[0.08] bg-[#0C0E13] sticky bottom-0 space-y-3 z-10">
          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-cobalt hover:bg-cobalt-light text-white font-medium text-sm transition-all shadow-lg shadow-cobalt/20"
          >
            <Download className="w-4 h-4" />
            Download Complete PDF Resume
          </a>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href="mailto:varunbhandurge@gmail.com"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-alabaster text-xs font-medium border border-white/10 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slateMuted" />
              Email Varun
            </a>
            <a
              href="https://linkedin.com/in/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-alabaster text-xs font-medium border border-white/10 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slateMuted" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
