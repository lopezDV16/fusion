const formatter = new Intl.NumberFormat("ar-SA", {
  style: "currency",
  currency: "SAR",
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number) {
  return formatter.format(value);
}
