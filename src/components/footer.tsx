
import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Pushpa & Co.</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in global procurement since 1994.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Pushpa & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
