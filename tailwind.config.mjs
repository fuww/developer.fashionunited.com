const { fontFamily } = require('tailwindcss/defaultTheme')
import starlightPlugin from '@astrojs/starlight-tailwind';
const colors = require('tailwindcss/colors')

// Generated color palettes
// https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor
const accent = { 200: '#f8b4b9', 600: '#c80044', 900: '#60071f', 950: '#420e18' };
const gray = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

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
		white: colors.white,
	  },
	  extend: {
		colors: {
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
