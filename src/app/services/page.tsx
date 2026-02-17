import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { LocaleText } from "@/components/locale-text";
import { portfolioItems, printServices } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "خدمات الطباعة",
  description: "DTF و Custom Branding و Bulk Production مع مسار طلب واضح.",
};

const packages = [
  {
    name: "Starter Batch",
    target: { ar: "للمشاريع الجديدة", en: "For New Projects" },
    details: { ar: "50 - 120 قطعة", en: "50 - 120 pieces" },
    price: { ar: "من 4,500 ر.س", en: "From SAR 4,500" },
  },
  {
    name: "Brand Growth",
    target: { ar: "للإطلاقات المتكررة", en: "For Repeated Drops" },
    details: { ar: "120 - 300 قطعة", en: "120 - 300 pieces" },
    price: { ar: "من 9,800 ر.س", en: "From SAR 9,800" },
  },
  {
    name: "Corporate Bulk",
    target: { ar: "للشركات والفعاليات", en: "For Companies & Events" },
    details: { ar: "300+ قطعة", en: "300+ pieces" },
    price: { ar: "عرض سعر مخصص", en: "Custom Quotation" },
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#101722] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Print Services</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-white">
            <LocaleText ar="خدمات الطباعة" en="Print Services" />
          </h1>
          <LocaleText
            as="p"
            className="mt-3 max-w-3xl text-sm leading-8 text-zinc-300"
            ar="من طباعة DTF السريعة إلى تجهيز براند كامل أو إنتاج كميات للشركات. كل خدمة لها مسار واضح وجودة قابلة للقياس."
            en="From fast DTF jobs to full brand preparation and company-scale production, every service follows a clear measurable workflow."
          />
          <Link
            href="/custom-order"
            className="mt-6 inline-flex rounded-full border border-white/35 bg-white/14 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-white/24"
          >
            <LocaleText ar="ابدأ طلب طباعة" en="Start Print Order" />
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
          kicker={<LocaleText ar="آلية العمل" en="Process" />}
          title={<LocaleText ar="آلية العمل" en="How We Work" />}
          description={
            <LocaleText
              ar="خطوات قصيرة وواضحة تضمن سرعة التنفيذ بدون فقدان الجودة."
              en="Short and clear steps that keep delivery fast without compromising quality."
            />
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { step: "01", ar: "استلام التفاصيل والملف", en: "Receive brief and file" },
            { step: "02", ar: "مراجعة فنية + عرض سعر", en: "Technical review + quote" },
            { step: "03", ar: "عينة اعتماد سريعة", en: "Fast approval sample" },
            { step: "04", ar: "إنتاج وتسليم", en: "Production and delivery" },
          ].map((item) => (
            <article key={item.step} className="rounded-2xl border border-white/10 bg-[#0f1218] p-5">
              <p className="text-xs tracking-[0.2em] text-zinc-400">{item.step}</p>
              <p className="mt-3 font-heading text-3xl leading-none text-white">
                <LocaleText ar={item.ar} en={item.en} />
              </p>
            </article>
          ))}
        </div>
      </Container>

      <Container className="space-y-6">
        <SectionHeading
          kicker={<LocaleText ar="نماذج الأعمال" en="Work Samples" />}
          title={<LocaleText ar="أمثلة أعمال" en="Work Examples" />}
          description={
            <LocaleText
              ar="نماذج حقيقية من مشاريع نفذناها للبراندات والفرق والشركات."
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
          kicker={<LocaleText ar="التسعير" en="Pricing" />}
          title={<LocaleText ar="باقات تقديرية" en="Estimated Packages" />}
          description={
            <LocaleText
              ar='يمكنك اختيار باقة مبدئية أو طلب "عرض سعر" مخصص حسب المواصفات.'
              en='Choose an initial package or request a custom quotation based on your specs.'
            />
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="rounded-3xl border border-white/10 bg-[#0f1218] p-6">
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
                <LocaleText ar={pkg.target.ar} en={pkg.target.en} />
              </p>
              <h3 className="mt-3 font-heading text-4xl leading-none tracking-wide text-white">
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
