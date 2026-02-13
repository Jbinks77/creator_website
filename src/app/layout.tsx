import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { FloatingCTA } from '@/components/layout/floating-cta';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { PageTransition } from '@/components/shared/page-transition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Studio [TON NOM]',
  description: 'Des sites web qui font vendre — design, performance, conversion.',
  openGraph: { title: 'Studio [TON NOM]', description: 'Services de création de sites web premium.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
