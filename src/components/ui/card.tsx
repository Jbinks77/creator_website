import { cn } from '@/lib/utils';

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('glass-card rounded-2xl p-6', className)} {...props} />
);
