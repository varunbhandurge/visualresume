import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Varun Bhandurge — Key Account Manager | Lead BA | Project Manager (CSM®)',
  description:
    'Bridging business origination and technical reality. Key Account Manager, Lead Business Analyst, and Certified Scrum Master (CSM®). Proven track record delivering ₹10 Cr+ across Tier-1 BFSI (ICICI Bank, HDFC ERGO, ABSLI).',
  authors: [{ name: 'Varun Bhandurge', url: 'https://github.com/varunbhandurge' }],
  creator: 'Varun Bhandurge',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/varunbhandurge/visualresume',
    title: 'Varun Bhandurge — Key Account Manager | Lead BA | Project Manager (CSM®)',
    description:
      'From deal closure and AI prototyping to full-SDLC enterprise delivery. Proven delivery across ICICI Bank, HDFC ERGO, ABSLI, and Reliance ADAG.',
    siteName: 'Varun Bhandurge Executive Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Bhandurge — Key Account Manager | Lead BA | Project Manager (CSM®)',
    description:
      'From deal closure and AI prototyping to full-SDLC enterprise delivery.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#090A0D',
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
      <body className="bg-obsidian text-alabaster min-h-screen antialiased selection:bg-goldWarm/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
