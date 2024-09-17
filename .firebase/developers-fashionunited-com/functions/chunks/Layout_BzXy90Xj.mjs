import { c as createComponent, r as renderTemplate, l as renderHead, h as renderSlot } from './astro/server_CFc1r9Xk.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                             */

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> <!-- <Navbar /> --> ${renderSlot($$result, $$slots["default"])} <!-- <Footer /> -->  </body> </html>`;
}, "/Users/joost/git/developer.fashionunited.com/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
