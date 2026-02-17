import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
};

export function SectionHeading({
  kicker,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  const alignment = centered ? "text-center items-center" : "text-start items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-zinc-300 uppercase">
        {kicker}
      </span>
      <h2 className="font-heading text-4xl leading-none tracking-wide text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
