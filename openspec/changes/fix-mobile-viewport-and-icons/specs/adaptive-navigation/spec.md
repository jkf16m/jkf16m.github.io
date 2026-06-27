## ADDED Requirements

### Requirement: Theme-aware navigation background
The system SHALL adapt the navigation bar background color based on the user's device theme preference.

#### Scenario: Dark theme on mobile
- **WHEN** a user has their device set to dark mode
- **THEN** the navigation bar background color is dark (dark gray or near-black)

#### Scenario: Light theme on mobile
- **WHEN** a user has their device set to light mode
- **THEN** the navigation bar background color is light (white or near-white)

#### Scenario: System preference detection
- **WHEN** a user visits the site on a mobile device
- **THEN** the navigation bar automatically detects and applies the system theme preference without user interaction

### Requirement: Bottom navigation on mobile
The system SHALL position the navigation bar at the bottom of the screen on mobile viewports.

#### Scenario: Fixed bottom position
- **WHEN** viewing the site on a mobile device (viewport width < 768px)
- **THEN** the navigation bar is fixed at the bottom of the viewport

#### Scenario: Desktop navigation unchanged
- **WHEN** viewing the site on a desktop device (viewport width >= 768px)
- **THEN** the navigation bar remains in its current position (top or as designed)

### Requirement: Safe area support for notched devices
The system SHALL properly display the navigation bar on devices with notches or rounded corners.

#### Scenario: Notched iPhone display
- **WHEN** viewing the site on an iPhone with a notch
- **THEN** the navigation bar respects the safe area insets and is not obscured

#### Scenario: Bottom safe area padding
- **WHEN** the navigation bar is positioned at the bottom
- **THEN** appropriate padding is applied using env(safe-area-inset-bottom) to prevent content from being cut off

### Requirement: Navigation accessibility
The system SHALL ensure the navigation bar remains accessible on all mobile devices.

#### Scenario: Touch target size
- **WHEN** navigation items are displayed on mobile
- **THEN** each interactive element has a minimum touch target size of 44x44 pixels

#### Scenario: Visual contrast
- **WHEN** the navigation bar is displayed in either theme
- **THEN** all text and icons have sufficient contrast ratio (WCAG AA minimum)
