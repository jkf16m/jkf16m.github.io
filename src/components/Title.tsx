/**
 * Title.tsx — Polymorphic title component
 *
 * Renders an h1 by default. Use `as` to change the heading level.
 */

import { ComponentChildren } from "preact";

type TitleProps = {
  as?: string;
  className?: string;
  children: ComponentChildren;
  [key: string]: unknown;
};

export function Title({ as, className, children, ...rest }: TitleProps) {
  const Tag = as || "h1";
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
}
