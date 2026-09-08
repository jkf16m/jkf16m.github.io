# Components — Portfolio

This directory contains the Preact UI components for the portfolio site (root: `src/components`).

## Tech Stack & Conventions

- **Framework:** [Preact](https://preactjs.com/) (`^10.25`), functional components only.
- **Styling:** **Plain CSS** — there is NO SCSS/Sass, CSS-in-JS, or utility framework (no Tailwind, etc.).
  All styles live in `src/styles.css`, which defines the design-token CSS variables
  (`--color-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--font-*`, `--transition`). Components
  reference these variables via `var(--token)`. Theme switching (dark default / light) is driven
  entirely by `@media (prefers-color-scheme: light)` in `src/styles.css` — there is **no** manual
  toggle and **no** `localStorage` persistence yet.
- **i18n:** Components receive an `I18n` object as an `{ i18n }` prop (imported as
  `import type { I18n } from "../lib/i18n"`) and look up strings via `i18n.t("key")`. Do not
  hardcode visible text — use translation keys (EN + ES).
- **Data:** Some components read data from `../lib/portfolioData` and render via translation keys.
- **Class names:** Use the kebab-case classes already defined in `src/styles.css`; do not inline
  styles or add new CSS without also updating `src/styles.css`.

## Component Rules (IMPORTANT)

1. **Fully self-contained, presentational components.** A component should not render a whole page
   or manage global app state. The root layout lives in `../App.tsx`.
2. **Every component file MUST have a matching Storybook story file** in this same directory, named
   `<ComponentName>.stories.tsx`. Stories must cover all visual variants/states (e.g. EN and ES
   variants for i18n components) and use `argTypes` to expose interactive controls where applicable.
   Preview with `pnpm storybook` and get developer approval before merging. See `../AGENTS.md` at the
   repo root for the full policy.
3. **Accessibility:** use semantic elements, `aria-label`/`aria-current` where appropriate, and
   `role="img"` for icons. Follow patterns already present (e.g. `BottomNav.tsx`).

## Component Inventory

| Component | File | Purpose |
|-----------|------|---------|
| `Experience` | `Experience.tsx` | Work experience cards list (data from `portfolioData` + i18n) |
| `Projects` | `Projects.tsx` | Projects section (placeholder list) |
| `Skills` | `Skills.tsx` | Skills grid grouped by category |
| `Certifications` | `Certifications.tsx` | Certification badges list |
| `Education` | `Education.tsx` | Education section |
| `Contact` | `Contact.tsx` | Contact card with links |
| `Footer` | `Footer.tsx` | Site footer (credits, motto, copyright) |
| `GoToTop` | `GoToTop.tsx` | Floating button that scrolls to top after scrolling 300px |
| `BottomNav` | `BottomNav.tsx` | Mobile-only bottom navigation bar with active-section tracking (IntersectionObserver) |
| `LanguageSelect` | `LanguageSelect.tsx` | EN/ES language `<select>` — receives `{ value, onChange }` props |
| `NavButtons` | `NavButtons.tsx` | Desktop nav links (no story file — utility) |
| `Icons` | `Icons.tsx` | SVG icon set (Briefcase, Rocket, Tools, Mail, etc.). See `ICONS.md` |
| `Certifications`/etc. `.stories.tsx` | — | Storybook stories for the above components |

## Adding a New Component

1. Create `<Name>.tsx` here as a self-contained presentational component.
2. Add `<Name>.stories.tsx` covering all variants/states.
3. Wire it into `../App.tsx` if it renders on a page (and add any needed CSS to `src/styles.css` +
   translation keys to `src/lib/i18n.ts`).
4. Run `pnpm storybook` to preview and get developer approval before merging.
