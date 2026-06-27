## Why

The current portfolio layout is desktop-first and doesn't provide an optimal mobile experience. On phones, the vertical stack of sections with a top navigation bar feels generic and doesn't leverage native mobile interaction patterns. A swipeable, snap-scroll experience with a bottom navigation bar will make the portfolio feel like a native app on mobile devices, improving engagement and perceived quality.

## What Changes

- Add CSS scroll-snap with `100vh` section sizing for mobile viewports
- Create a fixed bottom navigation bar styled to match native phone OS aesthetics (dark background, white icons/text)
- Move section navigation from the top nav bar to the bottom bar on mobile
- Each section becomes a full-screen "page" that snaps into view on vertical swipe
- Desktop layout remains completely unchanged

## Capabilities

### New Capabilities
- `mobile-snap-scroll`: Vertical scroll-snap behavior that divides the portfolio into full-screen section pages on mobile viewports
- `mobile-bottom-nav`: A fixed bottom navigation bar styled like native phone OS UI (Android/iOS aesthetic) with section buttons, visible only on mobile

### Modified Capabilities

_(none — no existing specs)_

## Impact

- **Components affected**: `App.tsx`, `NavButtons.tsx`, section components (Experience, Projects, Skills, Contact)
- **New files**: Bottom navigation component, mobile-specific CSS/styles
- **Dependencies**: None added — uses CSS scroll-snap (native) and media queries
- **Desktop**: No changes — all mobile styles scoped via media queries or viewport detection
