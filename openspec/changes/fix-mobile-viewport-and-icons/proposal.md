## Why

The mobile experience is broken in several critical ways: titles are truncated, the welcome/greeting section is completely skipped on mobile devices (jumping straight to Experiences), and the navigation bar icons use emojis that don't adapt to dark/light themes and look unprofessional. These issues make the site unusable on mobile and damage the professional appearance.

## What Changes

- Fix viewport/sizing issues that cause titles to be cut off on mobile screens
- Ensure the greetings/welcome section is visible on mobile instead of being skipped
- Update navigation bar background color to adapt based on mobile device theme (dark or light)
- Replace emoji icons with proper SVG icons that work in both dark and light themes
- Ensure all icons and buttons are accessible and visually clear across all screen sizes

## Capabilities

### New Capabilities
- `mobile-viewport-fix`: Responsive layout fixes to ensure all sections are visible and properly sized on mobile devices
- `adaptive-navigation`: Navigation bar that adapts its background color based on the user's device theme preference
- `svg-icon-system`: Replace emoji icons with a proper SVG icon set that works in both dark and light themes

### Modified Capabilities

None - this is fixing broken behavior, not changing existing specifications.

## Impact

- **Components**: Navigation bar, greeting/welcome section, title components
- **Styles**: Mobile responsive styles, theme-aware color variables
- **Assets**: New SVG icon files needed (replacing emoji characters)
- **Dependencies**: Potentially needs a theme detection utility or CSS media query for `prefers-color-scheme`
