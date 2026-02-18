import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/format";
import { type Product, productCategoryLabelsEn, productColorLabelsEn } from "@/lib/catalog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const visualStyle = {
    background: `linear-gradient(150deg, ${product.visual.base}, #1C1C1C 72%)`,
  };

  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-white/12 bg-[#1C1C1C] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-[var(--accent)]/45 hover:shadow-[0_18px_54px_rgba(229,229,229,0.23)]">
      <div className="relative h-60 border-b border-white/10 p-5" style={visualStyle}>
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[var(--accent)]/80 to-transparent" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover brightness-115 contrast-105 transition duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 1024px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1Cd4] via-[#1C1C1C40] to-[#1C1C1C0f]" />
        <div className="relative z-10 flex items-start justify-between gap-2">
          <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] tracking-[0.18em] text-zinc-100 uppercase">
            {product.visual.label}
          </span>
          {product.badge ? (
            <span className="rounded-full border border-[var(--accent)]/90 bg-[var(--accent)]/35 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-[#1C1C1C] uppercase shadow-[0_0_14px_rgba(229,229,229,0.32)]">
              {product.badge}
            </span>
          ) : null}
        </div>
        <div
          className="absolute -left-10 bottom-5 h-28 w-28 rounded-full blur-3xl transition group-hover:opacity-95"
          style={{ background: "var(--accent)", opacity: 0.68 }}
        />
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <h3 className="font-heading text-[2.1rem] leading-none tracking-[0.04em] text-[#E5E5E5]">
            {product.name}
          </h3>
          <p className="text-sm leading-7 text-zinc-300">{product.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-zinc-200">
            {productCategoryLabelsEn[product.category]}
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-zinc-200">
            {productColorLabelsEn[product.color]}
          </span>
        </div>

        <div className="flex items-end justify-between">
          <p className="font-heading text-5xl leading-none text-[#E5E5E5]">
            {formatCurrency(product.price, "en")}
          </p>
          <Link
            href={`/product/${product.id}`}
            className="rounded-full border border-[#E5E5E5] bg-[#E5E5E5] px-4 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#1C1C1C] uppercase transition hover:bg-[#E5E5E5]"
          >
            View Product
          </Link>
        </div>
      </div>
    </article>
  );
}


