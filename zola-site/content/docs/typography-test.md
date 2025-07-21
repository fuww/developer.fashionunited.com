+++
title = "Typography System"
weight = 100
+++

# Typography System

This page demonstrates the typographic rhythm and scale implemented in our documentation system. The design follows a baseline grid of 24px (1.5rem) with a modular scale based on the perfect fourth ratio (1.333).

## Heading Hierarchy

The heading hierarchy uses the Inter sans-serif font with varying weights and follows a consistent scale:

### Third-Level Heading

Content under third-level headings maintains proper spacing and rhythm. The spacing between elements follows multiples of our baseline grid.

#### Fourth-Level Heading

Even at smaller heading levels, the vertical rhythm is maintained through careful margin and line-height calculations.

## Body Text and Paragraphs

Our body text uses Inter at 18px (1.125rem) with a line height of 1.75, providing optimal readability for technical documentation. This generous line spacing helps readers track long lines of text across wide screens.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Lists and Vertical Rhythm

Unordered lists maintain the baseline grid:

- First item with enough text to wrap to multiple lines and demonstrate how the line height maintains readability
- Second item with `inline code` examples
- Third item with **bold** and *italic* text
- Fourth item maintaining consistent spacing

Ordered lists work similarly:

1. First numbered item
2. Second numbered item with a longer description that shows how wrapping is handled gracefully
3. Third numbered item

## Blockquotes

> "Good typography is invisible. Great typography is unforgettable."
> 
> Blockquotes are styled with a left border using the accent color and italic text to provide visual distinction while maintaining the overall rhythm.

## Code Examples

Inline code like `const example = "code"` uses a subtle background and adjusted sizing to fit within the text flow.

```javascript
// Code blocks maintain readability with proper spacing
function calculateBaseline(fontSize, ratio) {
  const baseline = fontSize * 1.5;
  const scale = Math.pow(ratio, 2);
  return baseline * scale;
}
```

## Tables

Tables maintain consistent padding based on our spacing scale:

| Element | Font Size | Line Height | Margin Top | Margin Bottom |
|---------|-----------|-------------|------------|---------------|
| H1 | 3rem (48px) | 3.5rem | 3rem | 1.5rem |
| H2 | 2.25rem (36px) | 3rem | 3rem | 1.5rem |
| H3 | 1.875rem (30px) | 2.5rem | 2rem | 1rem |
| Body | 1.125rem (18px) | 1.75 | 1.5rem | 1.5rem |

## Responsive Typography

The typography system includes responsive adjustments:

- **Mobile (sm)**: Base size of 16px
- **Tablet (md)**: Default 18px size
- **Desktop (lg)**: Enhanced 20px for larger screens
- **Wide (xl)**: Maximum 24px for ultra-wide displays

## Links and Interactive Elements

Links like [this example link](#) use the accent color and gain underlines on hover. The underline offset is carefully adjusted to avoid interfering with descenders.

## Conclusion

This typography system ensures consistent, readable, and aesthetically pleasing text across all documentation pages. The careful attention to vertical rhythm creates a harmonious reading experience that scales beautifully across devices.