#!/usr/bin/env python3
"""
Convert Astro MDX content to Zola Markdown format
"""
import os
import re
import shutil
from pathlib import Path

def convert_frontmatter(content):
    """Convert YAML frontmatter to TOML format"""
    # Extract frontmatter
    frontmatter_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if not frontmatter_match:
        return content
    
    yaml_frontmatter = frontmatter_match.group(1)
    body = content[frontmatter_match.end():]
    
    # Convert YAML to TOML-like format
    toml_lines = []
    
    # Parse common fields
    title_match = re.search(r'title:\s*(.+)', yaml_frontmatter)
    if title_match:
        title = title_match.group(1).strip().strip('"\'')
        toml_lines.append(f'title = "{title}"')
    
    description_match = re.search(r'description:\s*(.+)', yaml_frontmatter)
    if description_match:
        desc = description_match.group(1).strip().strip('"\'')
        toml_lines.append(f'description = "{desc}"')
    
    # Handle date fields
    date_match = re.search(r'date:\s*(.+)', yaml_frontmatter)
    if date_match:
        date = date_match.group(1).strip()
        toml_lines.append(f'date = {date}')
    
    pubDate_match = re.search(r'pubDate:\s*(.+)', yaml_frontmatter)
    if pubDate_match:
        date = pubDate_match.group(1).strip()
        toml_lines.append(f'date = {date}')
    
    # Add weight for ordering (can be adjusted later)
    toml_lines.append('weight = 100')
    
    # Add anchor links for sections
    if '_index' in os.path.basename(content):
        toml_lines.append('insert_anchor_links = "right"')
        toml_lines.append('sort_by = "weight"')
    
    # Construct new frontmatter
    new_frontmatter = '+++\n' + '\n'.join(toml_lines) + '\n+++'
    
    return new_frontmatter + '\n' + body

def convert_mdx_components(content):
    """Convert MDX components to Markdown/HTML equivalents"""
    # Remove imports
    content = re.sub(r'^import .+?;\n', '', content, flags=re.MULTILINE)
    
    # Remove JSX comments {/* */}
    content = re.sub(r'\{/\*.*?\*/\}', '', content, flags=re.DOTALL)
    
    # Convert Card component to HTML div
    content = re.sub(
        r'<Card[^>]*title="([^"]+)"[^>]*>(.+?)</Card>',
        r'<div class="card">\n<h3>\1</h3>\n\2\n</div>',
        content,
        flags=re.DOTALL
    )
    
    # Convert CardGrid to div with grid class
    content = re.sub(r'<CardGrid[^>]*>', '<div class="card-grid">', content)
    content = re.sub(r'</CardGrid>', '</div>', content)
    
    # Convert Tabs to details/summary (simplified)
    content = re.sub(
        r'<Tabs>(.+?)</Tabs>',
        lambda m: convert_tabs(m.group(1)),
        content,
        flags=re.DOTALL
    )
    
    # Convert code blocks with title
    content = re.sub(
        r'```(\w+)\s+title="([^"]+)"',
        r'```\1\n# \2',
        content
    )
    
    # Handle inline JSX expressions
    content = re.sub(r'\{[^}]+\}', '', content)
    
    # Clean up extra newlines
    content = re.sub(r'\n\n\n+', '\n\n', content)
    
    return content

def convert_tabs(tabs_content):
    """Convert Tabs/TabItem to HTML details elements"""
    # Simple conversion - in production would need more sophisticated parsing
    items = re.findall(r'<TabItem[^>]*label="([^"]+)"[^>]*>(.+?)</TabItem>', tabs_content, re.DOTALL)
    
    if not items:
        return tabs_content
    
    result = '<div class="tabs">\n'
    for i, (label, content) in enumerate(items):
        if i == 0:
            result += f'<details open>\n<summary>{label}</summary>\n{content.strip()}\n</details>\n'
        else:
            result += f'<details>\n<summary>{label}</summary>\n{content.strip()}\n</details>\n'
    result += '</div>'
    
    return result

