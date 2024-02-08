import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
/**
  * needed to get enable / disable dark modein page.
  */
darkMode: 'class',
selfURL: import.meta.url,
// plugins: {
//   ...typography(),
// },
theme: {
  letterSpacing: {
    tight: '-0.015em',
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: '#000',
    white: '#fff',
    primary: '#3b82f6',
    secondary: "#4338ca",
    indigo: '#3b82f6',
    rose: '#f43f5e',
    neutral: '#6b7280',
    slate: '#6b7280',
    zinc: '#71717a',
    gray: '#6b7280',
    red: '#ef4444',
    orange: '#f97316',
    yellow: '#eab308',
    blue: '#3b82f6',
  },
  extend: {
    colors: {
      dark: '#111'
    },
    fontFamily: {
      sans: "'Inter var', sans-serif",
      // sans: "'Helvetica', sans-serif",
      serif: "'Lora', serif",
      "lora": '"Lora"',
      "inter": '"Inter var"',
    },
  },
},
preflight: {
  // "@import":
  //   "url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap')",
  // "@import":
  //   "url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,700;1,400&display=swap')",
  "@font-face": [
    {
      fontFamily: "Lora",
      fontWeight: "400",
      fontStyle: "normal",
      src: 'url(/fonts/lora-regular.latin.woff2) format("woff2")',
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    {
      fontFamily: "Lora",
      fontWeight: "400",
      fontStyle: "normal",
      src: 'url(/fonts/lora-regular.latin-ext.woff2) format("woff2")',
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    {
      fontFamily: "Lora",
      fontWeight: "400",
      fontStyle: "normal",
      src: 'url(/fonts/lora-regular.cyrillic.woff2) format("woff2")',
      unicodeRange: "U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    {
      fontFamily: "Lora",
      fontWeight: "400",
      fontStyle: "normal",
      src: 'url(/fonts/lora-regular.cyrillic-ext.woff2) format("woff2")',
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    {
      fontFamily: "Inter var",
      fontWeight: "100 900",
      fontDisplay: "swap",
      fontStyle: "normal",
      fontNamedInstance: "Regular",
      src: 'url(/fonts/Inter-roman.var.woff2?v=3.19) format("woff2")',
    },
    {
      fontFamily: "Inter var",
      fontWeight: "100 900",
      fontDisplay: "swap",
      fontStyle: "italic",
      fontNamedInstance: "Italic",
      src: 'url(/fonts/Inter-italic.var.woff2?v=3.19) format("woff2")',
    },
  ],
},
} satisfies Config;