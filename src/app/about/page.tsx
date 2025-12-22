
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { clientCategories } from '@/lib/data.tsx';
import { ClientMarquee } from '@/components/client-marquee';
import { Separator } from '@/components/ui/separator';

const values = [
  {
    icon: (
      <svg
        className="h-10 w-10 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Unwavering Reliability',
    description:
      'As a trustworthy and efficient partner, we build trust through consistent, on-time delivery and transparent communication, ensuring your operations never falter.',
  },
  {
    icon: (
      <svg
        className="h-10 w-10 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3"
        />
      </svg>
    ),
    title: 'Global Sourcing Expertise',
    description:
      'From our base in the port city of Visakhapatnam, we offer worldwide sourcing with competitive pricing.',
  },
  {
    icon: (
      <svg
        className="h-10 w-10 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Customer-Centric Procurement',
    description:
      'We aim to provide the best, most efficient, and economic procurement experience, leveraging our deep product knowledge to meet your unique needs.',
  },
];

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'steel-plants');
  const allClients = clientCategories.flatMap((category) => category.clients);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-20 text-center text-white md:py-32">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        <div className="container z-10 mx-auto">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            30 Years of Global Procurement Excellence
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            With three decades of experience, our in-depth supply knowledge and
            sourcing capabilities have set the industry standard for service and
            efficiency.
          </p>
        </div>
        <Link
          href="#values"
          className="absolute bottom-10 z-10 flex animate-bounce flex-col items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
        >
          <ChevronDown className="h-6 w-6" />
          Scroll to learn more
        </Link>
      </section>

      {/* Values Section */}
      <section id="values" className="bg-background py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-card">
                  {value.icon}
                </div>
                <h3 className="mb-2 font-headline text-2xl font-bold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-background pb-16 md:pb-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Separator className="my-8" />
            <h2 className="font-headline text-3xl font-bold tracking-tight">Our Headquarters</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are strategically headquartered in the port city of Visakhapatnam, a major industrial and logistics hub on India's east coast. This prime location enhances our sourcing and distribution capabilities.
            </p>
            <address className="mt-6 not-italic text-muted-foreground/80">
              1/114/12 Flat No 302, Sri Aurobindo Heights,
              <br />
              M V P Colony, Chinawaltair,
              <br />
              Visakhapatnam, Andhra Pradesh 530017
            </address>
          </div>
        </div>
      </section>
      

      {/* Clients Section */}
      <section id="clients" className="bg-card py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted By The Best
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            We are proud to be the procurement partner of choice for industry
            leaders across India. Our commitment to quality and reliability has
            earned us their long-term trust.
          </p>
        </div>
        <div className="mt-12">
          <ClientMarquee clients={allClients} />
        </div>
      </section>
      
    </div>
  );
}
