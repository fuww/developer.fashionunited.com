const id = "docs/cloudflare/index.mdx";
						const collection = "docs";
						const slug = "docs/cloudflare";
						const body = "\nimport { Tabs, TabItem } from '@astrojs/starlight/components';\n\n# Cloudflare\n\n## Cloudflare WARP / Zero Trust (VPN alternative)\n\nCloudflare WARP is used at FashionUnited to secure and speed up connections. It uses the principle of \"Zero Trust\" to make the network more secure. One example where we use it is `news.fashionunited.com` which needs extra security to protect it from hackers and other unauthorized access.\n\nCheck if it is already working: [fashionunited.cloudflareaccess.com/warp](https://fashionunited.cloudflareaccess.com/warp) and [https://1.1.1.1/help](https://1.1.1.1/help)\n\n## Install\n\nInstall Cloudflare WARP client\n\n- [Windows download](https://install.appcenter.ms/orgs/cloudflare/apps/1.1.1.1-windows-1/distribution_groups/release)\n\n- [MacOS download](https://install.appcenter.ms/orgs/cloudflare/apps/1.1.1.1-macos-1/distribution_groups/release)\n\n- ChromeOS - The 1.1.1.1 app for WARP is installed automatically for every FashionUnited device.\n\nThese are both linked from the official [Cloudflare WARP Client page](https://developers.cloudflare.com/warp-client/get-started/).\n\n\n## Configure\n\n<Tabs>\n  <TabItem label=\"MacOS\">\n\n## Enable Cloudflare Warp on MacOS\n\n### 1. Go to Cog icon / settings > Preferences\n\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/1cd68a2a-0e4e-4c51-8f50-a74a9a30f800/public)\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/b957366f-3d62-4738-e5b1-9c0753c19700/public)\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/1649d1b8-5574-4390-bbcd-a716c47d3900/public)\n\n### 2. Go to Account tab\n\nand Click \"Login to Cloudflare Zero Trust\"\n\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/337dce57-e4c7-44c3-2b49-9bf9d3501900/public)\n\n### 4. Enter team name `fashionunited`\n\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/8fc9d093-430e-4fa6-5962-66cf79389a00/public)\n\n### 5. A browser opens, login with your FashionUnited Google account.\n\nAfterwards, this success message will show.\n\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/fb7d2ca1-7116-4d74-654c-133ccd536100/public)\n\n### 6. Now open the WARP client again and you should see the \"Zero Trust\" screens.\n\nRead these and continue.\n\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/bf27786b-44f9-42da-43e9-ce6412a91300/public)\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/cad96fff-d960-4947-32f9-091fda988800/public)\n\n### 7. Click \"Connect\" and you're done.\n\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/eb5b86e3-c25d-436f-c48e-32bccdd52c00/public)\n![](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/16237c6e-338d-47e6-d049-f22cc5d08a00/public)\n\n\n</TabItem>\n  <TabItem label=\"ChromeOS\">\n  \n## Enable Cloudflare WARP on ChromeOS\n\n### 1. Click the Cloudflare 1.1.1.1 icon in the taskbar\n\n![Cloudflare 1.1.1.1 icon](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/7156b4b1-d5aa-42f2-7e91-ee7807c59900/public)\n\n### 2. Enable the connection\n\n![Enable connection](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/ebdcc81c-53dd-47f6-2d23-25281e44e600/public)\n\n### 3. Install VPN profile\n\n![Install VPN Profile](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/55c93d06-2f54-4fd6-4a8b-35d6bf463c00/public)\n\n### 4. Done! You should have a \"1\" icon in the taskbar now.\n\n![VPN connection icon in taskbar](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/42512e90-4a2b-474d-6c6a-d3d86ee79b00/public)  \n  \n  </TabItem>\n</Tabs>\n\n\n";
						const data = {title:"Cloudflare",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/cloudflare/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
