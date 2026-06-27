## Context

The portfolio website currently has critical mobile responsiveness issues. On mobile devices:
1. Titles are truncated/cut off due to overflow or sizing constraints
2. The welcome/greeting section is completely skipped, jumping directly to the Experiences section
3. Navigation bar uses emoji icons that don't adapt to dark/light themes
4. Bottom navigation bar background color doesn't match the device's theme

These issues significantly impact user experience on mobile, which likely represents a substantial portion of visitors.

## Goals / Non-Goals

**Goals:**
- Ensure all content sections are visible and properly sized on mobile viewports
- Make the welcome/greeting section visible and properly displayed on mobile
- Create a theme-aware navigation bar that adapts to user's device preference
- Replace emojis with professional SVG icons that work in both themes
- Maintain existing desktop experience while fixing mobile

**Non-Goals:**
- Redesigning the overall site architecture
- Adding new sections or content
- Changing the site's visual identity beyond fixing the broken mobile experience
- Supporting very old browsers (will focus on modern mobile browsers)

## Decisions

### Decision 1: Use CSS Media Queries for Theme Detection
**Choice**: Use `@media (prefers-color-scheme: dark)` CSS media query
**Alternative**: JavaScript-based theme detection with localStorage persistence
**Rationale**: CSS media queries are simpler, don't require JavaScript, and automatically sync with system settings. No need for custom theme toggling since the site should respect user's system preference.

### Decision 2: SVG Icons as Inline Components
**Choice**: Create SVG icon components that accept theme-aware colors
**Alternative**: Use an icon library like Lucide or Heroicons
**Rationale**: Inline SVGs give full control over colors and styling, work without external dependencies, and can be easily themed with CSS variables. Since we only need a few icons (likely 3-5 for navigation), a small custom set is more maintainable.

### Decision 3: Fix Layout Issues with Responsive Units
**Choice**: Use viewport units (vw, vh) and clamp() for typography and spacing
**Alternative**: Fixed breakpoints with specific pixel values
**Rationale**: Fluid typography with clamp() provides smooth scaling across all viewport sizes without needing multiple breakpoints. This is more maintainable and provides better visual continuity.

### Decision 4: Navigation Bar Positioning
**Choice**: Fixed bottom navigation on mobile with proper safe area insets
**Alternative**: Keep navigation at top with hamburger menu
**Rationale**: Bottom navigation is more thumb-friendly on mobile and matches modern mobile UX patterns. Using `env(safe-area-inset-bottom)` ensures it works with notched phones.

## Risks / Trade-offs

**Risk**: Changing navigation position may confuse existing desktop users
→ **Mitigation**: Only apply bottom nav on mobile viewports (use media queries), keep desktop nav as-is

**Risk**: SVG icons may require more markup than emojis
→ **Mitigation**: Create reusable icon components to keep code clean and maintainable

**Risk**: `prefers-color-scheme` may not be supported in older browsers
→ **Mitigation**: Provide a light theme as default fallback; dark theme is enhancement

**Risk**: Fluid typography with clamp() may not work in very old browsers
→ **Mitigation**: Provide fallback pixel values before the clamp() function

**Trade-off**: Using inline SVGs increases HTML size slightly vs emojis
→ **Acceptable**: The visual quality and theme adaptability justify the minimal size increase

## Implementation Approach

1. Audit current mobile styles to identify exact causes of:
   - Title truncation (likely overflow or fixed widths)
   - Missing welcome section (likely display:none or height:0 on mobile)

2. Add responsive styles using:
   - `clamp()` for fluid typography
   - Relative units (rem, em) instead of fixed pixels where appropriate
   - Proper mobile viewport meta tag if missing

3. Create SVG icon components with:
   - Theme-aware fill/stroke colors using CSS variables
   - Consistent sizing across all icons
   - Accessibility attributes (aria-label, role="img")

4. Update navigation component to:
   - Position fixed at bottom on mobile
   - Use CSS variables for background color that respond to prefers-color-scheme
   - Apply safe area insets for notched devices
