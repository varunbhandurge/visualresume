'use client';

import React, { useEffect } from 'react';
import { X, Download, ArrowUpRight, Mail, CheckCircle2 } from 'lucide-react';

interface FullDossierDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullDossierDrawer({ isOpen, onClose }: FullDossierDrawerProps) {
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

  const recruiterKeywords = [
    'Customer Onboarding',
    'Digital KYC',
    'OCR / Google Document AI',
    'GCP',
    'Cybersecurity GRC',
    'Red Teaming',
    'Managed Services',
    'BRD/PRD/FRD',
    'Agile/Scrum',
    'CSM®',
    'ECBA™',
    'SLA Governance',
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className="relative z-10 w-full max-w-lg h-full bg-[#0A0A0B] border-l border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250 shadow-2xl"
        aria-label="Executive Dossier"
      >
        <div>
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-mutedZinc/70 font-medium">
                Executive Briefing
              </p>
              <h2 className="font-heading font-semibold text-2xl text-alabaster tracking-tight mt-1">
                Varun Bhandurge
              </h2>
              <p className="text-xs text-mutedZinc mt-0.5">
                Key Account Manager &bull; Lead BA &bull; Project Manager (CSM® · ECBA™)
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-mutedZinc hover:text-white rounded border border-transparent hover:border-white/10 transition-colors"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Core Focus & Summary */}
          <div className="py-6 space-y-3 border-b border-white/[0.08]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-mutedZinc/60 block">
              Enterprise Profile
            </span>
            <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed">
              Senior hybrid operator with 10+ months driving ₹10 Cr+ in enterprise delivery across Tier-1 Indian BFSI (ICICI Bank, HDFC ERGO, ABSLI). Proven track record leading commercial SLA negotiations, authoring BRD/PRD requirements, building functional AI prototypes, and governing full-SDLC Agile releases.
            </p>
          </div>

          {/* Full Recruiter Keyword Matrix */}
          <div className="py-6 space-y-4 border-b border-white/[0.08]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-mutedZinc/60 block">
              Core Competencies & Recruiter Keywords
            </span>
            <div className="flex flex-wrap gap-2">
              {recruiterKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2.5 py-1 rounded text-xs font-mono text-alabaster/90 bg-white/[0.02] border border-white/[0.08]"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Institutional Delivery */}
          <div className="py-6 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-mutedZinc/60 block">
              Audited Delivery Record
            </span>
            <div className="space-y-2 text-xs text-mutedZinc">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>₹10 Cr+ revenue delivered across 9 enterprise BFSI accounts in 10 months.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>95%+ automated precision on customer KYC & OCR document extraction pipelines.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>100% renewal retention across enterprise managed services and SLA contracts.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/[0.08] space-y-3">
          <a
            href="/resume.pdf"
            download="Varun_Bhandurge_Resume.pdf"
            className="w-full py-3 px-4 rounded bg-alabaster hover:bg-white text-obsidian font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-obsidian" />
            <span>Download Complete Resume (PDF)</span>
          </a>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="mailto:varunbhandurge@gmail.com"
              className="py-2.5 px-3 rounded border border-white/[0.08] hover:border-white/20 text-mutedZinc hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Varun</span>
            </a>
            <a
              href="https://linkedin.com/in/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded border border-white/[0.08] hover:border-white/20 text-mutedZinc hover:text-white flex items-center justify-center gap-1.5 transition-colors"
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
