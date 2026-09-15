/**
 * Link.tsx — Link component
 *
 * Client-side navigation using preact-iso's useLocation.
 */

import { ComponentChildren } from "preact";
import { useLocation } from "preact-iso/router";

type LinkProps = {
  href: string;
  className?: string;
  children: ComponentChildren;
};

export function Link({ href, className, children }: LinkProps) {
  const { route } = useLocation();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    route(href);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
