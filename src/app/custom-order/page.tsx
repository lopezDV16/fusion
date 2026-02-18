import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CustomOrderForm } from "@/components/custom-order-form";
import { LocaleText } from "@/components/locale-text";

export const metadata: Metadata = {
  title: "Ø·Ù„Ø¨ Ø·Ø¨Ø§Ø¹Ø© Ù…Ø®ØµØµØ©",
  description: "Ù†Ù…ÙˆØ°Ø¬ Ø°ÙƒÙŠ Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ø·Ø¨Ø§Ø¹Ø© ÙŠØ´Ù…Ù„ Ø§Ù„ÙƒÙ…ÙŠØ© ÙˆØ§Ù„Ù…Ù‚Ø§Ø³Ø§Øª ÙˆØ±ÙØ¹ Ø§Ù„ØªØµÙ…ÙŠÙ….",
};

export default function CustomOrderPage() {
  return (
    <div className="space-y-8 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#1C1C1C] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Custom Order</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-[#E5E5E5]">
            <LocaleText ar="Ø·Ù„Ø¨ Ø·Ø¨Ø§Ø¹Ø© Ù…Ø®ØµØµØ©" en="Custom Print Request" />
          </h1>
          <LocaleText
            as="p"
            className="mt-3 max-w-3xl text-sm leading-8 text-zinc-300"
            ar="Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© Ù‡ÙŠ Ù†Ù‚Ø·Ø© Ø§Ù„ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø£Ù‡Ù…. Ø§Ù…Ù„Ø£ Ø§Ù„ØªÙØ§ØµÙŠÙ„ ÙˆØ§Ø±ÙØ¹ Ø§Ù„ØªØµÙ…ÙŠÙ… Ù„ØªØ­ØµÙ„ Ø¹Ù„Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø³Ø±ÙŠØ¹Ø© ÙˆØ¹Ø±Ø¶ Ø³Ø¹Ø± ÙˆØ§Ø¶Ø­ Ù…Ù† ÙØ±ÙŠÙ‚ Fusion."
            en="This page is the main conversion point. Fill in your details and upload your design to get a fast review and a clear quote from the Fusion team."
          />
        </div>
      </Container>

      <Container>
        <CustomOrderForm />
      </Container>
    </div>
  );
}

