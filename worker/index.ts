/**
 * worker/index.ts — Cloudflare Worker
 *
 * Proxies requests to OpenRouter API using a management key.
 * Returns key usage stats and key list.
 */

interface Env {
  OPENROUTER_API_KEY: string;
  API_RATE_LIMITER: RateLimit;
}

declare interface RateLimit {
  limit(args: { key: string }): Promise<{ success: boolean }>;
}

const ALLOWED_ORIGIN = "https://jkf16m.github.io";

const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

function corsHeaders(origin: string): Record<string, string> {
  const allowed = origin === ALLOWED_ORIGIN;
  return {
    "Access-Control-Allow-Origin": allowed ? origin : "",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    ...SECURITY_HEADERS,
  };
}



async function openRouterFetch(path: string, env: Env): Promise<Response> {
  return fetch(`https://openrouter.ai/api/v1${path}`, {
    headers: {
      Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const { success } = await env.API_RATE_LIMITER.limit({ key: ip });
    if (!success) {
      return new Response("Too many requests", { status: 429, headers });
    }

    // GET /api/usage — get portfolio-2 key usage
    if (url.pathname === "/api/usage" && request.method === "GET") {
      const res = await openRouterFetch("/keys", env);
      const { data } = await res.json();
      const portfolio = data.find((k: any) => k.name === "portfolio-2");
      if (!portfolio) {
        return Response.json({ error: "Key not found" }, { status: 404, headers });
      }
      return Response.json({
        name: portfolio.name,
        usage: portfolio.usage,
        usage_daily: portfolio.usage_daily,
        usage_weekly: portfolio.usage_weekly,
        usage_monthly: portfolio.usage_monthly,
        limit: portfolio.limit,
        limit_remaining: portfolio.limit_remaining,
        limit_reset: portfolio.limit_reset,
      }, { headers });
    }

    // GET /api/activity — get portfolio-2 activity logs
    if (url.pathname === "/api/activity" && request.method === "GET") {
      // First get the key hash for portfolio-2
      const keysRes = await openRouterFetch("/keys", env);
      const { data: keys } = await keysRes.json();
      const portfolio = keys.find((k: any) => k.name === "portfolio-2");
      if (!portfolio) {
        return Response.json({ error: "Key not found" }, { status: 404, headers });
      }
      const res = await fetch("https://openrouter.ai/api/v1/analytics/query", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          metrics: ["request_count", "total_usage", "tokens_total", "tokens_prompt", "tokens_completion"],
          dimensions: ["model", "provider"],
          filters: [{ field: "api_key_id", operator: "eq", value: portfolio.hash }],
          time_range: {
            start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            end: new Date().toISOString(),
          },
          granularity: "day",
        }),
      });
      const { data } = await res.json();
      return Response.json({ data }, { headers });
    }

    return new Response("Not found", { status: 404, headers });
  },
};
