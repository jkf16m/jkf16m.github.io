/**
 * App.tsx — Root component
 *
 * Wraps the Router in a minimal layout with i18n.
 */

import { useState } from "preact/hooks";
import { Router } from "./Router";
import { I18nContext, getInitialLocale, storeLocale, type Locale } from "./lib/i18n";

export function App() {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    storeLocale(l);
  };

  const t = (key: string) => {
    const translations = locale === "es" ? es : en;
    return translations[key as keyof typeof en] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      <Router />
    </I18nContext.Provider>
  );
}

// Import translations inline to avoid circular deps
import { translations as en } from "./lib/i18n-en";
import { translations as es } from "./lib/i18n-es";
