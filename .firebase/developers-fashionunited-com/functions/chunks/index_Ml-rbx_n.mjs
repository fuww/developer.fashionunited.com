import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The latest version of FashionUnited platform is compatible with the following\noperating systems and browsers.</p>\n<h2 id=\"browsers\">Browsers</h2>\n<p>The FashionUnited platform works with the 2 most recent versions of the\nfollowing browsers. Make sure cookies and JavaScript are turned on for your\nbrowser.</p>\n<ul>\n<li>Chrome</li>\n<li>Firefox</li>\n<li>Windows only: Internet Explorer, Microsoft Edge</li>\n<li>Mac only: Safari Other browsers may work, but you might not be able to use all\nof the features.</li>\n</ul>\n<h2 id=\"computer-operating-systems\">Computer operating systems</h2>\n<ul>\n<li>Windows: Windows Vista and up\n(<a href=\"http://windows.microsoft.com/en-us/windows/which-operating-system\">see which version of Windows you’re using</a>)</li>\n<li>Mac: Lion (10.7) and up\n(<a href=\"https://support.apple.com/en-us/HT201260\">see which version of MacOS you’re using</a>)</li>\n<li>Linux: Ubuntu Desktop x64</li>\n</ul>";

				const frontmatter = {"title":"System requirements and browsers","images":["hero-create.jpg"],"background_position":"50% 10%","menu":{"developers":{"weight":20}},"toc":true};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/system-requirements-and-browsers/index.md";
				const url = undefined;
				function rawContent() {
					return "\nThe latest version of FashionUnited platform is compatible with the following\noperating systems and browsers.\n\n## Browsers\n\nThe FashionUnited platform works with the 2 most recent versions of the\nfollowing browsers. Make sure cookies and JavaScript are turned on for your\nbrowser.\n\n- Chrome\n- Firefox\n- Windows only: Internet Explorer, Microsoft Edge\n- Mac only: Safari Other browsers may work, but you might not be able to use all\n  of the features.\n\n## Computer operating systems\n\n- Windows: Windows Vista and up\n  ([see which version of Windows you're using](http://windows.microsoft.com/en-us/windows/which-operating-system))\n- Mac: Lion (10.7) and up\n  ([see which version of MacOS you're using](https://support.apple.com/en-us/HT201260))\n- Linux: Ubuntu Desktop x64\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"browsers","text":"Browsers"},{"depth":2,"slug":"computer-operating-systems","text":"Computer operating systems"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
