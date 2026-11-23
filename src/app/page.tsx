import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SecretSauceGrid } from '@/components/SecretSauceGrid';
import { PrototypesShowcase } from '@/components/PrototypesShowcase';
import { FastStatsBanner } from '@/components/FastStatsBanner';
import { DigDeeperSection } from '@/components/DigDeeperSection';
import { SaaSFooter } from '@/components/SaaSFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-neutral-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SecretSauceGrid />
        <PrototypesShowcase />
        <FastStatsBanner />
        <DigDeeperSection />
      </main>
      <SaaSFooter />
    </div>
  );
}
