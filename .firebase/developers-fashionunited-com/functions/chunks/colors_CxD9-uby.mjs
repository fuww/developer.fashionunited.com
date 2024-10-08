import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"fashionunited-product-colors\">FashionUnited Product Colors</h2>\n<h3 id=\"overview\">Overview</h3>\n<p>You can use the main colors that FashionUnited uses when setting up your feed.\nThis is <strong>not mandatory</strong> of course — we can map any color to ours as long as\nit’s used consistently. But using this will reduce any error sensitivity.</p>\n<ul>\n<li>beige</li>\n<li>black</li>\n<li>blue</li>\n<li>brown</li>\n<li>gray</li>\n<li>green</li>\n<li>kaki</li>\n<li>orange</li>\n<li>pink</li>\n<li>purple</li>\n<li>red</li>\n<li>white</li>\n<li>yellow</li>\n<li>gold</li>\n<li>silver</li>\n<li>multi-colored</li>\n</ul>\n<p>Please also check our\n<a href=\"https://developer.fashionunited.com/docs/marketplace/categories\">categories overview</a>.</p>";

				const frontmatter = {"title":"Product Colors","author":"Bram Strijbos","description":"An overview of the main product colors.","comments":false,"date":"2020-11-16T00:00:00.000Z","publishdate":"2020-11-16T00:00:00.000Z","lastmod":"2020-11-26T00:00:00.000Z","toc":true,"menu":{"developers":{"parent":"Marketplace","weight":20}},"images":["robert-katzki-jbtfM0XBeRc-unsplash-2560x526-header.jpg"]};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/marketplace/colors.md";
				const url = undefined;
				function rawContent() {
					return "\n## FashionUnited Product Colors\n\n### Overview\n\nYou can use the main colors that FashionUnited uses when setting up your feed.\nThis is **not mandatory** of course -- we can map any color to ours as long as\nit's used consistently. But using this will reduce any error sensitivity.\n\n- beige\n- black\n- blue\n- brown\n- gray\n- green\n- kaki\n- orange\n- pink\n- purple\n- red\n- white\n- yellow\n- gold\n- silver\n- multi-colored\n\nPlease also check our\n[categories overview](https://developer.fashionunited.com/docs/marketplace/categories).\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"fashionunited-product-colors","text":"FashionUnited Product Colors"},{"depth":3,"slug":"overview","text":"Overview"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
