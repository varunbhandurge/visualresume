import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Varun Bhandurge — Key Account Manager · Lead BA · Project Manager (CSM®)',
  description:
    'From enterprise deal closure and requirement elicitation to functional AI prototypes and full-SDLC delivery. Proven ₹10 Cr+ delivery footprint across Tier-1 BFSI (ICICI Bank, HDFC ERGO, ABSLI).',
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
      'I close enterprise deals, uncover what businesses can’t articulate from a tech POV, and ship AI prototypes to prove it.',
    siteName: 'Varun Bhandurge Portfolio & Live Systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Bhandurge — Key Account Manager · Lead BA · Project Manager (CSM®)',
    description:
      'I close enterprise deals, uncover what businesses can’t articulate from a tech POV, and ship AI prototypes to prove it.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#08090C',
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
      <body className="bg-[#08090C] text-[#F8FAFC] min-h-screen antialiased selection:bg-brand-cyan/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
