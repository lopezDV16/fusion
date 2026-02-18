import type { Metadata } from "next";
import { Container } from "@/components/container";
import { LocaleText } from "@/components/locale-text";

export const metadata: Metadata = {
  title: "ØªÙˆØ§ØµÙ„",
  description: "ØªÙˆØ§ØµÙ„ Ù…Ø¹ Fusion Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨ØŒ Ø¥Ù†Ø³ØªØºØ±Ø§Ù…ØŒ Ø£Ùˆ Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#1C1C1C] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Contact</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-[#E5E5E5]">
            <LocaleText ar="ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§" en="Contact Us" />
          </h1>
          <LocaleText
            as="p"
            className="mt-3 max-w-3xl text-sm leading-8 text-zinc-300"
            ar="Ø§Ø®ØªØ± Ø§Ù„Ù‚Ù†Ø§Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©: ÙˆØ§ØªØ³Ø§Ø¨ Ù„Ù„Ø±Ø¯ Ø§Ù„Ø³Ø±ÙŠØ¹ØŒ Ø¥Ù†Ø³ØªØºØ±Ø§Ù… Ù„Ù„Ø§Ø·Ù„Ø§Ø¹ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ØŒ Ø£Ùˆ Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„ÙƒØ§Ù…Ù„Ø©."
            en="Choose your channel: WhatsApp for fast replies, Instagram for browsing work, or the contact form for full project inquiries."
          />
        </div>
      </Container>

      <Container className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="space-y-4 rounded-3xl border border-white/10 bg-[#1C1C1C] p-6">
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">WhatsApp</p>
            <p className="mt-2 font-heading text-3xl leading-none tracking-wide text-[#E5E5E5]">
              +1 555 123 4567
            </p>
          </a>

          <a
            href="https://instagram.com/fusion.platform"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">Instagram</p>
            <p className="mt-2 font-heading text-3xl leading-none tracking-wide text-[#E5E5E5]">
              @fusion.platform
            </p>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-zinc-300">
            <p>
              <LocaleText ar="Ø£ÙˆÙ‚Ø§Øª Ø§Ù„Ø¹Ù…Ù„:" en="Working Hours:" />
            </p>
            <p>
              <LocaleText ar="Ø§Ù„Ø£Ø­Ø¯ - Ø§Ù„Ø®Ù…ÙŠØ³: 10:00 Øµ Ø¥Ù„Ù‰ 8:00 Ù…" en="Sunday - Thursday: 10:00 AM to 8:00 PM" />
            </p>
            <p>
              <LocaleText ar="Ø§Ù„Ø¬Ù…Ø¹Ø© - Ø§Ù„Ø³Ø¨Øª: Ø­Ø³Ø¨ Ø§Ù„Ù…ÙˆØ§Ø¹ÙŠØ¯" en="Friday - Saturday: by appointment" />
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-6">
          <form className="grid gap-4">
            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">
                <LocaleText ar="Ø§Ù„Ø§Ø³Ù…" en="Name" />
              </span>
              <input
                required
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">
                <LocaleText ar="Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ" en="Email" />
              </span>
              <input
                required
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">
                <LocaleText ar="Ù…ÙˆØ¶ÙˆØ¹ Ø§Ù„Ø±Ø³Ø§Ù„Ø©" en="Message Subject" />
              </span>
              <input
                required
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">
                <LocaleText ar="Ø§Ù„Ø±Ø³Ø§Ù„Ø©" en="Message" />
              </span>
              <textarea
                required
                rows={6}
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#1C1C1C] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
              />
            </label>

            <button
              type="submit"
              className="rounded-full border border-white/35 bg-white/14 px-5 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-white/24"
            >
              <LocaleText ar="Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ø³Ø§Ù„Ø©" en="Send Message" />
            </button>
          </form>
        </section>
      </Container>
    </div>
  );
}

