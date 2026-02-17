import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CustomOrderForm } from "@/components/custom-order-form";
import { LocaleText } from "@/components/locale-text";

export const metadata: Metadata = {
  title: "طلب طباعة مخصصة",
  description: "نموذج ذكي لطلبات الطباعة يشمل الكمية والمقاسات ورفع التصميم.",
};

export default function CustomOrderPage() {
  return (
    <div className="space-y-8 pb-16 pt-10">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[#101723] p-8">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">Custom Order</p>
          <h1 className="mt-3 font-heading text-6xl leading-none tracking-[0.08em] text-white">
            <LocaleText ar="طلب طباعة مخصصة" en="Custom Print Request" />
          </h1>
          <LocaleText
            as="p"
            className="mt-3 max-w-3xl text-sm leading-8 text-zinc-300"
            ar="هذه الصفحة هي نقطة التحويل الأهم. املأ التفاصيل وارفع التصميم لتحصل على مراجعة سريعة وعرض سعر واضح من فريق Fusion."
            en="This page is the main conversion point. Fill in your details and upload your design to get a fast review and a clear quote from the Fusion team."
          />
        </div>
      </Container>

      <Container>
        <CustomOrderForm />
      </Container>
    </div>
  );
}