def get_target_path(src_path):
    """Map source path to target path in Zola structure"""
    # Remove src/content/docs prefix
    rel_path = src_path.replace('/workspace/src/content/docs/', '')
    
    # Map paths
    if rel_path.startswith('posts/'):
        # Blog posts go to blog/
        filename = os.path.basename(rel_path)
        # Remove date prefix from filename
        new_filename = re.sub(r'^\d{4}-\d{2}-\d{2}-', '', filename)
        return f'/workspace/zola-site/content/blog/{new_filename}'
    elif rel_path.startswith('docs/marketplace/'):
        # Marketplace docs
        return f'/workspace/zola-site/content/marketplace/{os.path.basename(rel_path)}'
    elif rel_path.startswith('docs/editorial-cheat-sheet/'):
        # Editorial cheat sheet
        return '/workspace/zola-site/content/editorial/cheat-sheet.md'
    elif rel_path.startswith('docs/editorial-style-guide/'):
        # Editorial style guide
        return '/workspace/zola-site/content/editorial/style-guide.md'
    elif rel_path.startswith('docs/'):
        # General docs - preserve folder structure
        folder_name = rel_path.split('/')[1]
        if folder_name in ['advertising', 'jobs', 'header', 'logo', 'introduction', 
                         'fashionunited-for-websites', 'system-requirements-and-browsers',
                         'cloudflare', 'style-guide']:
            return f'/workspace/zola-site/content/docs/{folder_name}.md'
        return f'/workspace/zola-site/content/docs/{os.path.basename(rel_path)}'
    elif rel_path == 'index.mdx':
        # Root index
        return '/workspace/zola-site/content/_index.md'
    else:
        # Default to docs
        return f'/workspace/zola-site/content/docs/{os.path.basename(rel_path)}'

def convert_file(src_path):
    """Convert a single MDX file to Zola format"""
    print(f"Converting: {src_path}")
    
    # Read source file
    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Convert frontmatter
    content = convert_frontmatter(content)
    
    # Convert MDX components
    content = convert_mdx_components(content)
    
    # Get target path
    target_path = get_target_path(src_path)
    
    # Ensure target directory exists
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    
    # Write converted file
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  -> {target_path}")

def main():
    """Main conversion process"""
    # Find all MDX/MD files
    files = [
        '/workspace/src/content/docs/docs/cloudflare/index.mdx',
        '/workspace/src/content/docs/index.mdx',
        '/workspace/src/content/docs/posts/2019-05-22-small-steps-big-changes.md',
        '/workspace/src/content/docs/posts/2018-11-22-big-header-image-please.md',
        '/workspace/src/content/docs/posts/2018-11-22-improved-job-scheduling.md',
        '/workspace/src/content/docs/posts/2018-11-22-lookbook-is-here-to-play.md',
        '/workspace/src/content/docs/posts/2018-11-22-we-have-rebuilt-our-site-and-you-did-not-even-notice.md',
        '/workspace/src/content/docs/docs/marketplace/colors.md',
        '/workspace/src/content/docs/docs/style-guide/index.md',
        '/workspace/src/content/docs/docs/marketplace/platforms.md',
        '/workspace/src/content/docs/docs/marketplace/getting-started.md',
        '/workspace/src/content/docs/docs/marketplace/index.md',
        '/workspace/src/content/docs/docs/marketplace/categories.md',
        '/workspace/src/content/docs/docs/editorial-cheat-sheet/index.md',
        '/workspace/src/content/docs/docs/editorial-style-guide/index.md',
        '/workspace/src/content/docs/docs/advertising/index.md',
        '/workspace/src/content/docs/docs/marketplace/brand-pages.md',
        '/workspace/src/content/docs/docs/fashionunited-for-websites/index.md',
        '/workspace/src/content/docs/docs/marketplace/graphql-api.md',
        '/workspace/src/content/docs/docs/header/index.md',
        '/workspace/src/content/docs/docs/marketplace/how-to-register.md',
        '/workspace/src/content/docs/docs/introduction/index.md',
        '/workspace/src/content/docs/docs/logo/index.md',
        '/workspace/src/content/docs/docs/jobs/index.md',
        '/workspace/src/content/docs/docs/system-requirements-and-browsers/index.md',
        '/workspace/src/content/docs/docs/index.md'
    ]
    
    # Convert each file
    for file_path in files:
        if os.path.exists(file_path):
            convert_file(file_path)
    
    print(f"\nConversion complete! Converted {len(files)} files.")

if __name__ == "__main__":
    main()