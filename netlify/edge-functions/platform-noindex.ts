// Netlify Edge Function: adds X-Robots-Tag: noindex only on *.netlify.app
// (and other platform hostnames). Custom domains pass through untouched.
import { isPlatformHost, NOINDEX_HEADER_VALUE } from "../../src/lib/noindexHosts.ts";

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const response = await context.next();
  const host = new URL(request.url).hostname;
  if (!isPlatformHost(host)) return response;
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", NOINDEX_HEADER_VALUE);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};

export const config = { path: "/*" };
