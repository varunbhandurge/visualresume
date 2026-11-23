import React from 'react';
import { SingleScrollPortfolio } from '@/components/SingleScrollPortfolio';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#08090C] text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-white flex items-center justify-center">
      <SingleScrollPortfolio />
    </main>
  );
}
