import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { LocaleText } from "@/components/locale-text";
import { portfolioItems, printServices } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø·Ø¨Ø§Ø¹Ø©",
  description: "DTF Ùˆ Custom Branding Ùˆ Bulk Production Ù…Ø¹ Ù…Ø³Ø§Ø± Ø·Ù„Ø¨ ÙˆØ§Ø¶Ø­.",
};

const packages = [
  {
    name: "Starter Batch",
    target: { ar: "Ù„Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©", en: "For New Projects" },
    details: { ar: "50 - 120 Ù‚Ø·Ø¹Ø©", en: "50 - 120 pieces" },
    price: { ar: "Ù…Ù† 4,500 Ø±.Ø³", en: "From SAR 4,500" },
  },
  {
    name: "Brand Growth",
    target: { ar: "Ù„Ù„Ø¥Ø·Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ù…ØªÙƒØ±Ø±Ø©", en: "For Repeated Drops" },
    details: { ar: "120 - 300 Ù‚Ø·Ø¹Ø©", en: "120 - 300 pieces" },
    price: { ar: "Ù…Ù† 9,800 Ø±.Ø³", en: "From SAR 9,800" },
  },
  {
    name: "Corporate Bulk",
    target: { ar: "Ù„Ù„Ø´Ø±ÙƒØ§Øª ÙˆØ§Ù„ÙØ¹Ø§Ù„ÙŠØ§Øª", en: "For Companies & Events" },
    details: { ar: "300+ Ù‚Ø·Ø¹Ø©", en: "300+ pieces" },
    price: { ar: "Ø¹Ø±Ø¶ Ø³Ø¹Ø± Ù…Ø®ØµØµ", en: "Custom Quotation" },
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#1C1C1C] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Print Services</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-[#E5E5E5]">
            <LocaleText ar="Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø·Ø¨Ø§Ø¹Ø©" en="Print Services" />
          </h1>
          <LocaleText
            as="p"
            className="mt-3 max-w-3xl text-sm leading-8 text-zinc-300"
            ar="Ù…Ù† Ø·Ø¨Ø§Ø¹Ø© DTF Ø§Ù„Ø³Ø±ÙŠØ¹Ø© Ø¥Ù„Ù‰ ØªØ¬Ù‡ÙŠØ² Ø¨Ø±Ø§Ù†Ø¯ ÙƒØ§Ù…Ù„ Ø£Ùˆ Ø¥Ù†ØªØ§Ø¬ ÙƒÙ…ÙŠØ§Øª Ù„Ù„Ø´Ø±ÙƒØ§Øª. ÙƒÙ„ Ø®Ø¯Ù…Ø© Ù„Ù‡Ø§ Ù…Ø³Ø§Ø± ÙˆØ§Ø¶Ø­ ÙˆØ¬ÙˆØ¯Ø© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ù‚ÙŠØ§Ø³."
            en="From fast DTF jobs to full brand preparation and company-scale production, every service follows a clear measurable workflow."
          />
          <Link
            href="/custom-order"
            className="mt-6 inline-flex rounded-full border border-[#E5E5E5] bg-[#E5E5E5] px-6 py-3 text-xs font-semibold tracking-[0.18em] text-[#1C1C1C] uppercase transition hover:bg-[#E5E5E5]"
          >
            <LocaleText ar="Ø§Ø¨Ø¯Ø£ Ø·Ù„Ø¨ Ø·Ø¨Ø§Ø¹Ø©" en="Start Print Order" />
          </Link>
        </div>
      </Container>

      <Container className="grid gap-5 lg:grid-cols-3">
        {printServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Container>

      <Container className="space-y-6">
        <SectionHeading
          kicker={<LocaleText ar="Ø¢Ù„ÙŠØ© Ø§Ù„Ø¹Ù…Ù„" en="Process" />}
          title={<LocaleText ar="Ø¢Ù„ÙŠØ© Ø§Ù„Ø¹Ù…Ù„" en="How We Work" />}
          description={
            <LocaleText
              ar="Ø®Ø·ÙˆØ§Øª Ù‚ØµÙŠØ±Ø© ÙˆÙˆØ§Ø¶Ø­Ø© ØªØ¶Ù…Ù† Ø³Ø±Ø¹Ø© Ø§Ù„ØªÙ†ÙÙŠØ° Ø¨Ø¯ÙˆÙ† ÙÙ‚Ø¯Ø§Ù† Ø§Ù„Ø¬ÙˆØ¯Ø©."
              en="Short and clear steps that keep delivery fast without compromising quality."
            />
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { step: "01", ar: "Ø§Ø³ØªÙ„Ø§Ù… Ø§Ù„ØªÙØ§ØµÙŠÙ„ ÙˆØ§Ù„Ù…Ù„Ù", en: "Receive brief and file" },
            { step: "02", ar: "Ù…Ø±Ø§Ø¬Ø¹Ø© ÙÙ†ÙŠØ© + Ø¹Ø±Ø¶ Ø³Ø¹Ø±", en: "Technical review + quote" },
            { step: "03", ar: "Ø¹ÙŠÙ†Ø© Ø§Ø¹ØªÙ…Ø§Ø¯ Ø³Ø±ÙŠØ¹Ø©", en: "Fast approval sample" },
            { step: "04", ar: "Ø¥Ù†ØªØ§Ø¬ ÙˆØªØ³Ù„ÙŠÙ…", en: "Production and delivery" },
          ].map((item) => (
            <article key={item.step} className="rounded-2xl border border-white/10 bg-[#1C1C1C] p-5">
              <p className="text-xs tracking-[0.2em] text-zinc-400">{item.step}</p>
              <p className="mt-3 font-heading text-3xl leading-none text-[#E5E5E5]">
                <LocaleText ar={item.ar} en={item.en} />
              </p>
            </article>
          ))}
        </div>
      </Container>

      <Container className="space-y-6">
        <SectionHeading
          kicker={<LocaleText ar="Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„" en="Work Samples" />}
          title={<LocaleText ar="Ø£Ù…Ø«Ù„Ø© Ø£Ø¹Ù…Ø§Ù„" en="Work Examples" />}
          description={
            <LocaleText
              ar="Ù†Ù…Ø§Ø°Ø¬ Ø­Ù‚ÙŠÙ‚ÙŠØ© Ù…Ù† Ù…Ø´Ø§Ø±ÙŠØ¹ Ù†ÙØ°Ù†Ø§Ù‡Ø§ Ù„Ù„Ø¨Ø±Ø§Ù†Ø¯Ø§Øª ÙˆØ§Ù„ÙØ±Ù‚ ÙˆØ§Ù„Ø´Ø±ÙƒØ§Øª."
              en="Real samples from projects delivered for brands, teams, and companies."
            />
          }
        />
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              className={index === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </Container>

      <Container className="space-y-6">
        <SectionHeading
          kicker={<LocaleText ar="Ø§Ù„ØªØ³Ø¹ÙŠØ±" en="Pricing" />}
          title={<LocaleText ar="Ø¨Ø§Ù‚Ø§Øª ØªÙ‚Ø¯ÙŠØ±ÙŠØ©" en="Estimated Packages" />}
          description={
            <LocaleText
              ar='ÙŠÙ…ÙƒÙ†Ùƒ Ø§Ø®ØªÙŠØ§Ø± Ø¨Ø§Ù‚Ø© Ù…Ø¨Ø¯Ø¦ÙŠØ© Ø£Ùˆ Ø·Ù„Ø¨ "Ø¹Ø±Ø¶ Ø³Ø¹Ø±" Ù…Ø®ØµØµ Ø­Ø³Ø¨ Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª.'
              en='Choose an initial package or request a custom quotation based on your specs.'
            />
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-6">
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
                <LocaleText ar={pkg.target.ar} en={pkg.target.en} />
              </p>
              <h3 className="mt-3 font-heading text-4xl leading-none tracking-wide text-[#E5E5E5]">
                {pkg.name}
              </h3>
              <p className="mt-3 text-sm text-zinc-300">
                <LocaleText ar={pkg.details.ar} en={pkg.details.en} />
              </p>
              <p className="mt-4 font-semibold text-zinc-100">
                <LocaleText ar={pkg.price.ar} en={pkg.price.en} />
              </p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

