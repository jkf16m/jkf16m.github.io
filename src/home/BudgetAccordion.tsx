/**
 * BudgetAccordion.tsx — Animated collapsible budget section
 *
 * Split into BudgetToggle (button) and BudgetContent (expandable data).
 * State is lifted to the parent so the button can live in the hero
 * while content scrolls below.
 */

import { useEffect, useRef, useState } from "preact/hooks";
import { useI18n } from "~/lib/i18n";

const API_URL = import.meta.env.DEV
  ? "http://localhost:8787"
  : "https://portfolio-api.jkf16m.workers.dev";

interface UsageStats {
  name: string;
  usage: number;
  usage_daily: number;
  usage_weekly: number;
  usage_monthly: number;
  limit: number;
  limit_remaining: number;
  limit_reset: string;
}

interface ActivityLog {
  created_at__day: string;
  model: string;
  provider: string;
  request_count: string;
  total_usage: number;
  tokens_total: string;
  tokens_prompt: string;
  tokens_completion: string;
}

/* ------------------------------------------------------------------ */
/*  Toggle button — renders in the hero                                */
/* ------------------------------------------------------------------ */

export function BudgetToggle({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  const { t } = useI18n();

  return (
    <button
      onClick={onToggle}
      class="group flex items-center justify-center gap-3 text-base md:text-lg text-[var(--color-muted)] cursor-pointer hover:text-[var(--color-primary)] transition-colors w-full"
      aria-expanded={open}
    >
      <span
        class="inline-block transition-transform duration-300 ease-in-out"
        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        ▾
      </span>
      {open ? t("hero.hideBudget") : t("hero.showBudget")}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Expandable content — scrolls below the hero                        */
/* ------------------------------------------------------------------ */

export function BudgetContent({ open }: { open: boolean }) {
  const { t } = useI18n();
  const [usage, setUsage] = useState<UsageStats | null>(null);
  const [activity, setActivity] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Fetch data on first expand
  useEffect(() => {
    if (open && !usage && !loading) {
      setLoading(true);
      (async () => {
        try {
          const [usageRes, activityRes] = await Promise.all([
            fetch(`${API_URL}/api/usage`),
            fetch(`${API_URL}/api/activity`),
          ]);
          if (!usageRes.ok || !activityRes.ok) throw new Error("Failed to fetch data");
          const usageData = await usageRes.json();
          const activityData = await activityRes.json();
          setUsage(usageData);
          setActivity(activityData.data.data || []);
        } catch (e) {
          setError(e instanceof Error ? e.message : "Unknown error");
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [open]);

  // Recalculate height when content changes
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [usage, activity, loading, error]);

  return (
    <div class="w-full">
      <div
        class="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? `${contentHeight}px` : "0px" }}
      >
        <div ref={contentRef} class="pt-6 pb-4">
          {loading && (
            <p class="text-[var(--color-muted)] text-center py-8">{t("budget.loading")}</p>
          )}

          {error && (
            <p class="text-center py-8">{t("budget.error")} {error}</p>
          )}

          {/* Usage Summary */}
          {usage && (
            <section>
              <h3 class="text-xl md:text-2xl font-semibold mb-6 text-[var(--color-primary)]">
                {t("budget.usageSummary")}
              </h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <StatCard label={t("budget.dailyUsage")} value={`$${usage.usage_daily.toFixed(4)}`} />
                <StatCard label={t("budget.weeklyUsage")} value={`$${usage.usage_weekly.toFixed(4)}`} />
                <StatCard label={t("budget.monthlyUsage")} value={`$${usage.usage_monthly.toFixed(4)}`} />
                <StatCard label={t("budget.dailyLimit")} value={`$${usage.limit}`} />
                <StatCard label={t("budget.remainingToday")} value={`$${usage.limit_remaining.toFixed(4)}`} />
              </div>
            </section>
          )}

          {/* Activity Logs */}
          {activity.length > 0 && (
            <section class="mt-12">
              <h3 class="text-xl md:text-2xl font-semibold mb-6 text-[var(--color-primary)]">
                {t("budget.activity")}
              </h3>
              <div class="overflow-x-auto rounded-lg border border-[var(--color-border)]">
                <table class="w-full border-collapse text-sm">
                  <thead>
                    <tr class="bg-[var(--color-surface)]">
                      <th class="px-4 py-3 text-left text-xs uppercase tracking-wider text-[var(--color-muted)] font-medium">{t("budget.date")}</th>
                      <th class="px-4 py-3 text-left text-xs uppercase tracking-wider text-[var(--color-muted)] font-medium">{t("budget.model")}</th>
                      <th class="px-4 py-3 text-left text-xs uppercase tracking-wider text-[var(--color-muted)] font-medium">{t("budget.provider")}</th>
                      <th class="px-4 py-3 text-right text-xs uppercase tracking-wider text-[var(--color-muted)] font-medium">{t("budget.requests")}</th>
                      <th class="px-4 py-3 text-right text-xs uppercase tracking-wider text-[var(--color-muted)] font-medium">{t("budget.usage")}</th>
                      <th class="px-4 py-3 text-right text-xs uppercase tracking-wider text-[var(--color-muted)] font-medium">{t("budget.promptTokens")}</th>
                      <th class="px-4 py-3 text-right text-xs uppercase tracking-wider text-[var(--color-muted)] font-medium">{t("budget.completionTokens")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activity.map((log, i) => (
                      <tr
                        key={i}
                        class={`border-t border-[var(--color-border)] ${i % 2 === 0 ? "" : "bg-[var(--color-surface)]/50"}`}
                      >
                        <td class="px-4 py-3">{log.created_at__day}</td>
                        <td class="px-4 py-3 font-[var(--font-mono)] text-xs">{log.model.split("/").pop()}</td>
                        <td class="px-4 py-3 text-[var(--color-muted)]">{log.provider}</td>
                        <td class="px-4 py-3 text-right tabular-nums">{log.request_count}</td>
                        <td class="px-4 py-3 text-right tabular-nums">${log.total_usage.toFixed(4)}</td>
                        <td class="px-4 py-3 text-right tabular-nums">{Number(log.tokens_prompt).toLocaleString()}</td>
                        <td class="px-4 py-3 text-right tabular-nums">{Number(log.tokens_completion).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div class="px-5 py-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]">
      <div class="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">{label}</div>
      <div class="text-lg font-semibold tabular-nums">{value}</div>
    </div>
  );
}
