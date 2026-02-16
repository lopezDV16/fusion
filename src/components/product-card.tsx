import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/format";
import {
  type Product,
  productCategoryLabels,
  productColorLabels,
} from "@/lib/catalog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const visualStyle = {
    background: `linear-gradient(140deg, ${product.visual.base}, #090b0f 72%)`,
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f1218]">
      <div className="relative h-56 border-b border-white/10 p-5" style={visualStyle}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080bcc] to-[#07080b1a]" />
        <span className="relative z-10 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] tracking-[0.18em] text-zinc-100 uppercase">
          {product.visual.label}
        </span>
        <div
          className="absolute -left-10 bottom-5 h-28 w-28 rounded-full blur-3xl"
          style={{ background: product.visual.accent }}
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="font-heading text-3xl leading-none tracking-wide text-white">
            {product.name}
          </h3>
          <p className="text-sm text-zinc-300">{product.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-white/15 px-3 py-1 text-zinc-300">
            {productCategoryLabels[product.category]}
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-zinc-300">
            {productColorLabels[product.color]}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-heading text-3xl leading-none text-white">{formatCurrency(product.price)}</p>
          <Link
            href={`/product/${product.id}`}
            className="rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/12 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-[#ff6a00]/30"
          >
            عرض المنتج
          </Link>
        </div>
      </div>
    </article>
  );
}
