/**
 * Title.tsx — Polymorphic title component
 *
 * Renders as h1 by default, or any element via `as` prop.
 */

import { ComponentChildren } from "preact";

type TitleProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children: ComponentChildren;
  class?: string;
  style?: Record<string, string>;
};

export function Title({ as: Tag = "h1", children, class: className, style }: TitleProps) {
  return (
    <Tag class={className} style={style}>
      {children}
    </Tag>
  );
}
