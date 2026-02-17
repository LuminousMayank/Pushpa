
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
                <p className='mt-2 text-muted-foreground'>Our team is ready to assist you with any inquiries.</p>
              </div>

              <div className="space-y-6">
                <Card className='hover:border-primary transition-colors'>
                  <CardContent className='flex items-center gap-4 p-6'>
                    <Phone className="h-8 w-8 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className='text-lg font-semibold'>Phone</h3>
                      <a href="tel:+912212345678" className="text-muted-foreground hover:text-primary transition-colors">+91 22 1234 5678</a>
                    </div>
                  </CardContent>
                </Card>
                <Card className='hover:border-primary transition-colors'>
                   <CardContent className='flex items-center gap-4 p-6'>
                    <Mail className="h-8 w-8 flex-shrink-0 text-primary" />
                     <div>
                      <h3 className='text-lg font-semibold'>Email</h3>
                      <a href="mailto:info@pushpa.com" className="text-muted-foreground hover:text-primary transition-colors">info@pushpa.com</a>
                    </div>
                  </CardContent>
                </Card>
                 <Card className='hover:border-primary transition-colors'>
                   <CardContent className='flex items-start gap-4 p-6'>
                    <MapPin className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className='text-lg font-semibold'>Office Address</h3>
                      <address className="mt-1 not-italic text-muted-foreground">
                        PUSHPA and CO
                        <br />
                        1/114/12 Flat No 302, Sri Aurobindo Heights,
                        <br />
                        M V P Colony, Chinawaltair,
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.563914831961!2d83.33230907588145!3d17.73907408323055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436e4b868881%3A0x13c69027c36a44ca!2sSri%20Aurobindo%20St%2C%20Sector%201%2C%20MVP%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530017%2C%20India!5e0!3m2!1sen!2sus!4v1717696347313!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google map of Pushpa & Co. location"
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
