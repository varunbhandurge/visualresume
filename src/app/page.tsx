'use client';

import React, { useState } from 'react';
import { ExecutiveHeader } from '@/components/ExecutiveHeader';
import { ExecutiveHero } from '@/components/ExecutiveHero';
import { PedigreeMetricsLedger } from '@/components/PedigreeMetricsLedger';
import { ExecutionLedgerAccordion } from '@/components/ExecutionLedgerAccordion';
import { EngineeringBuildsGrid } from '@/components/EngineeringBuildsGrid';
import { QuietFooter } from '@/components/QuietFooter';
import { FullDossierDrawer } from '@/components/FullDossierDrawer';

export default function HomePage() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <div className="canvas-ambient-glow flex flex-col min-h-screen text-alabaster selection:bg-champagne/20 selection:text-white">
      {/* Slide-Over Recruiter Dossier Drawer */}
      <FullDossierDrawer
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      {/* Minimalist Sticky Header */}
      <ExecutiveHeader onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Commanding, Uncluttered Hero Section */}
        <ExecutiveHero />

        {/* Institutional Pedigree & Delivery Metrics (Clean Editorial Ledger) */}
        <PedigreeMetricsLedger />

        {/* Interactive Core Capabilities & Execution Ledger (6-Row Expandable) */}
        <ExecutionLedgerAccordion />

        {/* Live Websites & Engineering Builds (Quiet 2-Column Architectural Grid) */}
        <EngineeringBuildsGrid />
      </main>

      {/* Quiet Footer */}
      <QuietFooter />
    </div>
  );
}
