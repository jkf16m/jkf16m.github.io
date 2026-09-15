/**
 * Home.tsx — Home page
 *
 * The landing page of the portfolio.
 */

import { Link, Title } from "~/components";

export function Home() {
  return (
    <article>
      <Title>The $10 Portfolio</Title>
      <Title as="h2">Building something from nothing.</Title>
      <Link href="/budget">
        <Title as="span">See the budget →</Title>
      </Link>
    </article>
  );
}
