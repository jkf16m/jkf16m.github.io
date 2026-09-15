/**
 * Philosophy.tsx — Industry perspective and approach section
 *
 * Shares the author's opinion on the current LLM industry
 * and their problem-solving approach.
 */

import { useI18n } from "~/lib/i18n";

export function Philosophy() {
  const { t } = useI18n();

  return (
    <section class="w-full mt-20 max-w-3xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-semibold mb-10 text-center text-[var(--color-primary)]">
        {t("philosophy.title")}
      </h2>

      <div class="grid md:grid-cols-3 gap-8 md:gap-10">
        <div>
          <h3 class="text-lg font-medium mb-4 text-[var(--color-accent)]">
            {t("philosophy.industryTitle")}
          </h3>
          <p class="text-sm leading-relaxed text-[var(--color-muted)]">
            {t("philosophy.industryBody")}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-4 text-[var(--color-accent)]">
            {t("philosophy.productionTitle")}
          </h3>
          <p class="text-sm leading-relaxed text-[var(--color-muted)]">
            {t("philosophy.productionBody")}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-4 text-[var(--color-accent)]">
            {t("philosophy.approachTitle")}
          </h3>
          <p class="text-sm leading-relaxed text-[var(--color-muted)]">
            {t("philosophy.approachBody")}
          </p>
        </div>
      </div>
    </section>
  );
}
