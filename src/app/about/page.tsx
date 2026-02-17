import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { LocaleText } from "@/components/locale-text";

export const metadata: Metadata = {
  title: "من نحن",
  description: "قصة Fusion ورؤيتها في الدمج بين البراند والطباعة.",
};

const values = [
  {
    title: { ar: "رؤية واضحة", en: "Clear Vision" },
    body: {
      ar: "نحو منصة عربية تجمع البراند والمتجر والطباعة تحت تجربة مرتبة وسهلة.",
      en: "Toward an integrated platform combining brand, store, and print operations in one easy flow.",
    },
  },
  {
    title: { ar: "جودة قابلة للقياس", en: "Measurable Quality" },
    body: {
      ar: "معايير ثابتة للخامة والطباعة والتغليف لضمان مخرجات مستقرة على كل طلب.",
      en: "Stable standards for material, print, and packaging to keep output consistent across every order.",
    },
  },
  {
    title: { ar: "ثقة طويلة المدى", en: "Long-Term Trust" },
    body: {
      ar: "علاقة تشغيل مستمرة مع العميل بدل تنفيذ سريع بلا متابعة.",
      en: "An ongoing operational relationship with clients instead of one-off delivery with no follow-up.",
    },
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
              <LocaleText ar="من نحن" en="About Us" />
            </h1>
            <LocaleText
              as="p"
              className="text-sm leading-8 text-zinc-300"
              ar="Fusion بدأت كفكرة بسيطة: لماذا يضطر العميل للتنقل بين متجر، مطبعة، واستوديو عرض أعمال؟ الحل كان منصة واحدة تجمع كل ذلك بمستوى Premium."
              en="Fusion started from a simple question: why should clients move between a store, print vendor, and portfolio studio? The answer was one premium platform."
            />
            <LocaleText
              as="p"
              className="text-sm leading-8 text-zinc-300"
              ar="نعمل مع براندات Streetwear، شركات، وفرق تبحث عن تنفيذ احترافي سريع مع هوية بصرية قوية."
              en="We work with streetwear brands, companies, and teams that need fast professional execution with strong visual identity."
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101923] p-6">
            <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">Fusion Promise</p>
            <p className="mt-3 font-heading text-4xl leading-none tracking-[0.05em] text-white">
              <span className="locale-ar">
                تصميم واضح
                <br />
                جودة قوية
                <br />
                ثقة مستمرة
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
              <LocaleText ar="استعرض خدماتنا" en="Explore Our Services" />
            </Link>
          </div>
        </div>
      </Container>

      <Container className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title.ar} className="rounded-3xl border border-white/10 bg-[#0f1218] p-6">
            <h2 className="font-heading text-4xl leading-none tracking-wide text-white">
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
