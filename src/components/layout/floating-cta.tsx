import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export const FloatingCTA = () => (
  <Link
    href="/contact"
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.03]"
  >
    <Sparkles className="h-4 w-4" />
    Demander un devis
  </Link>
);
