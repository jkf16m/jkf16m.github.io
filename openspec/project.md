# Project Context

## Purpose
A personal portfolio site focused on clarity, readability, and understandability. The site is a single-page application with minimal or no dynamic/animated effects, prioritizing content and accessibility.

## Tech Stack
- SvelteKit
- TypeScript
- Tailwind CSS
- PicoCSS
- i18n (localization)

## Project Conventions

### Code Style
- Use TypeScript for all Svelte components and scripts
- Follow SvelteKit and Tailwind conventions
- Use semantic HTML and accessible markup
- Consistent, descriptive variable and component names

### Architecture Patterns
- Single-page layout with sections for About, Experience, Projects, and (planned) AI
- Each section is a Svelte component
- Minimal client-side interactivity; focus on static content

### Testing Strategy
- Unit tests for core logic (if any) in `src/`
- Manual testing for UI/UX and accessibility

### Git Workflow
- Feature branches for new sections or major changes
- Conventional commits (feat:, fix:, chore:)
- Pull requests for review before merging to main

## Domain Context
- Portfolio is for a software engineer/developer
- Experience and Projects sections highlight professional work
- AI section will showcase AI-related work or demos

## Important Constraints
- No unnecessary animations or dynamic effects
- Must be highly readable and accessible
- All content should fit on a single page

## External Dependencies
- FontAwesome, Font Mfizz (for icons)
- No backend or external APIs required for core functionality
