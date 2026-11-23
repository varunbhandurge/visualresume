import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/Toast';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Varun Bhandurge | Key Account Manager, Lead BA & AI Prototype Builder',
  description:
    "I uncover what your business needs but can't articulate—and I ship the AI prototypes to prove it. Varun Bhandurge: Key Account Manager, Lead BA, and Builder bridging stakeholder ambiguity and deployed technical reality.",
  keywords: [
    'Varun Bhandurge',
    'Key Account Manager',
    'Lead Business Analyst',
    'AI Prototypes Builder',
    'Certified Scrum Master',
    'CSM',
    'FastAPI',
    'Next.js',
    'BFSI Digital Onboarding',
    'Automated KYC',
    'Google Document AI',
    'Multi-Agent AI Swarms',
  ],
  authors: [{ name: 'Varun Bhandurge', url: 'https://github.com/varunbhandurge' }],
  creator: 'Varun Bhandurge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/varunbhandurge/visualresume',
    title: 'Varun Bhandurge | Key Account Manager, Lead BA & AI Prototype Builder',
    description:
      "I uncover what your business needs but can't articulate—and I ship the AI prototypes to prove it.",
    siteName: 'Varun Bhandurge Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Bhandurge | Key Account Manager, Lead BA & AI Prototype Builder',
    description:
      "I uncover what your business needs but can't articulate—and I ship the AI prototypes to prove it.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#09090B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable} dark`}>
      <body className="bg-obsidian text-neutral-100 min-h-screen selection:bg-brand-emerald/30">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
