## Context

The portfolio is a Preact-based single-page application with sections stacked vertically: Experience, Projects, Skills, and Contact. On desktop, a top navigation bar with anchor links allows jumping between sections. On mobile, this layout is functional but generic — it doesn't leverage native mobile interaction patterns.

The goal is to transform the mobile experience into a swipeable, app-like interface while leaving the desktop layout completely unchanged.

## Goals / Non-Goals

**Goals:**
- Create a vertical snap-scroll experience on mobile where each section is a full-screen "page"
- Add a fixed bottom navigation bar styled like native phone OS UI (dark background, white text/icons)
- Keep desktop layout identical to current state
- Use CSS scroll-snap for performant, native-feeling scroll behavior
- Scope all changes to mobile viewports via media queries

**Non-Goals:**
- Changing the desktop layout or navigation
- Adding animations or transitions between sections (snap-scroll handles this natively)
- Changing the content or structure of individual sections
- Adding new dependencies or frameworks

## Decisions

### 1. Vertical snap-scroll over horizontal swipe

**Decision**: Use CSS `scroll-snap-type: y mandatory` with sections at `100vh`.

**Rationale**: Vertical scrolling is the natural mobile gesture. Content-heavy sections like Experience and Projects need vertical space. Horizontal swipe would require cramming content into narrow viewports or adding nested scroll, which creates gesture conflicts.

**Alternatives considered**:
- Horizontal swipe (like a carousel): Rejected — poor fit for text-heavy content, requires complex gesture handling
- JavaScript-based snapping: Rejected — CSS scroll-snap is native, performant, and requires no JS

### 2. Bottom navigation bar position and styling

**Decision**: Fixed bottom bar with dark background (`#1a1a2e` or similar), white icons/text, and pill-shaped active indicators. Styled to blend with phone system UI.

**Rationale**: Bottom navigation is the standard pattern for mobile apps (Material Design, iOS HIG). Dark styling with white elements creates a seamless look with phone bezels and system bars.

**Alternatives considered**:
- Floating action button: Rejected — doesn't provide clear section navigation
- Side dots/indicators: Rejected — less discoverable, harder to tap
- Top nav bar (current): Rejected — takes up vertical space, feels like desktop

### 3. Section content sizing

**Decision**: Each section gets `min-height: 100vh` with internal scroll if content overflows. Sections with more content (Experience, Projects) scroll internally within their snap point.

**Rationale**: Some sections have too much content for a single viewport. Allowing internal scroll within a snapped section maintains the snap experience while accommodating variable content lengths.

**Alternatives considered**:
- Condensed mobile versions of each section: Rejected — too much work, loses detail
- Truncating content with "tap to expand": Rejected — breaks the snap flow
- Equal-height cards: Rejected — loses important content

### 4. Media query breakpoint

**Decision**: Use `@media (max-width: 768px)` to scope all mobile styles. Desktop (769px+) retains current layout.

**Rationale**: 768px is the standard tablet/phone breakpoint. All mobile-specific CSS (snap-scroll, bottom nav, section sizing) is scoped within this query.

## Risks / Trade-offs

- **Content overflow on small screens** → Sections with long content will require internal scroll. Mitigation: Test on various phone sizes (iPhone SE, Pixel, etc.) and adjust padding/font sizes as needed.
- **Snap points fighting with internal scroll** → If a section has internal scroll, the snap container might intercept scroll events. Mitigation: Use `overflow-y: auto` on section children, not the snap container itself.
- **Bottom nav overlapping content** → Fixed bottom bar could obscure the bottom of each section. Mitigation: Add `padding-bottom` to sections equal to the nav bar height.
- **Performance on older devices** → CSS scroll-snap is hardware-accelerated on modern browsers. Mitigation: Fallback to normal scroll if snap causes issues (progressive enhancement).
