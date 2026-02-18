import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { LocaleText } from "@/components/locale-text";

export const metadata: Metadata = {
  title: "Ù…Ù† Ù†Ø­Ù†",
  description: "Ù‚ØµØ© Fusion ÙˆØ±Ø¤ÙŠØªÙ‡Ø§ ÙÙŠ Ø§Ù„Ø¯Ù…Ø¬ Ø¨ÙŠÙ† Ø§Ù„Ø¨Ø±Ø§Ù†Ø¯ ÙˆØ§Ù„Ø·Ø¨Ø§Ø¹Ø©.",
};

const values = [
  {
    title: { ar: "Ø±Ø¤ÙŠØ© ÙˆØ§Ø¶Ø­Ø©", en: "Clear Vision" },
    body: {
      ar: "Ù†Ø­Ùˆ Ù…Ù†ØµØ© Ø¹Ø±Ø¨ÙŠØ© ØªØ¬Ù…Ø¹ Ø§Ù„Ø¨Ø±Ø§Ù†Ø¯ ÙˆØ§Ù„Ù…ØªØ¬Ø± ÙˆØ§Ù„Ø·Ø¨Ø§Ø¹Ø© ØªØ­Øª ØªØ¬Ø±Ø¨Ø© Ù…Ø±ØªØ¨Ø© ÙˆØ³Ù‡Ù„Ø©.",
      en: "Toward an integrated platform combining brand, store, and print operations in one easy flow.",
    },
  },
  {
    title: { ar: "Ø¬ÙˆØ¯Ø© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ù‚ÙŠØ§Ø³", en: "Measurable Quality" },
    body: {
      ar: "Ù…Ø¹Ø§ÙŠÙŠØ± Ø«Ø§Ø¨ØªØ© Ù„Ù„Ø®Ø§Ù…Ø© ÙˆØ§Ù„Ø·Ø¨Ø§Ø¹Ø© ÙˆØ§Ù„ØªØºÙ„ÙŠÙ Ù„Ø¶Ù…Ø§Ù† Ù…Ø®Ø±Ø¬Ø§Øª Ù…Ø³ØªÙ‚Ø±Ø© Ø¹Ù„Ù‰ ÙƒÙ„ Ø·Ù„Ø¨.",
      en: "Stable standards for material, print, and packaging to keep output consistent across every order.",
    },
  },
  {
    title: { ar: "Ø«Ù‚Ø© Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰", en: "Long-Term Trust" },
    body: {
      ar: "Ø¹Ù„Ø§Ù‚Ø© ØªØ´ØºÙŠÙ„ Ù…Ø³ØªÙ…Ø±Ø© Ù…Ø¹ Ø§Ù„Ø¹Ù…ÙŠÙ„ Ø¨Ø¯Ù„ ØªÙ†ÙÙŠØ° Ø³Ø±ÙŠØ¹ Ø¨Ù„Ø§ Ù…ØªØ§Ø¨Ø¹Ø©.",
      en: "An ongoing operational relationship with clients instead of one-off delivery with no follow-up.",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-16 pt-10">
      <Container>
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#1C1C1C] p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">About Fusion</p>
            <h1 className="font-heading text-6xl leading-none tracking-[0.08em] text-[#E5E5E5]">
              <LocaleText ar="Ù…Ù† Ù†Ø­Ù†" en="About Us" />
            </h1>
            <LocaleText
              as="p"
              className="text-sm leading-8 text-zinc-300"
              ar="Fusion Ø¨Ø¯Ø£Øª ÙƒÙÙƒØ±Ø© Ø¨Ø³ÙŠØ·Ø©: Ù„Ù…Ø§Ø°Ø§ ÙŠØ¶Ø·Ø± Ø§Ù„Ø¹Ù…ÙŠÙ„ Ù„Ù„ØªÙ†Ù‚Ù„ Ø¨ÙŠÙ† Ù…ØªØ¬Ø±ØŒ Ù…Ø·Ø¨Ø¹Ø©ØŒ ÙˆØ§Ø³ØªÙˆØ¯ÙŠÙˆ Ø¹Ø±Ø¶ Ø£Ø¹Ù…Ø§Ù„ØŸ Ø§Ù„Ø­Ù„ ÙƒØ§Ù† Ù…Ù†ØµØ© ÙˆØ§Ø­Ø¯Ø© ØªØ¬Ù…Ø¹ ÙƒÙ„ Ø°Ù„Ùƒ Ø¨Ù…Ø³ØªÙˆÙ‰ Premium."
              en="Fusion started from a simple question: why should clients move between a store, print vendor, and portfolio studio? The answer was one premium platform."
            />
            <LocaleText
              as="p"
              className="text-sm leading-8 text-zinc-300"
              ar="Ù†Ø¹Ù…Ù„ Ù…Ø¹ Ø¨Ø±Ø§Ù†Ø¯Ø§Øª StreetwearØŒ Ø´Ø±ÙƒØ§ØªØŒ ÙˆÙØ±Ù‚ ØªØ¨Ø­Ø« Ø¹Ù† ØªÙ†ÙÙŠØ° Ø§Ø­ØªØ±Ø§ÙÙŠ Ø³Ø±ÙŠØ¹ Ù…Ø¹ Ù‡ÙˆÙŠØ© Ø¨ØµØ±ÙŠØ© Ù‚ÙˆÙŠØ©."
              en="We work with streetwear brands, companies, and teams that need fast professional execution with strong visual identity."
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-6">
            <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">Fusion Promise</p>
            <p className="mt-3 font-heading text-4xl leading-none tracking-[0.05em] text-[#E5E5E5]">
              <span className="locale-ar">
                ØªØµÙ…ÙŠÙ… ÙˆØ§Ø¶Ø­
                <br />
                Ø¬ÙˆØ¯Ø© Ù‚ÙˆÙŠØ©
                <br />
                Ø«Ù‚Ø© Ù…Ø³ØªÙ…Ø±Ø©
              </span>
              <span className="locale-en">
                Clear Design
                <br />
                Strong Quality
                <br />
                Ongoing Trust
              </span>
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-100 uppercase transition hover:bg-white/12"
            >
              <LocaleText ar="Ø§Ø³ØªØ¹Ø±Ø¶ Ø®Ø¯Ù…Ø§ØªÙ†Ø§" en="Explore Our Services" />
            </Link>
          </div>
        </div>
      </Container>

      <Container className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title.ar} className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-6">
            <h2 className="font-heading text-4xl leading-none tracking-wide text-[#E5E5E5]">
              <LocaleText ar={value.title.ar} en={value.title.en} />
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              <LocaleText ar={value.body.ar} en={value.body.en} />
            </p>
          </article>
        ))}
      </Container>
    </div>
  );
}

