import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "البورتفوليو",
  description: "معرض أعمال Fusion بأسلوب Lookbook نظيف.",
};

export default function PortfolioPage() {
  return (
    <div className="space-y-10 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#0f141c] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Portfolio</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-white">
            أعمال Fusion
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-8 text-zinc-300">
            Gallery بنمط Lookbook يعرض المشاريع بأفضل صورة. اختيار الصور القوية هنا يرفع
            قيمة البراند بشكل مباشر.
          </p>
        </div>
      </Container>

      <Container className="space-y-6">
        <SectionHeading
          kicker="Lookbook"
          title="مختارات احترافية"
          description="كل مشروع يعكس نوع العميل: براند، شركة، فعالية، أو طلب مخصص."
        />
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const variants = [
              "md:col-span-2",
              "",
              "",
              "",
              "md:col-span-2",
              "",
            ];

            return (
              <PortfolioCard key={item.id} item={item} className={variants[index] ?? ""} />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
