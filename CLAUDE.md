# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` / `npm start` - Start development server at http://localhost:4321
- `npm run build` - Run type checking and build production site
- `npm run preview` - Preview production build
- `npm run test:e2e` - Run Playwright end-to-end tests

For development with Nix:
- `nix develop` - Enter Nix development shell with Node.js 20 and corepack

## Project Architecture

This is a **FashionUnited Developer Portal** built with Astro and Starlight for documentation.

### Technology Stack
- **Astro v5.3** with **Starlight v0.32** documentation theme
- **React v18.3** for interactive components
- **TypeScript v5.5** for type safety
- **Tailwind CSS v3.4** for styling (with `applyBaseStyles: false`)
- **Firebase** for authentication
- **Playwright** for E2E testing

### Key Directories
- `/src/content/docs/` - Documentation content in MDX format
- `/src/components/` - React and Astro components
- `/src/pages/api/` - API endpoints for Firebase auth (register, signin, signout)
- `/src/firebase/` - Firebase configuration and utilities
- `/data/` - Static data files

### Content Structure
Documentation is organized into:
- **Docs**: Technical documentation (advertising, jobs, APIs)
- **Marketplace**: GraphQL API documentation
- **Editorial**: Style guides and cheat sheets

### Testing
E2E tests use Playwright targeting Chromium. Tests are in `/src/tests/` and run against `http://localhost:4321/`.

### Deployment
- Static site generation with `output: "static"`
- Docker deployment to Google Cloud Run
- GitHub Actions for CI/CD and automated testing
- Domain: developer.fashionunited.com

### Important Configuration
- Site config: `/workspace/astro.config.mjs`
- Content sidebar structure defined in astro.config.mjs
- Firebase authentication integrated with API routes
- Plausible Analytics via Partytown web worker
- Custom fonts: Inter (variable) and Lora (variable)