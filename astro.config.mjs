import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import starlightLinksValidator from "starlight-links-validator";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["fashionunited.com", "storage.cloud.google.com", "storage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  vite: {
    ssr: {
      noExternal: ["github-slugger"],
    },
  },
  site: 'https://developer.fashionunited.com',
  integrations: [starlight({
    title: 'FashionUnited Docs',
    customCss: ['./src/tailwind.css', './src/styles/custom.css', '@fontsource/ibm-plex-mono/400.css', '@fontsource/ibm-plex-mono/600.css', '@fontsource-variable/inter', '@fontsource-variable/lora'],
    social: {
      github: 'https://github.com/fuww/developer.fashionunited.com'
    },
    head: [
      {
        tag: "script",
        attrs: {
          type: "text/partytown",
          src: "https://plausible.io/js/script.js",
          "data-domain": "developer.fashionunited.com",
          defer: true,
        },
      },
    ],
    plugins: [
      starlightLinksValidator({
        errorOnRelativeLinks: false,
      }),
    ],
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
    }, {
      label: 'Editorial',
      items: [{
        label: 'Editorial Cheat Sheet',
        link: '/docs/editorial-cheat-sheet/'
      }, {
        label: 'Editorial Style Guide',
        link: '/docs/editorial-style-guide/'
      }]
    }, {
      label: 'This site',
      items: [{
        label: 'Style Guide',
        link: '/docs/style-guide/'
      }]
    }
    // {
    // 	label: 'Posts',
    // 	autogenerate: { directory: 'posts' },
    // },
    ]
  }), 
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false
  }), 
  preact(),
  partytown(),
]
});