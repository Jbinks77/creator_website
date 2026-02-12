import { cn } from '@/lib/utils';

export const Select = ({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={cn(
      'w-full rounded-xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300',
      className
    )}
    {...props}
  />
);
