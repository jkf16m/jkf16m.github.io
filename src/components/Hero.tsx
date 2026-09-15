/**
 * Hero.tsx — Compound hero component
 *
 * Compose <Hero>, <Hero.Title>, <Hero.Subtitle>, <Hero.Link> together.
 * Consumes CSS variables for sizing — pages control the look.
 */

import { ComponentChildren } from "preact";
import { Link as RouterLink } from "~/components/Link";
import { Title } from "~/components/Title";
import { UsageSpan } from "~/components/UsageSpan";

type HeroRootProps = {
  children: ComponentChildren;
  class?: string;
};

function HeroRoot({ children, class: className }: HeroRootProps) {
  return (
    <div class={className} style={{ textAlign: "center" }}>
      {children}
    </div>
  );
}

type HeroTitleProps = {
  children: ComponentChildren;
};

function HeroTitle({ children }: HeroTitleProps) {
  return (
    <Title style={{ fontSize: "var(--hero-font-size)", lineHeight: 1.1, marginBottom: "1rem" }}>
      {children}
    </Title>
  );
}

type HeroSubtitleProps = {
  children: ComponentChildren;
};

function HeroSubtitle({ children }: HeroSubtitleProps) {
  return (
    <Title as="h2" style={{ fontSize: "var(--hero-subtitle-size)", opacity: 0.7, marginBottom: "2rem" }}>
      {children}
    </Title>
  );
}

type HeroLinkProps = {
  href: string;
  children: ComponentChildren;
};

function HeroLink({ href, children }: HeroLinkProps) {
  return (
    <RouterLink href={href}>
      <Title as="span" style={{ fontSize: "var(--hero-link-size)", opacity: 0.6, cursor: "pointer" }}>
        {children}
      </Title>
    </RouterLink>
  );
}

export const Hero = Object.assign(HeroRoot, {
  Title: HeroTitle,
  Subtitle: HeroSubtitle,
  Link: HeroLink,
  UsageTitle: function HeroUsageTitle() {
    return (
      <HeroTitle>
        The Portfolio of <UsageSpan /> USD
      </HeroTitle>
    );
  },
});
