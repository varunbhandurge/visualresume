import React from 'react';
import { TerminalNavbar } from '@/components/TerminalNavbar';
import { AntiHero } from '@/components/AntiHero';
import { EnterprisePedigreeImpact } from '@/components/EnterprisePedigreeImpact';
import { ProofOfWorkBento } from '@/components/ProofOfWorkBento';
import { ExecutionTrifecta } from '@/components/ExecutionTrifecta';
import { ExecutiveClose } from '@/components/ExecutiveClose';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-neutral-100 selection:bg-terminal selection:text-black">
      <TerminalNavbar />
      <main className="flex-1">
        <AntiHero />
        <EnterprisePedigreeImpact />
        <ProofOfWorkBento />
        <ExecutionTrifecta />
      </main>
      <ExecutiveClose />
    </div>
  );
}
