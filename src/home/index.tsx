/**
 * Home.tsx — Home page
 *
 * The landing page of the portfolio.
 */

import { Hero } from "~/shared/Hero";
import { useI18n } from "~/lib/i18n";
import { useState } from "preact/hooks";
import type { Currency } from "~/lib/currency";

const STORAGE_KEY = "preferred_currency";

export function Home() {
  const { t } = useI18n();
  const [currency, setCurrency] = useState<Currency>(() => {
    try {
      return (localStorage.getItem(STORAGE_KEY) as Currency) || "USD";
    } catch {
      return "USD";
    }
  });

  const handleToggleCurrency = (c: Currency) => {
    setCurrency(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {}
  };

  return (
    <article class="min-h-screen flex flex-col justify-center items-center p-8 relative">
      <Hero>
        <Hero.UsageTitle currency={currency} onToggleCurrency={handleToggleCurrency} />
        <Hero.Subtitle>{t("hero.subtitle")}</Hero.Subtitle>
        <Hero.Link href="/budget">{t("hero.seeBudget")}</Hero.Link>
      </Hero>
      <p class="absolute bottom-8 right-8 text-sm opacity-50">
        {t("hero.by")} {t("hero.author")}
      </p>
    </article>
  );
}
