## 1. CSS Foundation

- [x] 1.1 Add mobile scroll-snap styles to App.css: `scroll-snap-type: y mandatory` on the main container, `scroll-snap-align: start` and `min-height: 100vh` on each section
- [x] 1.2 Add media query scope (`@media (max-width: 768px)`) for all mobile-specific styles
- [x] 1.3 Add bottom padding to sections to account for the fixed bottom nav bar height

## 2. Bottom Navigation Component

- [x] 2.1 Create `BottomNav.tsx` component with four section buttons: Experience, Projects, Skills, Contact
- [x] 2.2 Style the bottom nav: fixed position, dark background (`#1a1a2e`), white text/icons, minimum 48px height
- [x] 2.3 Add active section indicator (pill shape or highlight) based on current scroll position
- [x] 2.4 Implement tap-to-navigate: clicking a button scrolls to the corresponding section using `scrollIntoView`
- [x] 2.5 Hide bottom nav on desktop (`@media (min-width: 769px)`)

## 3. Mobile Header Adjustments

- [x] 3.1 Hide the section navigation links from the top nav bar on mobile
- [x] 3.2 Keep the site title and language selector visible on mobile

## 4. Section Scroll Behavior

- [x] 4.1 Ensure sections with overflowing content allow internal scroll via `overflow-y: auto`
- [x] 4.2 Test that snap behavior doesn't interfere with internal section scrolling
- [x] 4.3 Adjust section padding and margins for mobile viewport sizing

## 5. Storybook & Testing

- [x] 5.1 Add Storybook stories for BottomNav component (mobile view)
- [x] 5.2 Test snap-scroll behavior on various phone viewports (iPhone SE, Pixel, etc.)
- [x] 5.3 Verify desktop layout is completely unchanged
- [x] 5.4 Test bottom nav active state updates correctly when scrolling between sections
