import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"platform-support\">Platform support</h2>\n<p>Marketplace can connect to almost <strong>any platform</strong> via product feeds in CSV, XML\nor JSON format. API’s are also supported. Don’t worry if your system is not\nlisted here, we can probably still support it.</p>\n<h2 id=\"no-platform\">No Platform?</h2>\n<p>Don’t have a b2b webshop or ERP to get your data from? We got you! We provide a\nbackend (Magento) where you can manually upload and update your products as\nwell.</p>\n<h3 id=\"channable\">Channable</h3>\n<p>Channable is an integration platform which has a plethora of options. Among\nwhich <strong>FashionUnited Export channel</strong> is preferred, as this is exactly what we\nneed.\n<a href=\"https://player.vimeo.com/video/735432939?h=8044b9fc2e&#x26;badge=0&#x26;autopause=0&#x26;player_id=0&#x26;app_id=58479\">Click here</a>\nfor step by step instructions for generating a product feed.</p>\n<ul>\n<li><a href=\"https://helpcenter.channable.com/hc/nl/articles/360011189739\">Click here</a> for\ninstructions about categories.</li>\n<li>How to get the URL of my feed? -\n<a href=\"https://helpcenter.channable.com/hc/nl/articles/360011077239-Hoe-kom-ik-aan-de-URL-van-het-feed-bestand-\">Channable documentation</a>.</li>\n<li>Other Channels you already have developed (Ex.\n<a href=\"https://helpcenter.channable.com/hc/nl/articles/360011027999-Een-nieuwe-feed-toevoegen\">Google Shopping Export Channel</a>,\n<a href=\"https://helpcenter.channable.com/hc/nl/articles/360010964840-Een-Custom-CSV-feed-opzetten\">custom CSV feed</a>,\n<a href=\"https://helpcenter.channable.com/hc/nl/articles/360011084719-Een-Custom-XML-feed-opzetten\">custom XML feed</a>,\netc.) with Channable might also be usable, let us know and we can validate.</li>\n</ul>\n<h3 id=\"centra\">Centra</h3>\n<p>B2B webshop platform, supported via API.</p>\n<ul>\n<li>Request an API key for FashionUnited from your Centra account manager.</li>\n</ul>\n<h3 id=\"itsperfect\">Itsperfect</h3>\n<p>B2B webshop platform, supported via API.</p>\n<ul>\n<li>Request an API key for FashionUnited from your Itsperfect account manager.</li>\n</ul>\n<h3 id=\"magento\">Magento</h3>\n<p>eCommerce platform, supported via plugins. A product feed can be setup via (one\nof) the following:</p>\n<ul>\n<li>Extension: Product Feed Export (Magento 2) by XTENTO[^1]. For an instruction\nof product feed export,\n<a href=\"https://www.xtento.com/magento-extensions/magento-product-feed-export-module.html\">click here</a>.</li>\n<li>Other extensions supporting the Google Shopping Format</li>\n</ul>\n<h3 id=\"shopify\">Shopify</h3>\n<p>eCommerce platform, supported via CSV, URL/ XML (with plugin). A product feed\ncan be setup via (one of) the following:</p>\n<ul>\n<li><a href=\"https://apps.shopify.com/product-feeds-generator?surface_detail=marketing-product-feeds&#x26;surface_inter_position=1&#x26;surface_intra_position=22&#x26;surface_type=category\">Product Feed Generator extension</a>[^1]</li>\n<li><a href=\"https://apps.shopify.com/browse/marketing-product-feeds\">Other extensions</a>\nsupporting the Google Shopping Format</li>\n</ul>\n<p>For a step-by-step instruction on how to generate your first product feed,\n<a href=\"https://www.exportfeed.com/documentation/rapid-cart-shopify-generate-first-feed-2/\">click here</a>.</p>\n<p>For a step-by-step instruction on how to export Shopify product CSV’s,\n<a href=\"https://help.shopify.com/en/manual/products/import-export/export-products%23export-your-products\">click here</a>.</p>\n<h3 id=\"shopware-6\">Shopware 6</h3>\n<p>Shopware 6 is an open-source e-commerce platform designed to create customizable and scalable online stores. To export your data in CSV format, navigate to the Export tab within your Shopware 6 dashboard.</p>\n<ul>\n<li>For comprehensive guidelines on exporting your product feed, <a href=\"https://docs.shopware.com/en/shopware-en/settings/importexport?category=shopware-6-en/settings/shop#export\">click here</a>.</li>\n<li>If you prefer a visual tutorial, <a href=\"https://youtu.be/rQKIgxSemHM?si=ZaXtF8TTayd4gTom&#x26;t=446\">watch this step-by-step video guide</a>.</li>\n<li>To include all <a href=\"https://developer.fashionunited.com/docs/marketplace/getting-started#fields\">the required fields</a> in your product feed export, you can create new database mappings by following <a href=\"https://docs.shopware.com/en/shopware-en/settings/importexport?category=shopware-6-en/settings/shop#mappings\">these instructions</a>.</li>\n</ul>\n<h3 id=\"prestashop\">PrestaShop</h3>\n<p>Free eCommerce platform. It is a B2C eCommerce platform first and foremost, but\nhas a B2B mode as well.</p>\n<ul>\n<li>For instructions on how to export a PrestaShop file to a CSV file,\n<a href=\"https://zemez.io/prestashop/support/how-to/prestashop-1-6-x-how-to-exportimport-data-in-csv-files/\">click here</a>.</li>\n<li>For a Google Shopping Feed extension,\n<a href=\"https://addons.prestashop.com/en/price-comparison/45244-google-merchant-center-google-shopping-feed-pro.html\">click here</a>.</li>\n<li>For an allround Feed Manager extension,\n<a href=\"https://addons.prestashop.com/en/sea-paid-advertising-affiliation-platforms/32728-feed-manager-pro-product-feeds-for-all-platforms.html\">click here</a>.</li>\n</ul>\n<h3 id=\"bigcommerce\">BigCommerce</h3>\n<p>eCommerce platform, supported via CSV, URL/ XML. The product feed can be set\nwith the following tools:</p>\n<ul>\n<li><a href=\"https://www.bigcommerce.com/apps/product-feed-generator/\">Product Feed Generator</a></li>\n<li><a href=\"https://www.bigcommerce.com/apps/sales-channels/?search=feed\">Click here</a> for\nSales Channels.</li>\n</ul>\n<h3 id=\"nuorder\">NuORDER</h3>\n<p>B2B eCommerce platform helping brands deliver a wholesale process. For\ninstructions how to export your product data,\n<a href=\"https://helpdesk.nuorder.com/hc/en-us/articles/360050365752-Exporting-Your-Product-Data\">click here</a>.</p>\n<h3 id=\"joor\">JOOR</h3>\n<p>Wholesale platform for fashion. To find JOOR integrations,\n<a href=\"https://joorhelpcenter.force.com/customer/s/topic/0TO460000004HiQGAU/integrations?language=en_US\">click here</a>.</p>\n<h3 id=\"woocommerce\">WooCommerce</h3>\n<p>WooCommerce is the official eCommerce plugin for WordPress-based websites. This\nopen-source eCommerce plugin designed for merchants of all sizes. It offers an\nextensive plugin library that allows you to customize your online shop.\nPreferred feed generating option for WooCommerce is the JSON format. For this\nProduct feed, the Consumer key and consumer secret information is required.\n<a href=\"https://woocommerce.com/document/woocommerce-rest-api/\">Click here</a> for\ninstructions.</p>\n<ul>\n<li>For other feed generating options,\n<a href=\"https://docs.woocommerce.com/document/google-product-feed-feed-generation-options/\">click here</a>.</li>\n<li>For a product CSV importer and exporter,\n<a href=\"https://docs.woocommerce.com/document/product-csv-importer-exporter/\">click here</a>.</li>\n</ul>\n<h3 id=\"effectconnect\">EffectConnect</h3>\n<p>EffectConnect is a marketplace integrator with extensive knowledge in the field\nof marketplace automation and a focus on understanding our customers’ needs.\nThey often hear that our customers spend too much time and money on creating\nfeeds for all the different platforms. That is why they developed the Feed\nManager.</p>\n<p>The\n<a href=\"https://www.effectconnect.com/nl/feed-manager-effectconnect\">user-friendly Feed Manager by EffectConnect</a>\nenables quick and easy product display on feed-based channels such as\nFashionUnited.</p>\n<p>As source data, you can use:</p>\n<ul>\n<li>our FashionUnited template</li>\n<li>XML or CSV files as source data, or we import it via API</li>\n<li>existing data in your webshop. You can simply integrate your shop to\nEffectConnect and use this data in your product feeds or for automated sales\non marketplaces</li>\n</ul>\n<p><strong>How to create a quality data feed?</strong></p>\n<p>A data feed is a file that consists of a list of products divided into groups of\nattributes, which describe the products in a unique way. Find out\n<a href=\"https://blog.effectconnect.com/nl/hoe-maak-je-een-goede-datafeed\">how you can create quality data feeds</a>\nthat help you increase your conversion rate.</p>\n<p><strong>Creating a feed in 5 minutes</strong></p>\n<p>Our Feed Manager has clear instruction video’s in each step, so you can easily\nset up feeds yourself. Have a look at\n<a href=\"https://blog.effectconnect.com/nl/waarom-feed-manager-effectconnect\">this blog post</a>,\nwhich includes a 5 minute video about creating a feed in our Feed Manager.</p>\n<h3 id=\"lengow\">Lengow</h3>\n<p>Lengow is an eCommerce feed Management Platform that helps online retailer and\nbrands find the right marketing channels to scale, optimise and automate all\nonline activity. Currently the options are:</p>\n<ul>\n<li>The Google Shopping Export Channel,\n<a href=\"https://www.lengow.com/get-to-know-more/how-to-create-a-google-shopping-feed/\">click here</a>\nfor instructions.</li>\n<li><a href=\"https://www.lengow.com/get-to-know-more/how-to-create-a-flow-of-product-data-for-marketplaces/\">Other Channels</a>\nyou already have developed with Lengow might also be usable, let us know and\nwe can validate.</li>\n</ul>\n<h3 id=\"others\">Others</h3>\n<p>Most systems can be hooked up to the Marketplace, contact support with the\ndetails of your system to get connected.</p>\n<p>[^1] Example - we are not affiliated with these extension developers in any way.</p>";

				const frontmatter = {"title":"Platforms","author":"Joost van der Laan","comments":false,"date":"2020-07-17T00:00:00.000Z","publishdate":"2020-07-17T00:00:00.000Z","lastmod":"2021-06-15T00:00:00.000Z","toc":true,"menu":{"developers":{"parent":"Marketplace","weight":20}},"images":["caroline-attwood-2lYhQry-Jxc-unsplash-header.jpg"]};
				const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/docs/marketplace/platforms.md";
				const url = undefined;
				function rawContent() {
					return "\n## Platform support\n\nMarketplace can connect to almost **any platform** via product feeds in CSV, XML\nor JSON format. API's are also supported. Don't worry if your system is not\nlisted here, we can probably still support it.\n\n## No Platform?\n\nDon’t have a b2b webshop or ERP to get your data from? We got you! We provide a\nbackend (Magento) where you can manually upload and update your products as\nwell.\n\n### Channable\n\nChannable is an integration platform which has a plethora of options. Among\nwhich **FashionUnited Export channel** is preferred, as this is exactly what we\nneed.\n[Click here](https://player.vimeo.com/video/735432939?h=8044b9fc2e&badge=0&autopause=0&player_id=0&app_id=58479)\nfor step by step instructions for generating a product feed.\n\n- [Click here](https://helpcenter.channable.com/hc/nl/articles/360011189739) for\n  instructions about categories.\n- How to get the URL of my feed? -\n  [Channable documentation](https://helpcenter.channable.com/hc/nl/articles/360011077239-Hoe-kom-ik-aan-de-URL-van-het-feed-bestand-).\n- Other Channels you already have developed (Ex.\n  [Google Shopping Export Channel](https://helpcenter.channable.com/hc/nl/articles/360011027999-Een-nieuwe-feed-toevoegen),\n  [custom CSV feed](https://helpcenter.channable.com/hc/nl/articles/360010964840-Een-Custom-CSV-feed-opzetten),\n  [custom XML feed](https://helpcenter.channable.com/hc/nl/articles/360011084719-Een-Custom-XML-feed-opzetten),\n  etc.) with Channable might also be usable, let us know and we can validate.\n\n### Centra\n\nB2B webshop platform, supported via API.\n\n- Request an API key for FashionUnited from your Centra account manager.\n\n### Itsperfect\n\nB2B webshop platform, supported via API.\n\n- Request an API key for FashionUnited from your Itsperfect account manager.\n\n### Magento\n\neCommerce platform, supported via plugins. A product feed can be setup via (one\nof) the following:\n\n- Extension: Product Feed Export (Magento 2) by XTENTO[^1]. For an instruction\n  of product feed export,\n  [click here](https://www.xtento.com/magento-extensions/magento-product-feed-export-module.html).\n- Other extensions supporting the Google Shopping Format\n\n### Shopify\n\neCommerce platform, supported via CSV, URL/ XML (with plugin). A product feed\ncan be setup via (one of) the following:\n\n- [Product Feed Generator extension](https://apps.shopify.com/product-feeds-generator?surface_detail=marketing-product-feeds&surface_inter_position=1&surface_intra_position=22&surface_type=category)[^1]\n- [Other extensions](https://apps.shopify.com/browse/marketing-product-feeds)\n  supporting the Google Shopping Format\n\nFor a step-by-step instruction on how to generate your first product feed,\n[click here](https://www.exportfeed.com/documentation/rapid-cart-shopify-generate-first-feed-2/).\n\nFor a step-by-step instruction on how to export Shopify product CSV’s,\n[click here](https://help.shopify.com/en/manual/products/import-export/export-products%23export-your-products).\n\n### Shopware 6\n\nShopware 6 is an open-source e-commerce platform designed to create customizable and scalable online stores. To export your data in CSV format, navigate to the Export tab within your Shopware 6 dashboard.\n\n-   For comprehensive guidelines on exporting your product feed, [click here](https://docs.shopware.com/en/shopware-en/settings/importexport?category=shopware-6-en/settings/shop#export).\n-   If you prefer a visual tutorial, [watch this step-by-step video guide](https://youtu.be/rQKIgxSemHM?si=ZaXtF8TTayd4gTom&t=446).\n-   To include all [the required fields](https://developer.fashionunited.com/docs/marketplace/getting-started#fields) in your product feed export, you can create new database mappings by following [these instructions](https://docs.shopware.com/en/shopware-en/settings/importexport?category=shopware-6-en/settings/shop#mappings).\n\n### PrestaShop\n\nFree eCommerce platform. It is a B2C eCommerce platform first and foremost, but\nhas a B2B mode as well.\n\n- For instructions on how to export a PrestaShop file to a CSV file,\n  [click here](https://zemez.io/prestashop/support/how-to/prestashop-1-6-x-how-to-exportimport-data-in-csv-files/).\n- For a Google Shopping Feed extension,\n  [click here](https://addons.prestashop.com/en/price-comparison/45244-google-merchant-center-google-shopping-feed-pro.html).\n- For an allround Feed Manager extension,\n  [click here](https://addons.prestashop.com/en/sea-paid-advertising-affiliation-platforms/32728-feed-manager-pro-product-feeds-for-all-platforms.html).\n\n### BigCommerce\n\neCommerce platform, supported via CSV, URL/ XML. The product feed can be set\nwith the following tools:\n\n- [Product Feed Generator](https://www.bigcommerce.com/apps/product-feed-generator/)\n- [Click here](https://www.bigcommerce.com/apps/sales-channels/?search=feed) for\n  Sales Channels.\n\n### NuORDER\n\nB2B eCommerce platform helping brands deliver a wholesale process. For\ninstructions how to export your product data,\n[click here](https://helpdesk.nuorder.com/hc/en-us/articles/360050365752-Exporting-Your-Product-Data).\n\n### JOOR\n\nWholesale platform for fashion. To find JOOR integrations,\n[click here](https://joorhelpcenter.force.com/customer/s/topic/0TO460000004HiQGAU/integrations?language=en_US).\n\n### WooCommerce\n\nWooCommerce is the official eCommerce plugin for WordPress-based websites. This\nopen-source eCommerce plugin designed for merchants of all sizes. It offers an\nextensive plugin library that allows you to customize your online shop.\nPreferred feed generating option for WooCommerce is the JSON format. For this\nProduct feed, the Consumer key and consumer secret information is required.\n[Click here](https://woocommerce.com/document/woocommerce-rest-api/) for\ninstructions.\n\n- For other feed generating options,\n  [click here](https://docs.woocommerce.com/document/google-product-feed-feed-generation-options/).\n- For a product CSV importer and exporter,\n  [click here](https://docs.woocommerce.com/document/product-csv-importer-exporter/).\n\n### EffectConnect\n\nEffectConnect is a marketplace integrator with extensive knowledge in the field\nof marketplace automation and a focus on understanding our customers’ needs.\nThey often hear that our customers spend too much time and money on creating\nfeeds for all the different platforms. That is why they developed the Feed\nManager.\n\nThe\n[user-friendly Feed Manager by EffectConnect](https://www.effectconnect.com/nl/feed-manager-effectconnect)\nenables quick and easy product display on feed-based channels such as\nFashionUnited.\n\nAs source data, you can use:\n\n- our FashionUnited template\n- XML or CSV files as source data, or we import it via API\n- existing data in your webshop. You can simply integrate your shop to\n  EffectConnect and use this data in your product feeds or for automated sales\n  on marketplaces\n\n**How to create a quality data feed?**\n\nA data feed is a file that consists of a list of products divided into groups of\nattributes, which describe the products in a unique way. Find out\n[how you can create quality data feeds](https://blog.effectconnect.com/nl/hoe-maak-je-een-goede-datafeed)\nthat help you increase your conversion rate.\n\n**Creating a feed in 5 minutes**\n\nOur Feed Manager has clear instruction video’s in each step, so you can easily\nset up feeds yourself. Have a look at\n[this blog post](https://blog.effectconnect.com/nl/waarom-feed-manager-effectconnect),\nwhich includes a 5 minute video about creating a feed in our Feed Manager.\n\n### Lengow\n\nLengow is an eCommerce feed Management Platform that helps online retailer and\nbrands find the right marketing channels to scale, optimise and automate all\nonline activity. Currently the options are:\n\n- The Google Shopping Export Channel,\n  [click here](https://www.lengow.com/get-to-know-more/how-to-create-a-google-shopping-feed/)\n  for instructions.\n- [Other Channels](https://www.lengow.com/get-to-know-more/how-to-create-a-flow-of-product-data-for-marketplaces/)\n  you already have developed with Lengow might also be usable, let us know and\n  we can validate.\n\n### Others\n\nMost systems can be hooked up to the Marketplace, contact support with the\ndetails of your system to get connected.\n\n[^1] Example - we are not affiliated with these extension developers in any way.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"platform-support","text":"Platform support"},{"depth":2,"slug":"no-platform","text":"No Platform?"},{"depth":3,"slug":"channable","text":"Channable"},{"depth":3,"slug":"centra","text":"Centra"},{"depth":3,"slug":"itsperfect","text":"Itsperfect"},{"depth":3,"slug":"magento","text":"Magento"},{"depth":3,"slug":"shopify","text":"Shopify"},{"depth":3,"slug":"shopware-6","text":"Shopware 6"},{"depth":3,"slug":"prestashop","text":"PrestaShop"},{"depth":3,"slug":"bigcommerce","text":"BigCommerce"},{"depth":3,"slug":"nuorder","text":"NuORDER"},{"depth":3,"slug":"joor","text":"JOOR"},{"depth":3,"slug":"woocommerce","text":"WooCommerce"},{"depth":3,"slug":"effectconnect","text":"EffectConnect"},{"depth":3,"slug":"lengow","text":"Lengow"},{"depth":3,"slug":"others","text":"Others"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };