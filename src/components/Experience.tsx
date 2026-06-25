import { experiences } from "../lib/portfolioData";
import type { I18n } from "../lib/i18n";

export function Experience({ i18n }: { i18n: I18n }) {
  return (
    <section id="experience">
      <h2>{i18n.t("page.experience.nav")}</h2>
      {experiences.map((exp) => (
        <article class="experience-card" key={exp.translationKey}>
          <header>
            <div>
              <strong>{i18n.t(`page.experience.${exp.translationKey}.name`)}</strong>
              <span class="company">{i18n.t(`page.experience.${exp.translationKey}.company`)}</span>
            </div>
            <small>{i18n.t(`page.experience.${exp.translationKey}.duration`)}</small>
          </header>
          <p>{i18n.t(`page.experience.${exp.translationKey}.description`)}</p>
          {exp.remarksCount > 0 && (
            <ul>
              {Array.from({ length: exp.remarksCount }, (_, i) => (
                <li key={i + 1}>
                  {i18n.t(`page.experience.${exp.translationKey}.remark.${i + 1}`)}
                </li>
              ))}
            </ul>
          )}
          <footer>
            <div class="tech-tags">
              {exp.usedTechnologies.map((t) => (
                <span class="tech-tag" key={t}>
                  {i18n.t(`components.project.technologies.${t}`) || t}
                </span>
              ))}
            </div>
          </footer>
        </article>
      ))}
    </section>
  );
}
