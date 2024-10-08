import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"quality-assurance\">Quality Assurance</h2>\n<h3 id=\"header-image-requirements\">Header Image Requirements</h3>\n<p>The header image is scaled automatically, depending on the device the page is\nloaded on. To make sure the image quality meets our standard, there are minimum\nrequirements:</p>\n<ul>\n<li>dimensions: 2560 x 526 px <strong>Bigger image size = better</strong>: nice to have (if\nimage quality allows it)</li>\n<li>resolution: 72 dpi</li>\n</ul>\n<p>Higher resolution or bigger image size is always better in this case. Also, we\ncan always downsize to the specified dimensions.</p>";

				const frontmatter = {"title":"Header","author":"Joost van der Laan"};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/header/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## Quality Assurance\n\n### Header Image Requirements\n\nThe header image is scaled automatically, depending on the device the page is\nloaded on. To make sure the image quality meets our standard, there are minimum\nrequirements:\n\n- dimensions: 2560 x 526 px **Bigger image size = better**: nice to have (if\n  image quality allows it)\n- resolution: 72 dpi\n\nHigher resolution or bigger image size is always better in this case. Also, we\ncan always downsize to the specified dimensions.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"quality-assurance","text":"Quality Assurance"},{"depth":3,"slug":"header-image-requirements","text":"Header Image Requirements"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
