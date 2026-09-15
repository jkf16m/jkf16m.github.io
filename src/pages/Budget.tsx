/**
 * Budget.tsx — Budget page
 *
 * Shows the budget breakdown for the portfolio.
 */

import { useEffect, useState } from "preact/hooks";
import { Hero, Title } from "~/components";

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
      <article
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          "--hero-font-size": "clamp(1.5rem, 4vw, 3rem)",
          "--hero-link-size": "clamp(0.8rem, 1.5vw, 1rem)",
        }}
      >
        <Hero>
          <Hero.UsageTitle />
          <Hero.Subtitle>Loading statistics...</Hero.Subtitle>
        </Hero>
      </article>
    );
  }

  if (error) {
    return (
      <article
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          "--hero-font-size": "clamp(1.5rem, 4vw, 3rem)",
          "--hero-link-size": "clamp(0.8rem, 1.5vw, 1rem)",
        }}
      >
        <Hero>
          <Hero.UsageTitle />
          <Hero.Subtitle>Error: {error}</Hero.Subtitle>
          <Hero.Link href="/">← Back home</Hero.Link>
        </Hero>
      </article>
    );
  }

  return (
    <article
      style={{
        padding: "4rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        "--hero-font-size": "clamp(1.5rem, 4vw, 3rem)",
        "--hero-link-size": "clamp(0.8rem, 1.5vw, 1rem)",
      }}
    >
      <Hero>
        <Hero.UsageTitle />
        <Hero.Link href="/">← Back home</Hero.Link>
      </Hero>

      {/* Usage Summary */}
      {usage && (
        <section style={{ marginTop: "4rem" }}>
          <Title as="h2" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", marginBottom: "2rem" }}>
            Usage Summary
          </Title>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <th style={{ padding: "1rem", textAlign: "left" }}>Metric</th>
                <th style={{ padding: "1rem", textAlign: "right" }}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1rem" }}>Daily Usage</td>
                <td style={{ padding: "1rem", textAlign: "right" }}>${usage.usage_daily.toFixed(4)}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1rem" }}>Weekly Usage</td>
                <td style={{ padding: "1rem", textAlign: "right" }}>${usage.usage_weekly.toFixed(4)}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1rem" }}>Monthly Usage</td>
                <td style={{ padding: "1rem", textAlign: "right" }}>${usage.usage_monthly.toFixed(4)}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1rem" }}>Daily Limit</td>
                <td style={{ padding: "1rem", textAlign: "right" }}>${usage.limit}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1rem" }}>Remaining Today</td>
                <td style={{ padding: "1rem", textAlign: "right" }}>${usage.limit_remaining.toFixed(4)}</td>
              </tr>
            </tbody>
          </table>
        </section>
      )}

      {/* Activity Logs */}
      {activity.length > 0 && (
        <section style={{ marginTop: "4rem" }}>
          <Title as="h2" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", marginBottom: "2rem" }}>
            Activity (Last 30 Days)
          </Title>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Date</th>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Model</th>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Provider</th>
                  <th style={{ padding: "1rem", textAlign: "right" }}>Requests</th>
                  <th style={{ padding: "1rem", textAlign: "right" }}>Usage</th>
                  <th style={{ padding: "1rem", textAlign: "right" }}>Prompt Tokens</th>
                  <th style={{ padding: "1rem", textAlign: "right" }}>Completion Tokens</th>
                </tr>
              </thead>
              <tbody>
                {activity.map((log, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <td style={{ padding: "1rem" }}>{log.created_at__day}</td>
                    <td style={{ padding: "1rem" }}>{log.model.split("/").pop()}</td>
                    <td style={{ padding: "1rem" }}>{log.provider}</td>
                    <td style={{ padding: "1rem", textAlign: "right" }}>{log.request_count}</td>
                    <td style={{ padding: "1rem", textAlign: "right" }}>${log.total_usage.toFixed(4)}</td>
                    <td style={{ padding: "1rem", textAlign: "right" }}>{Number(log.tokens_prompt).toLocaleString()}</td>
                    <td style={{ padding: "1rem", textAlign: "right" }}>{Number(log.tokens_completion).toLocaleString()}</td>
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
