const id = "docs/editorial-cheat-sheet/index.md";
						const collection = "docs";
						const slug = "docs/editorial-cheat-sheet";
						const body = "\n## How to use the news upload form &ndash; Video\n\n- [How to use the news upload form - YouTube video](https://www.youtube.com/watch?v=xKR86VSNfNQ)\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/xKR86VSNfNQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n\nMost of what you need to publish on the FashionUnited platform is supported by\nmarkdown. Here's the relevant links:\n\n- [Headings](https://www.markdownguide.org/basic-syntax/#headings)\n- [Paragraphs](https://www.markdownguide.org/basic-syntax/#paragraphs-1)\n- [Emphasis (bold, italic)](https://www.markdownguide.org/basic-syntax/#emphasis)\n- [Blockquotes](https://www.markdownguide.org/basic-syntax/#blockquotes-1)\n- [Lists](https://www.markdownguide.org/basic-syntax/#lists)\n- [Links](https://www.markdownguide.org/basic-syntax/#links)\n- [Images](https://www.markdownguide.org/basic-syntax/#images-1)\n- [HTML](https://www.markdownguide.org/basic-syntax#html)\n\n### Learn more about Markdown\n\n1. [How to Write Faster, Better & Longer: The Ultimate Guide to Markdown](https://ghost.org/blog/markdown/)\n2. [Markdown Cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)\n   &ndash; For advanced use, the basics are covered on this page.\n\n### When using HTML\n\nFor any markup that is not covered by Markdown's syntax, you simply use HTML\nitself [[source](https://daringfireball.net/projects/markdown/syntax#html)].\n\nUse blank lines to separate block-level HTML elements like `<div>`, `<table>`,\n`<pre>`, and `<p>` from the surrounding content\n[[source](https://www.markdownguide.org/basic-syntax#html-best-practices)].\n\n**Good example:**\n\n```markdown\nThis is a regular paragraph.\n\n<figure>\n  <img src=\"https://media.fashionunited.com/media/dummy/landscape.jpeg\" alt=\"my alt text\">\n  <figcaption>This is my caption text.</figcaption>\n</figure>\n\n**This is a bold paragraph.**\n\n<div class=\"article-promo\">\n  Werken bij een van de merken in Amsterdam The Style Outlets?\n</div>\n\nInline HTML (span, img, etc.) is allowed\n<img src=\"https://media.fashionunited.com/media/dummy/landscape.jpeg\"> and will\nrender fine. _And an italic sentence._\n```\n\n**Bad example:**\n\n```html\nThis is a regular paragraph.\n<figure>\n  <img src=\"https://media.fashionunited.com/media/dummy/landscape.jpeg\" alt=\"my alt text\">\n  <figcaption>This is my caption text.</figcaption>\n</figure>\n**This is bold a paragraph.**\n<div class=\"article-promo\">\n  Werken bij een van de merken in Amsterdam The Style Outlets?\n</div>\nInline HTML (span, img, etc.) is allowed <img src=\"https://media.fashionunited.com/media/dummy/landscape.jpeg\"> and will render fine.\n*And an italic sentence.*\n```\n\n## News Article: Basic, no extra images\n\nPlease note:\n\n- The title is set in a separate field.\n- the header image that you upload will insert at the top of your article\n  automatically. This looks like a link:\n  `![](https://fashionunited.com/some-image.jpg)`\n\n```markdown\nNet sales at Coach-parent Tapestry Inc totalled 715 million dollars for the\nfourth quarter compared to 1.51 billion dollars in the prior year. The company\nsaid in a statement that gross profit totalled 499 million dollars on a reported\nbasis, while gross margin for the quarter was 69.8 percent compared to 999\nmillion dollars and 66 percent, respectively, in the prior year. Net loss for\nthe quarter was 294 million on a reported basis, with loss per diluted share of\n1.06 dollars compared to net income of 149 million dollars with earnings per\ndiluted share of 51 cents in the prior year period.\n\n## Review of Tapestry’s fourth quarter performance\n\nOn a non-GAAP basis, gross profit for the fourth quarter was 507 million\ndollars, while gross margin was 71 percent compared to 1.02 billion dollars and\n67.3 percent, respectively, in the prior year. Operating loss was approximately\n280 million dollars on a reported basis, while operating margin was negative\n39.2 percent versus operating income of 171 million dollars and an operating\nmargin of 11.3 percent in the prior year. On a non-GAAP basis, operating loss\nwas 70 million dollars, while operating margin was negative 9.8 percent versus\noperating income of 222 million dollars and an operating margin of 14.7 percent\nin the prior year.\n```\n\n## News Article: with 1 extra image\n\n```markdown\nNet sales at Coach-parent Tapestry Inc totalled 715 million dollars for the\nfourth quarter compared to 1.51 billion dollars in the prior year. The company\nsaid in a statement that gross profit totalled 499 million dollars on a reported\nbasis, while gross margin for the quarter was 69.8 percent compared to 999\nmillion dollars and 66 percent, respectively, in the prior year. Net loss for\nthe quarter was 294 million on a reported basis, with loss per diluted share of\n1.06 dollars compared to net income of 149 million dollars with earnings per\ndiluted share of 51 cents in the prior year period.\n\n## Review of Tapestry’s fourth quarter performance\n\nOn a non-GAAP basis, gross profit for the fourth quarter was 507 million\ndollars, while gross margin was 71 percent compared to 1.02 billion dollars and\n67.3 percent, respectively, in the prior year.\n![](https://fashionunited.com/img/master/2020/08/13/kate-spade-1-coraplf0-2020-08-13.jpeg)\nOperating loss was approximately 280 million dollars on a reported basis, while\noperating margin was negative 39.2 percent versus operating income of 171\nmillion dollars and an operating margin of 11.3 percent in the prior year. On a\nnon-GAAP basis, operating loss was 70 million dollars, while operating margin\nwas negative 9.8 percent versus operating income of 222 million dollars and an\noperating margin of 14.7 percent in the prior year.\n```\n\n## Executive, Education\n\nTo publish to `.com/education` and `.com/executive` via [dashboard.fashionunited.com](https://dashboard.fashionunited.com), you need to add the tag corresponding to the category you want to publish to. \nThese tags will only change the category you are posting to on `fashionunited.com` and leave the other newsboards/platforms/domains you are posting to intact.  \nThe tags to use are as follows:\n\n- `Executive Management` => will post to `.com/executive/management` category\n- `Executive Report` => will post to `.com/executive/management` category\n- `Education News` => will post to `.com/education/news` category\n- `Education Schools` => will post to `.com/education/schools` category\n\n### Example\n\nPosting an article, you select the `news/fashion` category and post to multiple newsboards, including `US` and `UK`. To post the article to executive on .com, you would then add the **tag** `Education Schools`.  \nResult: The article will be posted in **UK** `news/fashion` and **US** `education/schools`\n\n## Embed Video\n\n### YouTube\n\n#### Code\n\n```html\n## Youtube\n<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/cvDVoGUOks4?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n```\n\n#### Result\n\n<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/cvDVoGUOks4?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n\n### Vimeo\n\n#### Code\n\n```html\n<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe class=\"embed-responsive-item\" src=\"https://player.vimeo.com/video/366820993\"  frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>\n</div>\n```\n\n#### Result\n\n<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe class=\"embed-responsive-item\" src=\"https://player.vimeo.com/video/366820993\"  frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>\n</div>\n\n### Hyperlink\n\n```md\nMy favorite website is [FashionUnited](https://fashionunited.com)\n```\n\nMy favorite website is [FashionUnited](https://fashionunited.com).\n\n### Images\n\n```md\n![Alttext](URL)\n```\n\nOr, with optional titletext:\n\n```md\n![Alttext](URL \"Titletext\")\n```\n\n- Alttext is **mandatory**. Always provide an alt text describing what's in the\n  picture. This helps **SEO** and visually impaired people using\n  **screenreaders**. [Read more](https://moz.com/learn/seo/alt-text)\n- Title text is optional / not needed. The title text will show on mouse hover.\n  On mobile phones, over 50% of users as of 2019, you cannot hover. Hence the\n  title text is useless.\n\n```md\n![ALTTEXT](https://media.fashionunited.com/media/dummy/portrait.jpeg \"Title text, optional. Shows on mouse hover.\")\n```\n\n![Alt text, mandatory. Always provide an alt text describing what's in the picture!](https://media.fashionunited.com/media/dummy/portrait.jpeg \"Title text, optional. Shows on mouse hover.\")\n\n### Image with caption\n\nMarkdown does not support figcaption. Therefore we must use HTML.\n\n```html\n<figure>\n  <img src=\"https://media.fashionunited.com/media/dummy/landscape.jpeg\" alt=\"my alt text\">\n  <figcaption>This is my caption text.</figcaption>\n</figure>\n```\n\n<figure>\n  <img src=\"https://media.fashionunited.com/media/dummy/landscape2.jpeg\" alt=\"my alt text\">\n  <figcaption>This is my caption text.</figcaption>\n</figure>\n\n#### Caption with links\n\n```html\n<figure>\n  <img src=\"https://media.fashionunited.com/media/dummy/portrait2.jpeg\" alt=\"Macaque in the trees\">\n  <figcaption>A cheeky macaque, Lower Kintaganban River, Borneo. Original by <a href=\"https://fashionunited.com/\">Richard Clark</a></figcaption>\n</figure>\n```\n\n<figure>\n  <img src=\"https://media.fashionunited.com/media/dummy/portrait2.jpeg\" alt=\"Macaque in the trees\">\n  <figcaption>A cheeky macaque, Lower Kintaganban River, Borneo. Original by <a href=\"https://fashionunited.com/\">Unsplash</a></figcaption>\n</figure>\n\n### Linking images\n\n```md\n[![ALTTEXT!](https://media.fashionunited.com/media/dummy/landscape.jpeg)](https://fashionunited.com)\n```\n\n[![ALTTEXT!](https://media.fashionunited.com/media/dummy/landscape.jpeg)](https://fashionunited.com)\n\n## Default image\n\n```html\n<img src=\"https://static.fashionunited.com/2015/NEWSpicture.jpg\" alt=\"\">\n```\n\n## Label\n\n```html\n<span class=\"label label-primary\">INTERVIEW</span>\n```\n\n## IM Small\n\n<img src=\"https://static.fashionunited.com/201709/6blankimage3.jpg\" alt=\"\">\n\nLink to 1 article\n\n```html\n<div class=\"panel panel-default\">\n  Also read:\n  <div class=\"panel-body\">\n    <a href=\"LINK\" target=\"_self\"><u>TEXT</u></a>\n  </div>\n</div>\n```\n\n## Read more box\n\n```html\n<div class=\"article-promo\">\n  <header>Read more:</header>\n<ul>\n      <li><a href=\"LINK\" target=\"_self\">TEKST</a></li>\n      <li><a href=\"LINK\" target=\"_self\">TEKST</a></li>\n      <li><a href=\"LINK\" target=\"_self\">TEKST</a></li>\n    </ul>\n  </div>\n```\n\n## Frame\n\n```html\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    Basic panel example\n  </div>\n</div>\n```\n\n### Frame with links\n\n```html\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <strong><p>Lees ook:</p></strong>\n    <ul type=\"square\">\n      <li><a href=\"LINK\" target=\"_self\"><u>TEXT</u></a></li>\n      <li><a href=\"LINK\" target=\"_self\"><u>TEXT</u></a></li>\n      <li><a href=\"LINK\" target=\"_self\"><u>TEXT</u></a></li>\n    </ul>\n  </div>\n</div>\n```\n\n### Frame within article, grey\n\n```html\n<div class=\"panel panel-default\" style=\"float: right; padding-left: 10px; border: none;\">\n  <div class=\"panel-body\">\n    <div style=\"background-color: #eee; padding: 30px;\">\n      <div class=\"blokje\">\n        <strong><small>In het kort (test)</small></strong>\n        <ul>\n          <li><small>Opgericht in 1988</small></li>\n          <li><small>Adres: test test</small></li>\n          <li><small>Aantal werknemers: test test</small></li>\n          <li><small>Wapenfeiten: test test prijs test</small></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n```\n\n## Promotional box\n\nSee a preview of the promotional boxes in our\n[Storybook](https://fashionunited.com/storybook/?path=/story/article--with-image).\n\n```html\n<div class=\"article-promo\">\n  Werken bij een van de merken in Amsterdam The Style Outlets?\n</div>\n```\n\n### Promotional box, with a header text\n\n`<header>...</header>`\n\n```html\n<div class=\"article-promo\">\n  <header>Promotion</header>\n  Werken bij een van de merken in Amsterdam The Style Outlets?\n</div>\n```\n\n### Promotional box, with link\n\n`class=\"article-promo\"`\n\n```html\n<div class=\"article-promo\">\n  <header>Achtergrondinformatie</header>\n  <p>\n    De mode-industrie is een van de vervuilendste industrieën wereldwijd. We quoten de Amerikaanse modejournalist Dana Thomas: ‘van het vergaren van grondstoffen tot <a rel=\"noopener noreferrer\" href=\"https://fashionunited.nl/v1/leads/ophef-afvalberg-kleding/20080828131\" target=\"_self\"><u>de afvalberg vol kleding</u></a>’. Enerzijds is de modesector dus zo vervuilend omdat modebedrijven gigantisch veel kleren produceren, anderzijds omdat consumenten - jij en ik - enorme hoeveelheden kleding kopen - en weggooien.\n  </p>\n</div>\n```\n\n<img src=\"https://storage.googleapis.com/fu-logos/logos/article-promo.png\" alt=\"Article Promo Box\">\n\n### Promotional box, with alternative styling\n\n`class=\"article-promo--alt\"`\n\n```html\n<div class=\"article-promo--alt\">\n  <header>Promotion</header>\n  Werken bij een van de merken in Amsterdam The Style Outlets? <a href=\"https://fashionunited.com/\">Bekijk hier alle vacatures &gt;&gt;</a>\n</div>\n```\n\n<img src=\"https://storage.googleapis.com/fu-logos/logos/article-promo--alt.png\" alt=\"Article Promo Box Alternative\">\n\n## Details-menu\n\n```html\n<details>\n  <summary>Een ander idee is dichter bij huis produceren.<span class=\"dropdown-icon\"></span>Dat doet Zara overigens ook.</summary>\n  <details-menu role=\"menu\">\n    <div class=\"article-promo\">\n      <p>\n        <u>Mode wordt weer dicht bij de afzetmarkt gemaakt</u><br>\n        Voor <em>nearshoring</em>, waarbij de productie dus dichter bij de\n        afzetmarkt plaatsvindt, en <em>reshoring</em>, het terughalen van de\n        productie uit lagelonenlanden, is steeds meer interesse in de branche. Zo\n        blijkt ook uit het in 2018 verschenen rapport 'Is apparel manufacturing\n        coming home?' en het 2021 onderzoek 'Revamping fashion sourcing: Speed and\n        flexibility to the fore' van het Amerikaanse adviesbureau McKinsey. Daarin\n        gaf 71 procent van de Chief Purchasing Officers (CPO’s) die McKinsey\n        ondervroeg, aan <a rel=\"noopener noreferrer\" href=\"https://fashionunited.nl/nieuws/business/minder-opties-meer-in-season-en-meer-analytics-nieuw-onderzoek-onthult-sourcingtrends/2021111651666\" target=\"_self\"><u>meer te willen gaan <em>nearshoren</em></u></a>.\n      </p>\n\n      <p>\n        Dat er in de modewereld een toenemende interesse is voor productie in de\n        buurt van de afzetmarkt, stelt ook de Amerikaanse (mode)journalist Dana\n        Thomas. Thomas schrijft in haar boek Fashionolopis (over de opkomst en\n        keerzijde van fast fashion) dat deze <em>nearshoring</em> trend in Amerika\n        en Engeland al een paar jaar geleden in gang is gezet. <small>(Bron: De\n        Correspondent artikel 'Van Made in Bangladesh naar Made in Europe’ van Emy\n        Demkes, uit oktober 2019.)</small>\n      </p>\n\n      <p>\n        Han Bekke, voorzitter van branchevereniging Modint, verklaarde tegenover\n        NOS eveneens \"een duidelijke trend\" te zien. In het artikel 'Groeiend\n        aantal modebedrijven wil weg van 'race to bottom' in China' uit april 2021\n        stelt Bekke: \"Steeds meer orders gaan naar landen als Turkije, Portugal en\n        Italië en Oost-Europese landen.\"\n      </p>\n    </div>\n  </details-menu>\n</details>\n<p>The rest of the article.....</p>\n```\n\nAdditional information to use this tag:\n\n- Make sure that the paragraph is wrapped with a `<details>` tag.\n- The `<summary>` tag is used to define a visible heading for the `<details>`\n  element.\n- Make sure the `<span class=\"dropdown-icon\"></span>` tag is added to the\n  `<summary>` tag to show the dropdown icon.\n- The `<details-menu>` tag is used to define the content of the details menu.\n- The `<details-menu>` tag must have the `role=\"menu\"` attribute.\n- The `<details-menu>` tag must have a `<div class=\"article-promo\">` tag as a\n  child.\n- The `<div class=\"article-promo\">` should contain `<p>` tags with the content\n  of the details menu.\n- Continue the article after the `<details>` tag, so that the DOM looks like:\n\n```html\n<p></p>\n<details></details>\n<p></p>\n```\n\nclosed:\n<img src=\"https://storage.googleapis.com/fu-logos/logos/details-menu--closed.png\" alt=\"Details menu closed\">\n\nopen:\n<img src=\"https://storage.googleapis.com/fu-logos/logos/details-menu--open.png\" alt=\"Details menu open\">\n\n## Dropdown for credit details / references, using an asterisk (*) icon\n\nIn order to display a dropdown with an asterisk, use the same element as the\n`details-menu`, but replace `<span class=\"dropdown-icon\"></span>` with\n`<span class=\"asterisk-icon\"></span>`.\n\nExample:\n\n```html\n<details>\n  <summary aria-haspopup=\"menu\" role=\"button\">\n    Example of credit details.\n    <span class=\"asterisk-icon\"></span>Notice how it uses an asterisk instead of \n    a chevron icon\n  </summary>\n  <details-menu role=\"menu\">\n    <div class=\"article-promo\">\n      <p>Credits to FashionUnited</p>\n    </div>\n  </details-menu>\n</details>\n```\n";
						const data = {title:"Editorial cheat sheet",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/editorial-cheat-sheet/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
