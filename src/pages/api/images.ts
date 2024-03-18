import type { APIRoute } from "astro";
import { db, Image } from "astro:db";

export const POST: APIRoute = async ({ locals, request }) => {
  console.log('In images.ts', locals);
  const user = locals.user;
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Get the image information from the request
  const data = request.body;

  console.log('Data from request', data);

  return new Response("OK", { status: 200 });
}