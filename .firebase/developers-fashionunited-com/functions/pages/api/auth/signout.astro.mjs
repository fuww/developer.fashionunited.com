export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ redirect, cookies }) => {
  cookies.delete("__session", {
    path: "/"
  });
  return redirect("/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
