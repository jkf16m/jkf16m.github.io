import type { Meta, StoryObj } from "@storybook/preact";
import { HeroSection } from "./HeroSection";
import type { I18n } from "../lib/i18n";

/* ── Mock i18n ─────────────────────────────────────── */
const enI18n: I18n = {
  lang: "en",
  t: (key: string) => {
    const map: Record<string, string> = {
      "page.home.greetings": "José Daniel Flores Morales",
      "page.home.subtitle":
        "Software Engineer · AI-Driven Solutions · Fullstack · Cloud Architectures",
      "page.home.welcome": "Welcome to my portfolio",
    };
    return map[key] ?? key;
  },
};

const esI18n: I18n = {
  lang: "es",
  t: (key: string) => {
    const map: Record<string, string> = {
      "page.home.greetings": "José Daniel Flores Morales",
      "page.home.subtitle":
        "Ingeniero de Software · Soluciones con IA · Fullstack · Arquitectura en la Nube",
      "page.home.welcome": "Bienvenido a mi portafolio",
    };
    return map[key] ?? key;
  },
};

/* ── Meta ──────────────────────────────────────────── */
const meta: Meta = {
  title: "Components/HeroSection",
  argTypes: {
    scrollPadding: {
      control: { type: "range", min: 100, max: 1000, step: 50 },
      description: "Extra scroll height (px) after hero for animation range",
    },
    lang: {
      control: { type: "select" },
      options: ["en", "es"],
      description: "Language for i18n strings",
    },
  },
};

export default meta;

/* ── Helper: wraps story in a scrollable frame ─────── */
function ScrollWrapper({
  children,
  height = "100vh",
}: {
  children: preact.ComponentChildren;
  height?: string;
}) {
  return (
    <div style={`height: ${height}; overflow-y: auto; background: var(--color-bg);`}>
      {children}
      {/* big footer to ensure enough scroll space */}
      <div
        style="height: 200vh; display: flex; align-items: center; justify-content: center; color: var(--color-text-muted); font-size: 1.2rem;"
      >
        ↓ Scroll up to see the hero animation
      </div>
    </div>
  );
}

/* ── Stories ───────────────────────────────────────── */
export const Default: StoryObj = {
  render: (args) => {
    const i18n = args.lang === "es" ? esI18n : enI18n;
    return (
      <ScrollWrapper>
        <HeroSection i18n={i18n} scrollPadding={args.scrollPadding} />
      </ScrollWrapper>
    );
  },
  args: {
    scrollPadding: 400,
    lang: "en",
  },
};

export const Spanish: StoryObj = {
  render: (args) => (
    <ScrollWrapper>
      <HeroSection i18n={esI18n} scrollPadding={args.scrollPadding} />
    </ScrollWrapper>
  ),
  args: {
    scrollPadding: 400,
  },
};

export const ShortScroll: StoryObj = {
  name: "Short Scroll Range (200px)",
  render: (args) => {
    const i18n = args.lang === "es" ? esI18n : enI18n;
    return (
      <ScrollWrapper>
        <HeroSection i18n={i18n} scrollPadding={args.scrollPadding} />
      </ScrollWrapper>
    );
  },
  args: {
    scrollPadding: 200,
    lang: "en",
  },
};

export const LongScroll: StoryObj = {
  name: "Long Scroll Range (800px)",
  render: (args) => {
    const i18n = args.lang === "es" ? esI18n : enI18n;
    return (
      <ScrollWrapper>
        <HeroSection i18n={i18n} scrollPadding={args.scrollPadding} />
      </ScrollWrapper>
    );
  },
  args: {
    scrollPadding: 800,
    lang: "en",
  },
};
