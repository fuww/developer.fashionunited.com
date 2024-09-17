import { b as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CFc1r9Xk.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_C1_Usyrl.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Layout } from '../chunks/Layout_BzXy90Xj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://developer.fashionunited.com");
const prerender = false;
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const auth = getAuth(app);
  if (Astro2.cookies.has("__session")) {
    const sessionCookie = Astro2.cookies.get("__session")?.value;
    if (sessionCookie) {
      const decodedCookie = await auth.verifySessionCookie(sessionCookie);
      if (decodedCookie) {
        return Astro2.redirect("/dashboard");
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Sign in</h1> <p>New here? <a href="/register">Create an account</a></p> <form action="/api/auth/signin" method="post"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })} `;
}, "/Users/joost/git/developer.fashionunited.com/src/pages/signin.astro", void 0);

const $$file = "/Users/joost/git/developer.fashionunited.com/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
