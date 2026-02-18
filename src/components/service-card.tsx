import Image from "next/image";
import Link from "next/link";
import { type PrintService } from "@/lib/catalog";

type ServiceCardProps = {
  service: PrintService;
};

function ServiceIcon({ id }: { id: string }) {
  if (id === "dtf") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-[var(--accent)]" fill="none" strokeWidth="1.8">
        <path d="M4 18h16M6 14l2-8h8l2 8M9 10h6" />
      </svg>
    );
  }

  if (id === "custom") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-[var(--accent)]" fill="none" strokeWidth="1.8">
        <path d="M5 19l4.5-1 8.9-8.9a1.5 1.5 0 0 0 0-2.1l-1.4-1.4a1.5 1.5 0 0 0-2.1 0L6 14.5 5 19zM13.5 7.5l3 3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-[var(--accent)]" fill="none" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16M7 4v3M12 9v3M17 14v3" />
    </svg>
  );
}

export function ServiceCard({ service }: ServiceCardProps) {
  const visualStyle = {
    background: `linear-gradient(150deg, ${service.visual.base}, #1C1C1C 72%)`,
  };

  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#1C1C1C] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:shadow-[0_18px_54px_rgba(229,229,229,0.2)]">
      <div className="relative h-48 border-b border-white/10 p-5" style={visualStyle}>
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[var(--accent)]/75 to-transparent" />
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover brightness-115 contrast-105 transition duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1Cd4] via-[#1C1C1C4d] to-[#1C1C1C26]" />
        <span className="relative z-10 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] tracking-[0.2em] text-zinc-100 uppercase">
          {service.visual.label}
        </span>
        <span className="absolute right-4 top-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)]/45 bg-black/30">
          <ServiceIcon id={service.id} />
        </span>
        <div
          className="absolute -right-10 top-2 h-28 w-28 rounded-full blur-3xl"
          style={{ background: "var(--accent)", opacity: 0.7 }}
        />
      </div>

      <div className="space-y-4 p-6 sm:p-7">
        <div className="space-y-2">
          <h3 className="font-heading text-5xl leading-[0.88] tracking-[0.04em] text-[#E5E5E5]">
            {service.title}
          </h3>
          <p className="text-sm leading-8 text-zinc-300">{service.summaryEn}</p>
        </div>

        <div className="grid gap-2 text-sm text-zinc-200">
          {service.pointsEn.map((point) => (
            <p
              key={point}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 leading-7"
            >
              {point}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-zinc-200">
            {service.turnaroundEn}
          </span>
          <span className="font-semibold text-zinc-100">{service.startingPriceEn}</span>
        </div>

        <Link
          href="/custom-order"
          className="inline-flex rounded-full border border-[#E5E5E5] bg-[#E5E5E5] px-5 py-3 text-[11px] font-semibold tracking-[0.18em] text-[#1C1C1C] uppercase transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5E5E5]"
        >
          Start Print Order
        </Link>
      </div>
    </article>
  );
}


