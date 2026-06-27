## ADDED Requirements

### Requirement: Vertical scroll-snap on mobile viewports
The system SHALL enable vertical scroll-snap behavior on viewports with a maximum width of 768px, dividing the portfolio into full-screen section pages.

#### Scenario: Scroll-snap container activation
- **WHEN** the viewport width is 768px or less
- **THEN** the main content container SHALL have `scroll-snap-type: y mandatory` applied

#### Scenario: Section snap points
- **WHEN** scroll-snap is active
- **THEN** each section (Experience, Projects, Skills, Contact) SHALL have `scroll-snap-align: start` and `min-height: 100vh`

#### Scenario: Desktop unaffected
- **WHEN** the viewport width is greater than 768px
- **THEN** no scroll-snap styles SHALL be applied and sections SHALL render in their current stacked layout

### Requirement: Internal section scrolling
The system SHALL allow sections with content exceeding the viewport height to scroll internally while maintaining snap alignment.

#### Scenario: Content overflow handling
- **WHEN** a section's content exceeds `100vh`
- **THEN** the section SHALL allow internal vertical scrolling via `overflow-y: auto`
- **AND** the snap point SHALL remain at the section's top edge

#### Scenario: Snap behavior during internal scroll
- **WHEN** a user scrolls within an overflowing section
- **THEN** the snap container SHALL NOT interfere with internal scroll until the section boundary is reached
