import type { I18n } from "../lib/i18n";

export function NavButtons({ i18n }: { i18n: I18n }) {
  const links = [
    { href: "#experience", key: "page.experience.nav" },
    { href: "#projects", key: "page.projects.nav" },
    { href: "#skills", key: "page.skills.nav" },
    { href: "#contact", key: "page.contact.nav" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{i18n.t(link.key)}</a>
        </li>
      ))}
    </>
  );
}
