import { useState, useCallback } from "preact/hooks";
import { Language, useI18n } from "./lib/i18n";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
// import { Skills } from "./components/Skills";
// import { Education } from "./components/Education";
// import { Certifications } from "./components/Certifications";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GoToTop } from "./components/GoToTop";
import { LanguageSelect } from "./components/LanguageSelect";
import { NavButtons } from "./components/NavButtons";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export function App() {
  const [lang, setLang] = useState<Language>("en");
  const i18n = useI18n(lang);

  const handleLangChange = useCallback((e: Event) => {
    setLang((e.target as HTMLSelectElement).value as Language);
  }, []);

  return (
    <main class="container-fluid">
      <nav>
        <ul>
          <li><strong>{i18n.t("page.title")}</strong></li>
        </ul>
        <ul>
          <NavButtons i18n={i18n} />
          <li><LanguageSelect value={lang} onChange={handleLangChange} /></li>
        </ul>
      </nav>

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
    </main>
  );
}
