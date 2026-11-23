import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MetricsBar } from '@/components/MetricsBar';
import { CapabilityTabs } from '@/components/CapabilityTabs';
import { ClientGrid } from '@/components/ClientGrid';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { LifecycleStepper } from '@/components/LifecycleStepper';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-neutral-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MetricsBar />
        <CapabilityTabs />
        <ClientGrid />
        <ProjectsGrid />
        <LifecycleStepper />
      </main>
      <Footer />
    </div>
  );
}
