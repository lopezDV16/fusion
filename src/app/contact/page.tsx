import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "تواصل",
  description: "تواصل مع Fusion عبر واتساب، إنستغرام، أو نموذج الرسائل.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#101722] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Contact</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-white">
            تواصل معنا
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-8 text-zinc-300">
            اختر القناة المناسبة: واتساب للرد السريع، إنستغرام للاطلاع على الأعمال، أو نموذج
            التواصل لطلبات المشاريع الكاملة.
          </p>
        </div>
      </Container>

      <Container className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="space-y-4 rounded-3xl border border-white/10 bg-[#0f1218] p-6">
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">WhatsApp</p>
            <p className="mt-2 font-heading text-3xl leading-none tracking-wide text-white">
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
            <p className="mt-2 font-heading text-3xl leading-none tracking-wide text-white">
              @fusion.platform
            </p>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-zinc-300">
            <p>أوقات العمل:</p>
            <p>الأحد - الخميس: 10:00 ص إلى 8:00 م</p>
            <p>الجمعة - السبت: حسب المواعيد</p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#0f1218] p-6">
          <form className="grid gap-4">
            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">الاسم</span>
              <input
                required
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff6a00]/70"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">البريد الإلكتروني</span>
              <input
                required
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff6a00]/70"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">موضوع الرسالة</span>
              <input
                required
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff6a00]/70"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm text-zinc-300">الرسالة</span>
              <textarea
                required
                rows={6}
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff6a00]/70"
              />
            </label>

            <button
              type="submit"
              className="rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/15 px-5 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-[#ff6a00]/30"
            >
              إرسال الرسالة
            </button>
          </form>
        </section>
      </Container>
    </div>
  );
}
