
import Image from 'next/image';
import { productCategories } from '@/lib/data.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-20 text-center text-white md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1581092921441-08e3323e3523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxibHVlcHJpbnR8ZW58MHx8fHwxNzY0MzY5MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Technical blueprint background"
          fill
          className="object-cover"
          priority
          data-ai-hint="blueprint schematic"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        <div className="container z-10 mx-auto">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            Comprehensive Products & Services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            Explore our extensive range of high-quality OEM spare parts and
            industrial supplies, sourced globally to meet your specific needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <Card
                key={category.name}
                className="group flex flex-col text-center transition-all duration-300 hover:border-primary hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {category.icon && (
                      <category.icon className="h-8 w-8" />
                    )}
                  </div>
                  <CardTitle className="font-headline text-2xl font-bold">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
