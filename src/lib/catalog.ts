export type ProductCategory = "hoodie" | "tshirt" | "cap" | "uniform";
export type ProductColor = "black" | "white" | "olive" | "orange";

export type VisualTone = {
  base: string;
  highlight: string;
  accent: string;
  label: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  color: ProductColor;
  price: number;
  sizes: string[];
  fabric: string;
  featured?: boolean;
  visual: VisualTone;
};

export type PrintService = {
  id: string;
  title: string;
  summary: string;
  startingPrice: string;
  turnaround: string;
  points: string[];
  visual: VisualTone;
};

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: string;
  visual: VisualTone;
};

export const productCategoryLabels: Record<ProductCategory, string> = {
  hoodie: "هوديز",
  tshirt: "تيشيرت",
  cap: "كاب",
  uniform: "يونيفورم",
};

export const productColorLabels: Record<ProductColor, string> = {
  black: "أسود",
  white: "أبيض",
  olive: "زيتي",
  orange: "برتقالي",
};

export const products: Product[] = [
  {
    id: "urban-shadow-hoodie",
    name: "Urban Shadow Hoodie",
    tagline: "Heavyweight street cut",
    description:
      "هوديز بوزن ثقيل وخياطة نظيفة مناسب للبراندات والتصاميم الجريئة.",
    category: "hoodie",
    color: "black",
    price: 229,
    sizes: ["S", "M", "L", "XL", "2XL"],
    fabric: "100% Cotton Fleece 420 GSM",
    featured: true,
    visual: {
      base: "#14161c",
      highlight: "#3a3f49",
      accent: "#ff6a00",
      label: "Shadow",
    },
  },
  {
    id: "mono-strike-tee",
    name: "Mono Strike Tee",
    tagline: "Minimal fit, premium feel",
    description:
      "تيشيرت بقصة مستقيمة وطباعة عالية التحمّل للاستخدام اليومي أو إطلاقات البراند.",
    category: "tshirt",
    color: "white",
    price: 119,
    sizes: ["S", "M", "L", "XL"],
    fabric: "Combed Cotton 240 GSM",
    featured: true,
    visual: {
      base: "#ececec",
      highlight: "#ffffff",
      accent: "#20242e",
      label: "Mono",
    },
  },
  {
    id: "signal-core-tee",
    name: "Signal Core Tee",
    tagline: "Brand-ready drop item",
    description:
      "قطعة مناسبة للدروب الجديد، متوفرة بألوان محايدة مع طباعة أمامية وخلفية.",
    category: "tshirt",
    color: "black",
    price: 129,
    sizes: ["S", "M", "L", "XL", "2XL"],
    fabric: "Cotton Jersey 260 GSM",
    featured: true,
    visual: {
      base: "#0f1118",
      highlight: "#2f3642",
      accent: "#52ff8f",
      label: "Signal",
    },
  },
  {
    id: "district-cap",
    name: "District Cap",
    tagline: "Structured front panel",
    description:
      "كاب بتطريز أمامي وخامة متينة للاستخدام التجاري أو الحملات التسويقية.",
    category: "cap",
    color: "olive",
    price: 89,
    sizes: ["Free Size"],
    fabric: "Cotton Twill",
    visual: {
      base: "#1b2119",
      highlight: "#3b4c36",
      accent: "#ff9b32",
      label: "District",
    },
  },
  {
    id: "crew-field-uniform",
    name: "Crew Field Uniform",
    tagline: "Designed for teams",
    description:
      "يونيفورم احترافي للشركات والفرق مع إمكانية طباعة الاسم واللوغو والوظيفة.",
    category: "uniform",
    color: "black",
    price: 279,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    fabric: "Poly-Cotton Blend 280 GSM",
    featured: true,
    visual: {
      base: "#111317",
      highlight: "#363c49",
      accent: "#8be8ff",
      label: "Crew",
    },
  },
  {
    id: "impact-orange-hoodie",
    name: "Impact Orange Hoodie",
    tagline: "Accent collection",
    description:
      "قطعة بلكنة برتقالية قوية تعكس شخصية جريئة وتناسب حملات السوشال.",
    category: "hoodie",
    color: "orange",
    price: 239,
    sizes: ["M", "L", "XL", "2XL"],
    fabric: "Brushed Fleece 400 GSM",
    visual: {
      base: "#24160d",
      highlight: "#65381f",
      accent: "#ff6a00",
      label: "Impact",
    },
  },
  {
    id: "line-runner-cap",
    name: "Line Runner Cap",
    tagline: "Clean embroidery zone",
    description:
      "كاب مناسب للطباعة أو التطريز بشعار واحد، ممتاز للفعاليات السريعة.",
    category: "cap",
    color: "black",
    price: 79,
    sizes: ["Free Size"],
    fabric: "Structured Cotton",
    visual: {
      base: "#121419",
      highlight: "#343b46",
      accent: "#62a7ff",
      label: "Runner",
    },
  },
  {
    id: "studio-white-uniform",
    name: "Studio White Uniform",
    tagline: "Corporate-ready uniform",
    description:
      "يونيفورم أنيق للمعارض والمناسبات مع تشطيب عالي وجودة ثابتة للطلبات الكبيرة.",
    category: "uniform",
    color: "white",
    price: 269,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    fabric: "Performance Blend Fabric",
    visual: {
      base: "#d8dde4",
      highlight: "#ffffff",
      accent: "#2a2f38",
      label: "Studio",
    },
  },
];

