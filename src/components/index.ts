/**
 * UI component library for the portfolio.
 * Depends on ../lib/i18n for translation support.
 *
 * Every component must have:
 * - A corresponding <ComponentName>.stories.tsx file
 * - Stories for all visual variants (EN/ES)
 * - argTypes for interactive controls where applicable
 *
 * Preview stories with: pnpm storybook
 *
 * ## CSS Architecture
 *
 * Each component owns its styles via a co-located CSS file:
 * - Component styles: `./ComponentName.css`
 * - Theme tokens & globals: `../styles.css`
 *
 * Components import their CSS directly:
 * ```ts
 * import "./ComponentName.css";
 * ```
 *
 * Benefits:
 * - Composable: each component is self-contained
 * - Themeable: components reference CSS variables from styles.css
 * - Maintainable: no monolithic stylesheet
 * - Tree-shakeable: only load styles for used components
 *
 * For stricter scoping, use CSS Modules (*.module.css).
 */

export { HeroSection } from "./HeroSection";
export { Navbar } from "./Navbar";
export { ThemeToggle } from "./ThemeToggle";
export { Title } from "./Title";
