/**
 * UsageSpan.tsx — Animated usage display
 *
 * Fetches live usage and animates from $0.000000 to the final value.
 * Fast start, slow finish (ease-out).
 */

import { useEffect, useState, useRef } from "preact/hooks";

const API_URL = import.meta.env.DEV ? "http://localhost:8787" : "https://portfolio-api.jkf16m.workers.dev";

type UsageSpanProps = {
  class?: string;
};

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function UsageSpan({ class: className }: UsageSpanProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [targetValue, setTargetValue] = useState<number | null>(null);
  const [started, setStarted] = useState(false);
  const startTime = useRef(0);
  const rafId = useRef(0);

  useEffect(() => {
    fetch(`${API_URL}/api/usage/simple`)
      .then((r) => r.text())
      .then((v) => {
        setTargetValue(parseFloat(v));
        setStarted(true);
        startTime.current = performance.now();
      })
      .catch(() => setTargetValue(0));
  }, []);

  useEffect(() => {
    if (!started || targetValue === null) return;

    const duration = 1500;

    function animate(now: number) {
      const elapsed = now - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setDisplayValue(eased * targetValue);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    }

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [started, targetValue]);

  // Format with leading zeros: $0.000000
  const formatted = displayValue.toFixed(6);
  const [intPart, decPart] = formatted.split(".");

  // First 2 decimals full size, rest shrink
  const bigDec = decPart.slice(0, 2);
  const smallDec = decPart.slice(2);

  return (
    <span class={className}>
      <span style={{ fontSize: "1em" }}>$</span>
      {intPart}
      <span style={{ fontSize: "0.6em", opacity: 0.7 }}>.</span>
      <span style={{ fontSize: "1em" }}>{bigDec}</span>
      {smallDec.split("").map((ch, i) => {
        const scale = 0.6 - (i / smallDec.length) * 0.25;
        return (
          <span key={i} style={{ fontSize: `${scale}em`, opacity: 0.7 - (i / smallDec.length) * 0.2 }}>
            {ch}
          </span>
        );
      })}
    </span>
  );
}
