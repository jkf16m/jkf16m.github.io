/*
 * ThemeToggle.tsx — Light/dark mode toggle button
 *
 * Circular button that switches between light and dark themes.
 * Persists preference to localStorage under "theme" key.
 * Applies theme via a data-theme attribute on <html>.
 * Depends on co-located ThemeToggle.css for styling.
 */

import { useState, useEffect, useCallback } from "preact/hooks";
import "./ThemeToggle.css";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Sync if another tab changes the theme
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const icon = theme === "dark" ? "☀️" : "🌙";
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      class="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <span class="theme-toggle-icon">{icon}</span>
    </button>
  );
}
