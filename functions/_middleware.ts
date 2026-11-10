// Cloudflare Pages middleware: adds X-Robots-Tag: noindex on *.pages.dev
// (and other platform hostnames). Custom domains pass through untouched.
import { isPlatformHost, NOINDEX_HEADER_VALUE } from "../src/lib/noindexHosts";

export const onRequest = async (context: { request: Request; next: () => Promise<Response> }) => {
  const response = await context.next();
  const host = new URL(context.request.url).hostname;
  if (!isPlatformHost(host)) return response;
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", NOINDEX_HEADER_VALUE);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};
