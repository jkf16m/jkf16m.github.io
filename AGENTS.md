# AGENTS.md

## File Self-Documentation

Every file must include a header comment that declares its responsibilities and relationships
in an indirect, declarative way. Describe what the file is for and what it depends on,
not what it imports:

- "This file uses components from `./components/`."
- "This file is in charge of translations."
- "This file provides the data layer for portfolio entries."

## UI Component Policy

Every new or modified UI component MUST:

1. Have a corresponding `.stories.tsx` file in the same directory
2. Be previewed and approved by a developer before merging

### Story file requirements

- Story file must be named `<ComponentName>.stories.tsx`
- Must include stories for all visual variants and states (e.g., EN/ES for i18n components)
- Use `argTypes` to expose interactive controls where applicable

### Workflow

1. Create or update the component
2. Add/update the story file
3. Run `pnpm storybook` to preview
4. Get developer approval before merging
