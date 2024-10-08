import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>In preparation of the design upgrade we’re working on, a lot has already\nchanged. Remember the blog post about experiments with GraphQL and React, back\nin May? Well, brace yourself, cause we’ve <strong>already rebuilt most of the news\nhomepage and article pages</strong> with it.</p>\n<p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/29972e30-df28-4f97-6015-b5527cb13b00/public\" alt=\"Screenshot React replaced modules\" title=\"Screenshot React replaced modules, CC courtesy of Joost van der Laan\"></p>\n<p>The green shows parts that are already replaced. This means both the homepage\nand article pages are more easy to replace when the <em><strong>design upgrade</strong></em> is\nready. Also, both the homepage and article page load significantly faster, and\nthe load on our current content platform is greatly reduced.</p>\n<p>The key takeaway here is that we use React components, small building blocks you\ncan use to build a website. It is a more modern approach when compared to Joomla\nPHP layouts and templates, as it allows for more flexibility in how you build a\npage. Think of it as Lego blocks, where you can have a lot of different colors\nand sizes and piece them together any way you like. On top of that, it’s far\nmore easy for us to use data from different systems (jobs, news, lookbook) on a\nsingle page.</p>";

				const frontmatter = {"title":"We have rebuilt our site, and you didn't even notice","description":"In preparation of the design upgrade, a lot has already changed.","summary":"In preparation of the design upgrade, a lot has already changed.","author":"Joost van der Laan","authors":["Joost van der Laan"],"headerimage":true,"date":"2018-11-22T13:07:01.000Z","published_at":"2018-11-22T00:00:00.000Z","categories":["IT Update","Product development"],"tags":["IT update","blog"],"images":["react-compared.jpg"]};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/posts/2018-11-22-we-have-rebuilt-our-site-and-you-did-not-even-notice.md";
				const url = undefined;
				function rawContent() {
					return "\nIn preparation of the design upgrade we're working on, a lot has already\nchanged. Remember the blog post about experiments with GraphQL and React, back\nin May? Well, brace yourself, cause we've **already rebuilt most of the news\nhomepage and article pages** with it.\n\n![Screenshot React replaced modules](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/29972e30-df28-4f97-6015-b5527cb13b00/public \"Screenshot React replaced modules, CC courtesy of Joost van der Laan\")\n\nThe green shows parts that are already replaced. This means both the homepage\nand article pages are more easy to replace when the _**design upgrade**_ is\nready. Also, both the homepage and article page load significantly faster, and\nthe load on our current content platform is greatly reduced.\n\nThe key takeaway here is that we use React components, small building blocks you\ncan use to build a website. It is a more modern approach when compared to Joomla\nPHP layouts and templates, as it allows for more flexibility in how you build a\npage. Think of it as Lego blocks, where you can have a lot of different colors\nand sizes and piece them together any way you like. On top of that, it's far\nmore easy for us to use data from different systems (jobs, news, lookbook) on a\nsingle page.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
