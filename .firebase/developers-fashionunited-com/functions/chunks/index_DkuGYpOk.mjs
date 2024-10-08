import { F as Fragment, _ as __astro_tag_component__, p as createVNode } from './astro/server_B8K-b4g3.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_47HINnll.mjs';
import { o as $$Tabs, p as $$TabItem } from './Code_VQGZ496k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cloudflare"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "cloudflare",
    "text": "Cloudflare"
  }, {
    "depth": 2,
    "slug": "cloudflare-warp--zero-trust-vpn-alternative",
    "text": "Cloudflare WARP / Zero Trust (VPN alternative)"
  }, {
    "depth": 2,
    "slug": "install",
    "text": "Install"
  }, {
    "depth": 2,
    "slug": "configure",
    "text": "Configure"
  }, {
    "depth": 2,
    "slug": "enable-cloudflare-warp-on-macos",
    "text": "Enable Cloudflare Warp on MacOS"
  }, {
    "depth": 3,
    "slug": "1-go-to-cog-icon--settings--preferences",
    "text": "1. Go to Cog icon / settings > Preferences"
  }, {
    "depth": 3,
    "slug": "2-go-to-account-tab",
    "text": "2. Go to Account tab"
  }, {
    "depth": 3,
    "slug": "4-enter-team-name-fashionunited",
    "text": "4. Enter team name fashionunited"
  }, {
    "depth": 3,
    "slug": "5-a-browser-opens-login-with-your-fashionunited-google-account",
    "text": "5. A browser opens, login with your FashionUnited Google account."
  }, {
    "depth": 3,
    "slug": "6-now-open-the-warp-client-again-and-you-should-see-the-zero-trust-screens",
    "text": "6. Now open the WARP client again and you should see the “Zero Trust” screens."
  }, {
    "depth": 3,
    "slug": "7-click-connect-and-youre-done",
    "text": "7. Click “Connect” and you’re done."
  }, {
    "depth": 2,
    "slug": "enable-cloudflare-warp-on-chromeos",
    "text": "Enable Cloudflare WARP on ChromeOS"
  }, {
    "depth": 3,
    "slug": "1-click-the-cloudflare-1111-icon-in-the-taskbar",
    "text": "1. Click the Cloudflare 1.1.1.1 icon in the taskbar"
  }, {
    "depth": 3,
    "slug": "2-enable-the-connection",
    "text": "2. Enable the connection"
  }, {
    "depth": 3,
    "slug": "3-install-vpn-profile",
    "text": "3. Install VPN profile"
  }, {
    "depth": 3,
    "slug": "4-done-you-should-have-a-1-icon-in-the-taskbar-now",
    "text": "4. Done! You should have a “1” icon in the taskbar now."
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h1 id=\"cloudflare\">Cloudflare</h1>\n<h2 id=\"cloudflare-warp--zero-trust-vpn-alternative\">Cloudflare WARP / Zero Trust (VPN alternative)</h2>\n<p>Cloudflare WARP is used at FashionUnited to secure and speed up connections. It uses the principle of “Zero Trust” to make the network more secure. One example where we use it is <code dir=\"auto\">news.fashionunited.com</code> which needs extra security to protect it from hackers and other unauthorized access.</p>\n<p>Check if it is already working: <a href=\"https://fashionunited.cloudflareaccess.com/warp\">fashionunited.cloudflareaccess.com/warp</a> and <a href=\"https://1.1.1.1/help\">https://1.1.1.1/help</a></p>\n<h2 id=\"install\">Install</h2>\n<p>Install Cloudflare WARP client</p>\n<ul>\n<li>\n<p><a href=\"https://install.appcenter.ms/orgs/cloudflare/apps/1.1.1.1-windows-1/distribution_groups/release\">Windows download</a></p>\n</li>\n<li>\n<p><a href=\"https://install.appcenter.ms/orgs/cloudflare/apps/1.1.1.1-macos-1/distribution_groups/release\">MacOS download</a></p>\n</li>\n<li>\n<p>ChromeOS - The 1.1.1.1 app for WARP is installed automatically for every FashionUnited device.</p>\n</li>\n</ul>\n<p>These are both linked from the official <a href=\"https://developers.cloudflare.com/warp-client/get-started/\">Cloudflare WARP Client page</a>.</p>\n<h2 id=\"configure\">Configure</h2>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "MacOS",
        "set:html": "<h2 id=\"enable-cloudflare-warp-on-macos\">Enable Cloudflare Warp on MacOS</h2><h3 id=\"1-go-to-cog-icon--settings--preferences\">1. Go to Cog icon / settings > Preferences</h3><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/1cd68a2a-0e4e-4c51-8f50-a74a9a30f800/public\" alt=\"\">\n<img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/b957366f-3d62-4738-e5b1-9c0753c19700/public\" alt=\"\">\n<img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/1649d1b8-5574-4390-bbcd-a716c47d3900/public\" alt=\"\"></p><h3 id=\"2-go-to-account-tab\">2. Go to Account tab</h3><p>and Click “Login to Cloudflare Zero Trust”</p><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/337dce57-e4c7-44c3-2b49-9bf9d3501900/public\" alt=\"\"></p><h3 id=\"4-enter-team-name-fashionunited\">4. Enter team name <code dir=\"auto\">fashionunited</code></h3><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/8fc9d093-430e-4fa6-5962-66cf79389a00/public\" alt=\"\"></p><h3 id=\"5-a-browser-opens-login-with-your-fashionunited-google-account\">5. A browser opens, login with your FashionUnited Google account.</h3><p>Afterwards, this success message will show.</p><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/fb7d2ca1-7116-4d74-654c-133ccd536100/public\" alt=\"\"></p><h3 id=\"6-now-open-the-warp-client-again-and-you-should-see-the-zero-trust-screens\">6. Now open the WARP client again and you should see the “Zero Trust” screens.</h3><p>Read these and continue.</p><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/bf27786b-44f9-42da-43e9-ce6412a91300/public\" alt=\"\">\n<img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/cad96fff-d960-4947-32f9-091fda988800/public\" alt=\"\"></p><h3 id=\"7-click-connect-and-youre-done\">7. Click “Connect” and you’re done.</h3><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/eb5b86e3-c25d-436f-c48e-32bccdd52c00/public\" alt=\"\">\n<img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/16237c6e-338d-47e6-d049-f22cc5d08a00/public\" alt=\"\"></p>"
      }), createVNode($$TabItem, {
        label: "ChromeOS",
        "set:html": "<h2 id=\"enable-cloudflare-warp-on-chromeos\">Enable Cloudflare WARP on ChromeOS</h2><h3 id=\"1-click-the-cloudflare-1111-icon-in-the-taskbar\">1. Click the Cloudflare 1.1.1.1 icon in the taskbar</h3><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/7156b4b1-d5aa-42f2-7e91-ee7807c59900/public\" alt=\"Cloudflare 1.1.1.1 icon\"></p><h3 id=\"2-enable-the-connection\">2. Enable the connection</h3><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/ebdcc81c-53dd-47f6-2d23-25281e44e600/public\" alt=\"Enable connection\"></p><h3 id=\"3-install-vpn-profile\">3. Install VPN profile</h3><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/55c93d06-2f54-4fd6-4a8b-35d6bf463c00/public\" alt=\"Install VPN Profile\"></p><h3 id=\"4-done-you-should-have-a-1-icon-in-the-taskbar-now\">4. Done! You should have a “1” icon in the taskbar now.</h3><p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/42512e90-4a2b-474d-6c6a-d3d86ee79b00/public\" alt=\"VPN connection icon in taskbar\"></p>"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/docs/cloudflare/index.mdx";
const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/cloudflare/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/cloudflare/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
