/**
 * currency.ts — Currency helpers
 *
 * Manages USD/MXN conversion with localStorage caching.
 */

const STORAGE_KEY = "exchange_rate_usd_mxn";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

interface CachedRate {
  rate: number;
  timestamp: number;
}

export type Currency = "USD" | "MXN";

export function getStoredRate(): number | null {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (!cached) return null;
    const { rate, timestamp }: CachedRate = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) return null;
    return rate;
  } catch {
    return null;
  }
}

export function storeRate(rate: number): void {
  const data: CachedRate = { rate, timestamp: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function getExchangeRate(): Promise<number> {
  const stored = getStoredRate();
  if (stored) return stored;

  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    const rate = data.rates.MXN;
    storeRate(rate);
    return rate;
  } catch {
    // Fallback rate if API fails
    return 20.5;
  }
}

export function formatCurrency(amount: number, currency: Currency, rate: number): string {
  if (currency === "USD") {
    return `$${amount.toFixed(6)}`;
  }
  return `MX$${(amount * rate).toFixed(2)}`;
}
