import React from 'react';
import { ExecutiveNavbar } from '@/components/ExecutiveNavbar';
import { ExecutiveHero } from '@/components/ExecutiveHero';
import { EnterprisePedigreeSection } from '@/components/EnterprisePedigreeSection';
import { ExecutionSequence } from '@/components/ExecutionSequence';
import { ShippedBuildsGrid } from '@/components/ShippedBuildsGrid';
import { RecruiterSpecsFooter } from '@/components/RecruiterSpecsFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07080A] text-[#F4F4F5] selection:bg-amber-500/20 selection:text-white">
      <ExecutiveNavbar />
      <main className="flex-1">
        <ExecutiveHero />
        <EnterprisePedigreeSection />
        <ExecutionSequence />
        <ShippedBuildsGrid />
      </main>
      <RecruiterSpecsFooter />
    </div>
  );
}
