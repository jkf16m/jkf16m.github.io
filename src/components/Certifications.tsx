import type { I18n } from "../lib/i18n";

export function Certifications({ i18n }: { i18n: I18n }) {
  return (
    <section id="certifications">
      <h2>{i18n.t("page.certifications.nav")}</h2>
      <div class="cert-list">
        <span class="cert-badge">{i18n.t("page.certifications.azure")}</span>
        <span class="cert-badge">{i18n.t("page.certifications.english")}</span>
      </div>
    </section>
  );
}
