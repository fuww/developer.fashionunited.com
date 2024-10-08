import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, f as AstroUserError } from './astro/assets-service_U1oJRL2G.mjs';
import { c as createComponent, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import i18next from 'i18next';
import * as z from 'zod';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": true, "MODE": "production", "PROD": false, "SITE": "https://developer.fashionunited.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/docs/advertising/index.md": () => import('./index_RUaldAFM.mjs'),"/src/content/docs/docs/cloudflare/index.mdx": () => import('./index_D3VrH8VV.mjs'),"/src/content/docs/docs/editorial-cheat-sheet/index.md": () => import('./index_DAWa_IpD.mjs'),"/src/content/docs/docs/editorial-style-guide/index.md": () => import('./index_PjHXMxkr.mjs'),"/src/content/docs/docs/fashionunited-for-websites/index.md": () => import('./index_Bqg_pny9.mjs'),"/src/content/docs/docs/header/index.md": () => import('./index_Dg26MGI1.mjs'),"/src/content/docs/docs/index.md": () => import('./index_jDCXc0L5.mjs'),"/src/content/docs/docs/introduction/index.md": () => import('./index_Cfq3VceR.mjs'),"/src/content/docs/docs/jobs/index.md": () => import('./index_CnG-YEVI.mjs'),"/src/content/docs/docs/logo/index.md": () => import('./index_Z9kIdnd-.mjs'),"/src/content/docs/docs/marketplace/brand-pages.md": () => import('./brand-pages_stLjsfS5.mjs'),"/src/content/docs/docs/marketplace/categories.md": () => import('./categories_f_2syMU3.mjs'),"/src/content/docs/docs/marketplace/colors.md": () => import('./colors_90MB-z4Q.mjs'),"/src/content/docs/docs/marketplace/getting-started.md": () => import('./getting-started_DNUVhyFh.mjs'),"/src/content/docs/docs/marketplace/graphql-api.md": () => import('./graphql-api_C3-z5NHD.mjs'),"/src/content/docs/docs/marketplace/how-to-register.md": () => import('./how-to-register_DxUxpbZI.mjs'),"/src/content/docs/docs/marketplace/index.md": () => import('./index_BtHyjqnm.mjs'),"/src/content/docs/docs/marketplace/platforms.md": () => import('./platforms_PIRV52mW.mjs'),"/src/content/docs/docs/style-guide/index.md": () => import('./index_CqU1x0Kx.mjs'),"/src/content/docs/docs/system-requirements-and-browsers/index.md": () => import('./index_BWrfwhAF.mjs'),"/src/content/docs/index.mdx": () => import('./index_DxgFZyS3.mjs'),"/src/content/docs/posts/2018-11-22-big-header-image-please.md": () => import('./2018-11-22-big-header-image-please_BirR7mUS.mjs'),"/src/content/docs/posts/2018-11-22-improved-job-scheduling.md": () => import('./2018-11-22-improved-job-scheduling_HgvL9Lp9.mjs'),"/src/content/docs/posts/2018-11-22-lookbook-is-here-to-play.md": () => import('./2018-11-22-lookbook-is-here-to-play_BkCXO1d_.mjs'),"/src/content/docs/posts/2018-11-22-we-have-rebuilt-our-site-and-you-did-not-even-notice.md": () => import('./2018-11-22-we-have-rebuilt-our-site-and-you-did-not-even-notice_B80Jt2tu.mjs'),"/src/content/docs/posts/2019-05-22-small-steps-big-changes.md": () => import('./2019-05-22-small-steps-big-changes_CE-TKPxr.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"index":"/src/content/docs/index.mdx","docs":"/src/content/docs/docs/index.md","posts/2018-11-22-lookbook-is-here-to-play":"/src/content/docs/posts/2018-11-22-lookbook-is-here-to-play.md","posts/2018-11-22-improved-job-scheduling":"/src/content/docs/posts/2018-11-22-improved-job-scheduling.md","posts/2018-11-22-we-have-rebuilt-our-site-and-you-did-not-even-notice":"/src/content/docs/posts/2018-11-22-we-have-rebuilt-our-site-and-you-did-not-even-notice.md","posts/2018-11-22-big-header-image-please":"/src/content/docs/posts/2018-11-22-big-header-image-please.md","posts/2019-05-22-small-steps-big-changes":"/src/content/docs/posts/2019-05-22-small-steps-big-changes.md","docs/cloudflare":"/src/content/docs/docs/cloudflare/index.mdx","docs/advertising":"/src/content/docs/docs/advertising/index.md","docs/editorial-style-guide":"/src/content/docs/docs/editorial-style-guide/index.md","docs/header":"/src/content/docs/docs/header/index.md","docs/introduction":"/src/content/docs/docs/introduction/index.md","docs/fashionunited-for-websites":"/src/content/docs/docs/fashionunited-for-websites/index.md","docs/editorial-cheat-sheet":"/src/content/docs/docs/editorial-cheat-sheet/index.md","docs/jobs":"/src/content/docs/docs/jobs/index.md","docs/logo":"/src/content/docs/docs/logo/index.md","docs/marketplace/brand-pages":"/src/content/docs/docs/marketplace/brand-pages.md","docs/marketplace/categories":"/src/content/docs/docs/marketplace/categories.md","docs/marketplace/colors":"/src/content/docs/docs/marketplace/colors.md","docs/marketplace/getting-started":"/src/content/docs/docs/marketplace/getting-started.md","docs/marketplace/graphql-api":"/src/content/docs/docs/marketplace/graphql-api.md","docs/marketplace/how-to-register":"/src/content/docs/docs/marketplace/how-to-register.md","docs/marketplace":"/src/content/docs/docs/marketplace/index.md","docs/marketplace/platforms":"/src/content/docs/docs/marketplace/platforms.md","docs/system-requirements-and-browsers":"/src/content/docs/docs/system-requirements-and-browsers/index.md","docs/style-guide":"/src/content/docs/docs/style-guide/index.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/docs/advertising/index.md": () => import('./index_9xv_798p.mjs'),"/src/content/docs/docs/cloudflare/index.mdx": () => import('./index_CPLsVJl6.mjs'),"/src/content/docs/docs/editorial-cheat-sheet/index.md": () => import('./index_KkXxcSUA.mjs'),"/src/content/docs/docs/editorial-style-guide/index.md": () => import('./index_DIE8ZJff.mjs'),"/src/content/docs/docs/fashionunited-for-websites/index.md": () => import('./index_BnPvpcpB.mjs'),"/src/content/docs/docs/header/index.md": () => import('./index_CXLjVLwa.mjs'),"/src/content/docs/docs/index.md": () => import('./index_C4YUwIn4.mjs'),"/src/content/docs/docs/introduction/index.md": () => import('./index_DmnqsFY2.mjs'),"/src/content/docs/docs/jobs/index.md": () => import('./index_CYxQil-4.mjs'),"/src/content/docs/docs/logo/index.md": () => import('./index_Bz5Hi0pv.mjs'),"/src/content/docs/docs/marketplace/brand-pages.md": () => import('./brand-pages_BBz-BCXF.mjs'),"/src/content/docs/docs/marketplace/categories.md": () => import('./categories_P6V09Wec.mjs'),"/src/content/docs/docs/marketplace/colors.md": () => import('./colors_BvYm9P92.mjs'),"/src/content/docs/docs/marketplace/getting-started.md": () => import('./getting-started_BZC7tmZ5.mjs'),"/src/content/docs/docs/marketplace/graphql-api.md": () => import('./graphql-api_DiVXqQeC.mjs'),"/src/content/docs/docs/marketplace/how-to-register.md": () => import('./how-to-register_DacRMuw8.mjs'),"/src/content/docs/docs/marketplace/index.md": () => import('./index_DBcESw3J.mjs'),"/src/content/docs/docs/marketplace/platforms.md": () => import('./platforms_DLNimtKb.mjs'),"/src/content/docs/docs/style-guide/index.md": () => import('./index_DZrDFKqx.mjs'),"/src/content/docs/docs/system-requirements-and-browsers/index.md": () => import('./index_CNAHLR5x.mjs'),"/src/content/docs/index.mdx": () => import('./index_CcvzBus1.mjs'),"/src/content/docs/posts/2018-11-22-big-header-image-please.md": () => import('./2018-11-22-big-header-image-please_Buby6KvV.mjs'),"/src/content/docs/posts/2018-11-22-improved-job-scheduling.md": () => import('./2018-11-22-improved-job-scheduling_vSMZz8l7.mjs'),"/src/content/docs/posts/2018-11-22-lookbook-is-here-to-play.md": () => import('./2018-11-22-lookbook-is-here-to-play_Ce3lEhen.mjs'),"/src/content/docs/posts/2018-11-22-we-have-rebuilt-our-site-and-you-did-not-even-notice.md": () => import('./2018-11-22-we-have-rebuilt-our-site-and-you-did-not-even-notice_4yXjcMC3.mjs'),"/src/content/docs/posts/2019-05-22-small-steps-big-changes.md": () => import('./2019-05-22-small-steps-big-changes_Be1UTuFB.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

const starlightConfig = {"social":{"github":{"label":"GitHub","url":"https://github.com/fuww/developer.fashionunited.com"}},"tableOfContents":{"minHeadingLevel":2,"maxHeadingLevel":3},"editLink":{},"sidebar":[{"label":"Docs","translations":{},"collapsed":false,"items":[{"label":"Advertising","translations":{},"link":"/docs/advertising/","attrs":{}},{"label":"FashionUnited for Websites - Embedding Jobs and News","translations":{},"link":"/docs/fashionunited-for-websites/","attrs":{}},{"label":"Header","translations":{},"link":"/docs/header/","attrs":{}},{"label":"Jobs","translations":{},"link":"/docs/jobs/","attrs":{}},{"label":"Logo","translations":{},"link":"/docs/logo/","attrs":{}},{"label":"System Requirements and Browsers","translations":{},"link":"/docs/system-requirements-and-browsers/","attrs":{}},{"label":"Cloudflare","translations":{},"link":"/docs/cloudflare/","attrs":{}}]},{"label":"Marketplace","translations":{},"collapsed":false,"autogenerate":{"directory":"docs/marketplace"}},{"label":"Editorial","translations":{},"collapsed":false,"items":[{"label":"Editorial Cheat Sheet","translations":{},"link":"/docs/editorial-cheat-sheet/","attrs":{}},{"label":"Editorial Style Guide","translations":{},"link":"/docs/editorial-style-guide/","attrs":{}}]},{"label":"This site","translations":{},"collapsed":false,"items":[{"label":"Style Guide","translations":{},"link":"/docs/style-guide/","attrs":{}}]}],"head":[{"tag":"script","attrs":{"type":"text/partytown","src":"https://plausible.io/js/script.js","data-domain":"developer.fashionunited.com","defer":true},"content":""}],"customCss":["./src/tailwind.css","./src/styles/custom.css","@fontsource/ibm-plex-mono/400.css","@fontsource/ibm-plex-mono/600.css","@fontsource-variable/inter","@fontsource-variable/lora"],"lastUpdated":false,"pagination":true,"favicon":{"href":"/favicon.svg","type":"image/svg+xml"},"components":{"Head":"./src/components/starlight/Head.astro","ThemeProvider":"@astrojs/starlight/components/ThemeProvider.astro","SkipLink":"@astrojs/starlight/components/SkipLink.astro","PageFrame":"@astrojs/starlight/components/PageFrame.astro","MobileMenuToggle":"@astrojs/starlight/components/MobileMenuToggle.astro","TwoColumnContent":"@astrojs/starlight/components/TwoColumnContent.astro","Header":"@astrojs/starlight/components/Header.astro","SiteTitle":"@astrojs/starlight/components/SiteTitle.astro","Search":"@astrojs/starlight/components/Search.astro","SocialIcons":"@astrojs/starlight/components/SocialIcons.astro","ThemeSelect":"@astrojs/starlight/components/ThemeSelect.astro","LanguageSelect":"@astrojs/starlight/components/LanguageSelect.astro","Sidebar":"@astrojs/starlight/components/Sidebar.astro","MobileMenuFooter":"@astrojs/starlight/components/MobileMenuFooter.astro","PageSidebar":"@astrojs/starlight/components/PageSidebar.astro","TableOfContents":"@astrojs/starlight/components/TableOfContents.astro","MobileTableOfContents":"@astrojs/starlight/components/MobileTableOfContents.astro","Banner":"@astrojs/starlight/components/Banner.astro","ContentPanel":"@astrojs/starlight/components/ContentPanel.astro","PageTitle":"@astrojs/starlight/components/PageTitle.astro","FallbackContentNotice":"@astrojs/starlight/components/FallbackContentNotice.astro","DraftContentNotice":"@astrojs/starlight/components/DraftContentNotice.astro","Hero":"@astrojs/starlight/components/Hero.astro","MarkdownContent":"@astrojs/starlight/components/MarkdownContent.astro","Footer":"@astrojs/starlight/components/Footer.astro","LastUpdated":"@astrojs/starlight/components/LastUpdated.astro","Pagination":"@astrojs/starlight/components/Pagination.astro","EditLink":"@astrojs/starlight/components/EditLink.astro"},"titleDelimiter":"|","disable404Route":false,"prerender":true,"credits":false,"pagefind":true,"title":{"en":"FashionUnited Docs"},"isMultilingual":false,"isUsingBuiltInDefaultLocale":true,"defaultLocale":{"label":"English","lang":"en","dir":"ltr"}};

const pluginTranslations = {};

function builtinI18nSchema() {
  return starlightI18nSchema().required().strict().merge(pagefindI18nSchema()).merge(expressiveCodeI18nSchema());
}
function starlightI18nSchema() {
  return z.object({
    "skipLink.label": z.string().describe(
      "Text displayed in the accessible “Skip link” when a keyboard user first tabs into a page."
    ),
    "search.label": z.string().describe("Text displayed in the search bar."),
    "search.ctrlKey": z.string().describe(
      "Visible representation of the Control key potentially used in the shortcut key to open the search modal."
    ),
    "search.cancelLabel": z.string().describe("Text for the “Cancel” button that closes the search modal."),
    "search.devWarning": z.string().describe("Warning displayed when opening the Search in a dev environment."),
    "themeSelect.accessibleLabel": z.string().describe("Accessible label for the theme selection dropdown."),
    "themeSelect.dark": z.string().describe("Name of the dark color theme."),
    "themeSelect.light": z.string().describe("Name of the light color theme."),
    "themeSelect.auto": z.string().describe("Name of the automatic color theme that syncs with system preferences."),
    "languageSelect.accessibleLabel": z.string().describe("Accessible label for the language selection dropdown."),
    "menuButton.accessibleLabel": z.string().describe("Accessible label for the mobile menu button."),
    "sidebarNav.accessibleLabel": z.string().describe(
      "Accessible label for the main sidebar `<nav>` element to distinguish it fom other `<nav>` landmarks on the page."
    ),
    "tableOfContents.onThisPage": z.string().describe("Title for the table of contents component."),
    "tableOfContents.overview": z.string().describe(
      "Label used for the first link in the table of contents, linking to the page title."
    ),
    "i18n.untranslatedContent": z.string().describe(
      "Notice informing users they are on a page that is not yet translated to their language."
    ),
    "page.editLink": z.string().describe("Text for the link to edit a page."),
    "page.lastUpdated": z.string().describe("Text displayed in front of the last updated date in the page footer."),
    "page.previousLink": z.string().describe("Label shown on the “previous page” pagination arrow in the page footer."),
    "page.nextLink": z.string().describe("Label shown on the “next page” pagination arrow in the page footer."),
    "page.draft": z.string().describe(
      "Development-only notice informing users they are on a page that is a draft which will not be included in production builds."
    ),
    "404.text": z.string().describe("Text shown on Starlight’s default 404 page"),
    "aside.tip": z.string().describe("Text shown on the tip aside variant"),
    "aside.note": z.string().describe("Text shown on the note aside variant"),
    "aside.caution": z.string().describe("Text shown on the warning aside variant"),
    "aside.danger": z.string().describe("Text shown on the danger aside variant"),
    "fileTree.directory": z.string().describe("Label for the directory icon in the file tree component."),
    "builtWithStarlight.label": z.string().describe(
      "Label for the “Built with Starlight” badge optionally displayed in the site footer."
    )
  }).partial();
}
function pagefindI18nSchema() {
  return z.object({
    "pagefind.clear_search": z.string().describe(
      'Pagefind UI translation. English default value: `"Clear"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.load_more": z.string().describe(
      'Pagefind UI translation. English default value: `"Load more results"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_label": z.string().describe(
      'Pagefind UI translation. English default value: `"Search this site"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.filters_label": z.string().describe(
      'Pagefind UI translation. English default value: `"Filters"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.zero_results": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.many_results": z.string().describe(
      'Pagefind UI translation. English default value: `"[COUNT] results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.one_result": z.string().describe(
      'Pagefind UI translation. English default value: `"[COUNT] result for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.alt_search": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_suggestion": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Try one of the following searches:"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.searching": z.string().describe(
      'Pagefind UI translation. English default value: `"Searching for [SEARCH_TERM]..."`. See https://pagefind.app/docs/ui/#translations'
    )
  }).partial();
}
function expressiveCodeI18nSchema() {
  return z.object({
    "expressiveCode.copyButtonCopied": z.string().describe('Expressive Code UI translation. English default value: `"Copied!"`'),
    "expressiveCode.copyButtonTooltip": z.string().describe('Expressive Code UI translation. English default value: `"Copy to clipboard"`'),
    "expressiveCode.terminalWindowFallbackTitle": z.string().describe('Expressive Code UI translation. English default value: `"Terminal window"`')
  }).partial();
}

const cs = {
	"skipLink.label": "Přeskočit na obsah",
	"search.label": "Hledat",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Zrušit",
	"search.devWarning": "Vyhledávání je dostupné pouze v produkčních sestaveních. \nZkuste sestavit a zobrazit náhled webu a otestovat jej lokálně.",
	"themeSelect.accessibleLabel": "Vyberte motiv",
	"themeSelect.dark": "Tmavý",
	"themeSelect.light": "Světlý",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Vyberte jazyk",
	"menuButton.accessibleLabel": "Nabídka",
	"sidebarNav.accessibleLabel": "Hlavní",
	"tableOfContents.onThisPage": "Na této stránce",
	"tableOfContents.overview": "Přehled",
	"i18n.untranslatedContent": "Tento obsah zatím není dostupný ve vašem jazyce.",
	"page.editLink": "Upravit stránku",
	"page.lastUpdated": "Poslední aktualizace:",
	"page.previousLink": "Předchozí",
	"page.nextLink": "Další",
	"page.draft": "Tento obsah je koncept a nebude zahrnutý v produkčním sestavení.",
	"404.text": "Stránka nenalezena. Zkontrolujte adresu nebo zkuste použít vyhledávač",
	"aside.note": "Poznámka",
	"aside.tip": "Tip",
	"aside.caution": "Upozornění",
	"aside.danger": "Nebezpečí",
	"fileTree.directory": "Adresář",
	"builtWithStarlight.label": "Postavené s Starlight",
	"expressiveCode.copyButtonCopied": "Zkopírováno!",
	"expressiveCode.copyButtonTooltip": "Kopíruj do schránky",
	"expressiveCode.terminalWindowFallbackTitle": "Terminál",
	"pagefind.clear_search": "Vyčistit",
	"pagefind.load_more": "Načíst další výsledky",
	"pagefind.search_label": "Vyhledat stránku",
	"pagefind.filters_label": "Filtry",
	"pagefind.zero_results": "Žádný výsledek pro: [SEARCH_TERM]",
	"pagefind.many_results": "počet výsledků: [COUNT] pro: [SEARCH_TERM]",
	"pagefind.one_result": "[COUNT] výsledek pro: [SEARCH_TERM]",
	"pagefind.alt_search": "Žádné výsledky pro [SEARCH_TERM]. Namísto toho zobrazuji výsledky pro: [DIFFERENT_TERM]",
	"pagefind.search_suggestion": "Žádný výsledek pro [SEARCH_TERM]. Zkus nějaké z těchto hledání:",
	"pagefind.searching": "Hledám [SEARCH_TERM]..."
};

const en = {
	"skipLink.label": "Skip to content",
	"search.label": "Search",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Cancel",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Select theme",
	"themeSelect.dark": "Dark",
	"themeSelect.light": "Light",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Select language",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Main",
	"tableOfContents.onThisPage": "On this page",
	"tableOfContents.overview": "Overview",
	"i18n.untranslatedContent": "This content is not available in your language yet.",
	"page.editLink": "Edit page",
	"page.lastUpdated": "Last updated:",
	"page.previousLink": "Previous",
	"page.nextLink": "Next",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Page not found. Check the URL or try using the search bar.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const es = {
	"skipLink.label": "Saltearse al contenido",
	"search.label": "Buscar",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Interrumpir",
	"search.devWarning": "La búsqueda solo está disponible en las versiones de producción.  \nIntenta construir y previsualizar el sitio para probarlo localmente.",
	"themeSelect.accessibleLabel": "Seleccionar tema",
	"themeSelect.dark": "Oscuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Automático",
	"languageSelect.accessibleLabel": "Seleccionar idioma",
	"menuButton.accessibleLabel": "Menú",
	"sidebarNav.accessibleLabel": "Primario",
	"tableOfContents.onThisPage": "En esta página",
	"tableOfContents.overview": "Sinopsis",
	"i18n.untranslatedContent": "Esta página aún no está disponible en tu idioma.",
	"page.editLink": "Edita esta página",
	"page.lastUpdated": "Última actualización:",
	"page.previousLink": "Página anterior",
	"page.nextLink": "Siguiente página",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Página no encontrada. Verifica la URL o intenta usar la barra de búsqueda.",
	"aside.note": "Nota",
	"aside.tip": "Consejo",
	"aside.caution": "Precaución",
	"aside.danger": "Peligro",
	"expressiveCode.copyButtonCopied": "¡Copiado!",
	"expressiveCode.copyButtonTooltip": "Copiar al portapapeles",
	"expressiveCode.terminalWindowFallbackTitle": "Ventana de terminal",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Hecho con Starlight"
};

const de = {
	"skipLink.label": "Zum Inhalt springen",
	"search.label": "Suchen",
	"search.ctrlKey": "Strg",
	"search.cancelLabel": "Abbrechen",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Farbschema wählen",
	"themeSelect.dark": "Dunkel",
	"themeSelect.light": "Hell",
	"themeSelect.auto": "System",
	"languageSelect.accessibleLabel": "Sprache wählen",
	"menuButton.accessibleLabel": "Menü",
	"sidebarNav.accessibleLabel": "Hauptnavigation",
	"tableOfContents.onThisPage": "Auf dieser Seite",
	"tableOfContents.overview": "Überblick",
	"i18n.untranslatedContent": "Dieser Inhalt ist noch nicht in deiner Sprache verfügbar.",
	"page.editLink": "Seite bearbeiten",
	"page.lastUpdated": "Zuletzt bearbeitet:",
	"page.previousLink": "Vorherige Seite",
	"page.nextLink": "Nächste Seite",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Seite nicht gefunden. Überprüfe die URL oder nutze die Suchleiste.",
	"aside.note": "Hinweis",
	"aside.tip": "Tipp",
	"aside.caution": "Achtung",
	"aside.danger": "Gefahr",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Erstellt mit Starlight"
};

const ja = {
	"skipLink.label": "コンテンツにスキップ",
	"search.label": "検索",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "キャンセル",
	"search.devWarning": "検索はプロダクションビルドでのみ利用可能です。\nローカルでテストするには、サイトをビルドしてプレビューしてください。",
	"themeSelect.accessibleLabel": "テーマの選択",
	"themeSelect.dark": "ダーク",
	"themeSelect.light": "ライト",
	"themeSelect.auto": "自動",
	"languageSelect.accessibleLabel": "言語の選択",
	"menuButton.accessibleLabel": "メニュー",
	"sidebarNav.accessibleLabel": "メイン",
	"tableOfContents.onThisPage": "目次",
	"tableOfContents.overview": "概要",
	"i18n.untranslatedContent": "このコンテンツはまだ日本語訳がありません。",
	"page.editLink": "ページを編集",
	"page.lastUpdated": "最終更新日:",
	"page.previousLink": "前へ",
	"page.nextLink": "次へ",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "ページが見つかりません。 URL を確認するか、検索バーを使用してみてください。",
	"aside.note": "ノート",
	"aside.tip": "ヒント",
	"aside.caution": "注意",
	"aside.danger": "危険",
	"fileTree.directory": "ディレクトリ",
	"builtWithStarlight.label": "Built with Starlight"
};

const pt = {
	"skipLink.label": "Pular para o conteúdo",
	"search.label": "Pesquisar",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Cancelar",
	"search.devWarning": "A pesquisa está disponível apenas em builds em produção. \nTente fazer a build e pré-visualize o site para testar localmente.",
	"themeSelect.accessibleLabel": "Selecionar tema",
	"themeSelect.dark": "Escuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selecionar língua",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Nesta página",
	"tableOfContents.overview": "Visão geral",
	"i18n.untranslatedContent": "Este conteúdo não está disponível em sua língua ainda.",
	"page.editLink": "Editar página",
	"page.lastUpdated": "Última atualização:",
	"page.previousLink": "Anterior",
	"page.nextLink": "Próximo",
	"page.draft": "Esse conteúdo é um rascunho e não será incluído em builds de produção.",
	"404.text": "Página não encontrada. Verifique o URL ou tente usar a barra de pesquisa.",
	"aside.note": "Nota",
	"aside.tip": "Dica",
	"aside.caution": "Cuidado",
	"aside.danger": "Perigo",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Feito com Starlight"
};

const fa = {
	"skipLink.label": "رفتن به محتوا",
	"search.label": "جستجو",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "لغو",
	"search.devWarning": "جستجو تنها در نسخه‌های تولیدی در دسترس است. \nسعی کنید سایت را بسازید و پیش‌نمایش آن را به صورت محلی آزمایش کنید.",
	"themeSelect.accessibleLabel": "انتخاب پوسته",
	"themeSelect.dark": "تیره",
	"themeSelect.light": "روشن",
	"themeSelect.auto": "خودکار",
	"languageSelect.accessibleLabel": "انتخاب زبان",
	"menuButton.accessibleLabel": "منو",
	"sidebarNav.accessibleLabel": "اصلی",
	"tableOfContents.onThisPage": "در این صفحه",
	"tableOfContents.overview": "نگاه کلی",
	"i18n.untranslatedContent": "این محتوا هنوز به زبان شما در دسترس نیست.",
	"page.editLink": "ویرایش صفحه",
	"page.lastUpdated": "آخرین به‌روزرسانی:",
	"page.previousLink": "قبلی",
	"page.nextLink": "بعدی",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "صفحه یافت نشد. لطفاً URL را بررسی کنید یا از جستجو استفاده نمایید.",
	"aside.note": "یادداشت",
	"aside.tip": "نکته",
	"aside.caution": "احتیاط",
	"aside.danger": "خطر",
	"fileTree.directory": "فهرست",
	"builtWithStarlight.label": "Built with Starlight"
};

const fr = {
	"skipLink.label": "Aller au contenu",
	"search.label": "Rechercher",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Annuler",
	"search.devWarning": "La recherche est disponible uniquement en mode production. \nEssayez de construire puis de prévisualiser votre site pour tester la recherche localement.",
	"themeSelect.accessibleLabel": "Selectionner le thème",
	"themeSelect.dark": "Sombre",
	"themeSelect.light": "Clair",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selectionner la langue",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "principale",
	"tableOfContents.onThisPage": "Sur cette page",
	"tableOfContents.overview": "Vue d’ensemble",
	"i18n.untranslatedContent": "Ce contenu n’est pas encore disponible dans votre langue.",
	"page.editLink": "Modifier cette page",
	"page.lastUpdated": "Dernière mise à jour :",
	"page.previousLink": "Précédent",
	"page.nextLink": "Suivant",
	"page.draft": "Ce contenu est une ébauche et ne sera pas inclus dans la version de production.",
	"404.text": "Page non trouvée. Vérifiez l’URL ou essayez d’utiliser la barre de recherche.",
	"aside.note": "Note",
	"aside.tip": "Astuce",
	"aside.caution": "Attention",
	"aside.danger": "Danger",
	"expressiveCode.copyButtonCopied": "Copié !",
	"expressiveCode.copyButtonTooltip": "Copier dans le presse-papiers",
	"expressiveCode.terminalWindowFallbackTitle": "Fenêtre de terminal",
	"fileTree.directory": "Répertoire",
	"builtWithStarlight.label": "Créé avec Starlight"
};

const gl = {
	"skipLink.label": "Ir ao contido",
	"search.label": "Busca",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Deixar",
	"search.devWarning": "A busca só está dispoñible nas versións de producción. \nTrata de construir e ollear o sitio para probalo localmente.",
	"themeSelect.accessibleLabel": "Seleciona tema",
	"themeSelect.dark": "Escuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Seleciona linguaxe",
	"menuButton.accessibleLabel": "Menú",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Nesta paxina",
	"tableOfContents.overview": "Sinopse",
	"i18n.untranslatedContent": "Este contido aínda non está dispoñible no teu idioma.",
	"page.editLink": "Editar paxina",
	"page.lastUpdated": "Última actualización:",
	"page.previousLink": "Anterior",
	"page.nextLink": "Seguinte",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Paxina non atopada. Comproba a URL ou intenta usar a barra de busca.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const he = {
	"skipLink.label": "דלגו לתוכן",
	"search.label": "חיפוש",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "ביטול",
	"search.devWarning": "החיפוש זמין רק בסביבת ייצור. \nנסו לבנות ולהציג תצוגה מקדימה של האתר כדי לבדוק אותו באופן מקומי.",
	"themeSelect.accessibleLabel": "בחרו פרופיל צבע",
	"themeSelect.dark": "כהה",
	"themeSelect.light": "בהיר",
	"themeSelect.auto": "מערכת",
	"languageSelect.accessibleLabel": "בחרו שפה",
	"menuButton.accessibleLabel": "תפריט",
	"sidebarNav.accessibleLabel": "ראשי",
	"tableOfContents.onThisPage": "בדף זה",
	"tableOfContents.overview": "סקירה כללית",
	"i18n.untranslatedContent": "תוכן זה אינו זמין עדיין בשפה שלך.",
	"page.editLink": "ערכו דף",
	"page.lastUpdated": "עדכון אחרון:",
	"page.previousLink": "הקודם",
	"page.nextLink": "הבא",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "הדף לא נמצא. אנא בדקו את כתובת האתר או נסו להשתמש בסרגל החיפוש.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const id = {
	"skipLink.label": "Lewati ke konten",
	"search.label": "Pencarian",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Batal",
	"search.devWarning": "Pencarian hanya tersedia pada build produksi. \nLakukan proses build dan pratinjau situs Anda sebelum mencoba di lingkungan lokal.",
	"themeSelect.accessibleLabel": "Pilih tema",
	"themeSelect.dark": "Gelap",
	"themeSelect.light": "Terang",
	"themeSelect.auto": "Otomatis",
	"languageSelect.accessibleLabel": "Pilih Bahasa",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Utama",
	"tableOfContents.onThisPage": "Di halaman ini",
	"tableOfContents.overview": "Ringkasan",
	"i18n.untranslatedContent": "Konten ini belum tersedia dalam bahasa Anda.",
	"page.editLink": "Edit halaman",
	"page.lastUpdated": "Terakhir diperbaharui:",
	"page.previousLink": "Sebelumnya",
	"page.nextLink": "Selanjutnya",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Halaman tidak ditemukan. Cek kembali kolom URL atau gunakan fitur pencarian.",
	"aside.note": "Catatan",
	"aside.tip": "Tips",
	"aside.caution": "Perhatian",
	"aside.danger": "Bahaya",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const it = {
	"skipLink.label": "Salta ai contenuti",
	"search.label": "Cerca",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Cancella",
	"search.devWarning": "La ricerca è disponibile solo nelle build di produzione. \nProvare ad eseguire il processo di build e visualizzare la preview del sito per testarlo localmente.",
	"themeSelect.accessibleLabel": "Seleziona tema",
	"themeSelect.dark": "Scuro",
	"themeSelect.light": "Chiaro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Seleziona lingua",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Principale",
	"tableOfContents.onThisPage": "In questa pagina",
	"tableOfContents.overview": "Panoramica",
	"i18n.untranslatedContent": "Questi contenuti non sono ancora disponibili nella tua lingua.",
	"page.editLink": "Modifica pagina",
	"page.lastUpdated": "Ultimo aggiornamento:",
	"page.previousLink": "Indietro",
	"page.nextLink": "Avanti",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Pagina non trovata. Verifica l'URL o prova a utilizzare la barra di ricerca.",
	"aside.note": "Nota",
	"aside.tip": "Consiglio",
	"aside.caution": "Attenzione",
	"aside.danger": "Pericolo",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const nl = {
	"skipLink.label": "Ga naar inhoud",
	"search.label": "Zoeken",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Annuleren",
	"search.devWarning": "Zoeken is alleen beschikbaar tijdens productie. \nProbeer om de site te builden en er een preview van te bekijken om lokaal te testen.",
	"themeSelect.accessibleLabel": "Selecteer thema",
	"themeSelect.dark": "Donker",
	"themeSelect.light": "Licht",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selecteer taal",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Hoofdnavigatie",
	"tableOfContents.onThisPage": "Op deze pagina",
	"tableOfContents.overview": "Overzicht",
	"i18n.untranslatedContent": "Deze inhoud is nog niet vertaald.",
	"page.editLink": "Bewerk pagina",
	"page.lastUpdated": "Laatst bewerkt:",
	"page.previousLink": "Vorige",
	"page.nextLink": "Volgende",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Pagina niet gevonden. Controleer de URL of probeer de zoekbalk.",
	"aside.note": "Opmerking",
	"aside.tip": "Tip",
	"aside.caution": "Opgepast",
	"aside.danger": "Gevaar",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const da = {
	"skipLink.label": "Gå til indhold",
	"search.label": "Søg",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Annuller",
	"search.devWarning": "Søgning er kun tilgængeligt i produktions versioner. \nPrøv at bygge siden og forhåndsvis den for at teste det lokalt.",
	"themeSelect.accessibleLabel": "Vælg tema",
	"themeSelect.dark": "Mørk",
	"themeSelect.light": "Lys",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Vælg sprog",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Hovednavigation",
	"tableOfContents.onThisPage": "På denne side",
	"tableOfContents.overview": "Oversigt",
	"i18n.untranslatedContent": "Dette indhold er ikke tilgængeligt i dit sprog endnu.",
	"page.editLink": "Rediger siden",
	"page.lastUpdated": "Sidst opdateret:",
	"page.previousLink": "Forrige",
	"page.nextLink": "Næste",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Siden er ikke fundet. Tjek din URL eller prøv søgelinjen.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const tr = {
	"skipLink.label": "İçeriğe geç",
	"search.label": "Ara",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "İptal",
	"search.devWarning": "Arama yalnızca üretim derlemelerinde kullanılabilir. \nYerel bilgisayarınızda test etmek için siteyi derleyin ve önizleme yapın.",
	"themeSelect.accessibleLabel": "Tema seç",
	"themeSelect.dark": "Koyu",
	"themeSelect.light": "Açık",
	"themeSelect.auto": "Otomatik",
	"languageSelect.accessibleLabel": "Dil seçin",
	"menuButton.accessibleLabel": "Menü",
	"sidebarNav.accessibleLabel": "Ana",
	"tableOfContents.onThisPage": "Sayfa içeriği",
	"tableOfContents.overview": "Genel bakış",
	"i18n.untranslatedContent": "Bu içerik henüz dilinizde mevcut değil.",
	"page.editLink": "Sayfayı düzenle",
	"page.lastUpdated": "Son güncelleme:",
	"page.previousLink": "Önceki",
	"page.nextLink": "Sonraki",
	"page.draft": "Bu içerik taslaktır ve canlı sürümde bulunmayacaktır.",
	"404.text": "Sayfa bulunamadı. URL'i kontrol edin ya da arama çubuğunu kullanmayı deneyin.",
	"aside.note": "Not",
	"aside.tip": "İpucu",
	"aside.caution": "Dikkat",
	"aside.danger": "Tehlike",
	"fileTree.directory": "Dizin",
	"builtWithStarlight.label": "Built with Starlight"
};

const ar = {
	"skipLink.label": "تخطَّ إلى المحتوى",
	"search.label": "ابحث",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "إلغاء",
	"search.devWarning": "البحث متوفر فقط في بنيات اﻹنتاج. \n جرب بناء المشروع ومعاينته على جهازك",
	"themeSelect.accessibleLabel": "اختر سمة",
	"themeSelect.dark": "داكن",
	"themeSelect.light": "فاتح",
	"themeSelect.auto": "تلقائي",
	"languageSelect.accessibleLabel": "اختر لغة",
	"menuButton.accessibleLabel": "القائمة",
	"sidebarNav.accessibleLabel": "الرئيسية",
	"tableOfContents.onThisPage": "على هذه الصفحة",
	"tableOfContents.overview": "نظرة عامة",
	"i18n.untranslatedContent": "هذا المحتوى غير متوفر بلغتك بعد.",
	"page.editLink": "عدل الصفحة",
	"page.lastUpdated": "آخر تحديث:",
	"page.previousLink": "السابق",
	"page.nextLink": "التالي",
	"page.draft": "هذا المحتوى مجرد مسودة ولن يظهر في بنيات الإنتاج",
	"404.text": "الصفحة غير موجودة. تأكد من الرابط أو ابحث بإستعمال شريط البحث.",
	"aside.note": "ملاحظة",
	"aside.tip": "نصيحة",
	"aside.caution": "تنبيه",
	"aside.danger": "تحذير",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "طوِّر بواسطة Starlight"
};

const nb = {
	"skipLink.label": "Gå til innholdet",
	"search.label": "Søk",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Avbryt",
	"search.devWarning": "Søk er bare tilgjengelig i produksjonsbygg. \nPrøv å bygg siden og forhåndsvis den for å teste det lokalt.",
	"themeSelect.accessibleLabel": "Velg tema",
	"themeSelect.dark": "Mørk",
	"themeSelect.light": "Lys",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Velg språk",
	"menuButton.accessibleLabel": "Meny",
	"sidebarNav.accessibleLabel": "Hovednavigasjon",
	"tableOfContents.onThisPage": "På denne siden",
	"tableOfContents.overview": "Oversikt",
	"i18n.untranslatedContent": "Dette innholdet er ikke tilgjengelig på ditt språk.",
	"page.editLink": "Rediger side",
	"page.lastUpdated": "Sist oppdatert:",
	"page.previousLink": "Forrige",
	"page.nextLink": "Neste",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Siden ble ikke funnet. Sjekk URL-en eller prøv å bruke søkefeltet.",
	"aside.note": "Merknad",
	"aside.tip": "Tips",
	"aside.caution": "Advarsel",
	"aside.danger": "Fare",
	"fileTree.directory": "Mappe",
	"builtWithStarlight.label": "Laget med Starlight"
};

const zh = {
	"skipLink.label": "跳转到内容",
	"search.label": "搜索",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "取消",
	"search.devWarning": "搜索仅适用于生产版本。\n尝试构建并预览网站以在本地测试。",
	"themeSelect.accessibleLabel": "选择主题",
	"themeSelect.dark": "深色",
	"themeSelect.light": "浅色",
	"themeSelect.auto": "自动",
	"languageSelect.accessibleLabel": "选择语言",
	"menuButton.accessibleLabel": "菜单",
	"sidebarNav.accessibleLabel": "主要",
	"tableOfContents.onThisPage": "本页内容",
	"tableOfContents.overview": "概述",
	"i18n.untranslatedContent": "此内容尚不支持你的语言。",
	"page.editLink": "编辑此页",
	"page.lastUpdated": "最近更新：",
	"page.previousLink": "上一页",
	"page.nextLink": "下一页",
	"page.draft": "此内容为草稿，不会包含在生产版本中。",
	"404.text": "页面未找到。检查 URL 或尝试使用搜索栏。",
	"aside.note": "注意",
	"aside.tip": "提示",
	"aside.caution": "警告",
	"aside.danger": "危险",
	"fileTree.directory": "文件夹",
	"builtWithStarlight.label": "基于 Starlight 构建"
};

const ko = {
	"skipLink.label": "컨텐츠로 건너뛰기",
	"search.label": "검색",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "취소",
	"search.devWarning": "검색 기능은 운영 환경에서만 사용할 수 있습니다. \n로컬에서 테스트하려면 사이트를 빌드하고 미리보기를 해보세요.",
	"themeSelect.accessibleLabel": "테마 선택",
	"themeSelect.dark": "다크",
	"themeSelect.light": "라이트",
	"themeSelect.auto": "자동",
	"languageSelect.accessibleLabel": "언어 선택",
	"menuButton.accessibleLabel": "메뉴",
	"sidebarNav.accessibleLabel": "메인",
	"tableOfContents.onThisPage": "이 페이지에서는",
	"tableOfContents.overview": "개요",
	"i18n.untranslatedContent": "이 내용은 아직 번역본이 없습니다.",
	"page.editLink": "페이지 수정",
	"page.lastUpdated": "마지막 업데이트:",
	"page.previousLink": "이전",
	"page.nextLink": "다음",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "페이지를 찾을 수 없습니다. URL을 확인하거나 검색 막대를 사용해 보세요.",
	"aside.note": "노트",
	"aside.tip": "팁",
	"aside.caution": "주의",
	"aside.danger": "위험",
	"fileTree.directory": "디렉터리",
	"builtWithStarlight.label": "Starlight로 제작됨"
};

const sv = {
	"skipLink.label": "Hoppa till innehåll",
	"search.label": "Sök",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Avbryt",
	"search.devWarning": "Sökfunktionen är endast tillgänglig i produktionsbyggen. \nProva att bygga och förhandsvisa siten för att testa det lokalt.",
	"themeSelect.accessibleLabel": "Välj tema",
	"themeSelect.dark": "Mörkt",
	"themeSelect.light": "Ljust",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Välj språk",
	"menuButton.accessibleLabel": "Meny",
	"sidebarNav.accessibleLabel": "Huvudmeny",
	"tableOfContents.onThisPage": "På den här sidan",
	"tableOfContents.overview": "Översikt",
	"i18n.untranslatedContent": "Det här innehållet är inte tillgängligt på ditt språk än.",
	"page.editLink": "Redigera sida",
	"page.lastUpdated": "Senast uppdaterad:",
	"page.previousLink": "Föregående",
	"page.nextLink": "Nästa",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Sidan hittades inte. Kontrollera URL:n eller testa att använda sökfältet.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const ro = {
	"skipLink.label": "Sari la conținut",
	"search.label": "Caută",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Anulează",
	"search.devWarning": "Căutarea este disponibilă numai în versiunea de producție. \nÎncercă să construiești și să previzualizezi site-ul pentru a-l testa local.",
	"themeSelect.accessibleLabel": "Selectează tema",
	"themeSelect.dark": "Întunecată",
	"themeSelect.light": "Deschisă",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selectează limba",
	"menuButton.accessibleLabel": "Meniu",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Pe această pagină",
	"tableOfContents.overview": "Sinopsis",
	"i18n.untranslatedContent": "Acest conținut nu este încă disponibil în limba selectată.",
	"page.editLink": "Editează pagina",
	"page.lastUpdated": "Ultima actualizare:",
	"page.previousLink": "Pagina precendentă",
	"page.nextLink": "Pagina următoare",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Pagina nu a fost găsită. Verifică adresa URL sau încercă să folosești bara de căutare.",
	"aside.note": "Mențiune",
	"aside.tip": "Sfat",
	"aside.caution": "Atenție",
	"aside.danger": "Pericol",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const ru = {
	"skipLink.label": "Перейти к содержимому",
	"search.label": "Поиск",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Отменить",
	"search.devWarning": "Поиск доступен только в производственных сборках. \nПопробуйте выполнить сборку и просмотреть сайт, чтобы протестировать его локально.",
	"themeSelect.accessibleLabel": "Выберите тему",
	"themeSelect.dark": "Тёмная",
	"themeSelect.light": "Светлая",
	"themeSelect.auto": "Авто",
	"languageSelect.accessibleLabel": "Выберите язык",
	"menuButton.accessibleLabel": "Меню",
	"sidebarNav.accessibleLabel": "Основное",
	"tableOfContents.onThisPage": "На этой странице",
	"tableOfContents.overview": "Обзор",
	"i18n.untranslatedContent": "Это содержимое пока не доступно на вашем языке.",
	"page.editLink": "Редактировать страницу",
	"page.lastUpdated": "Последнее обновление:",
	"page.previousLink": "Предыдущая",
	"page.nextLink": "Следующая",
	"page.draft": "Этот контент является черновиком и не будет добавлен в производственные сборки.",
	"404.text": "Страница не найдена. Проверьте URL или используйте поиск по сайту.",
	"aside.note": "Заметка",
	"aside.tip": "Совет",
	"aside.caution": "Осторожно",
	"aside.danger": "Опасно",
	"fileTree.directory": "Директория",
	"expressiveCode.copyButtonCopied": "Скопировано!",
	"expressiveCode.copyButtonTooltip": "Копировать",
	"expressiveCode.terminalWindowFallbackTitle": "Окно терминала",
	"builtWithStarlight.label": "Сделано с помощью Starlight"
};

const vi = {
	"skipLink.label": "Bỏ qua nội dung",
	"search.label": "Tìm kiếm",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Thoát",
	"search.devWarning": "Tìm kiếm không khả dụng khi đang trong môi trường lập trình. \nThử xuất bản website và tìm kiếm.",
	"themeSelect.accessibleLabel": "Chọn giao diện",
	"themeSelect.dark": "Tối",
	"themeSelect.light": "Sáng",
	"themeSelect.auto": "Tự động",
	"languageSelect.accessibleLabel": "Chọn ngôn ngữ",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Chính",
	"tableOfContents.onThisPage": "Tóm tắt",
	"tableOfContents.overview": "Tổng quát",
	"i18n.untranslatedContent": "Nội dung này không tồn tại trong ngôn ngữ của bạn",
	"page.editLink": "Chỉnh sửa trang",
	"page.lastUpdated": "Cập nhật lần cuối:",
	"page.previousLink": "Tiếp",
	"page.nextLink": "Trước",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Không tìm thấy trang. Kiểm tra URL hoặc thử sử dụng thanh tìm kiếm.",
	"aside.note": "Ghi chú",
	"aside.tip": "Mẹo",
	"aside.caution": "Thận trọng",
	"aside.danger": "Nguy hiểm",
	"fileTree.directory": "Danh mục",
	"builtWithStarlight.label": "Tạo với Starlight"
};

const uk = {
	"skipLink.label": "Перейти до вмісту",
	"search.label": "Пошук",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Скасувати",
	"search.devWarning": "Пошук доступний лише у виробничих збірках. \nСпробуйте зібрати та переглянути сайт, щоби протестувати його локально",
	"themeSelect.accessibleLabel": "Обрати тему",
	"themeSelect.dark": "Темна",
	"themeSelect.light": "Світла",
	"themeSelect.auto": "Авто",
	"languageSelect.accessibleLabel": "Обрати мову",
	"menuButton.accessibleLabel": "Меню",
	"sidebarNav.accessibleLabel": "Головне",
	"tableOfContents.onThisPage": "На цій сторінці",
	"tableOfContents.overview": "Огляд",
	"i18n.untranslatedContent": "Цей контент ще не доступний вашою мовою.",
	"page.editLink": "Редагувати сторінку",
	"page.lastUpdated": "Останнє оновлення:",
	"page.previousLink": "Назад",
	"page.nextLink": "Далі",
	"page.draft": "Цей контент є чернеткою і не буде включений до виробничих збірок.",
	"404.text": "Сторінку не знайдено. Перевірте URL або спробуйте скористатися пошуком.",
	"aside.note": "Заувага",
	"aside.tip": "Порада",
	"aside.caution": "Обережно",
	"aside.danger": "Небезпечно",
	"fileTree.directory": "Каталог",
	"builtWithStarlight.label": "Створено з Starlight"
};

const hi = {
	"skipLink.label": "इसे छोड़कर कंटेंट पर जाएं",
	"search.label": "खोजें",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "रद्द करे",
	"search.devWarning": "खोज केवल उत्पादन बिल्ड में उपलब्ध है। \nस्थानीय स्तर पर परीक्षण करने के लिए साइट बनाए और उसका पूर्वावलोकन करने का प्रयास करें।",
	"themeSelect.accessibleLabel": "थीम चुनें",
	"themeSelect.dark": "अँधेरा",
	"themeSelect.light": "रोशनी",
	"themeSelect.auto": "स्वत",
	"languageSelect.accessibleLabel": "भाषा चुने",
	"menuButton.accessibleLabel": "मेन्यू",
	"sidebarNav.accessibleLabel": "मुख्य",
	"tableOfContents.onThisPage": "इस पृष्ठ पर",
	"tableOfContents.overview": "अवलोकन",
	"i18n.untranslatedContent": "यह कंटेंट अभी तक आपकी भाषा में उपलब्ध नहीं है।",
	"page.editLink": "पृष्ठ संपादित करें",
	"page.lastUpdated": "आखिरी अद्यतन:",
	"page.previousLink": "पिछला",
	"page.nextLink": "अगला",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "यह पृष्ठ नहीं मिला। URL जांचें या खोज बार का उपयोग करने का प्रयास करें।",
	"aside.note": "टिप्पणी",
	"aside.tip": "संकेत",
	"aside.caution": "सावधानी",
	"aside.danger": "खतरा",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Starlight द्वारा निर्मित"
};

const zhTW = {
	"skipLink.label": "跳到內容",
	"search.label": "搜尋",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "取消",
	"search.devWarning": "正式版本才能使用搜尋功能。\n如要在本地測試，請先建置並預覽網站。",
	"themeSelect.accessibleLabel": "選擇佈景主題",
	"themeSelect.dark": "深色",
	"themeSelect.light": "淺色",
	"themeSelect.auto": "自動",
	"languageSelect.accessibleLabel": "選擇語言",
	"menuButton.accessibleLabel": "選單",
	"sidebarNav.accessibleLabel": "主要",
	"tableOfContents.onThisPage": "本頁內容",
	"tableOfContents.overview": "概述",
	"i18n.untranslatedContent": "本頁內容尚未翻譯。",
	"page.editLink": "編輯頁面",
	"page.lastUpdated": "最後更新於：",
	"page.previousLink": "前一則",
	"page.nextLink": "下一則",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "找不到頁面。請檢查網址或改用搜尋功能。",
	"aside.note": "注意",
	"aside.tip": "提示",
	"aside.caution": "警告",
	"aside.danger": "危險",
	"fileTree.directory": "目錄",
	"builtWithStarlight.label": "Built with Starlight"
};

const pl = {
	"skipLink.label": "Przejdź do głównej zawartości",
	"search.label": "Szukaj",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Anuluj",
	"search.devWarning": "Wyszukiwanie jest dostępne tylko w buildach produkcyjnych. \nSpróbuj zbudować i uruchomić aplikację, aby przetestować lokalnie.",
	"themeSelect.accessibleLabel": "Wybierz motyw",
	"themeSelect.dark": "Ciemny",
	"themeSelect.light": "Jasny",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Wybierz język",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Główne",
	"tableOfContents.onThisPage": "Na tej stronie",
	"tableOfContents.overview": "Przegląd",
	"i18n.untranslatedContent": "Ta treść nie jest jeszcze dostępna w Twoim języku.",
	"page.editLink": "Edytuj stronę",
	"page.lastUpdated": "Ostatnia aktualizacja:",
	"page.previousLink": "Poprzednia strona",
	"page.nextLink": "Następna strona",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Nie znaleziono. Sprawdź URL lub użyj wyszukiwarki.",
	"aside.note": "Notatka",
	"aside.tip": "Wskazówka",
	"aside.caution": "Uwaga",
	"aside.danger": "Ważne",
	"fileTree.directory": "Folder",
	"expressiveCode.copyButtonCopied": "Skopiowane!",
	"expressiveCode.copyButtonTooltip": "Skopiuj do schowka",
	"expressiveCode.terminalWindowFallbackTitle": "Okno terminala",
	"builtWithStarlight.label": "Built with Starlight"
};

const sk = {
	"skipLink.label": "Preskočiť na obsah",
	"search.label": "Hľadať",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Zrušiť",
	"search.devWarning": "Vyhľadávanie je dostupné len v produkčných zostaveniach. \nSkúste vytvoriť a zobraziť náhľad stránky lokálne.",
	"themeSelect.accessibleLabel": "Vyberte tému",
	"themeSelect.dark": "Tmavý",
	"themeSelect.light": "Svetlý",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Vyberte jazyk",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Hlavný",
	"tableOfContents.onThisPage": "Na tejto stránke",
	"tableOfContents.overview": "Prehľad",
	"i18n.untranslatedContent": "Tento obsah zatiaľ nie je dostupný vo vašom jazyku.",
	"page.editLink": "Upraviť stránku",
	"page.lastUpdated": "Posledná aktualizácia:",
	"page.previousLink": "Predchádzajúce",
	"page.nextLink": "Nasledujúce",
	"page.draft": "Tento obsah je koncept a nebude zahrnutý do produkčných zostavení.",
	"404.text": "Stránka nenájdená. Skontrolujte URL alebo skúste použiť vyhľadávacie pole.",
	"aside.note": "Poznámka",
	"aside.tip": "Tip",
	"aside.caution": "Upozornenie",
	"aside.danger": "Nebezpečenstvo",
	"fileTree.directory": "Adresár",
	"builtWithStarlight.label": "Postavené so Starlight"
};

const { parse } = builtinI18nSchema();
const builtinTranslations = Object.fromEntries(
  Object.entries({
    cs,
    en,
    es,
    de,
    ja,
    pt,
    fa,
    fr,
    gl,
    he,
    id,
    it,
    nl,
    da,
    tr,
    ar,
    nb,
    zh,
    ko,
    sv,
    ro,
    ru,
    vi,
    uk,
    hi,
    "zh-TW": zhTW,
    pl,
    sk
  }).map(([key, dict]) => [key, parse(dict)])
);

const DeprecatedLabelsPropProxy = new Proxy(
  {},
  {
    get(_, key) {
      const label = String(key);
      throw new AstroUserError(
        `The \`labels\` prop in component overrides has been removed.`,
        `Replace \`Astro.props.labels["${label}"]\` with \`Astro.locals.t("${label}")\` instead.
For more information see https://starlight.astro.build/guides/i18n/#using-ui-translations`
      );
    }
  }
);
const wellKnownRTL = ["ar", "fa", "he", "prs", "ps", "syc", "ug", "ur"];
const BuiltInDefaultLocale = { ...getLocaleInfo("en"), lang: "en" };
function getLocaleInfo(lang) {
  try {
    const locale = new Intl.Locale(lang);
    const label = new Intl.DisplayNames(locale, { type: "language" }).of(lang);
    if (!label || lang === label) throw new Error("Label not found.");
    return {
      label: label[0]?.toLocaleUpperCase(locale) + label.slice(1),
      dir: getLocaleDir(locale)
    };
  } catch (error) {
    throw new AstroUserError(
      `Failed to get locale informations for the '${lang}' locale.`,
      "Make sure to provide a valid BCP-47 tags (e.g. en, ar, or zh-CN)."
    );
  }
}
function getLocaleDir(locale) {
  if ("textInfo" in locale) {
    return locale.textInfo.direction;
  } else if ("getTextInfo" in locale) {
    return locale.getTextInfo().direction;
  }
  return wellKnownRTL.includes(locale.language) ? "rtl" : "ltr";
}
function pickLang(dictionary, lang) {
  return dictionary[lang];
}

const I18nextNamespace = "starlight";
function createTranslationSystem(config, userTranslations, pluginTranslations = {}) {
  const defaultLocale = config.defaultLocale.lang || config.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const translations = {
    [defaultLocale]: buildResources(
      builtinTranslations[defaultLocale],
      builtinTranslations[stripLangRegion(defaultLocale)],
      pluginTranslations[defaultLocale],
      userTranslations[defaultLocale]
    )
  };
  if (config.locales) {
    for (const locale in config.locales) {
      const lang = localeToLang(locale, config.locales, config.defaultLocale);
      translations[lang] = buildResources(
        builtinTranslations[lang] || builtinTranslations[stripLangRegion(lang)],
        pluginTranslations[lang],
        userTranslations[lang]
      );
    }
  }
  const i18n = i18next.createInstance();
  i18n.init({
    resources: translations,
    fallbackLng: config.defaultLocale.lang || config.defaultLocale?.locale || BuiltInDefaultLocale.lang
  });
  return (locale) => {
    const lang = localeToLang(locale, config.locales, config.defaultLocale);
    const t = i18n.getFixedT(lang, I18nextNamespace);
    t.all = () => i18n.getResourceBundle(lang, I18nextNamespace);
    t.exists = (key, options) => i18n.exists(key, { lng: lang, ns: I18nextNamespace, ...options });
    t.dir = (dirLang = lang) => i18n.dir(dirLang);
    return t;
  };
}
function stripLangRegion(lang) {
  return lang.replace(/-[a-zA-Z]{2}/, "");
}
function localeToLang(locale, locales, defaultLocale) {
  const lang = locale ? locales?.[locale]?.lang : locales?.root?.lang;
  const defaultLang = defaultLocale?.lang || defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function buildResources(...dictionaries) {
  const dictionary = {};
  for (const dict of dictionaries) {
    for (const key in dict) {
      const value = dict[key];
      if (value) dictionary[key] = value;
    }
  }
  return { [I18nextNamespace]: dictionary };
}

async function loadTranslations() {
  let userTranslations = {};
  const warn = console.warn;
  console.warn = () => {
  };
  try {
    userTranslations = Object.fromEntries(
      // @ts-ignore — may be an error in projects without an i18n collection
      (await getCollection("i18n")).map(({ id, data }) => [id, data])
    );
  } catch {
  }
  console.warn = warn;
  return userTranslations;
}
const useTranslations = createTranslationSystem(
  starlightConfig,
  await loadTranslations(),
  pluginTranslations
);

export { BuiltInDefaultLocale as B, DeprecatedLabelsPropProxy as D, getCollection as a, getEntry as g, pickLang as p, starlightConfig as s, useTranslations as u };
