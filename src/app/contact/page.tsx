import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            We're here to help. Reach out to us directly for any inquiries.
          </p>
        </div>
      </section>

      <section id="get-in-touch" className="bg-background py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl font-bold">Get In Touch</h2>
                <p className="mt-2 text-muted-foreground">Our team is ready to assist you with any inquiries.</p>
              </div>

              <div className="space-y-6">
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="flex items-center gap-4 p-6">
                    <Phone className="h-8 w-8 flex-shrink-0 text-primary" />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <a
                        href="tel:+919440878104"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 94408 78104
                      </a>
                      <a
                        href="tel:+918913555763"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 891 355 5763
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="flex items-center gap-4 p-6">
                    <Mail className="h-8 w-8 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <a href="mailto:info@pushpa.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@pushpa.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="flex items-start gap-4 p-6">
                    <MapPin className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Office Address</h3>
                      <address className="mt-1 not-italic text-muted-foreground">
                        Pushpa & Co.
                        <br />
                        1-114-12/6, Suite No.302, Sri Aurobindo Heights,
                        <br />
                        Sector-12, M V P Colony,
                        <br />
                        Visakhapatnam, Andhra Pradesh 530017,
                        <br />
                        India
                      </address>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl min-h-[400px] md:min-h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.156229919281!2d83.3373021!3d17.7372764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3944a9c6271aef%3A0x7dd4394261936bb9!2sSri%20Aurobindo%20Heights!5e0!3m2!1sen!2sin!4v1771405798141!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google map of Pushpa & Co. location at Sri Aurobindo Heights"
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
