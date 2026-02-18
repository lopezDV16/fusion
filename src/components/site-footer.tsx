import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";

const quickLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/custom-order", label: "Print Order" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/12 bg-[#1C1C1C]">
      <Container className="space-y-10 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <BrandLogo size="sm" withTagline />
            <p className="max-w-md text-sm leading-8 text-zinc-300">
              Fusion unifies streetwear retail, custom printing, and production operations in one
              premium platform.
            </p>
            <p className="text-xs tracking-[0.16em] text-zinc-500 uppercase">
              Built for drops, teams, and serious brand growth.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-heading text-3xl tracking-[0.08em] text-[#E5E5E5]">Quick Links</p>
            <div className="h-px w-16 bg-[var(--accent)]/70" />
            <div className="flex flex-col gap-2 text-sm text-[#E5E5E5]">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit transition hover:text-[#E5E5E5]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-heading text-3xl tracking-[0.08em] text-[#E5E5E5]">Direct Contact</p>
            <div className="h-px w-16 bg-[var(--accent)]/70" />
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-[#E5E5E5] transition hover:text-[#E5E5E5]"
            >
              WhatsApp: +1 555 123 4567
            </a>
            <a
              href="https://instagram.com/fusion.platform"
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-[#E5E5E5] transition hover:text-[#E5E5E5]"
            >
              Instagram: @fusion.platform
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-[0.14em] text-zinc-500 uppercase">
          <p>Copyright {year} Fusion Platform</p>
          <p>Premium Streetwear and Custom Printing</p>
        </div>
      </Container>
    </footer>
  );
}

