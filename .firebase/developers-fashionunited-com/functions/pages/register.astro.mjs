import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CFc1r9Xk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BzXy90Xj.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Register</h1> <p>Already have an account? <a href="/signin">Sign in</a></p> <form action="/api/auth/register" method="post"> <label for="name">Name</label> <input type="text" name="name" id="name"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })}`;
}, "/Users/joost/git/developer.fashionunited.com/src/pages/register.astro", void 0);

const $$file = "/Users/joost/git/developer.fashionunited.com/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
