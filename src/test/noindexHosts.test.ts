import { describe, it, expect } from "vitest";
import { isPlatformHost } from "@/lib/noindexHosts";

describe("isPlatformHost", () => {
  it("flags platform hostnames", () => {
    for (const h of ["x.lovable.app", "id-preview--abc.lovable.app", "a.workers.dev", "b.pages.dev", "btn.netlify.app", "BTN.NETLIFY.APP:443"]) {
      expect(isPlatformHost(h)).toBe(true);
    }
  });
  it("keeps custom domains indexable", () => {
    for (const h of ["btnpro.ca", "www.btnpro.ca", "notnetlify.app.example.com", "mylovable.app.ca"]) {
      expect(isPlatformHost(h)).toBe(false);
    }
  });
});
