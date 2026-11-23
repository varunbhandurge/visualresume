import React from 'react';
import { SimpleHeader } from '@/components/SimpleHeader';
import { SimpleHero } from '@/components/SimpleHero';
import { ThingsIDo } from '@/components/ThingsIDo';
import { ThingsImWorkingOn } from '@/components/ThingsImWorkingOn';
import { ClientsWorkedWith } from '@/components/ClientsWorkedWith';
import { SimpleFooter } from '@/components/SimpleFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B0E] text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-white">
      {/* Top Header */}
      <SimpleHeader />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* Hero: Customer Needs from Business & Tech POV */}
        <SimpleHero />

        {/* Section 1: Things I Do */}
        <ThingsIDo />

        {/* Section 2: Things I'm Working On (with Vercel and Git links) */}
        <ThingsImWorkingOn />

        {/* Section 3: Clients I Have Worked With */}
        <ClientsWorkedWith />
      </main>

      {/* Footer: Contact & Traditional Resume */}
      <SimpleFooter />
    </div>
  );
}
