import { LocaleText } from "@/components/locale-text";

type BrandLogoSize = "sm" | "md";

type BrandLogoProps = {
  size?: BrandLogoSize;
  withTagline?: boolean;
  className?: string;
};

const sizeStyles: Record<
  BrandLogoSize,
  { icon: string; mark: string; word: string; gap: string; tagline: string }
> = {
  sm: {
    icon: "h-10 w-10",
    mark: "text-[2.5rem]",
    word: "text-[2.4rem]",
    gap: "gap-2.5",
    tagline: "text-[9px] tracking-[0.18em]",
  },
  md: {
    icon: "h-12 w-12",
    mark: "text-[2.9rem]",
    word: "text-[3rem]",
    gap: "gap-3",
    tagline: "text-[10px] tracking-[0.2em]",
  },
};

export function BrandLogo({ size = "md", withTagline = false, className = "" }: BrandLogoProps) {
  const styles = sizeStyles[size];

  return (
    <span className={`inline-flex flex-col ${className}`.trim()}>
      <span dir="ltr" className={`inline-flex items-center ${styles.gap}`}>
        <span
          className={`inline-flex items-center justify-center rounded-full bg-[var(--logo-badge)] text-[var(--logo-mark)] ${styles.icon}`}
        >
          <span className={`font-brand leading-none ${styles.mark}`}>F</span>
        </span>
        <span className={`font-brand leading-none tracking-[0.02em] text-[var(--logo-word)] ${styles.word}`}>
          FUSION
        </span>
      </span>
      {withTagline ? (
        <LocaleText
          as="span"
          className={`mt-1 text-zinc-400 uppercase ${styles.tagline}`}
          ar="براند + متجر + معمل طباعة"
          en="Brand + Store + Print Lab"
        />
      ) : null}
    </span>
  );
}
