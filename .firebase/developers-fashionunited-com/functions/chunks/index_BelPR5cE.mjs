import { F as Fragment, _ as __astro_tag_component__, p as createVNode } from './astro/server_B8K-b4g3.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_47HINnll.mjs';
import './Code_VQGZ496k.mjs';
import 'clsx';

/*## What you can find here

<CardGrid stagger>
<Card title="Update content" icon="pencil">
Edit `src/content/docs/index.mdx` to see this page change.
</Card>
<Card title="Add new content" icon="add-document">
Add Markdown or MDX files to `src/content/docs` to create new pages.
</Card>
<Card title="Configure your site" icon="setting">
Edit your `sidebar` and other config in `astro.config.mjs`.
</Card>
<Card title="Read the docs" icon="open-book">
Learn more in [the Starlight Docs](https://starlight.astro.build/).
</Card>
</CardGrid>*/
const frontmatter = {
  "title": "Welcome to FashionUnited's Docs",
  "description": "Use cases, tutorials & documentation.",
  "template": "splash",
  "hero": {
    "tagline": "Use cases, tutorials & documentation. The Fashionunited platform connects your website or application with the worldwide fashion conversation happening on FashionUnited.",
    "image": {
      "file": "../../assets/1024x1024.jpg"
    },
    "actions": [{
      "text": "To the docs",
      "link": "/docs/advertising/",
      "icon": "right-arrow",
      "variant": "primary"
    }, {
      "text": "Read the marketplace docs",
      "link": "/docs/marketplace/",
      "icon": "external"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/docs/index.mdx";
const file = "/Users/joost/git/developer.fashionunited.com/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/joost/git/developer.fashionunited.com/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
