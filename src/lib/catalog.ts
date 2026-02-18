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
  image: string;
  name: string;
  badge?: "NEW" | "BESTSELLER" | "LIMITED";
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionEn: string;
  category: ProductCategory;
  color: ProductColor;
  price: number;
  sizes: string[];
  fabric: string;
  fabricAr: string;
  featured?: boolean;
  visual: VisualTone;
};

export type PrintService = {
  id: string;
  image: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryEn: string;
  startingPrice: string;
  startingPriceEn: string;
  turnaround: string;
  turnaroundEn: string;
  points: string[];
  pointsEn: string[];
  visual: VisualTone;
};

export type PortfolioItem = {
  id: string;
  image: string;
  title: string;
  titleAr: string;
  client: string;
  clientAr: string;
  category: string;
  categoryAr: string;
  visual: VisualTone;
};

export const productCategoryLabels: Record<ProductCategory, string> = {
  hoodie: "هوديز",
  tshirt: "تيشيرت",
  cap: "كاب",
  uniform: "يونيفورم",
};

export const productCategoryLabelsEn: Record<ProductCategory, string> = {
  hoodie: "Hoodie",
  tshirt: "T-Shirt",
  cap: "Cap",
  uniform: "Uniform",
};

export const productColorLabels: Record<ProductColor, string> = {
  black: "أسود",
  white: "أبيض",
  olive: "زيتي",
  orange: "برتقالي",
};

export const productColorLabelsEn: Record<ProductColor, string> = {
  black: "Black",
  white: "White",
  olive: "Olive",
  orange: "Orange",
};

