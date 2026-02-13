'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Accueil'],
  ['/mes-creations', 'Mes créations'],
  ['/experience', 'Experience'],
  ['/transformation', 'Transformation'],
  ['/contact', 'Contact']
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-white/90">STUDIO [TON NOM]</Link>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? 'text-white' : 'hover:text-white'}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
