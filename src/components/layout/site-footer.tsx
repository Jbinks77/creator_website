import Link from 'next/link';

export const SiteFooter = () => (
  <footer className="border-t border-[rgba(255,255,255,0.06)] py-8">
    <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-4 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Studio [TON NOM]</p>
      <div className="flex gap-4">
        <Link href="#">Mentions légales</Link>
        <Link href="#">Politique</Link>
        <Link href="#">LinkedIn</Link>
      </div>
    </div>
  </footer>
);
