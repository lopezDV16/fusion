import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProductCard } from "@/components/product-card";
import { products, productCategoryLabelsEn, productColorLabelsEn } from "@/lib/catalog";
import { formatCurrency } from "@/lib/format";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.descriptionEn,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  const visualStyle = {
    background: `radial-gradient(circle at 22% 18%, ${product.visual.highlight}, transparent 52%),
      linear-gradient(140deg, ${product.visual.base}, #1C1C1C 72%)`,
  };

  return (
    <div className="space-y-12 pb-16 pt-10">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <section className="space-y-4">
            <div
              className="relative h-[430px] overflow-hidden rounded-3xl border border-white/10 p-6"
              style={visualStyle}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1Ce0] to-[#1C1C1C40]" />
              <span className="relative z-10 inline-flex rounded-full border border-white/20 bg-black/30 px-4 py-1 text-[11px] tracking-[0.18em] text-zinc-100 uppercase">
                {product.visual.label}
              </span>
              <div
                className="absolute -right-12 bottom-0 h-40 w-40 rounded-full blur-3xl"
                style={{ background: "var(--accent)", opacity: 0.72 }}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[0, 1, 2].map((previewIndex) => (
                <div
                  key={previewIndex}
                  className="relative h-28 overflow-hidden rounded-2xl border border-white/10"
                  style={visualStyle}
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} preview ${previewIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1Cbb] to-transparent" />
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-[#1C1C1C] p-6">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">Product</p>
              <h1 className="font-heading text-5xl leading-none tracking-[0.06em] text-[#E5E5E5]">
                {product.name}
              </h1>
              <p className="text-sm leading-8 text-zinc-200">{product.tagline}</p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/15 px-3 py-1 text-zinc-200">
                {productCategoryLabelsEn[product.category]}
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-zinc-200">
                {productColorLabelsEn[product.color]}
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-zinc-200">
                {product.fabric}
              </span>
            </div>

            <p className="text-sm leading-8 text-zinc-200">{product.descriptionEn}</p>

            <div>
              <p className="mb-2 text-xs tracking-[0.18em] text-zinc-400 uppercase">Sizes</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-200 transition hover:bg-white/10"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <p className="font-heading text-4xl leading-none text-[#E5E5E5]">
                {formatCurrency(product.price, "en")}
              </p>
              <button
                type="button"
                className="rounded-full border border-[#1C1C1C] bg-[#1C1C1C] px-6 py-3 text-xs font-semibold tracking-[0.2em] text-[#E5E5E5] uppercase transition hover:bg-[#1C1C1C]"
              >
                Add to Cart
              </button>
            </div>

            <Link
              href="/custom-order"
              className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.18em] text-zinc-100 uppercase transition hover:bg-white/12"
            >
              Request a Custom Version
            </Link>
          </section>
        </div>
      </Container>

      <Container className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-4xl tracking-[0.08em] text-[#E5E5E5]">Related Products</h2>
          <Link
            href="/shop"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-100 uppercase transition hover:bg-white/12"
          >
            Back to Shop
          </Link>
        </div>

        {relatedProducts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-8 text-center text-zinc-300">
            No related products are available in this category yet.
          </div>
        )}
      </Container>
    </div>
  );
}


