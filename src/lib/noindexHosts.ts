// Platform-owned hostname suffixes that must never be indexed by search engines.
// Any other hostname (e.g. the official custom domain) stays index-eligible.
export const NOINDEX_HOST_SUFFIXES = [
  ".lovable.app",
  ".workers.dev",
  ".pages.dev",
  ".netlify.app",
] as const;

export function isPlatformHost(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/:\d+$/, "").replace(/\.$/, "");
  return NOINDEX_HOST_SUFFIXES.some((s) => host.endsWith(s) || host === s.slice(1));
}

export const NOINDEX_HEADER_VALUE = "noindex, nofollow";
