const id = "index.mdx";
						const collection = "docs";
						const slug = "index";
						const body = "\nimport { Card, CardGrid } from '@astrojs/starlight/components';\n\n{/* ## What you can find here\n\n<CardGrid stagger>\n\t<Card title=\"Update content\" icon=\"pencil\">\n\t\tEdit `src/content/docs/index.mdx` to see this page change.\n\t</Card>\n\t<Card title=\"Add new content\" icon=\"add-document\">\n\t\tAdd Markdown or MDX files to `src/content/docs` to create new pages.\n\t</Card>\n\t<Card title=\"Configure your site\" icon=\"setting\">\n\t\tEdit your `sidebar` and other config in `astro.config.mjs`.\n\t</Card>\n\t<Card title=\"Read the docs\" icon=\"open-book\">\n\t\tLearn more in [the Starlight Docs](https://starlight.astro.build/).\n\t</Card>\n</CardGrid> */}\n";
						const data = {title:"Welcome to FashionUnited's Docs",description:"Use cases, tutorials & documentation.",editUrl:true,head:[],template:"splash",hero:{tagline:"Use cases, tutorials & documentation. The Fashionunited platform connects your website or application with the worldwide fashion conversation happening on FashionUnited.",image:{alt:"",file:
						new Proxy({"src":"/_astro/1024x1024.CHHhMszn.jpg","width":1024,"height":1024,"format":"jpg","fsPath":"/Users/joost/git/developer.fashionunited.com/src/assets/1024x1024.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joost/git/developer.fashionunited.com/src/assets/1024x1024.jpg";
							}
							
							return target[name];
						}
					})
					},actions:[{text:"To the docs",link:"/docs/advertising/",variant:"primary",icon:{type:"icon",name:"right-arrow"}},{text:"Read the marketplace docs",link:"/docs/marketplace/",variant:"primary",icon:{type:"icon",name:"external"}}]},sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/joost/git/developer.fashionunited.com/src/content/docs/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
