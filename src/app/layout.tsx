import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Varun Bhandurge — Key Account Manager · Lead BA · Project Manager (CSM®)',
  description:
    'End-to-end ownership across BFSI commercial negotiations, requirement elicitation, rapid AI prototyping, Agile SDLC governance, and multi-year contract renewals.',
  authors: [{ name: 'Varun Bhandurge', url: 'https://github.com/varunbhandurge' }],
  creator: 'Varun Bhandurge',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/varunbhandurge/visualresume',
    title: 'Varun Bhandurge — Key Account Manager · Lead BA · Project Manager (CSM®)',
    description:
      'Delivered ₹10 Cr+ across Tier-1 BFSI (ICICI Bank, HDFC ERGO, ABSLI). From deal closure to functional AI prototypes and full-SDLC delivery.',
    siteName: 'Varun Bhandurge Executive Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Bhandurge — Key Account Manager · Lead BA · Project Manager (CSM®)',
    description:
      'End-to-end ownership across BFSI commercial negotiations, requirement elicitation, rapid AI prototyping, and Agile SDLC governance.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-obsidian text-alabaster min-h-screen antialiased selection:bg-champagne/20 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
