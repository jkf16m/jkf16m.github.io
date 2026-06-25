import { education } from "../lib/portfolioData";
import type { I18n } from "../lib/i18n";

export function Education({ i18n }: { i18n: I18n }) {
  return (
    <section id="education">
      <h2>{i18n.t("page.education.nav")}</h2>
      {education.map((edu) => (
        <article class="experience-card" key={edu.translationKey}>
          <header>
            <strong>{i18n.t(`page.education.${edu.translationKey}.name`)}</strong>
            <small>{i18n.t(`page.education.${edu.translationKey}.duration`)}</small>
          </header>
          <p>{i18n.t(`page.education.${edu.translationKey}.school`)}</p>
        </article>
      ))}
    </section>
  );
}
