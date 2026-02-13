import Link from 'next/link';

export const FloatingCTA = () => (
  <Link href="/contact" className="fixed bottom-5 right-5 z-40 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
    Demander un devis
  </Link>
);
