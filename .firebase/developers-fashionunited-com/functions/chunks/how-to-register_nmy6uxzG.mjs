import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"how-to-register-your-brand-for-the-fashionunited-b2b-marketplace\">How to register your brand for the FashionUnited B2B Marketplace?</h2>\n<p>To connect your fashion brand to the FashionUnited B2B Marketplace, please\nregister at\n<a href=\"https://fashionunited.com/marketplace/brands/\">global B2B Marketplace</a></p>\n<h2 id=\"how-to-register-as-a-buyer\">How to register as a buyer?</h2>\n<ol>\n<li><a href=\"https://fashionunited.com/marketplace/buyers/\">Sign up</a> as buyer at the\nglobal B2B Marketplace.</li>\n<li>Check your email inbox for a verification email and follow the link.</li>\n<li>When logged in, look for a ‘Request Access’ button in Markets with restricted\naccess.</li>\n<li>After clicking ‘Request Access’, your request will be reviewed by our team.</li>\n</ol>";

				const frontmatter = {"title":"How to register","comments":false,"toc":true,"menu":{"developers":{"parent":"Marketplace","weight":20}},"images":["newsletter-bg.jpg"]};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/marketplace/how-to-register.md";
				const url = undefined;
				function rawContent() {
					return "\n## How to register your brand for the FashionUnited B2B Marketplace?\n\nTo connect your fashion brand to the FashionUnited B2B Marketplace, please\nregister at\n[global B2B Marketplace](https://fashionunited.com/marketplace/brands/)\n\n## How to register as a buyer?\n\n1. [Sign up](https://fashionunited.com/marketplace/buyers/) as buyer at the\n   global B2B Marketplace.\n2. Check your email inbox for a verification email and follow the link.\n3. When logged in, look for a 'Request Access' button in Markets with restricted\n   access.\n4. After clicking 'Request Access', your request will be reviewed by our team.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"how-to-register-your-brand-for-the-fashionunited-b2b-marketplace","text":"How to register your brand for the FashionUnited B2B Marketplace?"},{"depth":2,"slug":"how-to-register-as-a-buyer","text":"How to register as a buyer?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
