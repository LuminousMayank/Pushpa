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

const timeline = [
  {
    year: '1994',
    title: 'Company Founded',
    description:
      'Pushpa &amp; Co. was established with a mission to simplify industrial procurement for key sectors in India.',
  },
  {
    year: '2002',
    title: 'Expansion into Marine Supply',
    description:
      'Began serving the Indian Navy and major shipyards, becoming a trusted supplier for critical marine components.',
  },
  {
    year: '2010',
    title: 'Steel &amp; Cement Sector Dominance',
    description:
      'Established strong partnerships with leading steel and cement plants, providing essential OEM spares and equipment.',
  },
  {
    year: '2018',
    title: 'Global Network Solidified',
    description:
      'Expanded our international sourcing network, enabling faster procurement from Europe, Asia, and North America.',
  },
  {
    year: '2024',
    title: '30 Years of Excellence',
    description:
      'Celebrating three decades of industry leadership, continuous growth, and unwavering commitment to our clients.',
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

      {/* Timeline Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold sm:text-4xl">
              Our Journey Through Time
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative mb-12 flex w-full items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`relative w-1/2 ${
                      index % 2 === 0 ? 'pr-8' : 'pl-8'
                    }`}
                  >
                    <Card className="shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-baseline justify-between">
                          <span className="font-headline text-2xl font-bold text-primary">
                            {item.year}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="mb-2 text-xl font-semibold">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-8 ring-card"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
