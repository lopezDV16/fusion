import type { Metadata } from "next";
import { Container } from "@/components/container";
import { LocaleText } from "@/components/locale-text";
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
            <LocaleText ar="أعمال Fusion" en="Fusion Portfolio" />
          </h1>
          <LocaleText
            as="p"
            className="mt-3 max-w-2xl text-sm leading-8 text-zinc-300"
            ar="Gallery بنمط Lookbook يعرض المشاريع بأفضل صورة. اختيار الصور القوية هنا يرفع قيمة البراند بشكل مباشر."
            en="A lookbook-style gallery that presents projects at their best. Strong visual curation here directly elevates brand value."
          />
        </div>
      </Container>

      <Container className="space-y-6">
        <SectionHeading
          kicker={<LocaleText ar="اللوكبوك" en="Lookbook" />}
          title={<LocaleText ar="مختارات احترافية" en="Curated Selections" />}
          description={
            <LocaleText
              ar="كل مشروع يعكس نوع العميل: براند، شركة، فعالية، أو طلب مخصص."
              en="Each project reflects a client profile: brand, company, event, or custom request."
            />
          }
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
