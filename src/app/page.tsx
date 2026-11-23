'use client';

import React, { useState } from 'react';
import { LinearNavbar } from '@/components/LinearNavbar';
import { DynamicHeroShowcase } from '@/components/DynamicHeroShowcase';
import { InteractiveBFSIStrip } from '@/components/InteractiveBFSIStrip';
import { ConnectedEngineSequence } from '@/components/ConnectedEngineSequence';
import { BentoSystemsShowcase } from '@/components/BentoSystemsShowcase';
import { LinearFooter } from '@/components/LinearFooter';
import { SlideOverDossier } from '@/components/SlideOverDossier';

export default function HomePage() {
  const [dossierOpen, setDossierOpen] = useState(false);

  return (
    <div className="ambient-scene-glow min-h-screen flex flex-col text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Slide-Over Recruiter Dossier */}
      <SlideOverDossier
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
      />

      {/* Floating Linear Header */}
      <LinearNavbar onOpenDossier={() => setDossierOpen(true)} />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* Dynamic Hero Showcase with Live Telemetry & Prototype Sandbox Deck */}
        <DynamicHeroShowcase />

        {/* Interactive Institutional BFSI Delivery Ledger */}
        <InteractiveBFSIStrip />

        {/* 4-Stage Chronological Delivery Engine */}
        <ConnectedEngineSequence />

        {/* Live Systems & GitHub Bento Showcase */}
        <BentoSystemsShowcase />
      </main>

      {/* Modern Linear Footer */}
      <LinearFooter onOpenDossier={() => setDossierOpen(true)} />
    </div>
  );
}