export const products: Product[] = [
  {
    id: "urban-shadow-hoodie",
    image: "/images/products/urban-shadow-hoodie.svg",
    name: "Urban Shadow Hoodie",
    badge: "BESTSELLER",
    tagline: "Heavyweight street cut",
    taglineAr: "قصة ستريت وير ثقيلة",
    description:
      "هوديز بوزن ثقيل وخياطة نظيفة مناسب للبراندات والتصاميم الجريئة.",
    descriptionEn:
      "A heavyweight hoodie with clean stitching, ideal for brands and bold graphics.",
    category: "hoodie",
    color: "black",
    price: 229,
    sizes: ["S", "M", "L", "XL", "2XL"],
    fabric: "100% Cotton Fleece 420 GSM",
    fabricAr: "قطن فليس 100% بكثافة 420 GSM",
    featured: true,
    visual: {
      base: "#131313",
      highlight: "#333333",
      accent: "#8f8f8f",
      label: "Shadow",
    },
  },
  {
    id: "mono-strike-tee",
    image: "/images/products/mono-strike-tee.svg",
    name: "Mono Strike Tee",
    badge: "NEW",
    tagline: "Minimal fit, premium feel",
    taglineAr: "قصة بسيطة وإحساس فاخر",
    description:
      "تيشيرت بقصة مستقيمة وطباعة عالية التحمّل للاستخدام اليومي أو إطلاقات البراند.",
    descriptionEn:
      "A straight-cut tee with durable print quality for daily wear and brand drops.",
    category: "tshirt",
    color: "white",
    price: 119,
    sizes: ["S", "M", "L", "XL"],
    fabric: "Combed Cotton 240 GSM",
    fabricAr: "قطن ممشط بكثافة 240 GSM",
    featured: true,
    visual: {
      base: "#e5e5e5",
      highlight: "#f8f8f8",
      accent: "#7a7a7a",
      label: "Mono",
    },
  },
  {
    id: "signal-core-tee",
    image: "/images/products/signal-core-tee.svg",
    name: "Signal Core Tee",
    badge: "LIMITED",
    tagline: "Brand-ready drop item",
    taglineAr: "قطعة جاهزة لإطلاق البراند",
    description:
      "قطعة مناسبة للدروب الجديد، متوفرة بألوان محايدة مع طباعة أمامية وخلفية.",
    descriptionEn:
      "A solid option for new drops, available in neutral tones with front and back print.",
    category: "tshirt",
    color: "black",
    price: 129,
    sizes: ["S", "M", "L", "XL", "2XL"],
    fabric: "Cotton Jersey 260 GSM",
    fabricAr: "جيرسي قطني بكثافة 260 GSM",
    featured: true,
    visual: {
      base: "#121212",
      highlight: "#2f2f2f",
      accent: "#959595",
      label: "Signal",
    },
  },
  {
    id: "district-cap",
    image: "/images/products/district-cap.svg",
    name: "District Cap",
    tagline: "Structured front panel",
    taglineAr: "واجهة أمامية ثابتة",
    description:
      "كاب بتطريز أمامي وخامة متينة للاستخدام التجاري أو الحملات التسويقية.",
    descriptionEn:
      "A cap with front embroidery and durable fabric for commercial use and campaigns.",
    category: "cap",
    color: "olive",
    price: 89,
    sizes: ["Free Size"],
    fabric: "Cotton Twill",
    fabricAr: "قطن تويل",
    visual: {
      base: "#161616",
      highlight: "#3a3a3a",
      accent: "#8a8a8a",
      label: "District",
    },
  },
  {
    id: "crew-field-uniform",
    image: "/images/products/crew-field-uniform.svg",
    name: "Crew Field Uniform",
    badge: "BESTSELLER",
    tagline: "Designed for teams",
    taglineAr: "مصمم للفرق",
    description:
      "يونيفورم احترافي للشركات والفرق مع إمكانية طباعة الاسم واللوغو والوظيفة.",
    descriptionEn:
      "A professional uniform for companies and teams with custom name, logo, and role print.",
    category: "uniform",
    color: "black",
    price: 279,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    fabric: "Poly-Cotton Blend 280 GSM",
    fabricAr: "خليط بولي-قطن بكثافة 280 GSM",
    featured: true,
    visual: {
      base: "#131313",
      highlight: "#343434",
      accent: "#9d9d9d",
      label: "Crew",
    },
  },
  {
    id: "impact-orange-hoodie",
    image: "/images/products/impact-orange-hoodie.svg",
    name: "Impact Orange Hoodie",
    tagline: "Accent collection",
    taglineAr: "مجموعة بلكنة قوية",
    description:
      "قطعة بلكنة برتقالية قوية تعكس شخصية جريئة وتناسب حملات السوشال.",
    descriptionEn:
      "A bold accent hoodie that reflects strong character and fits social media campaigns.",
    category: "hoodie",
    color: "orange",
    price: 239,
    sizes: ["M", "L", "XL", "2XL"],
    fabric: "Brushed Fleece 400 GSM",
    fabricAr: "فليس ممشط بكثافة 400 GSM",
    visual: {
      base: "#191919",
      highlight: "#383838",
      accent: "#9b9b9b",
      label: "Impact",
    },
  },
  {
    id: "line-runner-cap",
    image: "/images/products/line-runner-cap.svg",
    name: "Line Runner Cap",
    tagline: "Clean embroidery zone",
    taglineAr: "مساحة تطريز نظيفة",
    description:
      "كاب مناسب للطباعة أو التطريز بشعار واحد، ممتاز للفعاليات السريعة.",
    descriptionEn:
      "A cap ready for single-logo print or embroidery, perfect for fast event runs.",
    category: "cap",
    color: "black",
    price: 79,
    sizes: ["Free Size"],
    fabric: "Structured Cotton",
    fabricAr: "قطن هيكلي",
    visual: {
      base: "#111111",
      highlight: "#323232",
      accent: "#8d8d8d",
      label: "Runner",
    },
  },
  {
    id: "studio-white-uniform",
    image: "/images/products/studio-white-uniform.svg",
    name: "Studio White Uniform",
    tagline: "Corporate-ready uniform",
    taglineAr: "يونيفورم جاهز للشركات",
    description:
      "يونيفورم أنيق للمعارض والمناسبات مع تشطيب عالي وجودة ثابتة للطلبات الكبيرة.",
    descriptionEn:
      "An elegant uniform for exhibitions and events with premium finish and stable bulk quality.",
    category: "uniform",
    color: "white",
    price: 269,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    fabric: "Performance Blend Fabric",
    fabricAr: "قماش أداء بخليط احترافي",
    visual: {
      base: "#e8e8e8",
      highlight: "#f7f7f7",
      accent: "#7f7f7f",
      label: "Studio",
    },
  },
];

