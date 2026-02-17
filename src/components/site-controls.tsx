"use client";

import { useEffect, useState } from "react";

type SiteTheme = "dark" | "light";
type SiteLocale = "ar" | "en";

const THEME_KEY = "fusion-theme";
const LOCALE_KEY = "fusion-locale";
const PREFS_EVENT = "site-preferences-change";

function readTheme(): SiteTheme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function readLocale(): SiteLocale {
  if (typeof document === "undefined") return "ar";
  return document.documentElement.dataset.locale === "en" ? "en" : "ar";
}

function readStoredTheme(): SiteTheme {
  if (typeof window === "undefined") return "dark";
  const savedTheme = localStorage.getItem(THEME_KEY);
  return savedTheme === "light" ? "light" : readTheme();
}

function readStoredLocale(): SiteLocale {
  if (typeof window === "undefined") return "ar";
  const savedLocale = localStorage.getItem(LOCALE_KEY);
  return savedLocale === "en" ? "en" : readLocale();
}

function applyPreferences(theme: SiteTheme, locale: SiteLocale) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.locale = locale;
  root.lang = locale;
  root.dir = locale === "ar" ? "rtl" : "ltr";
}

export function SiteControls() {
  const [theme, setTheme] = useState<SiteTheme>(readStoredTheme);
  const [locale, setLocale] = useState<SiteLocale>(readStoredLocale);

  useEffect(() => {
    applyPreferences(theme, locale);
    localStorage.setItem(THEME_KEY, theme);
    localStorage.setItem(LOCALE_KEY, locale);
    window.dispatchEvent(new Event(PREFS_EVENT));
  }, [theme, locale]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  function toggleLocale() {
    setLocale((currentLocale) => (currentLocale === "ar" ? "en" : "ar"));
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-white/20 bg-white/6 px-3 py-2 text-[11px] font-semibold tracking-[0.14em] text-zinc-100 uppercase transition hover:bg-white/14"
      >
        {theme === "dark" ? (
          <>
            <span className="locale-ar">فاتح</span>
            <span className="locale-en">Light</span>
          </>
        ) : (
          <>
            <span className="locale-ar">داكن</span>
            <span className="locale-en">Dark</span>
          </>
        )}
      </button>
      <button
        type="button"
        onClick={toggleLocale}
        className="rounded-full border border-white/20 bg-white/6 px-3 py-2 text-[11px] font-semibold tracking-[0.14em] text-zinc-100 uppercase transition hover:bg-white/14"
      >
        {locale === "ar" ? "EN" : "AR"}
      </button>
    </div>
  );
}
