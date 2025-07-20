# FashionUnited Developer Portal - Zola Version

This is the Zola-based static site version of the FashionUnited Developer Portal, converted from Astro/Starlight.

## Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) static site generator
- Git

## Installation

1. Install Zola:
   ```bash
   # macOS
   brew install zola
   
   # Linux
   snap install --edge zola
   
   # Or download from https://github.com/getzola/zola/releases
   ```

2. Clone this repository:
   ```bash
   git clone <repository-url>
   cd zola-site
   ```

## Development

Run the development server:

```bash
zola serve
```

The site will be available at `http://127.0.0.1:1111`

## Building

Build the static site:

```bash
zola build
```

The built files will be in the `public/` directory.

## Project Structure

```
zola-site/
├── config.toml          # Site configuration
├── content/            # Markdown content files
│   ├── _index.md      # Homepage
│   ├── docs/          # Documentation pages
│   ├── marketplace/   # Marketplace API docs
│   ├── editorial/     # Editorial guidelines
│   └── blog/          # Blog posts
├── sass/              # SCSS styles
│   ├── main.scss      # Main stylesheet
│   └── custom.scss    # Custom styles
├── static/            # Static assets
│   ├── fonts/         # Web fonts
│   ├── favicon.ico    # Favicon
│   └── logo.webp      # Logo
├── templates/         # HTML templates (using theme)
└── themes/            # Themes directory
    └── easydocs/      # Easydocs theme

```

## Content Management

### Adding a New Page

1. Create a new `.md` file in the appropriate `content/` subdirectory
2. Add TOML frontmatter:
   ```toml
   +++
   title = "Page Title"
   description = "Page description"
   weight = 50  # For ordering in navigation
   +++
   ```
3. Write your content in Markdown

### Navigation

Pages are automatically organized by:
- Directory structure (sections)
- `weight` parameter in frontmatter (ordering)
- `sort_by` in section `_index.md` files

## Deployment

### Docker

Build the Docker image:

```bash
docker build -t fashionunited-docs .
```

Run the container:

```bash
docker run -p 8080:8080 fashionunited-docs
```

### Google Cloud Run

Deploy to Cloud Run:

```bash
gcloud run deploy fashionunited-docs \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated
```

## Migration Notes

This site was converted from Astro/Starlight. Key changes:

1. **No Authentication**: Firebase auth has been removed. All content is public.
2. **Static Only**: No dynamic features or API routes.
3. **MDX to Markdown**: React components replaced with HTML/CSS equivalents.
4. **Simplified Navigation**: Using Zola's built-in section/page structure.

## Theme

Using the [Easydocs](https://github.com/codeandmedia/zola_easydocs_theme) theme for Zola.

## Support

For questions or issues, contact support@fashionunited.com