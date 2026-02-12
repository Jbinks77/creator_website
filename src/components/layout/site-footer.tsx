import Link from 'next/link';

export const SiteFooter = () => (
  <footer className="mt-24 border-t border-white/10 bg-slate-950/70">
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 text-sm text-slate-300 md:grid-cols-3">
      <div>
        <p className="font-semibold text-white">Studio [TON NOM]</p>
        <p className="mt-2">Des sites web qui font vendre — design, performance, conversion.</p>
      </div>
      <div>
        <p className="font-semibold text-white">Socials</p>
        <div className="mt-2 flex gap-3">
          <Link href="#">LinkedIn</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Dribbble</Link>
        </div>
      </div>
      <div>
        <p className="font-semibold text-white">Contact</p>
        <p className="mt-2">hello@studio-tonnom.dev</p>
        <p className="mt-1 text-slate-400">Mentions légales (placeholder)</p>
      </div>
    </div>
  </footer>
);
