/**
 * Link.tsx — Link component
 *
 * Simple anchor tag with client-side navigation.
 */

import { ComponentChildren } from "preact";

type LinkProps = {
  href: string;
  children: ComponentChildren;
  class?: string;
};

export function Link({ href, children, class: className }: LinkProps) {
  return (
    <a href={href} class={className}>
      {children}
    </a>
  );
}
