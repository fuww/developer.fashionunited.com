# Astro to Zola Conversion Plan: FashionUnited Developer Portal

## Overview
This document outlines the plan to convert the FashionUnited Developer Portal from Astro (with Starlight theme) to Zola (with Easydocs theme).

## Current State Analysis

### Astro Site Structure
- **Framework**: Astro v5.3 with Starlight v0.32
- **Content**: 26 documentation pages in MDX format
- **Features**: Firebase auth, React components, API routes
- **Styling**: Tailwind CSS, custom fonts (Inter, Lora, IBM Plex Mono)
- **Deployment**: Static generation to Google Cloud Run

### Target State
- **Framework**: Zola static site generator
- **Theme**: Easydocs theme
- **Content**: Markdown files with TOML frontmatter
- **Features**: Static documentation site
- **Deployment**: Same (Google Cloud Run)

## Conversion Steps

### Phase 1: Project Setup
1. **Initialize Zola Project**
   - Create new `zola` branch
   - Install Zola locally
   - Fork/clone Easydocs theme
   - Set up basic config.toml

2. **Directory Structure Mapping**
   ```
   Astro                          →  Zola
   /src/content/docs/             →  /content/docs/
   /src/content/docs/posts/       →  /content/blog/
   /public/                       →  /static/
   /src/styles/                   →  /sass/
   ```

### Phase 2: Content Migration

1. **Convert MDX to Markdown**
   - Remove React imports and components
   - Convert YAML frontmatter to TOML (+++delimited)
   - Update image paths from `/public/` to `/static/`

2. **Component Replacements**
   | Astro Component | Zola Replacement |
   |----------------|------------------|
   | `<Card>` | Custom shortcode or HTML |
   | `<CardGrid>` | HTML grid layout |
   | `<Tabs>` | JavaScript tabs or separate pages |
   | `<TabItem>` | Content sections |

3. **Content Organization**
   ```
   /content/
   ├── _index.md (homepage)
   ├── docs/
   │   ├── _index.md
   │   ├── advertising.md
   │   ├── jobs.md
   │   └── ...
   ├── marketplace/
   │   ├── _index.md
   │   ├── graphql-api.md
   │   └── ...
   ├── editorial/
   │   ├── _index.md
   │   └── ...
   └── blog/
       ├── _index.md
       └── [2018-2019 posts]
   ```

### Phase 3: Navigation & Structure

1. **Sidebar Configuration**
   - Convert Astro's manual sidebar config to Zola's section-based navigation
   - Use `weight` in frontmatter for ordering
   - Configure `easydocs_heading_threshold` for auto-navigation

2. **URL Structure**
   - Maintain existing URL paths for SEO
   - Use Zola's `aliases` for any URL changes

### Phase 4: Styling & Assets

1. **Font Migration**
   - Copy font files to `/static/fonts/`
   - Update font references in SCSS

2. **CSS Conversion**
   - Extract relevant Tailwind utilities to SCSS
   - Adapt custom styles to Easydocs variables
   - Maintain brand consistency

3. **Static Assets**
   - Copy logo, favicon, images to `/static/`
   - Update all asset references

### Phase 5: Feature Handling

1. **Authentication (Firebase)**
   - Remove auth-related pages and API routes
   - Consider alternatives:
     - Static site with no auth
     - External auth service
     - Netlify Identity or similar

2. **Dynamic Features**
   - Remove React components
   - Replace with:
     - Static HTML
     - Vanilla JavaScript
     - Zola shortcodes

3. **Analytics**
   - Maintain Plausible Analytics
   - Add script to base template

### Phase 6: Build & Deployment

1. **Build Configuration**
   - Update build commands for Zola
   - Configure for static output
   - Update Docker configuration

2. **CI/CD Updates**
   - Modify GitHub Actions for Zola
   - Update deployment scripts
   - Maintain Cloud Run deployment

## Technical Considerations

### Challenges
1. **MDX Component Usage**: Need to identify all component usage and create appropriate replacements
2. **Firebase Auth**: Requires architectural decision on authentication
3. **React Interactivity**: Some features may lose interactivity
4. **URL Preservation**: Important for existing links and SEO

### Opportunities
1. **Performance**: Zola builds are extremely fast
2. **Simplicity**: Fewer dependencies and simpler deployment
3. **Markdown Focus**: Better for documentation-heavy sites
4. **Rust Ecosystem**: Aligns with Rust tooling

## Migration Checklist

- [ ] Set up Zola project structure
- [ ] Configure Easydocs theme
- [ ] Convert all MDX files to Markdown
- [ ] Migrate frontmatter from YAML to TOML
- [ ] Replace React components with alternatives
- [ ] Set up navigation structure
- [ ] Migrate styling and fonts
- [ ] Copy static assets
- [ ] Configure build process
- [ ] Test all pages and links
- [ ] Update deployment configuration
- [ ] Document any feature removals or changes

## Timeline Estimate
- Phase 1-2: 2-3 hours (setup and basic content migration)
- Phase 3-4: 3-4 hours (navigation, styling, assets)
- Phase 5: 2-3 hours (feature handling and replacements)
- Phase 6: 2 hours (build and deployment)
- Testing: 2 hours

**Total estimate**: 11-14 hours

## Next Steps
1. Get approval for this plan
2. Decide on authentication strategy
3. Begin Phase 1 implementation