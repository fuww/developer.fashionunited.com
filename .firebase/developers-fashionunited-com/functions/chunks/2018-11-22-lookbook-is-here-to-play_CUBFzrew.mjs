import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Photoshoots, new collections, catwalks and patterns. Pictures are everywhere, in\nfashion. And since FashionUnited is all about content (remember those 5C’s?),\nwhat better place to share fashion imagery?</p>\n<p>Well, we’ve got the solution. Or, to be honest with you, already had. Deep down\nthe interwebs you’re still able to find <em><strong>My FashionUnited</strong></em> where we have the\nlookbook. Up till now, over 60.000 images have been uploaded there, and the best\nof all, they’re all fashion-related. Quality content! The place we provide\npeople to do so is, you could say, a little bit outdated. And as we wanted to\nuse Progressive Web App technology, which is also very interesting for our other\ncontent, we set out to build a new lookbook.</p>\n<p>Item video</p>\n<p>Upload video</p>\n<p>Scroll video</p>";

				const frontmatter = {"title":"Lookbook is here to play","description":"Photoshoots, new collections, catwalks and patterns","summary":"Photoshoots, new collections, catwalks and patterns","author":"Joost van der Laan","date":"2018-11-22T13:07:01.000Z","published_at":"2018-11-22T00:00:00.000Z","categories":["IT Update","Product development"],"tags":["IT update","blog"],"images":["lookbook.png"]};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/posts/2018-11-22-lookbook-is-here-to-play.md";
				const url = undefined;
				function rawContent() {
					return "\nPhotoshoots, new collections, catwalks and patterns. Pictures are everywhere, in\nfashion. And since FashionUnited is all about content (remember those 5C's?),\nwhat better place to share fashion imagery?\n\nWell, we've got the solution. Or, to be honest with you, already had. Deep down\nthe interwebs you're still able to find _**My FashionUnited**_ where we have the\nlookbook. Up till now, over 60.000 images have been uploaded there, and the best\nof all, they're all fashion-related. Quality content! The place we provide\npeople to do so is, you could say, a little bit outdated. And as we wanted to\nuse Progressive Web App technology, which is also very interesting for our other\ncontent, we set out to build a new lookbook.\n\nItem video\n\nUpload video\n\nScroll video\n";
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
