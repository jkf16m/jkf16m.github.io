import { useEffect, useRef } from "preact/hooks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { I18n } from "../lib/i18n";
import { Title } from "./Title";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  i18n: I18n;
  /** Extra height (px) added after hero so scroll range exists */
  scrollPadding?: number;
  /** Amount in USD to display in the title */
  amountUsd?: number;
}

export function HeroSection({ i18n, scrollPadding = 400, amountUsd = 10000 }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const glow = glowRef.current;
    if (!section || !title || !subtitle || !glow) return;

    // Main timeline: pinned while the hero is in view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${scrollPadding}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Title: scale down + shift up + fade
    tl.to(title, {
      scale: 0.35,
      y: -60,
      opacity: 0,
      ease: "none",
    });

    // Subtitle: move to center-right and fade
    tl.to(
      subtitle,
      {
        x: 80,
        y: -20,
        opacity: 0,
        ease: "none",
      },
      0
    );

    // Glow: expand then fade
    tl.to(
      glow,
      {
        scale: 2.5,
        opacity: 0,
        ease: "none",
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, [scrollPadding]);

  const subtitle = i18n.t("page.home.subtitle");

  return (
    <>
      <section ref={sectionRef} class="hero-section">
        <div ref={glowRef} class="hero-glow" aria-hidden="true" />
        <div ref={titleRef} class="hero-title-wrapper">
          <Title amountUsd={amountUsd} i18n={i18n} />
        </div>
        <p ref={subtitleRef} class="hero-subtitle">
          {subtitle}
        </p>
      </section>
      {/* Spacer gives ScrollTrigger room to animate */}
      <div style={`height: ${scrollPadding}px`} aria-hidden="true" />
    </>
  );
}
