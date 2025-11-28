import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { industries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            Specialized Solutions for Core Industries
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
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
