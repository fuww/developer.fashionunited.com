# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the FashionUnited Developer Portal, built with Astro 5.3 and Starlight for documentation. The site provides documentation for FashionUnited's various developer-facing features including job/news embedding, GraphQL APIs, and brand marketplace integration.

## Development Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:4321
npm run preview      # Preview production build

# Building
npm run build        # TypeScript check + Astro build
astro check          # Run TypeScript check only

# Testing
npm run test:e2e     # Run Playwright E2E tests
```

## Architecture Overview

### Technology Stack
- **Framework**: Astro 5.3 with static output and Node.js adapter in middleware mode
- **Documentation**: Starlight theme with custom components
- **UI**: React 18 + TypeScript + Tailwind CSS + Radix UI primitives
- **Authentication**: Firebase Auth with custom API routes
- **Testing**: Playwright for E2E tests (runs against preview server on port 4321)
- **Analytics**: Plausible.io via Partytown
- **Search**: Pagefind integration

### Key Directories
- `src/content/docs/` - Documentation markdown files
- `src/components/` - React/Astro components
  - `starlight/` - Starlight component overrides (custom Head.astro)
  - `ui/` - shadcn/ui-style components with Radix UI
- `src/pages/` - Astro pages and API routes
  - `api/auth/` - Firebase auth endpoints (signin, register, signout)
- `src/firebase/` - Firebase configuration and initialization
- `src/tests/` - Playwright E2E tests

### Authentication Flow
The site has Firebase-based authentication with these pages:
- `/signin` - Sign in page
- `/register` - Registration page
- `/forgot-password` - Password reset
- `/dashboard` - Protected dashboard page
- API routes in `/api/auth/*` handle the authentication logic

### Custom UI Components
- Vortex effect component (framer-motion based)
- shadcn/ui-style components using class-variance-authority
- Custom Starlight Head component for analytics integration

### Build & Deployment
- Static site generation with `output: "static"`
- Docker support with multi-stage build
- Deployment to Google Cloud Registry:
  ```bash
  docker build -t europe-west1-docker.pkg.dev/developers-fashionunited-com/developersite/ssrastrofrontend:latest . && docker push europe-west1-docker.pkg.dev/developers-fashionunited-com/developersite/ssrastrofrontend:latest
  ```

### Development Environment
- Nix support with devenv for reproducible development environment
- Dev container configuration available in `.devcontainer/`
- Node.js managed through Nix when using `nix develop`

## Important Configuration

### Image Optimization
Configured for FashionUnited domains and Google Cloud Storage:
```js
image: {
  domains: ["fashionunited.com", "storage.cloud.google.com"],
  remotePatterns: [{ protocol: "https" }]
}
```

### Custom Fonts
- IBM Plex Mono (400, 600)
- Inter Variable
- Lora Variable

### Starlight Customization
- Custom Head component at `src/components/starlight/Head.astro`
- Tailwind integration without base styles
- Custom CSS in `src/styles/custom.css`