import { Users, Target, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Unwavering Reliability',
    description:
      'As a trustworthy and efficient partner, we build trust through consistent, on-time delivery and transparent communication, ensuring your operations never falter.',
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Global Sourcing Expertise',
    description:
      'Based in India with a vast network of suppliers, we offer the benefits of a worldwide sourcing operation, finding the right products at competitive prices.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
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
        className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-20 text-center md:py-32"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        >
          <source src="/videos/about-hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-background/60" />

        <div className="container z-10 mx-auto">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            30 Years of Global Procurement Excellence
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            With three decades of experience, our in-depth supply knowledge and
            sourcing capabilities have set the industry standard for service and
            efficiency.
          </p>
        </div>
        <Link
          href="#values"
          className="absolute bottom-10 z-10 flex animate-bounce flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
