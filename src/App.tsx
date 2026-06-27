import { useState, useCallback } from "preact/hooks";
import { Language, useI18n } from "./lib/i18n";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GoToTop } from "./components/GoToTop";
import { LanguageSelect } from "./components/LanguageSelect";
import { NavButtons } from "./components/NavButtons";
import { BottomNav } from "./components/BottomNav";

export function App() {
  const [lang, setLang] = useState<Language>("en");
  const i18n = useI18n(lang);

  const handleLangChange = useCallback((e: Event) => {
    setLang((e.target as HTMLSelectElement).value as Language);
  }, []);

  const isDev = import.meta.env.DEV;

  return (
    <>
      {!isDev && (
        <div class="under-construction-banner">
          🚧 Under Construction — This site is currently being updated 🚧
        </div>
      )}
      <div class="snap-container">
        <main class="container-fluid">
          <nav>
            <ul>
              <li><strong>{i18n.t("page.title")}</strong></li>
            </ul>
            <NavButtons i18n={i18n} />
            <ul>
              <li><LanguageSelect value={lang} onChange={handleLangChange} /></li>
            </ul>
          </nav>

          {isDev ? (
            <>
              <article>
                <header>
                  <h1>{i18n.t("page.home.greetings")}</h1>
                  <p class="subtitle">{i18n.t("page.home.subtitle")}</p>
                </header>
                <p>{i18n.t("page.home.welcome")}</p>

                <Experience i18n={i18n} />
                <Projects i18n={i18n} />
                <Skills i18n={i18n} />
                <Contact i18n={i18n} />
              </article>

              <Footer i18n={i18n} />
              <GoToTop />
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
      {isDev && <BottomNav i18n={i18n} />}
    </>
  );
}
