import Image from "next/image";
import { type PortfolioItem } from "@/lib/catalog";

type PortfolioCardProps = {
  item: PortfolioItem;
  className?: string;
};

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  const visualStyle = {
    background: `linear-gradient(145deg, ${item.visual.base}, #1C1C1C 74%)`,
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.8rem] border border-white/12 p-5 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-[var(--accent)]/45 hover:shadow-[0_18px_54px_rgba(229,229,229,0.22)] ${className ?? ""}`}
      style={visualStyle}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover brightness-115 contrast-105 transition duration-500 group-hover:scale-[1.09]"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1Ccc] via-[#1C1C1C3d] to-[#1C1C1C10]" />

      <span className="relative z-10 inline-flex rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] tracking-[0.2em] text-zinc-100 uppercase">
        {item.visual.label}
      </span>

      <div className="relative z-10 mt-20 space-y-2">
        <p className="text-[11px] tracking-[0.18em] text-zinc-200 uppercase">{item.category}</p>
        <h3 className="font-heading text-4xl leading-none tracking-[0.04em] text-[#E5E5E5]">
          {item.title}
        </h3>
        <p className="text-sm text-zinc-100">{item.client}</p>
      </div>

      <div
        className="absolute -left-9 bottom-0 h-32 w-32 rounded-full blur-3xl transition duration-500 group-hover:opacity-90"
        style={{ background: "var(--accent)", opacity: 0.66 }}
      />
    </article>
  );
}

