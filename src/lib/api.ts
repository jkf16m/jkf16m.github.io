/**
 * api.ts — API client
 *
 * Fetches budget data from the Cloudflare Worker.
 */

const WORKER_URL = "https://portfolio-api.jkf16m-portfolio.workers.dev";

export async function getKeys() {
  const res = await fetch(`${WORKER_URL}/api/keys`);
  return res.json();
}

export async function getKeyUsage(hash: string) {
  const res = await fetch(`${WORKER_URL}/api/keys/${hash}`);
  return res.json();
}
