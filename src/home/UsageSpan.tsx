/**
 * UsageSpan.tsx — Animated usage display
 *
 * Fetches live usage and animates from zero to the final value.
 * Supports USD and MXN with exchange rate conversion.
 * The currency label is clickable to toggle.
 */

import { useEffect, useState, useRef } from "preact/hooks";
import { getExchangeRate, type Currency } from "~/lib/currency";
import { useI18n, type Locale } from "~/lib/i18n";

const API_URL = import.meta.env.DEV ? "http://localhost:8787" : "https://portfolio-api.jkf16m.workers.dev";

type UsageSpanProps = {
  currency: Currency;
  onToggleCurrency: (c: Currency) => void;
  class?: string;
};

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

const US_LETTERS = ["U", "S", "D"];
const MX_LETTERS = ["M", "X", "N"];
const US_COLORS = ["#B22234", "#FFFFFF", "#3C3B6E"];
const MX_COLORS = ["#006847", "#FFFFFF", "#CE1126"];

export function UsageSpan({ currency, onToggleCurrency, class: className }: UsageSpanProps) {
  const { locale, setLocale } = useI18n();
  const [displayValue, setDisplayValue] = useState(0);
  const [targetUsd, setTargetUsd] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [started, setStarted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const startTime = useRef(0);
  const rafId = useRef(0);

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/api/usage/simple`).then((r) => r.text()),
      getExchangeRate(),
    ]).then(([usage, rate]) => {
      setTargetUsd(parseFloat(usage));
      setExchangeRate(rate);
      setStarted(true);
      startTime.current = performance.now();
    }).catch(() => setTargetUsd(0));
  }, []);

  useEffect(() => {
    if (!started || targetUsd === null) return;

    const duration = 1500;
    const target = currency === "MXN" ? targetUsd * exchangeRate : targetUsd;

    function animate(now: number) {
      const elapsed = now - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setDisplayValue(eased * target);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    }

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [started, targetUsd, currency, exchangeRate]);

  const isMxn = currency === "MXN";
  const prefix = isMxn ? "MX$" : "$";
  const decimals = isMxn ? 2 : 6;
  const formatted = displayValue.toFixed(decimals);
  const [intPart, decPart] = formatted.split(".");

  const letters = isMxn ? MX_LETTERS : US_LETTERS;
  const colors = hovered ? (isMxn ? MX_COLORS : US_COLORS) : undefined;

  const handleToggle = () => {
    const newCurrency = isMxn ? "USD" : "MXN";
    onToggleCurrency(newCurrency);
    setLocale(newCurrency === "MXN" ? "es" : "en" as Locale);
  };

  const currencyLabel = (
    <span
      onClick={handleToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      class="cursor-pointer select-none opacity-80 hover:opacity-100 transition-opacity"
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          style={{
            color: colors?.[i] || "inherit",
            transition: "color 0.2s",
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );

  if (isMxn) {
    return (
      <span class={className}>
        <span>{prefix}{intPart}.{decPart}</span>
        {" "}{currencyLabel}
      </span>
    );
  }

  // USD: first 2 decimals full size, rest shrink
  const bigDec = decPart.slice(0, 2);
  const smallDec = decPart.slice(2);

  return (
    <span class={className}>
      <span style={{ fontSize: "1em" }}>{prefix}</span>
      {intPart}
      <span style={{ fontSize: "0.6em", opacity: 0.7 }}>.</span>
      <span style={{ fontSize: "1em" }}>{bigDec}</span>
      {smallDec.split("").map((ch, i) => {
        const scale = 0.6 - (i / smallDec.length) * 0.25;
        const opacity = 0.7 - (i / smallDec.length) * 0.2;
        return (
          <span key={i} style={{ fontSize: `${scale}em`, opacity }}>
            {ch}
          </span>
        );
      })}
      {" "}{currencyLabel}
    </span>
  );
}