export const printServices: PrintService[] = [
  {
    id: "dtf",
    image: "/images/services/dtf.svg",
    title: "Ultra-Sharp Colors",
    titleAr: "طباعة DTF",
    summary:
      "طباعة DTF بدقة ألوان عالية وثبات ممتاز للغسيل اليومي على مختلف أنواع الأقمشة.",
    summaryEn:
      "Get premium detail and high color accuracy that stays crisp and durable after repeated washes.",
    startingPrice: "تبدأ من 18 ر.س / قطعة",
    startingPriceEn: "Starting at SAR 18 / piece",
    turnaround: "24-72 ساعة",
    turnaroundEn: "24-72 hours",
    points: [
      "ألوان قوية + تفاصيل دقيقة",
      "مناسبة للطلبات الصغيرة والمتوسطة",
      "اختبار جودة قبل الإنتاج الكامل",
    ],
    pointsEn: [
      "Sharper details that elevate your brand visuals",
      "Reliable durability for daily wear and bulk orders",
      "Fast production without sacrificing print quality",
    ],
    visual: {
      base: "#131313",
      highlight: "#353535",
      accent: "#8f8f8f",
      label: "DTF",
    },
  },
  {
    id: "custom",
    image: "/images/services/custom.svg",
    title: "Full Brand Build",
    titleAr: "تجهيز براند مخصص",
    summary:
      "خدمة تجهيز قطع خاصة للبراند من اختيار الخامة، الباترن، الطباعة، التغليف، والهوية.",
    summaryEn:
      "Launch a complete apparel identity from materials and fit to printing, packaging, and final presentation.",
    startingPrice: "حسب المشروع",
    startingPriceEn: "Project based",
    turnaround: "5-10 أيام",
    turnaroundEn: "5-10 days",
    points: [
      "إرشاد كامل في رحلة البراند",
      "نماذج قبل الإنتاج النهائي",
      "دعم للهوية والتغليف",
    ],
    pointsEn: [
      "A clear production path from concept to delivery",
      "Pre-production samples to reduce risk",
      "Consistent quality across every batch and size",
    ],
    visual: {
      base: "#161616",
      highlight: "#3a3a3a",
      accent: "#979797",
      label: "Custom",
    },
  },
  {
    id: "bulk",
    image: "/images/services/bulk.svg",
    title: "Scalable Bulk Output",
    titleAr: "إنتاج الكميات الكبيرة",
    summary:
      "طلبات كميات كبيرة للشركات والفرق مع نظام تسعير واضح وضبط جودة مرحلي.",
    summaryEn:
      "Produce large quantities for teams and companies with stable quality, better rates, and predictable timelines.",
    startingPrice: "خصم يصل 18%",
    startingPriceEn: "Discount up to 18%",
    turnaround: "3-7 أيام",
    turnaroundEn: "3-7 days",
    points: [
      "تسعير تنافسي للكميات",
      "متابعة لوجستية حتى التسليم",
      "تقارير جودة لكل دفعة",
    ],
    pointsEn: [
      "Better unit economics at scale",
      "Structured quality checks at each stage",
      "Delivery coordination for operational reliability",
    ],
    visual: {
      base: "#121212",
      highlight: "#323232",
      accent: "#888888",
      label: "Bulk",
    },
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "lookbook-night-shift",
    image: "/images/portfolio/lookbook-night-shift.svg",
    title: "Night Shift Capsule",
    titleAr: "مجموعة Night Shift",
    client: "NTHR Brand",
    clientAr: "براند NTHR",
    category: "Streetwear Launch",
    categoryAr: "إطلاق ستريت وير",
    visual: {
      base: "#121212",
      highlight: "#313131",
      accent: "#8a8a8a",
      label: "Drop 01",
    },
  },
  {
    id: "lookbook-fitness-club",
    image: "/images/portfolio/lookbook-fitness-club.svg",
    title: "Gym Team Uniform Pack",
    titleAr: "باك يونيفورم فريق الجيم",
    client: "Core House",
    clientAr: "Core House",
    category: "Corporate Uniform",
    categoryAr: "يونيفورم شركات",
    visual: {
      base: "#151515",
      highlight: "#373737",
      accent: "#959595",
      label: "Fit Club",
    },
  },
  {
    id: "lookbook-cafe-identity",
    image: "/images/portfolio/lookbook-cafe-identity.svg",
    title: "Cafe Identity Set",
    titleAr: "هوية مقهى متكاملة",
    client: "Roast Theory",
    clientAr: "Roast Theory",
    category: "Hospitality",
    categoryAr: "ضيافة",
    visual: {
      base: "#161616",
      highlight: "#3a3a3a",
      accent: "#8f8f8f",
      label: "Roast",
    },
  },
  {
    id: "lookbook-tech-event",
    image: "/images/portfolio/lookbook-tech-event.svg",
    title: "Tech Event Merch",
    titleAr: "ميرش فعالية تقنية",
    client: "Stack Expo",
    clientAr: "Stack Expo",
    category: "Event Production",
    categoryAr: "إنتاج فعاليات",
    visual: {
      base: "#131313",
      highlight: "#343434",
      accent: "#929292",
      label: "Expo",
    },
  },
  {
    id: "lookbook-retail-team",
    image: "/images/portfolio/lookbook-retail-team.svg",
    title: "Retail Team Essentials",
    titleAr: "أساسيات فريق التجزئة",
    client: "Marketline",
    clientAr: "Marketline",
    category: "Retail Uniform",
    categoryAr: "يونيفورم تجزئة",
    visual: {
      base: "#141414",
      highlight: "#363636",
      accent: "#949494",
      label: "Retail",
    },
  },
  {
    id: "lookbook-campus-club",
    image: "/images/portfolio/lookbook-campus-club.svg",
    title: "Campus Club Drop",
    titleAr: "إطلاق Campus Club",
    client: "U-Club",
    clientAr: "U-Club",
    category: "Student Merch",
    categoryAr: "ميرش طلابي",
    visual: {
      base: "#151515",
      highlight: "#373737",
      accent: "#8e8e8e",
      label: "Campus",
    },
  },
];

