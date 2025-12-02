import { cn } from '@/lib/utils';
import type { Client } from '@/lib/types';

interface ClientMarqueeProps {
  clients: Client[];
  className?: string;
}

export function ClientMarquee({ clients, className }: ClientMarqueeProps) {
  if (!clients.length) {
    return null;
  }
  
  const marqueeContent = (
    <div className="flex min-w-full shrink-0 items-center justify-around gap-12">
      {clients.map((client, index) => (
        <div key={index} className="flex items-center justify-center gap-4">
          {client.logo}
          <span className="text-xl font-semibold text-muted-foreground transition-colors hover:text-foreground">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        'relative flex w-full select-none overflow-hidden [--duration:60s]',
        className
      )}
    >
      <div className="flex animate-scroll items-center">
        {marqueeContent}
        {marqueeContent}
      </div>
    </div>
  );
}
