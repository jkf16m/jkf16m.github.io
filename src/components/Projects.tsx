import { projects } from "../lib/portfolioData";
import type { I18n } from "../lib/i18n";

export function Projects({ i18n }: { i18n: I18n }) {
  return (
    <section id="projects">
      <h2>{i18n.t("page.projects.nav")}</h2>
      {projects.map((proj) => (
        <article class="experience-card" key={proj.translationKey}>
          <header>
            <strong>{i18n.t(`page.projects.${proj.translationKey}.name`)}</strong>
          </header>
          <p>{i18n.t(`page.projects.${proj.translationKey}.description`)}</p>
          <ul>
            <li>{i18n.t(`page.projects.${proj.translationKey}.remark.1`)}</li>
            <li>{i18n.t(`page.projects.${proj.translationKey}.remark.2`)}</li>
          </ul>
          <footer>
            <div class="tech-tags">
              {proj.technologies.map((t) => (
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