export const whyFusionPoints = [
  {
    title: "تنظيم واضح للمسار",
    titleEn: "Clear User Journey",
    description:
      "المستخدم يعرف أين يذهب: متجر، طباعة، أو طلب مخصص بدون تشتيت.",
    descriptionEn:
      "Users immediately know where to go: shop, print service, or custom order with no confusion.",
  },
  {
    title: "جودة إنتاج فعلية",
    titleEn: "Measured Production Quality",
    description:
      "اختبار عينات قبل التنفيذ الكامل مع ضبط جودة على كل دفعة إنتاج.",
    descriptionEn:
      "Samples are validated before full production with quality checks on every batch.",
  },
  {
    title: "سرعة + التزام",
    titleEn: "Speed and Commitment",
    description:
      "جداول تسليم واضحة من بداية الطلب حتى الشحن النهائي بدون مفاجآت.",
    descriptionEn:
      "Clear delivery timelines from order start to final shipment without surprises.",
  },
  {
    title: "براند قبل كل شيء",
    titleEn: "Brand First",
    description:
      "كل جزء من المنصة يخدم صورة Fusion كبراند احترافي وليس متجر عادي.",
    descriptionEn:
      "Every part of the platform strengthens Fusion as a professional brand, not just another store.",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export const trustBadges = [
  "CORE HOUSE",
  "NTHR BRAND",
  "STACK EXPO",
  "ROAST THEORY",
  "MARKETLINE",
];

export const testimonials = [
  {
    quote:
      "Fusion gave us the first merch batch that actually looked premium on camera and in hand.",
    author: "NTHR Brand Team",
  },
  {
    quote:
      "From first sample to final delivery, the process was clear and fast with no quality drop.",
    author: "Core House Operations",
  },
];
