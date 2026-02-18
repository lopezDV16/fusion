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
      <span className="inline-flex w-fit rounded-full border border-[#1C1C1C]/20 bg-[#1C1C1C]/5 px-3 py-1 text-[10px] font-semibold tracking-[0.24em] text-[#1C1C1C]/75 uppercase">
        {kicker}
      </span>
      <h2 className="font-heading text-6xl leading-[0.88] tracking-[0.04em] text-[#1C1C1C] sm:text-7xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-8 text-[#1C1C1C]/80 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
