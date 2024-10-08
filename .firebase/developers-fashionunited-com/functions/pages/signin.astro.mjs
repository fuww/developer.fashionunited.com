import { d as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_DavSpe8V.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Layout } from '../chunks/utils_BpiL_Gcm.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, B as Button } from '../chunks/card_DJoLKvw6.mjs';
import { L as Label, I as Input } from '../chunks/label_Brp_xOJw.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "className": "bg-gray-100", "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-100"> ${renderComponent($$result2, "Card", Card, { "className": "mx-auto max-w-sm" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center" }, { "default": ($$result5) => renderTemplate`Sign in` })} ${renderComponent($$result4, "CardDescription", CardDescription, { "className": "text-center" }, { "default": ($$result5) => renderTemplate`Enter your credentials to access your account` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, {}, { "default": ($$result4) => renderTemplate` <form action="/api/auth/signin" method="post" class="space-y-4"> <div class="grid gap-4"> <div class="grid gap-2"> ${renderComponent($$result4, "Label", Label, { "htmlFor": "email" }, { "default": ($$result5) => renderTemplate`Email` })} ${renderComponent($$result4, "Input", Input, { "className": "w-full", "type": "email", "name": "email", "id": "email" })} </div> <div class="grid gap-2"> <div class="flex items-center"> ${renderComponent($$result4, "Label", Label, { "htmlFor": "password" }, { "default": ($$result5) => renderTemplate`Password` })} <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
Forgot your password?
</a> </div> ${renderComponent($$result4, "Input", Input, { "type": "password", "name": "password", "id": "password", "required": true })} </div> ${renderComponent($$result4, "Button", Button, { "type": "submit", "className": "w-full" }, { "default": ($$result5) => renderTemplate`Login` })} </div> ${renderComponent($$result4, "Button", Button, { "variant": "outline", "id": "google", "className": "w-full flex items-center justify-center space-x-2 bg-blue-500 text-white hover:bg-blue-600" }, { "default": ($$result5) => renderTemplate`<svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path fill="currentColor" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path> </svg> Sign in with Google` })} </form> <div class="mt-4 text-center text-sm">
Don&apos;t have an account?${" "} <a href="/register" class="underline"> Sign up </a> </div> ` })} ` })}  </div> ` })}`;
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
