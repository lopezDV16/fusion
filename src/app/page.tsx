import Link from "next/link";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import {
  featuredProducts,
  portfolioItems,
  printServices,
  whyFusionPoints,
} from "@/lib/catalog";

const stats = [
  { value: "260+", label: "مشروع مطبوع" },
  { value: "48h", label: "تنفيذ سريع" },
  { value: "97%", label: "عملاء يعودون" },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 pt-10">
      <section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-[0.2em] text-zinc-200 uppercase">
                Fusion Platform
              </span>
              <h1 className="font-heading text-6xl leading-none tracking-[0.08em] text-white sm:text-7xl">
                Brand.
                <br />
                Store.
                <br />
                Print Service.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-zinc-300">
                Fusion ليست متجرًا تقليديًا. هي منصة تجمع البراند مع المتجر وخدمات الطباعة
                والبورتفوليو في تجربة واحدة واضحة وسريعة ومصممة للبيع.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/shop"
                  className="rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/18 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-[#ff6a00]/35"
                >
                  تسوق الآن
                </Link>
                <Link
                  href="/custom-order"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-zinc-100 uppercase transition hover:bg-white/12"
                >
                  ابدأ طلب طباعة
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-[#0f1218] px-4 py-3"
                  >
                    <p className="font-heading text-4xl leading-none text-white">{stat.value}</p>
                    <p className="mt-2 text-xs text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0e131c] p-7">
              <div
                className="absolute -left-24 top-0 h-52 w-52 rounded-full blur-3xl"
                style={{ background: "#ff6a00" }}
              />
              <div
                className="absolute -right-20 bottom-0 h-52 w-52 rounded-full blur-3xl"
                style={{ background: "#3b4f6f" }}
              />
              <div className="relative space-y-5">
                <div className="rounded-2xl border border-white/12 bg-black/25 p-5">
                  <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Focus</p>
                  <p className="mt-2 font-heading text-4xl leading-none text-white sm:text-5xl">
                    Premium Streetwear + Print Lab
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-zinc-400">Featured Service</p>
                    <p className="mt-2 font-heading text-3xl leading-none text-white">DTF</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-zinc-400">For Brands & Companies</p>
                    <p className="mt-2 font-heading text-3xl leading-none text-white">Custom / Bulk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading
            kicker="Shop"
            title="منتجات مختارة"
            description="قطع جاهزة للبيع بستايل Streetwear واضح مع خامات وطباعة مناسبة لإطلاقات البراند."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link
            href="/shop"
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-zinc-100 uppercase transition hover:bg-white/12"
          >
            مشاهدة كل المنتجات
          </Link>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading
            kicker="Print Services"
            title="خدمات الطباعة"
            description="من DTF للطلبات السريعة إلى تجهيز براند كامل أو إنتاج كميات للشركات."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {printServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/12 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-[#ff6a00]/28"
          >
            كل خدمات الطباعة
          </Link>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading
            kicker="Why Fusion"
            title="لماذا Fusion؟"
            description="الموقع مبني على وضوح المسار، جودة التنفيذ، وتثبيت صورة البراند منذ أول زيارة."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {whyFusionPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-3xl border border-white/10 bg-[#0f1218] p-6"
              >
                <h3 className="font-heading text-3xl leading-none text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{point.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading
            kicker="Portfolio"
            title="معاينة البورتفوليو"
            description="Lookbook نظيف يعرض أفضل الأعمال. العرض القوي يرفع قيمة البراند مباشرة."
          />
          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
            {portfolioItems.slice(0, 4).map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                className={index === 0 ? "md:col-span-2" : ""}
              />
            ))}
          </div>
          <Link
            href="/portfolio"
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-zinc-100 uppercase transition hover:bg-white/12"
          >
            عرض البورتفوليو كامل
          </Link>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-[#101723] p-8 sm:p-10">
            <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Start Now</p>
            <h2 className="mt-3 font-heading text-5xl leading-none tracking-[0.06em] text-white sm:text-6xl">
              جاهز تطلق مشروعك؟
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
              ابدأ بطلب طباعة مخصص أو تواصل مع الفريق مباشرة لعرض سعر دقيق وخطة تنفيذ مناسبة لحجمك.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/custom-order"
                className="rounded-full border border-[#ff6a00]/45 bg-[#ff6a00]/16 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-[#ff6a00]/32"
              >
                ابدأ طلب طباعة
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-zinc-100 uppercase transition hover:bg-white/12"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
