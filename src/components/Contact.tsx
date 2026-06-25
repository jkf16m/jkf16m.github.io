import type { I18n } from "../lib/i18n";

export function Contact({ i18n }: { i18n: I18n }) {
  return (
    <section id="contact">
      <h2>{i18n.t("page.contact.nav")}</h2>
      <div class="contact-card">
        <div class="contact-item">
          <span class="contact-label">Email</span>
          <a href={`mailto:${i18n.t("page.contact.email")}`}>
            {i18n.t("page.contact.email")}
          </a>
        </div>
        <div class="contact-item">
          <span class="contact-label">Phone</span>
          <a href={`tel:${i18n.t("page.contact.phone")}`}>
            {i18n.t("page.contact.phone")}
          </a>
        </div>
        <div class="contact-item">
          <span class="contact-label">{i18n.t("page.contact.location")}</span>
        </div>
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/jos%C3%A9-daniel-flores-morales-25305a18a" target="_blank" rel="noopener">
            {i18n.t("page.contact.linkedin")}
          </a>
          <a href="https://github.com/jkf16m" target="_blank" rel="noopener">
            {i18n.t("page.contact.github")}
          </a>
          <a href="https://hackerrank.com/jkf16m" target="_blank" rel="noopener">
            {i18n.t("page.contact.hackerrank")}
          </a>
        </div>
      </div>
    </section>
  );
}
