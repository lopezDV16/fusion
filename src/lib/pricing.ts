export type ProductTypeOption = "tshirt" | "hoodie" | "uniform" | "cap";
export type PrintTypeOption = "dtf" | "screen" | "embroidery";

type PricingResult = {
  unitPrice: number;
  setupFee: number;
  discountRate: number;
  subtotal: number;
  total: number;
};

const baseProductPrice: Record<ProductTypeOption, number> = {
  tshirt: 46,
  hoodie: 76,
  uniform: 84,
  cap: 34,
};

const printMethodFee: Record<PrintTypeOption, number> = {
  dtf: 11,
  screen: 14,
  embroidery: 18,
};

export const productTypeOptions: {
  value: ProductTypeOption;
  label: { ar: string; en: string };
}[] = [
  { value: "tshirt", label: { ar: "تيشيرت", en: "T-Shirt" } },
  { value: "hoodie", label: { ar: "هوديز", en: "Hoodie" } },
  { value: "uniform", label: { ar: "يونيفورم شركات", en: "Corporate Uniform" } },
  { value: "cap", label: { ar: "كاب", en: "Cap" } },
];

export const printTypeOptions: {
  value: PrintTypeOption;
  label: { ar: string; en: string };
}[] = [
  { value: "dtf", label: { ar: "طباعة DTF", en: "DTF Printing" } },
  { value: "screen", label: { ar: "طباعة سلك سكرين", en: "Screen Printing" } },
  { value: "embroidery", label: { ar: "تطريز", en: "Embroidery" } },
];

export function calculateEstimatedPrice(
  productType: ProductTypeOption,
  printType: PrintTypeOption,
  quantity: number,
): PricingResult {
  const safeQuantity = Math.max(1, Number.isFinite(quantity) ? quantity : 1);
  const rawUnitPrice = baseProductPrice[productType] + printMethodFee[printType];

  let discountRate = 0;
  if (safeQuantity >= 250) {
    discountRate = 0.18;
  } else if (safeQuantity >= 120) {
    discountRate = 0.12;
  } else if (safeQuantity >= 60) {
    discountRate = 0.06;
  }

  const unitPrice = rawUnitPrice * (1 - discountRate);
  const setupFee = printType === "embroidery" ? 160 : 95;
  const subtotal = unitPrice * safeQuantity;
  const total = subtotal + setupFee;

  return {
    unitPrice,
    setupFee,
    discountRate,
    subtotal,
    total,
  };
}
