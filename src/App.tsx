/*
 * App.tsx — Root component
 *
 * Uses components from ./components/ and i18n from ./lib/i18n.
 * Each component receives i18n and owns its own translation keys internally.
 *
 * NOTE: The nav currently uses i18n.t() directly. This should be
 * moved into a dedicated component once available.
 */

import { useState, useCallback } from "preact/hooks";
import { Language, useI18n } from "./lib/i18n";
import { HeroSection, Navbar, ThemeToggle } from "./components";
import "./App.css";

export function App() {
  const [lang, setLang] = useState<Language>("en");
  const i18n = useI18n(lang);

  const handleLangChange = useCallback((e: Event) => {
    setLang((e.target as HTMLSelectElement).value as Language);
  }, []);

  const isDev = import.meta.env.DEV;

  return (
    <>
      <Navbar right={<ThemeToggle />} />
      {!isDev && (
        <div class="under-construction-banner">
          🚧 Under Construction — This site is currently being updated 🚧
        </div>
      )}
      <div class="snap-container" style={{ background: "var(--color-primary)" }}>
        <main class="container-fluid" style={{ paddingTop: "80px" }}>


          {isDev ? (
            <>
              <HeroSection i18n={i18n} amountUsd={10000} />
            </>
          ) : (
            <article>
              <header>
                <h1>🚧 Site Under Construction</h1>
                <p class="subtitle">This site is currently being updated.</p>
              </header>
              <p>Check back soon for updates!</p>
            </article>
          )}
        </main>
      </div>
    </>
  );
}
