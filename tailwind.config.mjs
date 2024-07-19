const { fontFamily } = require('tailwindcss/defaultTheme')
import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from '@tailwindcss/colors';

// Generated color palettes
// https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor
const rose = {
	50: "oklch(97.28% 0.0191 14.65)",
	100: "oklch(95.55% 0.0304 13.86)",
	200: "oklch(92.10% 0.0604 12.93)",
	300: "oklch(85.12% 0.1145 11.80)",
	400: "oklch(76.39% 0.1774 10.77)",
	500: "oklch(64.88% 0.244 11.37)",
	600: "oklch(60% 0.24 14)",
	700: "oklch(54.91% 0.2222 14.97)",
	800: "oklch(48.51% 0.2009 15.80)",
	900: "oklch(44.86% 0.1835 16.34)",
	950: "oklch(31.07% 0.1141 18.55)",
  };
  
  // Below is a test, not a final color palette
  const roseP3 = {
	50: "oklch(1 0.27 14)",
	100: "oklch(0.98 0.27 14)",
	200: "oklch(0.94 0.27 14)",
	300: "oklch(0.9 0.27 14)",
	400: "oklch(0.8 0.27 14 )",
	500: "oklch(0.7 0.27 14 )",
	600: "oklch(0.6 0.27 14 )",
	700: "oklch(0.5 0.27 14 )",
	800: "oklch(0.4 0.27 14 )",
	900: "oklch(0.3 0.27 14 )",
	950: "oklch(0.25 0.27 14 )",
	DEFAULT: "oklch(0.6 0.27 14 )",
  };
  
  const indigo = rose;
  
  const accent = rose;
  
  const gray = {
	50: "#f9fafb",
	100: "#f3f4f6",
	200: "#e5e7eb",
	300: "#d1d5db",
	400: "#9ca3af",
	500: "#6b7280",
	600: "#4b5563",
	700: "#374151",
	800: "#1f2937",
	900: "#111827",
	950: "#030712",
  };
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [
		starlightPlugin(),
		require('@tailwindcss/typography'),
	],
	plugin(function ({ addUtilities }) {
		addUtilities({
		  ".bg-gradient": {
			background:
			  "linear-gradient(to right, oklch(70% 0.24 14), oklch(60% 0.27 14))",
		  },
		  ".bg-gradient-fallback": {
			background:
			  "linear-gradient(to right, oklch(70.73% 0.18796955270463947 14.001408985933033), oklch(60% 0.2397797412996795 14.000499552546502))",
		  },
		  ".bg-gradient-subtle": {
			background:
			  "linear-gradient(to right, oklch(65% 0.27 14), oklch(60% 0.27 14))",
		  },
		  ".bg-gradient-subtle-fallback": {
			background:
			  "linear-gradient(to right, oklch(65% 0.24063306943238946 14.001838434511596), oklch(60% 0.2397797412996795 14.000499552546502))",
		  },
		});
	  }),
	theme: {
	  letterSpacing: {
		tight: '-0.015em',
	  },
	colors: {
		accent,
		indigo,
		gray,
		transparent: "transparent",
		current: "currentColor",
		black: "#000000",
		white: "#ffffff",
		primary: rose[600],
	  },
	  extend: {
		colors: {
		  accent,
		  gray,
		  dark: '#111'
		},
		fontFamily: {
			sans: ["'Inter Variable'", ...fontFamily.sans],
			mono: ["'IBM Plex Mono'", ...fontFamily.mono],
		    serif: ["'Lora Variable'", ...fontFamily.serif],
		  },
	  },
	},
  }
