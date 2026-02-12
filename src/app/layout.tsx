import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { FloatingCTA } from '@/components/layout/floating-cta';

export const metadata: Metadata = {
  title: 'Studio [TON NOM] | Sites web premium',
  description: 'Des sites web qui font vendre — design, performance, conversion.',
  openGraph: {
    title: 'Studio [TON NOM]',
    description: 'Création de sites web premium orientés conversion.',
    url: 'https://example.com',
    siteName: 'Studio [TON NOM]',
    locale: 'fr_FR',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-grain">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingCTA />
      </body>
    </html>
  );
}
