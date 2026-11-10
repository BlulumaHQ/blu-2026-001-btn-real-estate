
- Platform-host noindex lives in `src/lib/noindexHosts.ts`, applied server-side by `netlify/edge-functions/platform-noindex.ts` and `functions/_middleware.ts` (CF Pages); never add global noindex to index.html/_headers — custom domains must stay indexable.
