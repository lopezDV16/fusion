import type { Metadata } from "next";
import { Manrope, Teko } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Fusion Platform | Brand + Store + Print Lab",
    template: "%s | Fusion Platform",
  },
  description:
    "Fusion منصة تجمع المتجر وخدمات الطباعة والبورتفوليو بطابع Streetwear Premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${manrope.variable} ${teko.variable} bg-background text-foreground antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
