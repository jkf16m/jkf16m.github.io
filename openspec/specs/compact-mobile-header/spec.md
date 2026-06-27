## ADDED Requirements

### Requirement: Compact mobile header layout
The system SHALL display a single-row header on mobile viewports (≤768px) that positions the site title and language selector horizontally with minimal vertical padding.

#### Scenario: Header height on mobile
- **WHEN** the viewport width is 768px or less
- **THEN** the header SHALL have a total height of 40px or less
- **AND** the site title and language selector SHALL be visible on the same row

#### Scenario: Header padding on mobile
- **WHEN** the viewport width is 768px or less
- **THEN** the header vertical padding SHALL be 8px or less

### Requirement: Compact site title on mobile
The system SHALL display the site title with reduced font size on mobile viewports.

#### Scenario: Title font size on mobile
- **WHEN** the viewport width is 768px or less
- **THEN** the site title font size SHALL be 0.95rem or smaller

### Requirement: Compact language selector on mobile
The system SHALL display the language selector with reduced padding on mobile viewports while maintaining accessible touch targets.

#### Scenario: Language selector touch target
- **WHEN** the viewport width is 768px or less
- **THEN** the language selector SHALL have a minimum touch target height of 44px
- **AND** the language selector SHALL have reduced horizontal padding compared to desktop

### Requirement: Desktop layout unchanged
The system SHALL maintain the current header layout on desktop viewports (>768px).

#### Scenario: Desktop header unchanged
- **WHEN** the viewport width is greater than 768px
- **THEN** the header SHALL display with current padding, font sizes, and layout
- **AND** no mobile-specific styles SHALL be applied
