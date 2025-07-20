#!/usr/bin/env python3
"""
Update content weights for proper navigation ordering
"""
import os
import re

# Define weight mappings
weight_mappings = {
    # Docs section
    '/workspace/zola-site/content/docs/introduction.md': 10,
    '/workspace/zola-site/content/docs/advertising.md': 20,
    '/workspace/zola-site/content/docs/jobs.md': 30,
    '/workspace/zola-site/content/docs/fashionunited-for-websites.md': 40,
    '/workspace/zola-site/content/docs/header.md': 50,
    '/workspace/zola-site/content/docs/logo.md': 60,
    '/workspace/zola-site/content/docs/cloudflare.md': 70,
    '/workspace/zola-site/content/docs/system-requirements-and-browsers.md': 80,
    '/workspace/zola-site/content/docs/style-guide.md': 90,
    
    # Marketplace section
    '/workspace/zola-site/content/marketplace/getting-started.md': 10,
    '/workspace/zola-site/content/marketplace/how-to-register.md': 20,
    '/workspace/zola-site/content/marketplace/graphql-api.md': 30,
    '/workspace/zola-site/content/marketplace/brand-pages.md': 40,
    '/workspace/zola-site/content/marketplace/categories.md': 50,
    '/workspace/zola-site/content/marketplace/colors.md': 60,
    '/workspace/zola-site/content/marketplace/platforms.md': 70,
    
    # Editorial section
    '/workspace/zola-site/content/editorial/style-guide.md': 10,
    '/workspace/zola-site/content/editorial/cheat-sheet.md': 20,
}

def update_weight(file_path, weight):
    """Update the weight in a file's frontmatter"""
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if weight already exists
    if re.search(r'^weight = \d+', content, re.MULTILINE):
        # Update existing weight
        content = re.sub(r'^weight = \d+', f'weight = {weight}', content, flags=re.MULTILINE)
    else:
        # Add weight after title
        content = re.sub(r'(title = .+\n)', r'\1weight = ' + str(weight) + '\n', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {file_path} with weight {weight}")

def main():
    """Update all weights"""
    for file_path, weight in weight_mappings.items():
        update_weight(file_path, weight)
    
    print("\nWeight updates complete!")

if __name__ == "__main__":
    main()