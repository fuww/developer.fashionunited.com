import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8K-b4g3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/utils_BpiL_Gcm.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, B as Button, e as CardFooter } from '../chunks/card_DJoLKvw6.mjs';
import { L as Label, I as Input } from '../chunks/label_Brp_xOJw.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Forgot Password" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-100"> ${renderComponent($$result2, "Card", Card, { "className": "w-full max-w-md bg-white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center" }, { "default": ($$result5) => renderTemplate`Reset Password` })} ${renderComponent($$result4, "CardDescription", CardDescription, { "className": "text-center" }, { "default": ($$result5) => renderTemplate`Enter your email to receive a password reset link` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, {}, { "default": ($$result4) => renderTemplate` <form id="forgot-password-form" class="space-y-4"> <div class="space-y-2"> ${renderComponent($$result4, "Label", Label, { "htmlFor": "email" }, { "default": ($$result5) => renderTemplate`Email` })} ${renderComponent($$result4, "Input", Input, { "type": "email", "name": "email", "id": "email", "required": true })} </div> ${renderComponent($$result4, "Button", Button, { "type": "submit", "className": "w-full" }, { "default": ($$result5) => renderTemplate`Send Reset Link` })} </form> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, { "className": "flex justify-center" }, { "default": ($$result4) => renderTemplate` <p class="text-sm">
Remember your password? <a class="text-sm text-blue-600 hover:underline" href="/signin">Sign in</a> </p> ` })} ` })} </div> ` })} `;
}, "/Users/joost/git/developer.fashionunited.com/src/pages/forgot-password.astro", void 0);

const $$file = "/Users/joost/git/developer.fashionunited.com/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ForgotPassword,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
