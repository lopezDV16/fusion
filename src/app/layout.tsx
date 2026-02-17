import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Teko } from "next/font/google";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  try {
    var theme = localStorage.getItem("fusion-theme") || "dark";
    var locale = localStorage.getItem("fusion-locale") || "ar";
    var root = document.documentElement;
    root.dataset.theme = theme === "light" ? "light" : "dark";
    root.dataset.locale = locale === "en" ? "en" : "ar";
    root.lang = root.dataset.locale;
    root.dir = root.dataset.locale === "ar" ? "rtl" : "ltr";
  } catch (error) {}
})();`,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${teko.variable} ${cormorant.variable} bg-background text-foreground antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
