import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Varun Bhandurge — Understanding Customer Needs from Business & Tech POV',
  description:
    'Varun Bhandurge (CSM® · ECBA™). I bridge the gap between business vision and technical reality — eliciting customer needs, building rapid AI prototypes, and guiding engineering squads to deliver with clarity.',
  authors: [{ name: 'Varun Bhandurge', url: 'https://github.com/varunbhandurge' }],
  creator: 'Varun Bhandurge',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/varunbhandurge/visualresume',
    title: 'Varun Bhandurge — Understanding Customer Needs from Business & Tech POV',
    description:
      'I bridge the gap between business vision and technical reality — eliciting customer needs, building rapid AI prototypes, and guiding engineering squads to deliver with clarity.',
    siteName: 'Varun Bhandurge Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Bhandurge — Understanding Customer Needs from Business & Tech POV',
    description:
      'I bridge the gap between business vision and technical reality — eliciting customer needs, building rapid AI prototypes, and guiding engineering squads to deliver with clarity.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0B0E',
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
      <body className="bg-[#0A0B0E] text-[#F8FAFC] min-h-screen antialiased selection:bg-cyan-500/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
