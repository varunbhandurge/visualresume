import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Varun Bhandurge — Key Account Manager | Lead BA | Project Manager (CSM®)',
  description:
    'From deal closure and AI prototyping to full-SDLC enterprise delivery. Varun Bhandurge: Key Account Manager, Lead Business Analyst, and Certified Scrum Master (CSM®).',
  authors: [{ name: 'Varun Bhandurge', url: 'https://github.com/varunbhandurge' }],
  creator: 'Varun Bhandurge',
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
  themeColor: '#07080A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark font-sans">
      <body className="bg-[#07080A] text-[#F4F4F5] min-h-screen">
        {children}
      </body>
    </html>
  );
}
