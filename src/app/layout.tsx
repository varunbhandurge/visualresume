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
  title: 'Varun Bhandurge | Key Account Manager & Lead Business Analyst',
  description:
    'Executive visual resume and portfolio of Varun Bhandurge. Key Account Manager, Lead Business Analyst, and Certified Scrum Master (CSM®) specializing in BFSI customer onboarding, automated KYC & OCR, AI prototyping, and enterprise SDLC delivery.',
  keywords: [
    'Varun Bhandurge',
    'Key Account Manager',
    'Lead Business Analyst',
    'Certified Scrum Master',
    'CSM',
    'BFSI Digital Onboarding',
    'KYC Automation',
    'Document AI',
    'FastAPI',
    'Next.js',
    'Agile SDLC',
    'Cybersecurity Sales',
    'GRC',
  ],
  authors: [{ name: 'Varun Bhandurge', url: 'https://github.com/varunbhandurge' }],
  creator: 'Varun Bhandurge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/varunbhandurge/visualresume',
    title: 'Varun Bhandurge | Key Account Manager & Lead Business Analyst',
    description:
      'Bridging enterprise business vision and technical execution—from discovery, AI prototyping, and SLA negotiations to full-SDLC delivery.',
    siteName: 'Varun Bhandurge Visual Resume',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Bhandurge | Key Account Manager & Lead Business Analyst',
    description:
      'Bridging enterprise business vision and technical execution across BFSI onboarding, AI swarms, and full-SDLC delivery.',
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
