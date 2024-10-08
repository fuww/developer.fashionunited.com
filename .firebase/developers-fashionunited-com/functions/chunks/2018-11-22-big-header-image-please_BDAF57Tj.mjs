import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As the year comes to an end, the IT team likes to share both recent and upcoming\nupdates to the FashionUnited platform in a small series of bite-sized blogposts.\nWe’re kicking off with a visual one.</p>\n<p>We do a lot of customization for our customers, to make their jobs look the best\non our platform. In that, we’re quite unique actually, not many jobboards can do\nthis for them. (USP, sales team ;) As Dilan noticed some small changes could\nimprove looks big-time, we implemented them right away. Here’s one of the first\nimprovements Dilan has made in her first days at FashionUnited, the examples\nshow jobs where you can see the difference best.</p>\n<!-- _**Click the links to see an actual job**_\n\n[Floris van Bommel](https://fashionunited.nl/modevacatures/assistent-storemanager-32-38-uur-batavia-stad-lelystad-1082715)\n![Floris van Bommel Job][floris]\n\n[We Fashion](https://fashionunited.nl/modevacatures/assistent-store-manager-utrecht-boven-vredenburgpassage-10-1074407)\n![WE Fashion Job][we]\n\n[ZEB](https://fashionunited.be/fashion-jobs/business-analyst-merchtem-1088832)\n![Zeb][zeb]\n\n[New Yorker](https://fashionunited.nl/modevacatures/parttime-winkelmedewerker-25-30-uur-apeldoorn-1089662)\n![New Yorker][new-yorker] -->\n<p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/26094ea1-e395-4442-c929-5c75438e4e00/public\" alt=\"floris\" title=\"Floris van Bommel Job, CC courtesy of Joost van der Laan\"></p>\n<p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/d925ffd5-ff23-42f3-5895-962c4d190100/public\" alt=\"we\" title=\"We fashion Job, CC courtesy of Joost van der Laan\"></p>\n<p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/89833107-a5cb-45cc-40b3-d4e775fe1e00/public\" alt=\"zeb\" title=\"Zeb Job, CC courtesy of Joost van der Laan\"></p>\n<p><img src=\"https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/0fbb588a-417c-4193-5f69-2c2417e69900/public\" alt=\"new-yorker\" title=\"New Yorker Job, CC courtesy of Joost van der Laan\"></p>";

				const frontmatter = {"title":"Big header image please!","description":"Better looking job templates in the jobboard.","summary":"Better looking job templates in the jobboard.","author":"Joost van der Laan","date":"2018-11-22T13:07:01.000Z","published_at":"2018-11-22T00:00:00.000Z","categories":["IT Update","Product development"],"tags":["IT update","hugo","blog"],"images":["floris.png"]};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/posts/2018-11-22-big-header-image-please.md";
				const url = undefined;
				function rawContent() {
					return "\nAs the year comes to an end, the IT team likes to share both recent and upcoming\nupdates to the FashionUnited platform in a small series of bite-sized blogposts.\nWe're kicking off with a visual one.\n\nWe do a lot of customization for our customers, to make their jobs look the best\non our platform. In that, we're quite unique actually, not many jobboards can do\nthis for them. (USP, sales team ;) As Dilan noticed some small changes could\nimprove looks big-time, we implemented them right away. Here's one of the first\nimprovements Dilan has made in her first days at FashionUnited, the examples\nshow jobs where you can see the difference best.\n\n<!-- _**Click the links to see an actual job**_\n\n[Floris van Bommel](https://fashionunited.nl/modevacatures/assistent-storemanager-32-38-uur-batavia-stad-lelystad-1082715)\n![Floris van Bommel Job][floris]\n\n[We Fashion](https://fashionunited.nl/modevacatures/assistent-store-manager-utrecht-boven-vredenburgpassage-10-1074407)\n![WE Fashion Job][we]\n\n[ZEB](https://fashionunited.be/fashion-jobs/business-analyst-merchtem-1088832)\n![Zeb][zeb]\n\n[New Yorker](https://fashionunited.nl/modevacatures/parttime-winkelmedewerker-25-30-uur-apeldoorn-1089662)\n![New Yorker][new-yorker] -->\n\n![floris](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/26094ea1-e395-4442-c929-5c75438e4e00/public \"Floris van Bommel Job, CC courtesy of Joost van der Laan\")\n\n![we](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/d925ffd5-ff23-42f3-5895-962c4d190100/public \"We fashion Job, CC courtesy of Joost van der Laan\")\n\n![zeb](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/89833107-a5cb-45cc-40b3-d4e775fe1e00/public \"Zeb Job, CC courtesy of Joost van der Laan\")\n\n![new-yorker](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/0fbb588a-417c-4193-5f69-2c2417e69900/public \"New Yorker Job, CC courtesy of Joost van der Laan\")\n";
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
