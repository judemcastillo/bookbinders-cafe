import Link from "next/link";
import { brand } from "@/lib/data";
import { Coffee } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-caramelBlur backdrop-blur shadow">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-lg tracking-wide text-ink flex items-center">
          <Coffee className="sm:inline-block mr-2 hidden" size={20} />{brand.name}
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-2 text-sm font-medium sm:gap-3 md:gap-6 ">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-ink transition hover:bg-caramel/20 hover:text-rust font-semibold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
