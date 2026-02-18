import type { ElementType, ReactNode } from "react";

type LocaleTextProps<T extends ElementType = "span"> = {
  as?: T;
  ar: ReactNode;
  en: ReactNode;
  className?: string;
};

export function LocaleText<T extends ElementType = "span">({
  as,
  ar: _ar,
  en,
  className,
}: LocaleTextProps<T>) {
  const Tag = (as ?? "span") as ElementType;
  void _ar;

  return <Tag className={className}>{en}</Tag>;
}
