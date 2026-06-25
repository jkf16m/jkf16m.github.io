import type { I18n } from "../lib/i18n";

export function Footer({ i18n }: { i18n: I18n }) {
  return (
    <footer class="site-footer">
      <p class="made-with">{i18n.t("page.footer.madeWith")}</p>
      <p class="motto">{i18n.t("page.footer.motto")}</p>
      <small class="copyright">{i18n.t("page.footer.copyright")}</small>
    </footer>
  );
}
