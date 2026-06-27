## ADDED Requirements

### Requirement: Fixed bottom navigation bar on mobile
The system SHALL display a fixed bottom navigation bar on viewports with a maximum width of 768px, providing section navigation buttons.

#### Scenario: Bottom bar visibility
- **WHEN** the viewport width is 768px or less
- **THEN** a fixed bottom navigation bar SHALL be visible at the bottom of the viewport
- **AND** the top navigation bar section links SHALL be hidden

#### Scenario: Desktop navigation unchanged
- **WHEN** the viewport width is greater than 768px
- **THEN** the bottom navigation bar SHALL be hidden
- **AND** the top navigation bar section links SHALL remain visible

### Requirement: Native phone OS styling
The bottom navigation bar SHALL be styled to resemble native phone OS UI elements with a dark background and white text/icons.

#### Scenario: Visual styling
- **WHEN** the bottom navigation bar is rendered
- **THEN** it SHALL have a dark background color (approximately `#1a1a2e` or similar dark tone)
- **AND** text and icons SHALL be white or light-colored
- **AND** the bar SHALL have a fixed height appropriate for touch targets (minimum 48px)

#### Scenario: Active section indicator
- **WHEN** a user navigates to a section
- **THEN** the corresponding navigation button SHALL display a visual indicator (e.g., pill shape, highlight) showing it is active

### Requirement: Section navigation via bottom bar
The bottom navigation bar SHALL provide buttons for each main section: Experience, Projects, Skills, and Contact.

#### Scenario: Navigation button rendering
- **WHEN** the bottom navigation bar is visible
- **THEN** it SHALL display four navigation buttons labeled with section names
- **AND** each button SHALL be large enough for comfortable touch interaction (minimum 44px tap target)

#### Scenario: Tap to navigate
- **WHEN** a user taps a navigation button
- **THEN** the page SHALL scroll to the corresponding section using the snap-scroll behavior
- **AND** the active indicator SHALL update to reflect the current section

### Requirement: Content padding for bottom bar
The system SHALL add padding to the bottom of sections to prevent content from being obscured by the fixed bottom navigation bar.

#### Scenario: Section bottom padding
- **WHEN** the bottom navigation bar is visible
- **THEN** each section SHALL have bottom padding equal to the height of the bottom navigation bar
- **AND** no section content SHALL be hidden behind the bar
