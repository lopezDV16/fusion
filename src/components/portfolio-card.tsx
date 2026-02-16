import { type PortfolioItem } from "@/lib/catalog";

type PortfolioCardProps = {
  item: PortfolioItem;
  className?: string;
};

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  const visualStyle = {
    background: `radial-gradient(circle at 22% 18%, ${item.visual.highlight}, transparent 52%),
      linear-gradient(140deg, ${item.visual.base}, #0a0c11 74%)`,
  };

  return (
    <article
      className={`relative overflow-hidden rounded-3xl border border-white/10 p-5 ${className ?? ""}`}
      style={visualStyle}
    >
      <span className="inline-flex rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] tracking-[0.2em] text-zinc-100 uppercase">
        {item.visual.label}
      </span>

      <div className="mt-20 space-y-2">
        <p className="text-xs text-zinc-300 uppercase tracking-[0.18em]">{item.category}</p>
        <h3 className="font-heading text-3xl leading-none tracking-wide text-white">{item.title}</h3>
        <p className="text-sm text-zinc-300">{item.client}</p>
      </div>

      <div
        className="absolute -left-9 bottom-0 h-32 w-32 rounded-full blur-3xl"
        style={{ background: item.visual.accent }}
      />
    </article>
  );
}
