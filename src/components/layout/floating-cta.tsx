import Link from 'next/link';

export function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-40 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white shadow-2xl backdrop-blur-xl transition hover:bg-white/20"
    >
      Lancer mon projet
    </Link>
  );
}
