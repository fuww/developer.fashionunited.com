# Tailwind CSS Migration Plan for Zola Site

## Overview
This plan outlines the steps to add Tailwind CSS support to the Zola site and migrate the color scheme from the original Astro site.

## Current State Analysis

### Astro Site
- Uses Tailwind CSS v3.4
- Has `applyBaseStyles: false` configuration
- Custom color scheme defined in Tailwind config
- Uses PostCSS for processing

### Zola Site
- Currently uses SCSS with Easydocs theme
- Has custom.scss with basic styling
- No PostCSS pipeline

## Implementation Plan

### Phase 1: Analysis and Extraction
1. **Examine Astro Tailwind Configuration**
   - Check `tailwind.config.js` or `tailwind.config.mjs`
   - Extract custom color palette
   - Note any custom utilities or plugins
   - Check PostCSS configuration

2. **Identify Color Usage**
   - Find color variables in Astro styles
   - Check component files for inline Tailwind classes
   - Document primary, secondary, and accent colors

### Phase 2: Tailwind Setup for Zola
1. **Install Dependencies**
   - Since Zola doesn't have built-in PostCSS support, we'll need a build process
   - Options:
     a. Use npm scripts to build Tailwind separately
     b. Use a Makefile to coordinate builds
     c. Use Docker multi-stage build

2. **Create Build Pipeline**
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure package.json**
   ```json
   {
     "scripts": {
       "build:css": "tailwindcss -i ./input.css -o ./static/tailwind.css --watch",
       "build": "npm run build:css && zola build"
     }
   }
   ```

### Phase 3: Color Migration
1. **Extract Color Palette**
   - Primary colors (brand colors)
   - Secondary colors (UI elements)
   - Text colors
   - Background colors
   - Border colors
   - Status colors (success, warning, error)

2. **Create Tailwind Config**
   ```javascript
   module.exports = {
     content: [
       './templates/**/*.html',
       './content/**/*.md',
     ],
     theme: {
       extend: {
         colors: {
           // Custom FashionUnited colors
         }
       }
     }
   }
   ```

### Phase 4: Integration
1. **Update SCSS Structure**
   - Create `input.css` with Tailwind directives
   - Import in main SCSS or link separately
   - Maintain Easydocs compatibility

2. **Template Updates**
   - Add Tailwind classes to templates where needed
   - Maintain semantic HTML structure
   - Ensure responsive design

### Phase 5: Build Process
1. **Development Workflow**
   ```bash
   # Terminal 1
   npm run build:css
   
   # Terminal 2
   zola serve
   ```

2. **Production Build**
   - Update Dockerfile to include Node.js stage
   - Build Tailwind CSS during Docker build
   - Copy compiled CSS to Zola build

### Technical Considerations

1. **File Structure**
   ```
   zola-site/
   ├── package.json
   ├── tailwind.config.js
   ├── postcss.config.js
   ├── styles/
   │   ├── input.css (Tailwind input)
   │   └── tailwind.css (Generated output)
   ├── static/
   │   └── tailwind.css (Final CSS)
   └── sass/ (Existing SCSS)
   ```

2. **Performance**
   - Use PurgeCSS to remove unused styles
   - Minify CSS in production
   - Consider critical CSS extraction

3. **Compatibility**
   - Ensure Easydocs theme still works
   - Test with existing content
   - Maintain accessibility

## Implementation Steps

1. **Step 1**: Analyze Astro configuration (15 min)
2. **Step 2**: Set up Node.js dependencies (10 min)
3. **Step 3**: Extract and migrate colors (20 min)
4. **Step 4**: Configure Tailwind (15 min)
5. **Step 5**: Create build pipeline (20 min)
6. **Step 6**: Update templates (30 min)
7. **Step 7**: Test and refine (20 min)

**Total estimated time**: 2-2.5 hours

## Risks and Mitigations

1. **Risk**: Build complexity
   - **Mitigation**: Keep separate build steps simple and documented

2. **Risk**: Theme compatibility
   - **Mitigation**: Layer Tailwind on top of existing styles, don't replace

3. **Risk**: Performance impact
   - **Mitigation**: Use PurgeCSS and optimize for production

## Success Criteria

1. Tailwind CSS successfully integrated
2. Original color scheme preserved
3. Build process is simple and documented
4. Site appearance matches original
5. No regression in functionality
6. Performance maintained or improved