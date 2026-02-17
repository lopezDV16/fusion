import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { LocaleText } from "@/components/locale-text";
import { SiteControls } from "@/components/site-controls";

const links = [
  { href: "/", ar: "الرئيسية", en: "Home" },
  { href: "/shop", ar: "المتجر", en: "Shop" },
  { href: "/services", ar: "خدمات الطباعة", en: "Print Services" },
  { href: "/custom-order", ar: "طلب مخصص", en: "Custom Order" },
  { href: "/portfolio", ar: "البورتفوليو", en: "Portfolio" },
  { href: "/about", ar: "من نحن", en: "About" },
  { href: "/contact", ar: "تواصل", en: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080b]/85 backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="shrink-0">
          <BrandLogo size="md" withTagline />
        </Link>

        <nav className="flex flex-wrap items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-white"
            >
              <LocaleText ar={link.ar} en={link.en} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SiteControls />
          <Link
            href="/custom-order"
            className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase transition hover:bg-white/20"
          >
            <LocaleText ar="اطلب الآن" en="Order Now" />
          </Link>
        </div>
      </Container>
    </header>
  );
}
