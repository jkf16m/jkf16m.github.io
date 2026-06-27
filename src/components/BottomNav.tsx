import { useState, useEffect, useCallback } from "preact/hooks";
import type { I18n } from "../lib/i18n";
import { BriefcaseIcon, RocketIcon, ToolsIcon, MailIcon } from "./Icons";
import type { ComponentChildren } from "preact";

interface NavItem {
  id: string;
  labelKey: string;
  icon: ComponentChildren;
}

const NAV_ITEMS: NavItem[] = [
  { id: "experience", labelKey: "page.experience.nav", icon: <BriefcaseIcon size={24} /> },
  { id: "projects", labelKey: "page.projects.nav", icon: <RocketIcon size={24} /> },
  { id: "skills", labelKey: "page.skills.nav", icon: <ToolsIcon size={24} /> },
  { id: "contact", labelKey: "page.contact.nav", icon: <MailIcon size={24} /> },
];

export function BottomNav({ i18n }: { i18n: I18n }) {
  const [activeSection, setActiveSection] = useState<string>("experience");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav class="bottom-nav" role="navigation" aria-label="Mobile navigation">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          class={`bottom-nav-item ${activeSection === item.id ? "active" : ""}`}
          onClick={() => handleNavClick(item.id)}
          aria-label={i18n.t(item.labelKey)}
          aria-current={activeSection === item.id ? "page" : undefined}
        >
          <span class="bottom-nav-icon" aria-hidden="true">{item.icon}</span>
          <span class="bottom-nav-label">{i18n.t(item.labelKey)}</span>
        </button>
      ))}
    </nav>
  );
}
