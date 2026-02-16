import Link from "next/link";
import { Container } from "@/components/container";

const quickLinks = [
  { href: "/shop", label: "المتجر" },
  { href: "/services", label: "الخدمات" },
  { href: "/portfolio", label: "البورتفوليو" },
  { href: "/custom-order", label: "طلب طباعة" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07080b]">
      <Container className="grid gap-8 py-10 sm:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-heading text-3xl tracking-[0.18em] text-white">FUSION</h3>
          <p className="text-sm leading-7 text-zinc-400">
            منصة تجمع البراند + المتجر + خدمات الطباعة في تجربة واحدة مرتبة وواضحة.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">روابط سريعة</p>
          <div className="flex flex-col gap-2 text-sm text-zinc-300">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">تواصل مباشر</p>
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
