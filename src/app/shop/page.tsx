import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ProductCard } from "@/components/product-card";
import {
  products,
  productCategoryLabels,
  productColorLabels,
  type ProductCategory,
  type ProductColor,
} from "@/lib/catalog";

type ShopPageProps = {
  searchParams: Promise<{
    type?: string | string[];
    color?: string | string[];
    price?: string | string[];
  }>;
};

const categoryOrder: ProductCategory[] = ["tshirt", "hoodie", "cap", "uniform"];
const colorOrder: ProductColor[] = ["black", "white", "olive", "orange"];

export const metadata: Metadata = {
  title: "المتجر",
  description: "منتجات Fusion مع فلاتر النوع واللون والسعر.",
};

function readSingleParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

function matchesPrice(price: number, selectedPrice: string) {
  if (selectedPrice === "under-120") return price < 120;
  if (selectedPrice === "120-220") return price >= 120 && price <= 220;
  if (selectedPrice === "over-220") return price > 220;
  return true;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;

  const selectedType = readSingleParam(params.type) ?? "all";
  const selectedColor = readSingleParam(params.color) ?? "all";
  const selectedPrice = readSingleParam(params.price) ?? "all";

  const filteredProducts = products.filter((product) => {
    const typeMatch = selectedType === "all" || product.category === selectedType;
    const colorMatch = selectedColor === "all" || product.color === selectedColor;
    const priceMatch = matchesPrice(product.price, selectedPrice);
    return typeMatch && colorMatch && priceMatch;
  });

  return (
    <div className="space-y-8 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#0f131b] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Shop</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-white">
            متجر Fusion
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">
            Grid نظيف، فلاتر واضحة، وصف مختصر لكل منتج، وزر شراء ظاهر بدون تعقيد.
          </p>
        </div>
      </Container>

      <Container className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-3xl border border-white/10 bg-[#0f1218] p-5">
          <form className="space-y-5" method="GET">
            <div className="space-y-2">
              <label htmlFor="type" className="text-xs tracking-[0.16em] text-zinc-400 uppercase">
                النوع
              </label>
              <select
                id="type"
                name="type"
                defaultValue={selectedType}
                className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff6a00]/70"
              >
                <option value="all">كل الأنواع</option>
                {categoryOrder.map((category) => (
                  <option key={category} value={category}>
                    {productCategoryLabels[category]}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="color"
                className="text-xs tracking-[0.16em] text-zinc-400 uppercase"
              >
                اللون
              </label>
              <select
                id="color"
                name="color"
                defaultValue={selectedColor}
                className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff6a00]/70"
              >
                <option value="all">كل الألوان</option>
                {colorOrder.map((color) => (
                  <option key={color} value={color}>
                    {productColorLabels[color]}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="price"
                className="text-xs tracking-[0.16em] text-zinc-400 uppercase"
              >
                السعر
              </label>
              <select
                id="price"
                name="price"
                defaultValue={selectedPrice}
                className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff6a00]/70"
              >
                <option value="all">كل الأسعار</option>
                <option value="under-120">أقل من 120</option>
                <option value="120-220">120 - 220</option>
                <option value="over-220">أكثر من 220</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/15 px-5 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-[#ff6a00]/30"
            >
              تطبيق الفلاتر
            </button>
          </form>
        </aside>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0f1218] px-4 py-3">
            <p className="text-sm text-zinc-300">
              النتائج الحالية: <strong className="text-white">{filteredProducts.length}</strong>
            </p>
            <Link
              href="/shop"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-100 uppercase transition hover:bg-white/12"
            >
              إعادة التصفية
            </Link>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#0f1218] p-8 text-center text-zinc-300">
              لا توجد منتجات مطابقة للفلاتر الحالية.
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}
