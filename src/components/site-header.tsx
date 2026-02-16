import Link from "next/link";
import { Container } from "@/components/container";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/shop", label: "المتجر" },
  { href: "/services", label: "خدمات الطباعة" },
  { href: "/custom-order", label: "طلب مخصص" },
  { href: "/portfolio", label: "البورتفوليو" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080b]/85 backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex flex-col">
          <span className="font-heading text-4xl leading-none tracking-[0.2em] text-white">FUSION</span>
          <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
            Brand + Store + Print Lab
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-zinc-300 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/custom-order"
          className="rounded-full border border-[#ff6a00]/50 bg-[#ff6a00]/15 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase transition hover:bg-[#ff6a00]/30"
        >
          اطلب الآن
        </Link>
      </Container>
    </header>
  );
}
