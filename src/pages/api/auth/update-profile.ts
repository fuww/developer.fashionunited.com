import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const auth = getAuth(app);

  const { displayName, email } = await request.json();
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];

  if (!idToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;

    const updateData: { displayName?: string; email?: string } = {};
    if (displayName) updateData.displayName = displayName;
    if (email) updateData.email = email;

    await auth.updateUser(uid, updateData);

    return new Response("Profile updated successfully", { status: 200 });
  } catch (error: any) {
    console.error("Error updating profile:", error);
    return new Response("Failed to update profile", { status: 500 });
  }
};