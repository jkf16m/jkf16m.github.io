/**
 * Home.tsx — Home page
 *
 * The landing page of the portfolio.
 */

import { Hero, useCurrency } from "~/components";
import { useI18n } from "~/lib/i18n";

export function Home() {
  const [currency, setCurrency] = useCurrency();
  const { t } = useI18n();

  return (
    <article
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Hero>
        <Hero.UsageTitle currency={currency} onToggleCurrency={setCurrency} />
        <Hero.Subtitle>{t("hero.subtitle")}</Hero.Subtitle>
        <Hero.Link href="/budget">{t("hero.seeBudget")}</Hero.Link>
      </Hero>
    </article>
  );
}
