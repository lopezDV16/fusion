import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Teko } from "next/font/google";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-brand-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Fusion Platform | Premium Streetwear & Custom Printing",
    template: "%s | Fusion Platform",
  },
  description:
    "Fusion combines premium streetwear, custom printing, and portfolio-grade production in one focused platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" data-locale="en">
      <body
        className={`${manrope.variable} ${teko.variable} ${cormorant.variable} bg-background text-foreground antialiased`}
      >
        <ScrollReveal />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
