/**
 * Budget.tsx — Budget page
 *
 * Shows the budget breakdown for the portfolio.
 */

import { useEffect, useState } from "preact/hooks";
import { Hero } from "~/shared/Hero";
import { useI18n } from "~/lib/i18n";

const API_URL = import.meta.env.DEV ? "http://localhost:8787" : "https://portfolio-api.jkf16m.workers.dev";

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

export function Budget() {
  const { t } = useI18n();
  const [usage, setUsage] = useState<UsageStats | null>(null);
  const [activity, setActivity] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [usageRes, activityRes] = await Promise.all([
          fetch(`${API_URL}/api/usage`),
          fetch(`${API_URL}/api/activity`),
        ]);

        if (!usageRes.ok || !activityRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const usageData = await usageRes.json();
        const activityData = await activityRes.json();

        setUsage(usageData);
        setActivity(activityData.data.data || []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <article class="py-16 px-8 max-w-6xl mx-auto">
        <Hero>
          <Hero.Title>{t("budget.title")}</Hero.Title>
          <Hero.Link href="/">{t("hero.backHome")}</Hero.Link>
        </Hero>
      </article>
    );
  }

  if (error) {
    return (
      <article class="py-16 px-8 max-w-6xl mx-auto">
        <Hero>
          <Hero.Title>{t("budget.title")}</Hero.Title>
          <Hero.Link href="/">{t("hero.backHome")}</Hero.Link>
          <Hero.Subtitle>{t("budget.error")} {error}</Hero.Subtitle>
        </Hero>
      </article>
    );
  }

  return (
    <article class="py-16 px-8 max-w-6xl mx-auto">
      <Hero>
        <Hero.Title>{t("budget.title")}</Hero.Title>
        <Hero.Link href="/">{t("hero.backHome")}</Hero.Link>
      </Hero>

      {/* Usage Summary */}
      {usage && (
        <section class="mt-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-8">
            {t("budget.usageSummary")}
          </h2>
          <div class="flex flex-wrap gap-4 justify-center max-w-xl">
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
        <section class="mt-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-8">
            {t("budget.activity")}
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="border-b border-[var(--color-border)]">
                  <th class="p-4 text-left">{t("budget.date")}</th>
                  <th class="p-4 text-left">{t("budget.model")}</th>
                  <th class="p-4 text-left">{t("budget.provider")}</th>
                  <th class="p-4 text-right">{t("budget.requests")}</th>
                  <th class="p-4 text-right">{t("budget.usage")}</th>
                  <th class="p-4 text-right">{t("budget.promptTokens")}</th>
                  <th class="p-4 text-right">{t("budget.completionTokens")}</th>
                </tr>
              </thead>
              <tbody>
                {activity.map((log, i) => (
                  <tr key={i} class="border-b border-[var(--color-border)]">
                    <td class="p-4">{log.created_at__day}</td>
                    <td class="p-4">{log.model.split("/").pop()}</td>
                    <td class="p-4">{log.provider}</td>
                    <td class="p-4 text-right">{log.request_count}</td>
                    <td class="p-4 text-right">${log.total_usage.toFixed(4)}</td>
                    <td class="p-4 text-right">{Number(log.tokens_prompt).toLocaleString()}</td>
                    <td class="p-4 text-right">{Number(log.tokens_completion).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </article>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div class="p-4 border-b border-[var(--color-border)] text-center min-w-[120px]">
      <div class="opacity-60 text-sm">{label}</div>
      <div class="text-xl mt-1">{value}</div>
    </div>
  );
}
