import { c as createComponent, r as renderTemplate, e as renderHead, f as renderSlot } from './astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                         */
/* empty css                             */
import { twMerge } from 'tailwind-merge';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> <!-- <Navbar /> --> ${renderSlot($$result, $$slots["default"])} <!-- <Footer /> -->  </body> </html>`;
}, "/Users/joost/git/developer.fashionunited.com/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { $$Layout as $, cn as c };
