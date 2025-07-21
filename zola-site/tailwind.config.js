const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// Color palettes from Astro site
const accent = { 200: '#f8b4b9', 600: '#c80044', 900: '#60071f', 950: '#420e18' };
const gray = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

// Typography scale based on Perfect Fourth (1.333)
// Base font size: 18px (1.125rem)
// Line height based on 1.5rem baseline grid
const typeScale = {
  xs: ['0.75rem', { lineHeight: '1.5rem' }],      // 12px
  sm: ['0.875rem', { lineHeight: '1.5rem' }],     // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],       // 16px
  lg: ['1.125rem', { lineHeight: '1.5rem' }],     // 18px (base)
  xl: ['1.25rem', { lineHeight: '2rem' }],        // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
  '3xl': ['1.875rem', { lineHeight: '2.5rem' }],  // 30px
  '4xl': ['2.25rem', { lineHeight: '3rem' }],     // 36px
  '5xl': ['3rem', { lineHeight: '3.5rem' }],      // 48px
  '6xl': ['3.75rem', { lineHeight: '4rem' }],     // 60px
  '7xl': ['4.5rem', { lineHeight: '4.5rem' }],    // 72px
  '8xl': ['6rem', { lineHeight: '6rem' }],        // 96px
  '9xl': ['8rem', { lineHeight: '8rem' }],        // 128px
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './themes/**/*.html',
    './content/**/*.md',
    './sass/**/*.scss',
  ],
  darkMode: 'class',
  theme: {
    // Override default font sizes with our scale
    fontSize: typeScale,
    
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
    // Consistent spacing based on 0.5rem (8px) units
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',  // 2px
      1: '0.25rem',     // 4px
      1.5: '0.375rem',   // 6px
      2: '0.5rem',      // 8px
      2.5: '0.625rem',   // 10px
      3: '0.75rem',     // 12px
      3.5: '0.875rem',   // 14px
      4: '1rem',        // 16px
      5: '1.25rem',     // 20px
      6: '1.5rem',      // 24px (baseline)
      7: '1.75rem',     // 28px
      8: '2rem',        // 32px
      9: '2.25rem',     // 36px
      10: '2.5rem',     // 40px
      11: '2.75rem',    // 44px
      12: '3rem',       // 48px (2x baseline)
      14: '3.5rem',     // 56px
      16: '4rem',       // 64px
      20: '5rem',       // 80px
      24: '6rem',       // 96px (4x baseline)
      28: '7rem',       // 112px
      32: '8rem',       // 128px
      36: '9rem',       // 144px (6x baseline)
      40: '10rem',      // 160px
      44: '11rem',      // 176px
      48: '12rem',      // 192px (8x baseline)
      52: '13rem',      // 208px
      56: '14rem',      // 224px
      60: '15rem',      // 240px
      64: '16rem',      // 256px
      72: '18rem',      // 288px (12x baseline)
      80: '20rem',      // 320px
      96: '24rem',      // 384px (16x baseline)
    },
    
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',      // Base line height
      relaxed: '1.625',
      loose: '1.75',      // For body text
      3: '.75rem',        // 12px
      4: '1rem',          // 16px
      5: '1.25rem',       // 20px
      6: '1.5rem',        // 24px (baseline)
      7: '1.75rem',       // 28px
      8: '2rem',          // 32px
      9: '2.25rem',       // 36px
      10: '2.5rem',       // 40px
    },
    
    colors: {
      // Base colors
      accent,
      gray,
      white: colors.white,
      black: colors.black,
      dark: '#111',
      transparent: 'transparent',
      current: 'currentColor',
    },
    
    extend: {
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          ...fontFamily.sans,
        ],
        serif: [
          "Lora",
          ...fontFamily.serif,
        ],
        mono: [
          "IBM Plex Mono",
          ...fontFamily.mono,
        ],
      },
      
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Base font size and line height
            fontSize: theme('fontSize.lg')[0],
            lineHeight: theme('lineHeight.loose'),
            
            // Vertical rhythm
            '> *': {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            
            // Headings
            h1: {
              fontSize: theme('fontSize.4xl')[0],
              lineHeight: theme('fontSize.4xl')[1].lineHeight,
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h2: {
              fontSize: theme('fontSize.3xl')[0],
              lineHeight: theme('fontSize.3xl')[1].lineHeight,
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontSize: theme('fontSize.2xl')[0],
              lineHeight: theme('fontSize.2xl')[1].lineHeight,
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
              fontWeight: '600',
            },
            h4: {
              fontSize: theme('fontSize.xl')[0],
              lineHeight: theme('fontSize.xl')[1].lineHeight,
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.4'),
              fontWeight: '600',
            },
            
            // Paragraphs
            p: {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            
            // Lists
            ul: {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
              paddingLeft: theme('spacing.6'),
            },
            ol: {
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
              paddingLeft: theme('spacing.6'),
            },
            li: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            
            // Code
            code: {
              fontSize: theme('fontSize.base')[0],
              fontWeight: '400',
            },
            pre: {
              fontSize: theme('fontSize.base')[0],
              lineHeight: theme('lineHeight.relaxed'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
              padding: theme('spacing.6'),
            },
            
            // Blockquotes
            blockquote: {
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.8'),
              paddingLeft: theme('spacing.6'),
              fontStyle: 'italic',
            },
            
            // Tables
            table: {
              fontSize: theme('fontSize.base')[0],
              lineHeight: theme('lineHeight.normal'),
            },
            th: {
              padding: theme('spacing.3'),
            },
            td: {
              padding: theme('spacing.3'),
            },
            
            // Links
            a: {
              fontWeight: '500',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            },
            
            // Horizontal rules
            hr: {
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.12'),
            },
          },
        },
        
        // Responsive typography
        sm: {
          css: {
            fontSize: theme('fontSize.base')[0],
            h1: {
              fontSize: theme('fontSize.3xl')[0],
            },
            h2: {
              fontSize: theme('fontSize.2xl')[0],
            },
            h3: {
              fontSize: theme('fontSize.xl')[0],
            },
          },
        },
        
        lg: {
          css: {
            fontSize: theme('fontSize.xl')[0],
            h1: {
              fontSize: theme('fontSize.5xl')[0],
            },
            h2: {
              fontSize: theme('fontSize.4xl')[0],
            },
            h3: {
              fontSize: theme('fontSize.3xl')[0],
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}