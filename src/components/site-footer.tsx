import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { LocaleText } from "@/components/locale-text";

const quickLinks = [
  { href: "/shop", ar: "المتجر", en: "Shop" },
  { href: "/services", ar: "الخدمات", en: "Services" },
  { href: "/portfolio", ar: "البورتفوليو", en: "Portfolio" },
  { href: "/custom-order", ar: "طلب طباعة", en: "Print Order" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07080b]">
      <Container className="grid gap-8 py-10 sm:grid-cols-3">
        <div className="space-y-3">
          <BrandLogo size="sm" />
          <LocaleText
            as="p"
            className="text-sm leading-7 text-zinc-400"
            ar="منصة تجمع البراند + المتجر + خدمات الطباعة في تجربة واحدة مرتبة وواضحة."
            en="A single platform that combines brand identity, store operations, and print services in one clear experience."
          />
        </div>

        <div className="space-y-3">
          <LocaleText
            as="p"
            className="text-xs tracking-[0.2em] text-zinc-500 uppercase"
            ar="روابط سريعة"
            en="Quick Links"
          />
          <div className="flex flex-col gap-2 text-sm text-zinc-300">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                <LocaleText ar={link.ar} en={link.en} />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <LocaleText
            as="p"
            className="text-xs tracking-[0.2em] text-zinc-500 uppercase"
            ar="تواصل مباشر"
            en="Direct Contact"
          />
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-zinc-300 transition hover:text-white"
          >
            WhatsApp: +1 555 123 4567
          </a>
          <a
            href="https://instagram.com/fusion.platform"
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-zinc-300 transition hover:text-white"
          >
            Instagram: @fusion.platform
          </a>
        </div>
      </Container>
    </footer>
  );
}
