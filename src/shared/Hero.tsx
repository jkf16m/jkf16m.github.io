/**
 * Hero.tsx — Compound hero component
 *
 * Compose <Hero>, <Hero.Title>, <Hero.Subtitle>, <Hero.Link> together.
 * Uses Tailwind classes for styling.
 */

import { ComponentChildren } from "preact";
import { Link as RouterLink } from "~/shared/Link";
import { UsageSpan } from "~/home/UsageSpan";
import { useI18n } from "~/lib/i18n";
import type { Currency } from "~/lib/currency";

type HeroRootProps = {
  children: ComponentChildren;
  class?: string;
};

function HeroRoot({ children, class: className }: HeroRootProps) {
  return (
    <div class={`text-center ${className || ""}`}>
      {children}
    </div>
  );
}

type HeroTitleProps = {
  children: ComponentChildren;
};

function HeroTitle({ children }: HeroTitleProps) {
  return (
    <h1 class="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
      {children}
    </h1>
  );
}

type HeroSubtitleProps = {
  children: ComponentChildren;
};

function HeroSubtitle({ children }: HeroSubtitleProps) {
  return (
    <h2 class="text-lg md:text-xl opacity-70 mb-8">
      {children}
    </h2>
  );
}

type HeroLinkProps = {
  href: string;
  children: ComponentChildren;
};

function HeroLink({ href, children }: HeroLinkProps) {
  return (
    <RouterLink href={href}>
      <span class="text-base md:text-lg opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
        {children}
      </span>
    </RouterLink>
  );
}

export const Hero = Object.assign(HeroRoot, {
  Title: HeroTitle,
  Subtitle: HeroSubtitle,
  Link: HeroLink,
  UsageTitle: function HeroUsageTitle({ currency, onToggleCurrency }: { currency: Currency; onToggleCurrency: (c: Currency) => void }) {
    const { t } = useI18n();
    return (
      <HeroTitle>
        <span class="block">{t("hero.title")}</span>
        <span class="block"><UsageSpan currency={currency} onToggleCurrency={onToggleCurrency} /></span>
      </HeroTitle>
    );
  },
});
