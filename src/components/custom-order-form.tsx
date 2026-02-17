"use client";

import { type FormEvent, useMemo, useState } from "react";
import { LocaleText } from "@/components/locale-text";
import { formatCurrency } from "@/lib/format";
import { useSiteLocale } from "@/lib/use-site-locale";
import {
  calculateEstimatedPrice,
  printTypeOptions,
  productTypeOptions,
  type PrintTypeOption,
  type ProductTypeOption,
} from "@/lib/pricing";

const sizeOptions = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

export function CustomOrderForm() {
  const locale = useSiteLocale();
  const [productType, setProductType] = useState<ProductTypeOption>("tshirt");
  const [printType, setPrintType] = useState<PrintTypeOption>("dtf");
  const [quantity, setQuantity] = useState(60);
  const [sizes, setSizes] = useState<string[]>(["M", "L", "XL"]);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const pricing = useMemo(
    () => calculateEstimatedPrice(productType, printType, quantity),
    [printType, productType, quantity],
  );

  const selectedProductLabel =
    productTypeOptions.find((option) => option.value === productType)?.label[locale] ?? "";
  const selectedPrintLabel =
    printTypeOptions.find((option) => option.value === printType)?.label[locale] ?? "";

  function toggleSize(size: string) {
    setSizes((currentSizes) =>
      currentSizes.includes(size)
        ? currentSizes.filter((currentSize) => currentSize !== size)
        : [...currentSizes, size],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="space-y-6 rounded-3xl border border-white/10 bg-[#0f1218] p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="block text-sm text-zinc-300">
              <LocaleText ar="الاسم الكامل" en="Full Name" />
            </span>
            <input
              required
              type="text"
              placeholder={locale === "ar" ? "مثال: أحمد خالد" : "Example: Ahmed Khaled"}
              className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm text-zinc-300">
              <LocaleText ar="اسم الشركة / البراند" en="Company / Brand Name" />
            </span>
            <input
              type="text"
              placeholder="Fusion Clothing"
              className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm text-zinc-300">
              <LocaleText ar="رقم الجوال" en="Phone Number" />
            </span>
            <input
              required
              type="tel"
              placeholder="+966 5X XXX XXXX"
              className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm text-zinc-300">
              <LocaleText ar="البريد الإلكتروني" en="Email Address" />
            </span>
            <input
              required
              type="email"
              placeholder="brand@domain.com"
              className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <label className="space-y-2">
            <span className="block text-sm text-zinc-300">
              <LocaleText ar="نوع المنتج" en="Product Type" />
            </span>
            <select
              value={productType}
              onChange={(event) => setProductType(event.target.value as ProductTypeOption)}
              className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
            >
              {productTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label[locale]}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="block text-sm text-zinc-300">
              <LocaleText ar="طريقة الطباعة" en="Print Method" />
            </span>
            <select
              value={printType}
              onChange={(event) => setPrintType(event.target.value as PrintTypeOption)}
              className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
            >
              {printTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label[locale]}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="block text-sm text-zinc-300">
              <LocaleText ar="الكمية" en="Quantity" />
            </span>
            <input
              min={1}
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value) || 1)}
              className="w-full rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
            />
          </label>
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm text-zinc-300">
            <LocaleText ar="المقاسات المطلوبة" en="Requested Sizes" />
          </legend>
          <div className="flex flex-wrap gap-2">
            {sizeOptions.map((size) => {
              const selected = sizes.includes(size);
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => toggleSize(size)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.14em] transition ${
                    selected
                      ? "border-white/60 bg-white/20 text-white"
                      : "border-white/15 bg-white/5 text-zinc-300 hover:bg-white/10"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </fieldset>

        <label className="space-y-2">
          <span className="block text-sm text-zinc-300">
            <LocaleText ar="رفع التصميم (PNG, PDF, AI)" en="Upload Design (PNG, PDF, AI)" />
          </span>
          <input
            multiple
            type="file"
            accept=".png,.jpg,.jpeg,.pdf,.ai"
            onChange={(event) => {
              const selectedFiles = event.currentTarget.files;
              setFiles(selectedFiles ? Array.from(selectedFiles) : []);
            }}
            className="w-full cursor-pointer rounded-2xl border border-dashed border-white/25 bg-[#0b0d12] px-4 py-3 text-sm text-zinc-300 file:ml-4 file:rounded-full file:border-0 file:bg-white/20 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white"
          />
        </label>

        {files.length > 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/4 p-4 text-sm text-zinc-300">
            <p className="mb-2 text-xs tracking-[0.15em] text-zinc-400 uppercase">
              <LocaleText ar="الملفات المرفوعة" en="Uploaded Files" />
            </p>
            <ul className="space-y-1">
              {files.map((file) => (
                <li key={`${file.name}-${file.size}`}>{file.name}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <label className="space-y-2">
          <span className="block text-sm text-zinc-300">
            <LocaleText ar="ملاحظات إضافية" en="Additional Notes" />
          </span>
          <textarea
            rows={5}
            placeholder={
              locale === "ar"
                ? "مثال: طباعة أمامية كبيرة + شعار صغير بالخلف + تغليف لكل قطعة."
                : "Example: large front print + small back logo + individual packaging."
            }
            className="w-full resize-none rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm text-white outline-none transition focus:border-white/55"
          />
        </label>
      </section>

      <aside className="space-y-6 rounded-3xl border border-white/10 bg-[#101521] p-6">
        <div>
          <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
            <LocaleText ar="تقدير تلقائي" en="Auto Estimate" />
          </p>
          <h3 className="mt-2 font-heading text-4xl leading-none tracking-wide text-white">
            {formatCurrency(pricing.total, locale)}
          </h3>
          <LocaleText
            as="p"
            className="mt-3 text-sm text-zinc-300"
            ar="السعر تقديري قبل مراجعة الملف النهائي والمقاسات التفصيلية."
            en="This is an estimate before final file review and detailed size breakdown."
          />
        </div>

        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
          <p className="flex items-center justify-between">
            <span>
              <LocaleText ar="نوع المنتج" en="Product Type" />
            </span>
            <strong>{selectedProductLabel}</strong>
          </p>
          <p className="flex items-center justify-between">
            <span>
              <LocaleText ar="طريقة الطباعة" en="Print Method" />
            </span>
            <strong>{selectedPrintLabel}</strong>
          </p>
          <p className="flex items-center justify-between">
            <span>
              <LocaleText ar="السعر للقطعة" en="Unit Price" />
            </span>
            <strong>{formatCurrency(pricing.unitPrice, locale)}</strong>
          </p>
          <p className="flex items-center justify-between">
            <span>
              <LocaleText ar="إجمالي قبل الرسوم" en="Subtotal" />
            </span>
            <strong>{formatCurrency(pricing.subtotal, locale)}</strong>
          </p>
          <p className="flex items-center justify-between">
            <span>
              <LocaleText ar="رسوم تجهيز" en="Setup Fee" />
            </span>
            <strong>{formatCurrency(pricing.setupFee, locale)}</strong>
          </p>
          <p className="flex items-center justify-between">
            <span>
              <LocaleText ar="خصم الكمية" en="Volume Discount" />
            </span>
            <strong>{Math.round(pricing.discountRate * 100)}%</strong>
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-full border border-white/40 bg-white/15 px-5 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-white/26"
        >
          <LocaleText ar="تأكيد الطلب المبدئي" en="Confirm Initial Request" />
        </button>

        {submitted ? (
          <LocaleText
            as="p"
            className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-zinc-100"
            ar="تم تسجيل الطلب التجريبي بنجاح. سيتم التواصل معك خلال ساعات العمل."
            en="Your sample request has been recorded successfully. We will contact you during business hours."
          />
        ) : (
          <LocaleText
            as="p"
            className="text-xs leading-6 text-zinc-400"
            ar="بالضغط على التأكيد فأنت ترسل طلب مبدئي. فريق Fusion يراجع الملفات ثم يرسل عرض سعر نهائي."
            en="By confirming, you submit an initial request. The Fusion team reviews files and then sends the final quotation."
          />
        )}
      </aside>
    </form>
  );
}
