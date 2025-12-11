
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

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
      'Based in India with a vast network of suppliers, we offer the benefits of a worldwide sourcing operation, finding the right products at competitive prices.',
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
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-destructive py-20 text-center md:py-32"
      >
        <div className="container z-10 mx-auto">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-destructive-foreground">
            30 Years of Global Procurement Excellence
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-destructive-foreground/80 md:text-xl">
            With three decades of experience, our in-depth supply knowledge and
            sourcing capabilities have set the industry standard for service and
            efficiency.
          </p>
        </div>
        <Link
          href="#values"
          className="absolute bottom-10 z-10 flex animate-bounce flex-col items-center gap-2 text-sm text-destructive-foreground/80 transition-colors hover:text-destructive-foreground"
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
    </div>
  );
}
