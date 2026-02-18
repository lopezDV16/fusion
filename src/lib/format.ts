const formatters = {
  ar: new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 0,
  }),
  en: new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 0,
  }),
};

export function formatCurrency(value: number, locale: "ar" | "en" = "en") {
  return formatters[locale].format(value);
}
