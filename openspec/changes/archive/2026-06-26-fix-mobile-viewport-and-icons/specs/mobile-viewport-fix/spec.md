## ADDED Requirements

### Requirement: All sections visible on mobile
The system SHALL display all content sections on mobile viewports without skipping or hiding any sections.

#### Scenario: Welcome section visible on mobile
- **WHEN** a user views the site on a mobile device (viewport width < 768px)
- **THEN** the welcome/greeting section is visible and displayed before the Experiences section

#### Scenario: Full content flow on mobile
- **WHEN** a user scrolls through the site on mobile
- **THEN** all sections appear in the correct order: welcome/greeting → experiences → other sections

### Requirement: Titles not truncated on mobile
The system SHALL display complete titles without truncation on mobile viewports.

#### Scenario: Title full text visible
- **WHEN** a section title is displayed on a mobile device
- **THEN** the complete title text is visible without ellipsis or overflow hidden

#### Scenario: Title text wrapping
- **WHEN** a title is longer than the mobile viewport width
- **THEN** the title wraps to multiple lines while remaining fully readable

### Requirement: Responsive typography scaling
The system SHALL use fluid typography that scales appropriately across viewport sizes.

#### Scenario: Font size scaling
- **WHEN** the viewport width changes between 320px and 1920px
- **THEN** heading font sizes scale smoothly without abrupt jumps

#### Scenario: Readable text at all sizes
- **WHEN** viewed on any device from mobile to desktop
- **THEN** all text remains readable with appropriate line height and spacing

### Requirement: Proper mobile viewport configuration
The system SHALL use correct viewport meta settings for mobile rendering.

#### Scenario: Viewport meta tag present
- **WHEN** the HTML page loads on a mobile device
- **THEN** the viewport is configured with width=device-width and initial-scale=1
