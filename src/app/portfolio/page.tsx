import type { Metadata } from "next";
import { Container } from "@/components/container";
import { LocaleText } from "@/components/locale-text";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Ø§Ù„Ø¨ÙˆØ±ØªÙÙˆÙ„ÙŠÙˆ",
  description: "Ù…Ø¹Ø±Ø¶ Ø£Ø¹Ù…Ø§Ù„ Fusion Ø¨Ø£Ø³Ù„ÙˆØ¨ Lookbook Ù†Ø¸ÙŠÙ.",
};

export default function PortfolioPage() {
  return (
    <div className="space-y-10 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#1C1C1C] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Portfolio</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-[#E5E5E5]">
            <LocaleText ar="Ø£Ø¹Ù…Ø§Ù„ Fusion" en="Fusion Portfolio" />
          </h1>
          <LocaleText
            as="p"
            className="mt-3 max-w-2xl text-sm leading-8 text-zinc-300"
            ar="Gallery Ø¨Ù†Ù…Ø· Lookbook ÙŠØ¹Ø±Ø¶ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø¨Ø£ÙØ¶Ù„ ØµÙˆØ±Ø©. Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„ØµÙˆØ± Ø§Ù„Ù‚ÙˆÙŠØ© Ù‡Ù†Ø§ ÙŠØ±ÙØ¹ Ù‚ÙŠÙ…Ø© Ø§Ù„Ø¨Ø±Ø§Ù†Ø¯ Ø¨Ø´ÙƒÙ„ Ù…Ø¨Ø§Ø´Ø±."
            en="A lookbook-style gallery that presents projects at their best. Strong visual curation here directly elevates brand value."
          />
        </div>
      </Container>

      <Container className="space-y-6">
        <SectionHeading
          kicker={<LocaleText ar="Ø§Ù„Ù„ÙˆÙƒØ¨ÙˆÙƒ" en="Lookbook" />}
          title={<LocaleText ar="Ù…Ø®ØªØ§Ø±Ø§Øª Ø§Ø­ØªØ±Ø§ÙÙŠØ©" en="Curated Selections" />}
          description={
            <LocaleText
              ar="ÙƒÙ„ Ù…Ø´Ø±ÙˆØ¹ ÙŠØ¹ÙƒØ³ Ù†ÙˆØ¹ Ø§Ù„Ø¹Ù…ÙŠÙ„: Ø¨Ø±Ø§Ù†Ø¯ØŒ Ø´Ø±ÙƒØ©ØŒ ÙØ¹Ø§Ù„ÙŠØ©ØŒ Ø£Ùˆ Ø·Ù„Ø¨ Ù…Ø®ØµØµ."
              en="Each project reflects a client profile: brand, company, event, or custom request."
            />
          }
        />
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const variants = [
              "md:col-span-2",
              "",
              "",
              "",
              "md:col-span-2",
              "",
            ];

            return (
              <PortfolioCard key={item.id} item={item} className={variants[index] ?? ""} />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

