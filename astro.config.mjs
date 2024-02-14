import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://developer.fashionunited.com',
  integrations: [starlight({
    title: 'FashionUnited Docs',
    social: {
      github: 'https://github.com/fuww/developer.fashionunited.com'
    },
    sidebar: [{
      label: 'Docs',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Advertising',
        link: '/docs/advertising/'
      }, {
        label: 'Editorial Cheat Sheet',
        link: '/docs/editorial-cheat-sheet/'
      }, {
        label: 'Editorial Style Guide',
        link: '/docs/editorial-style-guide/'
      }, {
        label: 'FashionUnited for Websites - Embedding Jobs and News',
        link: '/docs/fashionunited-for-websites/'
      }, {
        label: 'Header',
        link: '/docs/header/'
      }, {
        label: 'Jobs',
        link: '/docs/jobs/'
      }, {
        label: 'Logo',
        link: '/docs/logo/'
      },
      // { label: 'Marketplace', link: '/docs/marketplace/' },
      // { label: 'Getting started - Marketplace', link: '/docs/marketplace/getting-started/' },
      // { label: 'Brand Pages - Marketplace', link: '/docs/marketplace/brand-pages/' },
      // { label: 'Categories - Marketplace', link: '/docs/marketplace/categories/' },
      // { label: 'Colors - Marketplace', link: '/docs/marketplace/colors/' },
      // { label: 'GraphQL API - Marketplace', link: '/docs/marketplace/graphql-api/' },
      // { label: 'How to register - Marketplace', link: '/docs/marketplace/how-to-register/' },
      // { label: 'Platforms - Marketplace', link: '/docs/marketplace/platforms/' },
      {
        label: 'Style Guide',
        link: '/docs/style-guide/'
      }, {
        label: 'System Requirements and Browsers',
        link: '/docs/system-requirements-and-browsers/'
      }, {
        label: 'Cloudflare',
        link: '/docs/cloudflare/'
      }]
    }, {
      label: 'Marketplace',
      autogenerate: {
        directory: 'docs/marketplace'
      }
    }
    // {
    // 	label: 'Posts',
    // 	autogenerate: { directory: 'posts' },
    // },
    ]
  }), 
  tailwind({
	// Disable the default base styles:
	applyBaseStyles: false,
  })
]
});