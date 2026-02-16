import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "من نحن",
  description: "قصة Fusion ورؤيتها في الدمج بين البراند والطباعة.",
};

const values = [
  {
    title: "رؤية واضحة",
    body: "نحو منصة عربية تجمع البراند والمتجر والطباعة تحت تجربة مرتبة وسهلة.",
  },
  {
    title: "جودة قابلة للقياس",
    body: "معايير ثابتة للخامة والطباعة والتغليف لضمان مخرجات مستقرة على كل طلب.",
  },
  {
    title: "ثقة طويلة المدى",
    body: "علاقة تشغيل مستمرة مع العميل بدل تنفيذ سريع بلا متابعة.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-16 pt-10">
      <Container>
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#0f141c] p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">About Fusion</p>
            <h1 className="font-heading text-6xl leading-none tracking-[0.08em] text-white">
              من نحن
            </h1>
            <p className="text-sm leading-8 text-zinc-300">
              Fusion بدأت كفكرة بسيطة: لماذا يضطر العميل للتنقل بين متجر، مطبعة، واستوديو
              عرض أعمال؟ الحل كان منصة واحدة تجمع كل ذلك بمستوى Premium.
            </p>
            <p className="text-sm leading-8 text-zinc-300">
              نعمل مع براندات Streetwear، شركات، وفرق تبحث عن تنفيذ احترافي سريع مع هوية
              بصرية قوية.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101923] p-6">
            <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">Fusion Promise</p>
            <p className="mt-3 font-heading text-4xl leading-none tracking-[0.05em] text-white">
              تصميم واضح
              <br />
              جودة قوية
              <br />
              ثقة مستمرة
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-100 uppercase transition hover:bg-white/12"
            >
              استعرض خدماتنا
            </Link>
          </div>
        </div>
      </Container>

      <Container className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded-3xl border border-white/10 bg-[#0f1218] p-6">
            <h2 className="font-heading text-4xl leading-none tracking-wide text-white">{value.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{value.body}</p>
          </article>
        ))}
      </Container>
    </div>
  );
}
