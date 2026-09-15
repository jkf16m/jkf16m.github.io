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

    // GET /api/keys — list all keys
    if (url.pathname === "/api/keys" && request.method === "GET") {
      const res = await openRouterFetch("/keys", env);
      const data = await res.json();
      return Response.json(data, { headers });
    }

    // GET /api/keys/:hash — get single key usage
    if (url.pathname.startsWith("/api/keys/") && request.method === "GET") {
      const hash = url.pathname.split("/api/keys/")[1];
      const res = await openRouterFetch(`/keys/${hash}`, env);
      const data = await res.json();
      return Response.json(data, { headers });
    }

    return new Response("Not found", { status: 404, headers });
  },
};
