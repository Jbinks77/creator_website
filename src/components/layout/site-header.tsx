'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/mes-creations', label: 'Mes créations' },
  { href: '/contact', label: 'Contact' }
];

export const SiteHeader = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(5,6,8,0.6)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold text-[var(--text)]">Studio [TON NOM]</Link>
        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn('rounded-full px-3 py-1.5 text-sm text-[var(--text-secondary)]', pathname === link.href && 'text-[var(--text)] bg-white/5')}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 hidden rounded-full border border-[rgba(255,255,255,0.18)] px-4 py-1.5 text-sm text-[var(--text)] md:inline-flex">Demander un devis</Link>
          <Link aria-label="Demander un devis" href="/contact" className="rounded-full border border-[rgba(255,255,255,0.18)] p-2 md:hidden"><FileText className="h-4 w-4" /></Link>
        </nav>
      </div>
    </header>
  );
};
