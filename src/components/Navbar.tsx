/*
 * Navbar.tsx — Transparent fixed navbar
 *
 * A minimal, see-through navbar that stays fixed at the top.
 * Renders a slot for right-side controls (e.g. ThemeToggle).
 * Depends on co-located Navbar.css for styling.
 */

import { ComponentChildren } from "preact";
import "./Navbar.css";

interface NavbarProps {
  right?: ComponentChildren;
}

export function Navbar({ right }: NavbarProps) {
  return (
    <nav class="navbar">
      <div class="navbar-inner">
        <span class="navbar-brand">jkf16m</span>
        {right && <div class="navbar-right">{right}</div>}
      </div>
    </nav>
  );
}
