"use client";

import { useEffect, useState } from "react";

export type SiteLocale = "ar" | "en";

const PREFS_EVENT = "site-preferences-change";

function readLocale(): SiteLocale {
  if (typeof document === "undefined") return "en";
  return document.documentElement.dataset.locale === "en" ? "en" : "ar";
}

export function useSiteLocale() {
  const [locale, setLocale] = useState<SiteLocale>("en");

  useEffect(() => {
    const syncLocale = () => setLocale(readLocale());
    syncLocale();
    window.addEventListener(PREFS_EVENT, syncLocale);
    return () => window.removeEventListener(PREFS_EVENT, syncLocale);
  }, []);

  return locale;
}
