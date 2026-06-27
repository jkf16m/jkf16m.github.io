## Context

The portfolio is a Preact single-page app with a sticky header containing the site title ("Portfolio"), navigation links (hidden on mobile), and a language selector dropdown. On mobile viewports (≤768px), this header consumes ~60px of vertical space. Combined with the 56px bottom navigation bar, only ~728px of an 844px viewport (iPhone 14) is available for content.

Current mobile header structure:
```
<nav>
  <ul><li><strong>Portfolio</strong></li></ul>
  <NavButtons /> (hidden on mobile)
  <ul><li><LanguageSelect /></li></ul>
</nav>
```

## Goals / Non-Goals

**Goals:**
- Reduce header height on mobile from ~60px to ~40px or less
- Keep site identity visible (users should know they're on the portfolio)
- Keep language switching accessible without adding taps
- Maximize content viewport area
- Maintain desktop layout completely unchanged

**Non-Goals:**
- Removing the header entirely (breaks navigation expectations)
- Moving language selector to bottom nav (changes interaction pattern)
- Adding hamburger menu (overkill for this simple nav)
- Changing desktop layout

## Decisions

### 1. Compact header with inline title and selector

**Decision**: On mobile, display "Portfolio" title and language selector on a single row with reduced padding and font size.

**Rationale**: Single-row layout eliminates the vertical stacking that wastes space. Reducing padding and font size can cut header height by 30-40% while keeping both elements visible.

**Alternatives considered**:
- Hide title on scroll: Rejected — loses site identity, requires JS scroll detection
- Move language to bottom nav: Rejected — changes established interaction pattern
- Floating action button for language: Rejected — over-engineered for a dropdown

### 2. Reduced padding and typography

**Decision**: Use smaller padding (8px vertical vs current 16px+) and reduce title font size from 1.1rem to 0.95rem on mobile.

**Rationale**: Simple CSS changes with no component restructure. The title is secondary to content on mobile — users already know where they are.

**Alternatives considered**:
- Completely different mobile header component: Rejected — overkill, CSS-only is sufficient

### 3. Language selector stays inline

**Decision**: Keep the language selector visible in the header but style it more compactly.

**Rationale**: Language switching is a frequent action for bilingual users. Hiding it behind a tap increases friction.

**Alternatives considered**:
- Icon-only language toggle (🌐): Rejected — unclear which language is active
- Move to settings menu: Rejected — no settings menu exists

## Risks / Trade-offs

- **Reduced tap target for language selector** → Mitigation: Ensure minimum 44px touch target height even with compact styling
- **Title less prominent** → Mitigation: Acceptable trade-off; content is the focus on mobile
- **Content still hidden by bottom nav** → This change addresses header only; bottom nav overlap is separate concern
