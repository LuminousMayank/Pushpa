import { RfqForm } from '@/components/rfq-form';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            Request a Quote
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Tell us what you need, and our team will get back to you with a
            competitive quote. Use our AI Assistant for help crafting the
            perfect request.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
           <RfqForm />
        </div>
      </section>
    </div>
  );
}
