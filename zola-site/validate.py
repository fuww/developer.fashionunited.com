#!/usr/bin/env python3
"""
Validate Zola site structure
"""
import os
import re
from pathlib import Path

def check_frontmatter(file_path):
    """Check if a markdown file has valid TOML frontmatter"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if not content.startswith('+++'):
        return False, f"Missing TOML frontmatter in {file_path}"
    
    # Check for closing +++
    if not re.search(r'\n\+\+\+\n', content):
        return False, f"Unclosed TOML frontmatter in {file_path}"
    
    # Extract frontmatter
    match = re.match(r'^\+\+\+(.*?)\n\+\+\+', content, re.DOTALL)
    if not match:
        return False, f"Invalid frontmatter format in {file_path}"
    
    frontmatter = match.group(1)
    
    # Check for required fields
    if 'title =' not in frontmatter:
        return False, f"Missing 'title' in frontmatter of {file_path}"
    
    return True, "OK"

def validate_site():
    """Validate the Zola site structure"""
    issues = []
    
    # Check required directories
    required_dirs = ['content', 'static', 'sass', 'themes/easydocs']
    for dir_name in required_dirs:
        dir_path = Path(f'/workspace/zola-site/{dir_name}')
        if not dir_path.exists():
            issues.append(f"Missing required directory: {dir_name}")
    
    # Check config.toml
    config_path = Path('/workspace/zola-site/config.toml')
    if not config_path.exists():
        issues.append("Missing config.toml")
    
    # Check all markdown files
    content_dir = Path('/workspace/zola-site/content')
    md_files = list(content_dir.rglob('*.md'))
    
    print(f"Found {len(md_files)} markdown files")
    
    for md_file in md_files:
        valid, msg = check_frontmatter(md_file)
        if not valid:
            issues.append(msg)
    
    # Check for circular imports in SCSS
    scss_files = list(Path('/workspace/zola-site/sass').glob('*.scss'))
    print(f"Found {len(scss_files)} SCSS files")
    
    # Report results
    if issues:
        print("\n❌ Validation issues found:")
        for issue in issues:
            print(f"  - {issue}")
        return False
    else:
        print("\n✅ All validation checks passed!")
        print("\nSite statistics:")
        print(f"  - Content files: {len(md_files)}")
        print(f"  - SCSS files: {len(scss_files)}")
        print(f"  - Static assets: {len(list(Path('/workspace/zola-site/static').rglob('*')))}")
        
        # List sections
        sections = [d for d in content_dir.iterdir() if d.is_dir()]
        print(f"\nContent sections:")
        for section in sections:
            files = list(section.glob('*.md'))
            print(f"  - {section.name}: {len(files)} files")
        
        return True

if __name__ == "__main__":
    validate_site()