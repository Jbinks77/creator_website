import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { FloatingCTA } from '@/components/layout/floating-cta';
import { AppMotionProvider } from '@/components/motion/motion-provider';
import { ReduceMotionToggle } from '@/components/motion/reduce-motion-toggle';
import { ToastProvider } from '@/components/ui/toast';

export const metadata: Metadata = {
  title: 'Studio [TON NOM] — Création de sites web premium',
  description: 'Des sites web qui font vendre — design, performance, conversion.',
  openGraph: {
    title: 'Studio [TON NOM]',
    description: 'Création de sites web premium orientés conversion.',
    url: 'https://studio-tonnom.fr',
    siteName: 'Studio [TON NOM]',
    locale: 'fr_FR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio [TON NOM]',
    description: 'Des sites web qui font vendre — design, performance, conversion.'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <AppMotionProvider>
          <ToastProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <FloatingCTA />
            <ReduceMotionToggle />
          </ToastProvider>
        </AppMotionProvider>
      </body>
    </html>
  );
}
