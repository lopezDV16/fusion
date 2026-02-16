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

export const productTypeOptions: { value: ProductTypeOption; label: string }[] =
  [
    { value: "tshirt", label: "تيشيرت" },
    { value: "hoodie", label: "هوديز" },
    { value: "uniform", label: "يونيفورم شركات" },
    { value: "cap", label: "كاب" },
  ];

export const printTypeOptions: { value: PrintTypeOption; label: string }[] = [
  { value: "dtf", label: "DTF Printing" },
  { value: "screen", label: "Screen Printing" },
  { value: "embroidery", label: "Embroidery" },
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
