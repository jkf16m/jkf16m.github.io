/**
 * Budget.tsx — Budget page
 *
 * Shows the budget breakdown for the portfolio.
 */

import { Link, Title } from "~/components";

export function Budget() {
  return (
    <article>
      <Title>The Budget</Title>
      <Title as="h2">$10 and a dream.</Title>
      <Link href="/">
        <Title as="span">← Back home</Title>
      </Link>
    </article>
  );
}
