/**
 * i18n.ts — Internationalization
 *
 * Simple translation system with English and Spanish.
 * Stores language preference in localStorage.
 */

import { createContext } from "preact";
import { useContext } from "preact/hooks";

export type Locale = "en" | "es";

const STORAGE_KEY = "preferred_locale";

export type TranslationKey =
  | "hero.title"
  | "hero.subtitle"
  | "hero.seeBudget"
  | "hero.backHome"
  | "budget.title"
  | "budget.loading"
  | "budget.error"
  | "budget.usageSummary"
  | "budget.dailyUsage"
  | "budget.weeklyUsage"
  | "budget.monthlyUsage"
  | "budget.dailyLimit"
  | "budget.remainingToday"
  | "budget.activity"
  | "budget.date"
  | "budget.model"
  | "budget.provider"
  | "budget.requests"
  | "budget.usage"
  | "budget.promptTokens"
  | "budget.completionTokens"
  | "budget.metric"
  | "budget.value";

interface I18nContextValue {
  locale: Locale;
  t: (key: TranslationKey) => string;
  setLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  t: (key) => key,
  setLocale: () => {},
});

export function useI18n() {
  return useContext(I18nContext);
}

export function getInitialLocale(): Locale {
  try {
    return (localStorage.getItem(STORAGE_KEY) as Locale) || "en";
  } catch {
    return "en";
  }
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {}
}
