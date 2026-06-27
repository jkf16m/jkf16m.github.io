## ADDED Requirements

### Requirement: SVG icons replace emojis
The system SHALL use SVG icons instead of emoji characters for all navigation and interactive elements.

#### Scenario: No emojis in navigation
- **WHEN** the navigation bar or interactive buttons are rendered
- **THEN** all icons are SVG elements, not emoji characters

#### Scenario: Consistent icon style
- **WHEN** multiple icons are displayed together
- **THEN** all icons share a consistent visual style (stroke weight, sizing, coloring)

### Requirement: Theme-aware icon coloring
The system SHALL render SVG icons with colors that adapt to the current theme.

#### Scenario: Dark theme icon colors
- **WHEN** the site is in dark mode
- **THEN** SVG icons use light colors (white or near-white) for visibility

#### Scenario: Light theme icon colors
- **WHEN** the site is in light mode
- **THEN** SVG icons use dark colors (dark gray or black) for visibility

#### Scenario: Icon color transitions
- **WHEN** the theme changes (if supported)
- **THEN** icon colors transition smoothly without flickering

### Requirement: Icon accessibility
The system SHALL ensure all SVG icons are accessible to assistive technologies.

#### Scenario: Screen reader support
- **WHEN** a screen reader encounters an SVG icon
- **THEN** the icon has appropriate aria-label or title attribute describing its function

#### Scenario: Decorative vs informative icons
- **WHEN** an icon is purely decorative
- **THEN** it has aria-hidden="true" to be ignored by screen readers

#### Scenario: Interactive icon buttons
- **WHEN** an icon is part of a clickable button
- **THEN** the button has an accessible name (via aria-label or visible text)

### Requirement: Icon sizing and consistency
The system SHALL display all icons at consistent, appropriate sizes.

#### Scenario: Navigation icon size
- **WHEN** icons appear in the navigation bar
- **THEN** all icons are the same size (e.g., 24x24 or 32x32 pixels)

#### Scenario: Icon scaling with viewport
- **WHEN** the viewport size changes
- **THEN** icons scale appropriately while maintaining their proportions

### Requirement: Clear and professional icon appearance
The system SHALL use icons that are visually clear and professional.

#### Scenario: Sharp rendering at all sizes
- **WHEN** icons are displayed on any device
- **THEN** they render sharply without pixelation or blurriness

#### Scenario: Appropriate icon complexity
- **WHEN** icons are displayed at small sizes
- **THEN** they remain recognizable without excessive detail that becomes muddy
