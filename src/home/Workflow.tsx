/**
 * Workflow.tsx — Development workflow section
 *
 * Describes the AGENTS.md-driven workflow, code quality practices,
 * and code review approach.
 */

import { useI18n } from "~/lib/i18n";

export function Workflow() {
  const { t } = useI18n();

  return (
    <section class="w-full mt-20 max-w-3xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-semibold mb-10 text-center text-[var(--color-primary)]">
        {t("workflow.title")}
      </h2>

      <div class="grid md:grid-cols-3 gap-8 md:gap-10">
        <div>
          <h3 class="text-lg font-medium mb-4 text-[var(--color-accent)]">
            {t("workflow.agentsTitle")}
          </h3>
          <p class="text-sm leading-relaxed text-[var(--color-muted)]">
            {t("workflow.agentsBody")}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-4 text-[var(--color-accent)]">
            {t("workflow.qualityTitle")}
          </h3>
          <p class="text-sm leading-relaxed text-[var(--color-muted)]">
            {t("workflow.qualityBody")}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-4 text-[var(--color-accent)]">
            {t("workflow.reviewTitle")}
          </h3>
          <p class="text-sm leading-relaxed text-[var(--color-muted)]">
            {t("workflow.reviewBody")}
          </p>
        </div>
      </div>
    </section>
  );
}
