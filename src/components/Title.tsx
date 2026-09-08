import { useState, useEffect } from "preact/hooks";
import type { I18n } from "../lib/i18n";

interface TitleProps {
  amountUsd: number;
  i18n: I18n;
}

const FALLBACK_RATE = 17;

async function fetchUsdToMxn(): Promise<number> {
  try {
    const res = await fetch("https://cdn.moneyconvert.net/api/latest.json");
    const data = await res.json();
    return data.rates?.MXN ?? FALLBACK_RATE;
  } catch {
    return FALLBACK_RATE;
  }
}

function formatCurrency(amount: number, currency: string): string {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: "currency",
    currency,
  });
}

export function Title({ amountUsd, i18n }: TitleProps) {
  const [rate, setRate] = useState(FALLBACK_RATE);

  useEffect(() => {
    fetchUsdToMxn().then(setRate);
  }, []);

  const amountMxn = amountUsd * rate;
  const text = i18n.t("page.heading");

  const isEn = i18n.lang === "en";
  const formatted = isEn
    ? formatCurrency(amountUsd, "USD")
    : formatCurrency(amountMxn, "MXN");
  const displayText = text.replace("$", formatted);

  return (
    <div class="title">
      <span class="title-text">{displayText}</span>
    </div>
  );
}
