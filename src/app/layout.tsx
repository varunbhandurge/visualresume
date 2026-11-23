import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Varun Bhandurge — Proof of Work | Executive Briefing',
  description:
    'Stop losing months to misaligned requirements. I map the business problem, negotiate the SLAs, and ship the AI prototype in days. Varun Bhandurge: Key Account Manager • Lead BA • AI Builder.',
  authors: [{ name: 'Varun Bhandurge', url: 'https://github.com/varunbhandurge' }],
  creator: 'Varun Bhandurge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/varunbhandurge/visualresume',
    title: 'Varun Bhandurge — Proof of Work',
    description:
      'Stop losing months to misaligned requirements. I map the business problem, negotiate the SLAs, and ship the AI prototype in days.',
    siteName: 'Varun Bhandurge Proof of Work',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Bhandurge — Proof of Work',
    description:
      'Stop losing months to misaligned requirements. I map the business problem, negotiate the SLAs, and ship the AI prototype in days.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
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
      <body className="bg-black text-neutral-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
