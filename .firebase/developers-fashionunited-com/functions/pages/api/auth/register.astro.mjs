import { getAuth } from 'firebase-admin/auth';
import { a as app } from '../../../chunks/server_C1_Usyrl.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const auth = getAuth(app);
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  if (!email || !password || !name) {
    return new Response("Missing form data", { status: 400 });
  }
  try {
    await auth.createUser({
      email,
      password,
      displayName: name
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 400 });
  }
  return redirect("/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
