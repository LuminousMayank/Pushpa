import { clientCategories } from '@/lib/data.tsx';
import { Card } from '@/components/ui/card';

export default function ClientsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            Trusted By The Best
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            We are proud to be the procurement partner of choice for industry
            leaders across India. Our commitment to quality and reliability has
            earned us their long-term trust.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-16">
          {clientCategories.map((category) => (
            <div key={category.name}>
              <h2 className="mb-8 text-center font-headline text-3xl font-bold md:text-4xl">
                {category.name}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {category.clients.map((client) => (
                  <Card
                    key={client.name}
                    className="flex h-24 items-center justify-center p-6 transition-all duration-300 hover:bg-muted"
                  >
                    <p className="text-center font-semibold text-muted-foreground">
                      {client.name}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
