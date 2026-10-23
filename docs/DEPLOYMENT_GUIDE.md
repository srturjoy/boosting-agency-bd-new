# Deployment Guide

## Build & Export Command
```bash
npm run build
```
This produces a production-optimized static export inside the `./out` directory, configured via `wrangler.jsonc` (`pages_build_output_dir: "./out"`).

## Cloudflare Pages Package Manager & Runtime
- **Node.js Version**: Pinned to Node `22` via `.node-version`.
- **Package Manager**: Uses standard `npm` (`package.json`). Do not commit a Bun v1.4+ `bun.lock` (`"lockfileVersion": 2`) unless `BUN_VERSION` is explicitly set to `1.4.2` in the Cloudflare Pages environment variables, as Cloudflare Pages' default `bun@1.2.15` image only supports `"lockfileVersion": 1`.

## Environment Variables
- Processed via `.env.example`
- Server-side Gemini API key: `GEMINI_API_KEY`
- All client variables must use `NEXT_PUBLIC_` prefix.
