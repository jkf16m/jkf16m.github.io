## Why

The current mobile layout has a sticky header with "Portfolio" title and language selector that consumes ~60px of vertical space. On small viewports (320-390px), this leaves less room for actual content, forcing users to scroll more to reach the main sections. Combined with the bottom navigation bar, the usable content area is significantly reduced.

## What Changes

- Collapse the header into a more compact mobile design
- Make the site title smaller or integrate it differently on mobile
- Reduce language selector footprint or make it accessible via a smaller UI element
- Ensure content gets maximum viewport space while keeping navigation accessible

## Capabilities

### New Capabilities

- `compact-mobile-header`: A streamlined header design for mobile viewports that minimizes vertical space while preserving site identity and language switching

### Modified Capabilities

_(none — no existing specs changing)_

## Impact

- **Components affected**: `App.tsx` (nav structure), `styles.css` (header/nav styles)
- **Dependencies**: None added
- **Desktop**: No changes — all mobile styles scoped via media queries
