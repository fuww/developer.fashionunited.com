const id = "posts/2019-05-22-small-steps-big-changes.md";
						const collection = "docs";
						const slug = "posts/2019-05-22-small-steps-big-changes";
						const body = "\nThe internet is constantly moving, and to keep up, you need to change things.\nNot once, not twice, but constantly. As the saying goes, \"The only constant is\nchange\"_(insert some wrong attribution found in the first Google result here)._\n\nUnsurprisingly, a big part of the work at IT revolves around change, especially\nsince technology is changing at an ever faster pace.\n\nTo give you an idea, we deploy new code to production (the live websites) every\nday. Multiple times per day. During working hours. Did you notice it? Probably\nnot.\n\nSo how do we do that?\n\nThe answer is simple. You take a new feature, and you downsize it. And then,\nwhen you think it is small enough, you try to make it even smaller.\n\nFor example, you better not implement a site-wide redesign all at once. It’s\nbetter to do it in small pieces. That way you keep it simple and easy to work\nwith. A lot of tiny changes eventually add up to big transformations. But the\nprocess is a lot smoother then big-bang redesigns. At FashionUnited we don't\nlike big bang redesigns. We don't like big changes. Because big-bang changes\ntend to break things. The one thing people dislike more then change? Things that\nbreak.\n\n_Some numbers: there're roughly **over a hundred pieces of code** committed per\nday by our developers, starting **thousands of automated tests** checking things\nlike; code quality, functionality, user interface tests, security and code style\n& formatting. There're even automated screenshot tests to see if job templates\nlook the way they should. Finally, everything gets deployed to production (the\nlive sites) multiple times per day. Fully automated._\n\n![Continuous Integration & Continuous Deployment Workflow](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/462046bf-eb62-4402-5a20-11f2bf61f200/public \"Continuous Integration & Continuous Deployment Workflow. CI/CD, courtesy of GitLab\")\n\nWhen was the last time you've seen Facebook or Google do a big makeover of their\nsites? That's right, you didn't. Because they make tiny changes all the time.\n\nYes, their sites now look way different from what they looked like a year ago.\nBut it's the tiny changes carried out over the year that make it so.\n\nIn the past weeks, you've maybe seen us make tiny changes like this. For\nexample, the navigation bar changed colors, fonts where adjusted in some places,\nthen more. Menu items got changed (noticed the network link changed to\nlookbook?) And so on.\n\n![NewsArticle Card](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/159e96a4-929a-47cd-f8fe-6352e529fa00/public \"NewsArticle Card, CC courtesy of Joost van der Laan\")\n\nWe created a lot of small pieces related to the new design. For example, the\n[Job of the Week Card](https://fashionunited.com/storybook/?path=/story/card--job-of-the-week),\n[news article card](https://fashionunited.com/storybook/?path=/story/card--news-article-card),\n[Image list (used in lookbook)](https://fashionunited.com/storybook/?path=/story/image-list--standard),\n[Navigation bars](https://fashionunited.com/storybook/?path=/story/navigation--simple)\nand yes, we even have a\n[snackbar](https://fashionunited.com/storybook/?path=/story/snackbar--standard)...\nKroketje anyone?\n\nWhen you put some of these together, you can start seeing the bigger picture.\nCheck out the [lookbook](https://fashionunited.com/lookbook/) for example, it is\nfully in the new design.\n\n![Lookbook](https://imagedelivery.net/7czaBv4WuiSsJFxi583jUw/fed234e6-4e32-4822-2815-269eb6885000/public \"Lookbook, CC courtesy of Joost van der Laan\")\n\nBack to the news sites, we've also started to make the first changes there. Just\nthe last 2 weeks we started putting live the\n[tags pages like this one for Adidas on UK](https://fashionunited.uk/tags/adidas).\nThe tags also moved to the **/tags/** sub folder to make things easy, for\nexample for editorial to analyse.\n\nThe [trends page got a similar treatment](https://fashionunited.uk/trends), it\nhas been converted to the new style and running on a new system using brand-new\ntechnology, **optimized for mobile.**\n\nBoth the trends page and tags pages are live only on English sites. Their\nperformance will be monitored for a while before rolling out to other languages.\n\nNow you probably understand why that navigation bar (we call it navbar) has\nswitched to white. It made it easy for us to blend in recent changes like tags &\ntrends pages.\n\nYou see? A lot of _small changes_ can add up to something big.\n\n_If you want to see more of the design & upcoming changes, feel free to check\nout these prototypes:_\n\n1. [This is a mobile prototype, the most important one (remember, most traffic on the internet is mobile nowadays)](https://www.figma.com/proto/0AIzMrJXBPNXax7QoMLDIS/Design-System?node-id=8918%3A0&scaling=scale-down)\n   (homepage + clickable article 5/6) - Figma\n2. [Full mobile homepage design](https://www.figma.com/file/0AIzMrJXBPNXax7QoMLDIS/Design-System?node-id=8918%3A0) -\n   Figma\n\n3. [This is a desktop prototype](https://www.figma.com/proto/0AIzMrJXBPNXax7QoMLDIS/Design-System?node-id=8283%3A2290&scaling=min-zoom)\n   (homepage + first article card clickable) - Figma\n4. [Full desktop homepage design](https://www.figma.com/file/0AIzMrJXBPNXax7QoMLDIS/Design-System?node-id=8974%3A4308) -\n   Figma\n";
						const data = {title:"Small steps big changes",description:"Taking small steps is key when implementing changes, like a new design.",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/joost/git/developer.fashionunited.com/src/content/docs/posts/2019-05-22-small-steps-big-changes.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };