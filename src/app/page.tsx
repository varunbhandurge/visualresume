'use client';

import React, { useState } from 'react';
import { EditorialNavbar } from '@/components/EditorialNavbar';
import { AsymmetricHero } from '@/components/AsymmetricHero';
import { InstitutionalTrustStrip } from '@/components/InstitutionalTrustStrip';
import { ChronologicalDeliveryTrack } from '@/components/ChronologicalDeliveryTrack';
import { AsymmetricBuildsBento } from '@/components/AsymmetricBuildsBento';
import { EditorialFooter } from '@/components/EditorialFooter';
import { RecruiterDossierDrawer } from '@/components/RecruiterDossierDrawer';

export default function HomePage() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-alabaster bg-architectural-grid">
      {/* Slide-Over Recruiter Dossier Drawer */}
      <RecruiterDossierDrawer
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      {/* Editorial Top Navigation */}
      <EditorialNavbar onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* Asymmetric 12-Column Swiss Grid Hero with 3-Tab Proof Switcher */}
        <AsymmetricHero />

        {/* Institutional Trust Ledger */}
        <InstitutionalTrustStrip />

        {/* 4-Stage Chronological Delivery Pipeline */}
        <ChronologicalDeliveryTrack />

        {/* Live Deployments & GitHub Repositories Bento */}
        <AsymmetricBuildsBento />
      </main>

      {/* Editorial Recruiter Footer */}
      <EditorialFooter onOpenDossier={() => setIsDossierOpen(true)} />
    </div>
  );
}
