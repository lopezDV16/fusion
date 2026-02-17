import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { LocaleText } from "@/components/locale-text";
import {
  featuredProducts,
  portfolioItems,
  printServices,
  whyFusionPoints,
} from "@/lib/catalog";

const stats = [
  { value: "260+", ar: "مشروع مطبوع", en: "Printed Projects" },
  { value: "48h", ar: "تنفيذ سريع", en: "Fast Turnaround" },
  { value: "97%", ar: "عملاء يعودون", en: "Returning Clients" },
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
                <span className="locale-ar">
                  براند.
                  <br />
                  متجر.
                  <br />
                  خدمات طباعة.
                </span>
                <span className="locale-en">
                  Brand.
                  <br />
                  Store.
                  <br />
                  Print Service.
                </span>
              </h1>
              <LocaleText
                as="p"
                className="max-w-2xl text-base leading-8 text-zinc-300"
                ar="Fusion ليست متجرًا تقليديًا. هي منصة تجمع البراند مع المتجر وخدمات الطباعة والبورتفوليو في تجربة واحدة واضحة وسريعة ومصممة للبيع."
                en="Fusion is not a typical store. It is one unified platform for your brand, store, print services, and portfolio in a clear sales-focused experience."
              />
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/shop"
                  className="rounded-full border border-white/35 bg-white/14 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-white/24"
                >
                  <LocaleText ar="تسوق الآن" en="Shop Now" />
                </Link>
                <Link
                  href="/custom-order"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-zinc-100 uppercase transition hover:bg-white/12"
                >
                  <LocaleText ar="ابدأ طلب طباعة" en="Start Print Order" />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.ar}
                    className="rounded-2xl border border-white/10 bg-[#0f1218] px-4 py-3"
                  >
                    <p className="font-heading text-4xl leading-none text-white">{stat.value}</p>
                    <p className="mt-2 text-xs text-zinc-400">
                      <LocaleText ar={stat.ar} en={stat.en} />
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0e131c] p-7">
              <Image
                src="/images/hero/fusion-hero.svg"
                alt="Fusion hero visual"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#07080b88] to-[#07080be8]" />
              <div
                className="absolute -left-24 top-0 h-52 w-52 rounded-full blur-3xl"
                style={{ background: "#8f8f8f" }}
              />
              <div
                className="absolute -right-20 bottom-0 h-52 w-52 rounded-full blur-3xl"
                style={{ background: "#6f6f6f" }}
              />
              <div className="relative z-10 space-y-5">
                <div className="rounded-2xl border border-white/12 bg-black/25 p-5">
                  <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Focus</p>
                  <LocaleText
                    as="p"
                    className="mt-2 font-heading text-4xl leading-none text-white sm:text-5xl"
                    ar="ستريت وير بريميوم + معمل طباعة"
                    en="Premium Streetwear + Print Lab"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <LocaleText as="p" className="text-xs text-zinc-400" ar="خدمة بارزة" en="Featured Service" />
                    <p className="mt-2 font-heading text-3xl leading-none text-white">DTF</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <LocaleText
                      as="p"
                      className="text-xs text-zinc-400"
                      ar="لبراندات وشركات"
                      en="For Brands & Companies"
                    />
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
            kicker={<LocaleText ar="المتجر" en="Shop" />}
            title={<LocaleText ar="منتجات مختارة" en="Featured Products" />}
            description={
              <LocaleText
                ar="قطع جاهزة للبيع بستايل Streetwear واضح مع خامات وطباعة مناسبة لإطلاقات البراند."
                en="Ready-to-sell pieces with clear streetwear style, strong materials, and print quality built for brand drops."
              />
            }
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
            <LocaleText ar="مشاهدة كل المنتجات" en="View All Products" />
          </Link>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading
            kicker={<LocaleText ar="خدمات الطباعة" en="Print Services" />}
            title={<LocaleText ar="خدمات الطباعة" en="Print Services" />}
            description={
              <LocaleText
                ar="من DTF للطلبات السريعة إلى تجهيز براند كامل أو إنتاج كميات للشركات."
                en="From fast DTF jobs to full brand setup and bulk production for companies."
              />
            }
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {printServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex rounded-full border border-white/35 bg-white/12 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-white/24"
          >
            <LocaleText ar="كل خدمات الطباعة" en="All Print Services" />
          </Link>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading
            kicker={<LocaleText ar="لماذا Fusion" en="Why Fusion" />}
            title={<LocaleText ar="لماذا Fusion؟" en="Why Fusion?" />}
            description={
              <LocaleText
                ar="الموقع مبني على وضوح المسار، جودة التنفيذ، وتثبيت صورة البراند منذ أول زيارة."
                en="The platform is built around clear navigation, reliable execution quality, and strong brand positioning from the first visit."
              />
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            {whyFusionPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-3xl border border-white/10 bg-[#0f1218] p-6"
              >
                <h3 className="font-heading text-3xl leading-none text-white">
                  <LocaleText ar={point.title} en={point.titleEn} />
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  <LocaleText ar={point.description} en={point.descriptionEn} />
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading
            kicker={<LocaleText ar="البورتفوليو" en="Portfolio" />}
            title={<LocaleText ar="معاينة البورتفوليو" en="Portfolio Preview" />}
            description={
              <LocaleText
                ar="Lookbook نظيف يعرض أفضل الأعمال. العرض القوي يرفع قيمة البراند مباشرة."
                en="A clean lookbook that showcases the strongest projects and instantly increases brand value."
              />
            }
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
            <LocaleText ar="عرض البورتفوليو كامل" en="View Full Portfolio" />
          </Link>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-[#101723] p-8 sm:p-10">
            <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Start Now</p>
            <h2 className="mt-3 font-heading text-5xl leading-none tracking-[0.06em] text-white sm:text-6xl">
              <LocaleText ar="جاهز تطلق مشروعك؟" en="Ready To Launch Your Project?" />
            </h2>
            <LocaleText
              as="p"
              className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300"
              ar="ابدأ بطلب طباعة مخصص أو تواصل مع الفريق مباشرة لعرض سعر دقيق وخطة تنفيذ مناسبة لحجمك."
              en="Start with a custom print request or contact the team directly for an accurate quote and execution plan tailored to your scale."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/custom-order"
                className="rounded-full border border-white/35 bg-white/14 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-white/24"
              >
                <LocaleText ar="ابدأ طلب طباعة" en="Start Print Order" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-zinc-100 uppercase transition hover:bg-white/12"
              >
                <LocaleText ar="تواصل معنا" en="Contact Us" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
