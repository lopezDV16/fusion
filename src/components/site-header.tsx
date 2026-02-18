import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/services", label: "Print Services" },
  { href: "/custom-order", label: "Custom Order" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/12 bg-[#1C1C1Cf0] backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-5 py-3">
        <Link href="/" className="shrink-0">
          <BrandLogo size="md" />
        </Link>

        <div className="hidden rounded-full border border-white/20 bg-black/25 p-1 lg:block">
          <nav className="flex items-center gap-1 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 font-semibold tracking-[0.12em] text-[#E5E5E5] uppercase transition hover:bg-white/14"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link
          href="/custom-order"
          className="rounded-full border border-[#E5E5E5] bg-[#E5E5E5] px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-[#1C1C1C] uppercase shadow-[0_0_20px_rgba(229,229,229,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5E5E5] hover:shadow-[0_0_30px_rgba(229,229,229,0.35)]"
        >
          Start Order
        </Link>
      </Container>

      <Container className="pb-3 lg:hidden">
        <nav className="flex gap-2 overflow-x-auto whitespace-nowrap text-[11px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-semibold tracking-[0.12em] text-[#E5E5E5] uppercase transition hover:border-[#E5E5E5]/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}


