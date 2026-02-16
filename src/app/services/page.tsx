import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { portfolioItems, printServices } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "خدمات الطباعة",
  description: "DTF و Custom Branding و Bulk Production مع مسار طلب واضح.",
};

const packages = [
  {
    name: "Starter Batch",
    target: "للمشاريع الجديدة",
    details: "50 - 120 قطعة",
    price: "من 4,500 ر.س",
  },
  {
    name: "Brand Growth",
    target: "للإطلاقات المتكررة",
    details: "120 - 300 قطعة",
    price: "من 9,800 ر.س",
  },
  {
    name: "Corporate Bulk",
    target: "للشركات والفعاليات",
    details: "300+ قطعة",
    price: "عرض سعر مخصص",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#101722] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Print Services</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-white">
            خدمات الطباعة
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-8 text-zinc-300">
            من طباعة DTF السريعة إلى تجهيز براند كامل أو إنتاج كميات للشركات. كل خدمة لها
            مسار واضح وجودة قابلة للقياس.
          </p>
          <Link
            href="/custom-order"
            className="mt-6 inline-flex rounded-full border border-[#ff6a00]/45 bg-[#ff6a00]/15 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-[#ff6a00]/30"
          >
            ابدأ طلب طباعة
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
          kicker="Process"
          title="آلية العمل"
          description="خطوات قصيرة وواضحة تضمن سرعة التنفيذ بدون فقدان الجودة."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { step: "01", label: "استلام التفاصيل والملف" },
            { step: "02", label: "مراجعة فنية + عرض سعر" },
            { step: "03", label: "عينة اعتماد سريعة" },
            { step: "04", label: "إنتاج وتسليم" },
          ].map((item) => (
            <article key={item.step} className="rounded-2xl border border-white/10 bg-[#0f1218] p-5">
              <p className="text-xs tracking-[0.2em] text-zinc-400">{item.step}</p>
              <p className="mt-3 font-heading text-3xl leading-none text-white">{item.label}</p>
            </article>
          ))}
        </div>
      </Container>

      <Container className="space-y-6">
        <SectionHeading
          kicker="Work Samples"
          title="أمثلة أعمال"
          description="نماذج حقيقية من مشاريع نفذناها للبراندات والفرق والشركات."
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
          kicker="Pricing"
          title="باقات تقديرية"
          description='يمكنك اختيار باقة مبدئية أو طلب "عرض سعر" مخصص حسب المواصفات.'
        />
        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="rounded-3xl border border-white/10 bg-[#0f1218] p-6">
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">{pkg.target}</p>
              <h3 className="mt-3 font-heading text-4xl leading-none tracking-wide text-white">
                {pkg.name}
              </h3>
              <p className="mt-3 text-sm text-zinc-300">{pkg.details}</p>
              <p className="mt-4 font-semibold text-zinc-100">{pkg.price}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
