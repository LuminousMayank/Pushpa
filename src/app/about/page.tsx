import { Building, Globe, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            30 Years of Global Procurement Excellence
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            With three decades of experience, our in-depth supply knowledge and sourcing capabilities have set the industry standard for service and efficiency.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
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
