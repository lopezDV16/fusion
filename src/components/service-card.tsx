import { type PrintService } from "@/lib/catalog";
import Image from "next/image";
import { LocaleText } from "@/components/locale-text";

type ServiceCardProps = {
  service: PrintService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const visualStyle = {
    background: `linear-gradient(140deg, ${service.visual.base}, #0a0b0f 72%)`,
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f1218]">
      <div className="relative h-44 border-b border-white/10 p-5" style={visualStyle}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080bcc] to-[#07080b33]" />
        <span className="relative z-10 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] tracking-[0.2em] text-zinc-100 uppercase">
          {service.visual.label}
        </span>
        <div
          className="absolute -right-10 top-2 h-28 w-28 rounded-full blur-3xl"
          style={{ background: service.visual.accent }}
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="font-heading text-3xl leading-none tracking-wide text-white">
            <LocaleText ar={service.titleAr} en={service.title} />
          </h3>
          <LocaleText as="p" className="text-sm leading-7 text-zinc-300" ar={service.summary} en={service.summaryEn} />
        </div>

        <div className="grid gap-2 text-sm text-zinc-300">
          {service.points.map((point, index) => (
            <p key={point} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <LocaleText ar={point} en={service.pointsEn[index] ?? point} />
            </p>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="rounded-full border border-white/15 px-3 py-1 text-zinc-300">
            <LocaleText ar={service.turnaround} en={service.turnaroundEn} />
          </span>
          <span className="font-semibold text-zinc-100">
            <LocaleText ar={service.startingPrice} en={service.startingPriceEn} />
          </span>
        </div>
      </div>
    </article>
  );
}
