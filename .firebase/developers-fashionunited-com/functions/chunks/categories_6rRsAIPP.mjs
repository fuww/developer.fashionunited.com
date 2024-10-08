import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"fashionunited-product-categories\">FashionUnited Product Categories</h2>\n<h3 id=\"overview\">Overview</h3>\n<p>You can use the main categories that FashionUnited uses when setting up your\nfeed. This is <strong>not mandatory</strong> of course — we can map any category to ours as\nlong as it’s used consistently.</p>\n<ul>\n<li>Accessories</li>\n<li>Babywear</li>\n<li>Bags</li>\n<li>Beachwear</li>\n<li>Blazers</li>\n<li>Blouses</li>\n<li>Cardigans</li>\n<li>Casualwear</li>\n<li>Clothing Accessories</li>\n<li>Coats</li>\n<li>Dresses</li>\n<li>Footwear</li>\n<li>Home &#x26; Garden</li>\n<li>Hosiery</li>\n<li>Jumpsuits</li>\n<li>Nightwear</li>\n<li>Outdoor Jackets</li>\n<li>Pants</li>\n<li>Rainwear</li>\n<li>Shirts</li>\n<li>Skirts</li>\n<li>Suits</li>\n<li>Sweaters</li>\n<li>Swimwear</li>\n<li>T-Shirts</li>\n<li>Ties</li>\n<li>Tops</li>\n</ul>\n<p>These are the main product categories we started out with. This will be expanded\nin the future. Please also check our\n<a href=\"https://developer.fashionunited.com/docs/marketplace/colors/\">color overview</a>.</p>";

				const frontmatter = {"title":"Product Categories","author":"Bram Strijbos","description":"An overview of the main product categories.","comments":false,"date":"2020-04-27T00:00:00.000Z","publishdate":"2020-06-04T00:00:00.000Z","lastmod":"2020-06-08T00:00:00.000Z","toc":true,"menu":{"developers":{"parent":"Marketplace","weight":20}},"images":["jan-antonin-kolar-lRoX0shwjUQ-unsplash-2560x526.jpg"]};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/marketplace/categories.md";
				const url = undefined;
				function rawContent() {
					return "\n## FashionUnited Product Categories\n\n### Overview\n\nYou can use the main categories that FashionUnited uses when setting up your\nfeed. This is **not mandatory** of course -- we can map any category to ours as\nlong as it's used consistently.\n\n- Accessories\n- Babywear\n- Bags\n- Beachwear\n- Blazers\n- Blouses\n- Cardigans\n- Casualwear\n- Clothing Accessories\n- Coats\n- Dresses\n- Footwear\n- Home & Garden\n- Hosiery\n- Jumpsuits\n- Nightwear\n- Outdoor Jackets\n- Pants\n- Rainwear\n- Shirts\n- Skirts\n- Suits\n- Sweaters\n- Swimwear\n- T-Shirts\n- Ties\n- Tops\n\nThese are the main product categories we started out with. This will be expanded\nin the future. Please also check our\n[color overview](https://developer.fashionunited.com/docs/marketplace/colors/).\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"fashionunited-product-categories","text":"FashionUnited Product Categories"},{"depth":3,"slug":"overview","text":"Overview"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
