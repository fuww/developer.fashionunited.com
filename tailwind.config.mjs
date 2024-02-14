import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from '@tailwindcss/colors';

// Generated color palettes
// https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor
const accent = { 200: '#f8b4b9', 600: '#c80044', 900: '#60071f', 950: '#420e18' };
const gray = { 100: '#f3f7f9', 200: '#e7eff2', 300: '#bac4c8', 400: '#7b8f96', 500: '#495c62', 700: '#2a3b41', 800: '#182a2f', 900: '#121a1c' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [
		starlightPlugin(),
		require('@tailwindcss/typography'),
	],
	theme: {
	  letterSpacing: {
		tight: '-0.015em',
	  },
	colors: {
		accent,
		gray,
		// Your preferred accent color. Indigo is closest to Starlight’s defaults.
		// accent: colors.rose,
		// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
		// gray: colors.zinc,
		// FashionUnited custom colors
		transparent: "transparent",
		current: "currentColor",
		black: '#000',
		white: '#fff',
		// primary: colors.blue,
		// indigo: colors.blue,
		// rose: colors.rose,
		// neutral: colors.coolGray,
		// slate: colors.coolGray,
		// zinc: colors.coolGray,
		// gray: colors.coolGray,
		// red: colors.red,
		// orange: colors.orange,
		// yellow: colors.yellow,
		// blue: colors.blue,
	  },
	  extend: {
		colors: {
		  dark: '#111'
		},
		fontFamily: {
			// Your preferred text font. Starlight uses a system font stack by default.
			sans: ['"Inter var"'],
			// Your preferred code font. Starlight uses system monospace fonts by default.
			mono: ['"IBM Plex Mono"'],
		//   sans: "'Inter var', sans-serif",
		//   // sans: "'Helvetica', sans-serif",
		//   serif: "'Lora', serif",
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
  }
