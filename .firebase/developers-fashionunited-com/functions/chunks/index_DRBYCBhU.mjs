import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"introducing-marketplace\">Introducing Marketplace</h2>\n<blockquote>\n<p>Overview of how the global B2B Fashion Marketplace works, and how you can\nconnect your brand to buyers using it.</p>\n</blockquote>\n<ul>\n<li>Connect with Fashion Buyers globally and generate more traffic to your B2B\nwebshop 365 days a year.</li>\n<li>Products listed with trend articles and videos</li>\n<li>Get your brand listed in Worldwide Fashion brands directory</li>\n<li>Improve sales forecasting by connecting your new collection but also sell\ncurrent stock and NOOS.</li>\n<li>Create brand awareness and build new business relationships</li>\n<li>No B2B webshop? FashionUnited provides help building your store with various\npartners who connect to the Marketplace.</li>\n</ul>\n<section>\n  <div class=\"bg-white py-16\">\n    <div class=\"mb-4\">\n      <h4 class=\"theme-primary red\"> Ready to connect to fashion buyers?\n      </h4>\n      <h2 class=\"h1\"> Review the documentation to get started. </h2>\n    </div>\n  <div class=\"b03-button twtr-component--last twtr-component\">\n    <div> <a class=\"btn btn-primary\" href=\"/developers/marketplace/getting-started\" rel=\"noopener noreferrer\" target=\"_blank\">\n        Getting started</a>\n    </div>\n  </div>\n</div></section>";

				const frontmatter = {"title":"Marketplace","author":"Joost van der Laan","comments":false,"date":"2020-04-27T00:00:00.000Z","publishdate":"2020-06-04T00:00:00.000Z","lastmod":"2020-06-04T00:00:00.000Z","toc":true,"menu":{"developers":{"weight":20}},"images":["lisheng-chang-M2524ncJQ40-unsplash-2560x526.jpg"],"resources":[{"src":"documents/example_en.csv","title":"Example CSV"}]};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/marketplace/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## Introducing Marketplace\n\n> Overview of how the global B2B Fashion Marketplace works, and how you can\n> connect your brand to buyers using it.\n\n- Connect with Fashion Buyers globally and generate more traffic to your B2B\n  webshop 365 days a year.\n- Products listed with trend articles and videos\n- Get your brand listed in Worldwide Fashion brands directory\n- Improve sales forecasting by connecting your new collection but also sell\n  current stock and NOOS.\n- Create brand awareness and build new business relationships\n- No B2B webshop? FashionUnited provides help building your store with various\n  partners who connect to the Marketplace.\n\n<section>\n  <div class=\"bg-white py-16\">\n    <div class=\"mb-4\">\n      <h4 class=\"theme-primary red\"> Ready to connect to fashion buyers?\n      </h4>\n      <h2 class=\"h1\"> Review the documentation to get started. </h2>\n    </div>\n  <div class=\"b03-button twtr-component--last twtr-component\">\n    <div> <a\n        class=\"btn btn-primary\"\n        href=\"/developers/marketplace/getting-started\" rel=\"noopener noreferrer\" target=\"_blank\">\n        Getting started</a>\n    </div>\n  </div>\n</section>\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introducing-marketplace","text":"Introducing Marketplace"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