export const printServices: PrintService[] = [
  {
    id: "dtf",
    title: "DTF Printing",
    summary:
      "طباعة DTF بدقة ألوان عالية وثبات ممتاز للغسيل اليومي على مختلف أنواع الأقمشة.",
    startingPrice: "تبدأ من 18 ر.س / قطعة",
    turnaround: "24-72 ساعة",
    points: [
      "ألوان قوية + تفاصيل دقيقة",
      "مناسبة للطلبات الصغيرة والمتوسطة",
      "اختبار جودة قبل الإنتاج الكامل",
    ],
    visual: {
      base: "#11151f",
      highlight: "#2a3344",
      accent: "#ff6a00",
      label: "DTF",
    },
  },
  {
    id: "custom",
    title: "Custom Branding",
    summary:
      "خدمة تجهيز قطع خاصة للبراند من اختيار الخامة، الباترن، الطباعة، التغليف، والهوية.",
    startingPrice: "حسب المشروع",
    turnaround: "5-10 أيام",
    points: [
      "إرشاد كامل في رحلة البراند",
      "نماذج قبل الإنتاج النهائي",
      "دعم للهوية والتغليف",
    ],
    visual: {
      base: "#171312",
      highlight: "#47342d",
      accent: "#52ff8f",
      label: "Custom",
    },
  },
  {
    id: "bulk",
    title: "Bulk Production",
    summary:
      "طلبات كميات كبيرة للشركات والفرق مع نظام تسعير واضح وضبط جودة مرحلي.",
    startingPrice: "خصم يصل 18%",
    turnaround: "3-7 أيام",
    points: [
      "تسعير تنافسي للكميات",
      "متابعة لوجستية حتى التسليم",
      "تقارير جودة لكل دفعة",
    ],
    visual: {
      base: "#101716",
      highlight: "#2f4f4a",
      accent: "#79d9ff",
      label: "Bulk",
    },
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "lookbook-night-shift",
    title: "Night Shift Capsule",
    client: "NTHR Brand",
    category: "Streetwear Launch",
    visual: {
      base: "#10121a",
      highlight: "#2d3448",
      accent: "#ff6a00",
      label: "Drop 01",
    },
  },
  {
    id: "lookbook-fitness-club",
    title: "Gym Team Uniform Pack",
    client: "Core House",
    category: "Corporate Uniform",
    visual: {
      base: "#1a1b20",
      highlight: "#414551",
      accent: "#8be8ff",
      label: "Fit Club",
    },
  },
  {
    id: "lookbook-cafe-identity",
    title: "Cafe Identity Set",
    client: "Roast Theory",
    category: "Hospitality",
    visual: {
      base: "#1f1714",
      highlight: "#5c4036",
      accent: "#ff9b32",
      label: "Roast",
    },
  },
  {
    id: "lookbook-tech-event",
    title: "Tech Event Merch",
    client: "Stack Expo",
    category: "Event Production",
    visual: {
      base: "#0f171f",
      highlight: "#2f465a",
      accent: "#62a7ff",
      label: "Expo",
    },
  },
  {
    id: "lookbook-retail-team",
    title: "Retail Team Essentials",
    client: "Marketline",
    category: "Retail Uniform",
    visual: {
      base: "#17181d",
      highlight: "#3d404a",
      accent: "#d9ff6e",
      label: "Retail",
    },
  },
  {
    id: "lookbook-campus-club",
    title: "Campus Club Drop",
    client: "U-Club",
    category: "Student Merch",
    visual: {
      base: "#18131c",
      highlight: "#493758",
      accent: "#52ff8f",
      label: "Campus",
    },
  },
];

export const whyFusionPoints = [
  {
    title: "تنظيم واضح للمسار",
    description:
      "المستخدم يعرف أين يذهب: متجر، طباعة، أو طلب مخصص بدون تشتيت.",
  },
  {
    title: "جودة إنتاج فعلية",
    description:
      "اختبار عينات قبل التنفيذ الكامل مع ضبط جودة على كل دفعة إنتاج.",
  },
  {
    title: "سرعة + التزام",
    description:
      "جداول تسليم واضحة من بداية الطلب حتى الشحن النهائي بدون مفاجآت.",
  },
  {
    title: "براند قبل كل شيء",
    description:
      "كل جزء من المنصة يخدم صورة Fusion كبراند احترافي وليس متجر عادي.",
  },
];

export const featuredProducts = products.filter((product) => product.featured);
