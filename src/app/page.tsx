import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClientMarquee } from '@/components/client-marquee';
import { clientCategories } from '@/lib/data.tsx';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const previewSections = [
  {
    title: 'About Our Company',
    description: 'Discover our story, values, and three decades of expertise.',
    link: '/about',
    image: PlaceHolderImages.find(p => p.id === 'about-preview'),
  },
  {
    title: 'Industries We Serve',
    description: 'Tailored solutions for Defence, Marine, Steel, and more.',
    link: '/industries',
    image: PlaceHolderImages.find(p => p.id === 'industries-preview'),
  },
  {
    title: 'Products & Services',
    description: 'Explore our vast catalog of OEM parts and industrial supplies.',
    link: '/products',
    image: PlaceHolderImages.find(p => p.id === 'products-preview'),
  },
  {
    title: 'Our Valued Clients',
    description: 'See the leading companies that trust Pushpa & Co.',
    link: '/clients',
    image: PlaceHolderImages.find(p => p.id === 'clients-preview'),
  },
];

export default function Home() {
  const allClients = clientCategories.flatMap(category => category.clients);

  return (
    <div className="flex flex-col">
       <section className="relative flex min-h-[60dvh] w-full flex-col items-center justify-center bg-card px-4 py-10 text-center md:min-h-[70dvh] md:px-6 md:py-12">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h1 className="font-headline tracking-tight">
            <span className="block text-4xl font-semibold sm:text-5xl">Pushpa & Co.</span>
            <span className="mt-4 block text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:leading-tight">
              Trusted OEM Manufacturing & Global Procurement for over 30 Years.
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground opacity-60">
            Reliable sourcing for Defence, Marine, Steel, Cement and Power
            industries.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-muted-foreground">
            Trusted by industry leaders across India
          </h2>
          <ClientMarquee clients={allClients} />
        </div>
      </section>

      <section className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {previewSections.map((section) => (
              <Card
                key={section.title}
                className="group flex transform flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardHeader className="p-0">
                  {section.image && (
                     <div className="relative h-48 w-full">
                        <Image
                            src={section.image.imageUrl}
                            alt={section.image.description}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            data-ai-hint={section.image.imageHint}
                        />
                     </div>
                  )}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  <CardTitle className="mb-2 font-headline text-xl font-bold">
                    {section.title}
                  </CardTitle>
                  <p className="flex-grow text-muted-foreground">
                    {section.description}
                  </p>
                  <Button
                    variant="link"
                    className="group mt-4 justify-start p-0 text-primary"
                    asChild
                  >
                    <Link href={section.link}>
                      Learn More{' '}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
