import Image from "next/image";
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
  testimonials,
  trustBadges,
  whyFusionPoints,
} from "@/lib/catalog";
import { formatCurrency } from "@/lib/format";

const stats = [
  {
    value: "260+",
    label: "Orders Completed",
    detail: "Delivered successfully across drops, uniforms, and custom campaigns.",
  },
  {
    value: "48h",
    label: "Avg Production Time",
    detail: "Fast turnaround for approved designs and ready production files.",
  },
  {
    value: "97%",
    label: "Client Satisfaction",
    detail: "Repeat orders driven by print consistency and reliable communication.",
  },
];

const tickerItems = [
  "Premium Streetwear",
  "Custom Printing",
  "Bulk Production",
  "Brand Build",
  "Fast Turnaround",
];

function WhyIcon({ index }: { index: number }) {
  const strokes = [
    "M4 12h16M12 4l8 8-8 8",
    "M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z",
    "M5 12h5l2-5 2 10 2-5h3",
    "M12 3l2.6 5.2 5.7.8-4.1 4 1 5.6L12 16l-5.2 2.6 1-5.6-4.1-4 5.7-.8z",
  ] as const;

  return (
    <span
      className="icon-pulse inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/12"
      style={{ animationDelay: `${index * 140}ms` }}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-[var(--accent)]" fill="none" strokeWidth="1.8">
        <path d={strokes[index % strokes.length]} />
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-28 pb-28 pt-7">
      <section data-reveal>
        <Container className="space-y-5">
          <div className="relative overflow-hidden rounded-[2.1rem] border border-white/15 bg-[#1C1C1C]">
            <Image
              src="/images/hero/Gemini_Generated_Image_ik6cbik6cbik6cbi.png"
              alt="Fusion hero image"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1Cf2] via-[#1C1C1Cd6] to-[#1C1C1C5e]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1Cf2] via-transparent to-transparent" />
            <div
              className="absolute -left-28 top-8 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "var(--accent)", opacity: 0.28 }}
            />
            <div
              className="absolute bottom-0 right-10 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "#E5E5E5", opacity: 0.2 }}
            />

            <div className="relative z-10 grid min-h-[74vh] gap-10 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
              <div className="flex flex-col justify-between gap-8 text-left">
                <div className="space-y-6">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold tracking-[0.2em] text-zinc-100 uppercase">
                    Fusion Platform
                  </span>

                  <h1 className="font-heading text-7xl leading-[0.84] tracking-[0.04em] text-[#E5E5E5] sm:text-8xl">
                    Premium Streetwear
                    <br />
                    &amp; Custom Printing
                  </h1>

                  <p className="max-w-2xl text-base leading-8 text-zinc-200 sm:text-lg sm:leading-9">
                    Built for brands that demand sharp quality, clean execution, and fast
                    production turnaround.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/custom-order"
                      className="rounded-full border border-[#E5E5E5] bg-[#E5E5E5] px-9 py-4 text-xs font-semibold tracking-[0.18em] text-[#1C1C1C] uppercase shadow-[0_0_24px_rgba(229,229,229,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5E5E5] hover:shadow-[0_0_34px_rgba(229,229,229,0.34)]"
                    >
                      Start Print Order
                    </Link>
                    <Link
                      href="/shop"
                      className="rounded-full border border-white/25 bg-white/8 px-8 py-4 text-xs font-semibold tracking-[0.18em] text-zinc-100 uppercase transition duration-300 hover:-translate-y-0.5 hover:bg-white/16"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Streetwear", "Print Lab", "Corporate Uniforms", "Drop Ready"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-black/35 px-4 py-1.5 text-[10px] tracking-[0.16em] text-zinc-100 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid content-end gap-4 lg:justify-self-end lg:max-w-[28rem]">
                <article className="rounded-3xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
                  <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Black Room Flow</p>
                  <p className="mt-3 font-heading text-6xl leading-[0.88] tracking-[0.03em] text-[#E5E5E5]">
                    Built For
                    <br />
                    Serious Brands
                  </p>
                  <p className="mt-3 text-sm leading-8 text-zinc-200">
                    Strategy, sampling, and production in one controlled workflow.
                  </p>
                </article>

                <div className="grid gap-3 sm:grid-cols-2">
                  <article className="rounded-2xl border border-white/15 bg-black/25 p-4 backdrop-blur-sm">
                    <p className="text-[10px] tracking-[0.18em] text-zinc-300 uppercase">Avg Lead Time</p>
                    <p className="mt-2 font-heading text-5xl leading-none text-[#E5E5E5]">48h</p>
                  </article>
                  <article className="rounded-2xl border border-white/15 bg-black/25 p-4 backdrop-blur-sm">
                    <p className="text-[10px] tracking-[0.18em] text-zinc-300 uppercase">Client Rating</p>
                    <p className="mt-2 font-heading text-5xl leading-none text-[#E5E5E5]">97%</p>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-full border border-white/15 bg-[#1C1C1C]">
            <div className="fusion-ticker flex gap-7 py-3 text-[10px] font-semibold tracking-[0.22em] text-zinc-300 uppercase sm:text-xs">
              {Array.from({ length: 2 }).flatMap((_, loop) =>
                tickerItems.map((item) => (
                  <span key={`${loop}-${item}`} className="inline-flex items-center gap-7">
                    <span>{item}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  </span>
                )),
              )}
            </div>
          </div>
        </Container>
      </section>

      <section data-reveal>
        <Container className="space-y-5 rounded-[2rem] border border-white/15 bg-[#1C1C1C] p-7 sm:p-9">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-6xl leading-[0.86] tracking-[0.04em] text-[#E5E5E5] uppercase">
              New Collection
            </h2>
            <Link
              href="/shop"
              className="rounded-full border border-[#E5E5E5] bg-[#E5E5E5] px-6 py-2 text-[11px] font-semibold tracking-[0.18em] text-[#1C1C1C] uppercase"
            >
              Shop
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {featuredProducts.slice(0, 4).map((product) => (
              <Link
                key={`new-${product.id}`}
                href={`/product/${product.id}`}
                className="group rounded-2xl border border-white/15 bg-[#E5E5E5] p-3"
              >
                <div className="relative h-28 overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] text-[#1C1C1C] uppercase">
                  {product.name}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section data-reveal>
        <Container className="space-y-6 rounded-[2rem] border border-white/15 bg-[#1C1C1C] p-7 sm:p-9">
          <h2 className="max-w-5xl font-heading text-6xl leading-[0.84] tracking-[0.03em] text-[#E5E5E5] uppercase sm:text-7xl">
            Direction Of Brand Development Through Modernity, Dynamics, Innovation And Precision
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            {portfolioItems.slice(0, 3).map((item) => (
              <div key={`direction-${item.id}`} className="relative h-36 overflow-hidden rounded-2xl border border-white/15">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section data-reveal>
        <Container className="space-y-9">
          <SectionHeading
            kicker="Performance"
            title="Numbers Backing Every Drop"
            description="Operational metrics that keep your launches predictable, fast, and quality-controlled."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-3xl border border-white/15 bg-[#1C1C1C] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/45 hover:shadow-[0_14px_40px_rgba(229,229,229,0.16)]"
              >
                <p className="font-heading text-7xl leading-none text-[#E5E5E5]">{stat.value}</p>
                <p className="mt-3 text-lg font-semibold text-zinc-100">{stat.label}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{stat.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section data-reveal>
        <Container className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#E5E5E5] p-7 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Collection Floor</p>
              <h2 className="font-heading text-6xl leading-[0.9] tracking-[0.05em] text-[#1C1C1C] sm:text-7xl">
                Clean Catalog.
                <br />
                Direct Shopping.
              </h2>
              <p className="max-w-xl text-sm leading-8 text-zinc-600">
                A minimal product grid inspired by modern catalog layouts for faster browsing and
                clearer choices.
              </p>
            </div>
            <Link
              href="/shop"
              className="rounded-full border border-zinc-900 bg-zinc-900 px-7 py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-zinc-800"
            >
              Enter Catalog
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group rounded-[1.4rem] border border-black/12 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(7,8,11,0.12)]"
              >
                <div className="relative h-44 overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
                <div className="mt-4 space-y-2 text-left">
                  <span className="inline-flex rounded-full border border-zinc-300 px-2.5 py-1 text-[10px] tracking-[0.15em] text-zinc-700 uppercase">
                    {product.badge ?? product.visual.label}
                  </span>
                  <h3 className="font-heading text-4xl leading-none tracking-[0.04em] text-[#1C1C1C]">
                    {product.name}
                  </h3>
                  <p className="text-xs leading-6 text-zinc-500">{product.tagline}</p>
                  <p className="pt-1 text-sm font-semibold text-zinc-900">
                    {formatCurrency(product.price, "en")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section data-reveal>
        <Container className="space-y-9">
          <SectionHeading
            kicker="Shop"
            title="Featured Products"
            description="Premium-ready pieces designed for drops, uniforms, and performance-focused collections."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section data-reveal>
        <Container className="space-y-9">
          <SectionHeading
            kicker="Print Services"
            title="Production That Delivers Results"
            description="Pick the service by outcome: sharper visuals, stronger identity, or scalable bulk production."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {printServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex rounded-full border border-[#1C1C1C] bg-[#1C1C1C] px-6 py-3 text-xs font-semibold tracking-[0.2em] text-[#E5E5E5] uppercase transition hover:bg-[#1C1C1C]"
          >
            Explore All Services
          </Link>
        </Container>
      </section>

      <section data-reveal>
        <Container className="space-y-9">
          <SectionHeading
            kicker="Why Fusion"
            title="A Cleaner Path To Better Merch"
            description="Editorial look, measurable operations, and a brand-first mindset built for serious growth."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {whyFusionPoints.map((point, index) => (
              <article
                key={point.titleEn}
                className="rounded-3xl border border-white/12 bg-[#1C1C1C] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/45 hover:shadow-[0_14px_40px_rgba(229,229,229,0.16)]"
              >
                <div className="flex items-center gap-3">
                  <WhyIcon index={index} />
                  <h3 className="font-heading text-[2.35rem] leading-none text-[#E5E5E5]">{point.titleEn}</h3>
                </div>
                <p className="mt-4 text-sm leading-8 text-zinc-200">{point.descriptionEn}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-6">
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">Trusted By</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.14em] text-zinc-200 uppercase">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-6">
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">Client Voice</p>
              <blockquote className="mt-4 space-y-2">
                <p className="text-sm leading-8 text-zinc-200">
                  &ldquo;{testimonials[0]?.quote}&rdquo;
                </p>
                <footer className="text-xs tracking-[0.14em] text-zinc-400 uppercase">
                  {testimonials[0]?.author}
                </footer>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      <section data-reveal>
        <Container className="space-y-9">
          <SectionHeading
            kicker="Portfolio"
            title="Real Projects. Real Brands."
            description="Lookbook-inspired previews showing real outputs for launches, uniforms, and event productions."
          />
          <div className="grid auto-rows-[260px] gap-5 md:grid-cols-3">
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
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold tracking-[0.2em] text-zinc-100 uppercase transition hover:bg-white/15"
          >
            View Full Portfolio
          </Link>
        </Container>
      </section>

      <section data-reveal>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#1C1C1C] p-9 sm:p-11">
            <div
              className="absolute -right-20 -top-16 h-56 w-56 rounded-full blur-3xl"
              style={{ background: "var(--accent)", opacity: 0.22 }}
            />
            <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Final Call</p>
            <h2 className="mt-4 font-heading text-7xl leading-[0.88] tracking-[0.04em] text-[#E5E5E5]">
              Let&apos;s Build
              <br />
              Your Next Bestseller.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#E5E5E5]">
              Send your brief and we will map out specs, sample flow, and timeline before production
              starts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/custom-order"
                className="rounded-full border border-[#E5E5E5] bg-[#E5E5E5] px-9 py-4 text-xs font-semibold tracking-[0.2em] text-[#1C1C1C] uppercase shadow-[0_0_30px_rgba(229,229,229,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5E5E5] hover:shadow-[0_0_40px_rgba(229,229,229,0.38)]"
              >
                Start Your Order
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold tracking-[0.14em] text-[#E5E5E5] uppercase transition hover:text-[#E5E5E5]"
              >
                Talk To Team
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}


