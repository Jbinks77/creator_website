import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'outline' | 'ghost';

const styles: Record<Variant, string> = {
  default: 'bg-cyan-400/90 text-slate-950 hover:bg-cyan-300',
  outline: 'border border-white/20 bg-white/5 hover:bg-white/10',
  ghost: 'hover:bg-white/10'
};

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }>(
  ({ className, variant = 'default', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:opacity-50',
        styles[variant],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export const LinkButton = ({ className, variant = 'default', ...props }: LinkProps & { className?: string; variant?: Variant; children: ReactNode }) => (
  <Link
    className={cn(
      'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300',
      styles[variant],
      className
    )}
    {...props}
  />
);
