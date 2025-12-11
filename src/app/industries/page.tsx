
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { industries } from '@/lib/data.tsx';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-20 text-center text-white md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhYnN0cmFjdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc2NDM2OTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract background image"
          fill
          className="object-cover"
          priority
          data-ai-hint="abstract background"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        <div className="container z-10 mx-auto">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            Specialized Solutions for Core Industries
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            We provide tailored procurement services and OEM parts for the
            backbone of the global economy, ensuring efficiency, reliability,
            and performance.
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        {industries.map((industry, index) => {
          const image = PlaceHolderImages.find((p) => p.id === industry.imageId);
          const isReversed = index % 2 !== 0;

          return (
            <section
              key={industry.name}
              className={`w-full ${index !== 0 ? 'mt-16 md:mt-24' : ''}`}
            >
              <div className="container mx-auto">
                <div
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-16`}
                >
                  <div className={`relative h-80 w-full md:h-[450px] ${isReversed ? 'md:order-last' : ''}`}>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="rounded-lg object-cover shadow-xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                      {industry.name}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {industry.description}
                    </p>
                    {industry.offerings && (
                       <ul className="space-y-3">
                        {industry.offerings.map((offering) => (
                          <li key={offering} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-foreground">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
