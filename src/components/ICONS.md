# SVG Icon System

This document describes the SVG icon system used in the portfolio navigation.

## Available Icons

| Icon | Component | Use Case |
|------|-----------|----------|
| Briefcase | `BriefcaseIcon` | Experience section |
| Rocket | `RocketIcon` | Projects section |
| Tools | `ToolsIcon` | Skills section |
| Mail | `MailIcon` | Contact section |

## Usage

```tsx
import { BriefcaseIcon, RocketIcon } from "./Icons";

// Default size (24x24)
<BriefcaseIcon />

// Custom size
<RocketIcon size={32} />

// With custom class
<ToolsIcon class="my-custom-class" />

// Decorative (hidden from screen readers)
<MailIcon aria-hidden={true} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `class` | `string` | - | Additional CSS class |
| `aria-hidden` | `boolean` | - | Hide from screen readers |

## Theme Support

All icons use `currentColor` for their stroke color, which means they automatically inherit the text color from their parent element. This makes them theme-aware without any additional configuration.

## Adding New Icons

1. Create a new SVG component in `Icons.tsx`
2. Use `stroke="currentColor"` for theme support
3. Add `role="img"` for accessibility
4. Export the component
5. Use consistent sizing (default 24x24)

## Accessibility

- All icons have `role="img"` by default
- Navigation icons are wrapped in buttons with `aria-label`
- Icon containers have `aria-hidden="true"` since the button provides the accessible name
