import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://developer.fashionunited.com',
  integrations: [starlight({
    title: 'FashionUnited Docs',
	customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css',
      ],
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
    },
	{
		label: 'Editorial',
		items: [
		{
			label: 'Editorial Cheat Sheet',
			link: '/docs/editorial-cheat-sheet/'
		  }, {
			label: 'Editorial Style Guide',
			link: '/docs/editorial-style-guide/'
		  },	],
	  },
	  {
		label: 'This site',
		items: [
			{
				label: 'Style Guide',
				link: '/docs/style-guide/'
			  },
			],
	  },
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