import type { ElementType, ReactNode } from "react";

type LocaleTextProps<T extends ElementType = "span"> = {
  as?: T;
  ar: ReactNode;
  en: ReactNode;
  className?: string;
};

export function LocaleText<T extends ElementType = "span">({
  as,
  ar,
  en,
  className,
}: LocaleTextProps<T>) {
  const Tag = (as ?? "span") as ElementType;

  return (
    <Tag className={className}>
      <span className="locale-ar">{ar}</span>
      <span className="locale-en">{en}</span>
    </Tag>
  );
}
