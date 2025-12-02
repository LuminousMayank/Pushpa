import { Building, Globe, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Unwavering Reliability',
    description:
      'We build trust through consistent, on-time delivery and transparent communication, ensuring your operations never falter.',
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Global Sourcing Expertise',
    description:
      'Our extensive international network allows us to source high-quality, authentic parts from anywhere in the world, efficiently and effectively.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Customer-Centric Approach',
    description:
      'Your success is our priority. We work closely with you to understand your unique needs and provide tailored procurement solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            Pioneering Procurement for Over 30 Years
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            From humble beginnings to a global force in industrial supply, our
            journey is defined by a relentless pursuit of excellence and a deep
            commitment to the industries we serve.
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
