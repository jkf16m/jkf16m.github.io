import { skills } from "../lib/portfolioData";
import type { I18n } from "../lib/i18n";

export function Skills({ i18n }: { i18n: I18n }) {
  return (
    <section id="skills">
      <h2>{i18n.t("page.skills.nav")}</h2>
      <div class="skills-grid">
        {skills.map((cat) => (
          <div class="skill-category" key={cat.translationKey}>
            <h3>{i18n.t(`page.skills.${cat.translationKey}`)}</h3>
            <div class="tech-tags">
              {cat.items.map((item) => (
                <span class="tech-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
