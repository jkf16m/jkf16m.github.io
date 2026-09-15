/**
 * CurrencyToggle.tsx — USD/MXN language toggle
 *
 * Click to switch between USD and MXN.
 * Shows flag colors on hover/click.
 */

import { useState } from "preact/hooks";
import type { Currency } from "~/lib/currency";

const STORAGE_KEY = "preferred_currency";

type CurrencyToggleProps = {
  currency: Currency;
  onToggle: (currency: Currency) => void;
};

const US_LETTERS = ["U", "S", "D"];
const MX_LETTERS = ["M", "X", "N"];
const US_COLORS = ["#B22234", "#FFFFFF", "#3C3B6E"]; // Red, White, Blue
const MX_COLORS = ["#006847", "#FFFFFF", "#CE1126"]; // Green, White, Red

export function CurrencyToggle({ currency, onToggle }: CurrencyToggleProps) {
  const [hovered, setHovered] = useState(false);

  const isUsd = currency === "USD";
  const letters = isUsd ? US_LETTERS : MX_LETTERS;
  const colors = hovered ? (isUsd ? US_COLORS : MX_COLORS) : undefined;

  return (
    <button
      onClick={() => onToggle(isUsd ? "MXN" : "USD")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "none",
        border: "1px solid var(--color-border)",
        color: "var(--color-text)",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        fontSize: "inherit",
        borderRadius: "4px",
        opacity: 0.8,
        transition: "opacity 0.2s",
        display: "inline-flex",
        gap: "1px",
      }}
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
    </button>
  );
}

export function useCurrency(): [Currency, (c: Currency) => void] {
  const [currency, setCurrency] = useState<Currency>(() => {
    try {
      return (localStorage.getItem(STORAGE_KEY) as Currency) || "USD";
    } catch {
      return "USD";
    }
  });

  const update = (c: Currency) => {
    setCurrency(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {}
  };

  return [currency, update];
}
