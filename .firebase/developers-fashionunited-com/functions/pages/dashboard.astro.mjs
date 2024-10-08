import { d as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_DavSpe8V.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Layout } from '../chunks/utils_BpiL_Gcm.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter, B as Button } from '../chunks/card_DJoLKvw6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://developer.fashionunited.com");
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const auth = getAuth(app);
  if (!Astro2.cookies.has("__session")) {
    return Astro2.redirect("/signin");
  }
  const sessionCookie = Astro2.cookies.get("__session");
  if (!sessionCookie) {
    return Astro2.redirect("/signin");
  }
  const decodedCookie = await auth.verifySessionCookie(sessionCookie.value);
  const user = await auth.getUser(decodedCookie.uid);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-100"> ${renderComponent($$result2, "Card", Card, { "className": "w-full max-w-7xl bg-white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center" }, { "default": ($$result5) => renderTemplate`
Welcome, ${user.displayName}!
` })} ${renderComponent($$result4, "CardDescription", CardDescription, { "className": "text-center" }, { "default": ($$result5) => renderTemplate`
We're happy to see you here
` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, {}, { "default": ($$result4) => renderTemplate` <p class="text-center mb-4">
This is your personal dashboard. Here you can manage your
                    account and access your data.
</p> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, { "className": "flex justify-center" }, { "default": ($$result4) => renderTemplate` <form action="/api/auth/signout"> ${renderComponent($$result4, "Button", Button, { "type": "submit" }, { "default": ($$result5) => renderTemplate`Sign out` })} </form> ` })} ` })} </div> ` })}`;
}, "/Users/joost/git/developer.fashionunited.com/src/pages/dashboard.astro", void 0);

const $$file = "/Users/joost/git/developer.fashionunited.com/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
