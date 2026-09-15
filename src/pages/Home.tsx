/**
 * Home.tsx — Home page
 *
 * The landing page of the portfolio.
 */

import { Hero } from "~/components";

export function Home() {
  return (
    <article
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Hero>
        <Hero.UsageTitle />
        <Hero.Subtitle>Transparent AI spending, built in public.</Hero.Subtitle>
        <Hero.Link href="/budget">See the budget →</Hero.Link>
      </Hero>
    </article>
  );
}
