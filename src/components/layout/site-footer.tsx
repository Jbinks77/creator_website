import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-white/55">
        <p>© {new Date().getFullYear()} Studio [TON NOM]. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:text-white">Demander un devis</Link>
          <Link href="/mes-creations" className="hover:text-white">Projets</Link>
        </div>
      </div>
    </footer>
  );
}
