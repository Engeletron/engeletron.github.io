# Engeletron RF Site

Astro-based multilingual marketing site for Engeletron — a Brazilian RF/microwave ASIC design house.

## Stack

- [Astro](https://astro.build) static site generator
- 4 locales: `pt` (default), `en`, `es`, `zh`
- 3D chip viewer via `<model-viewer>` (SOIC-8 GLB with Draco compression)

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # builds to dist/
npm run preview  # preview the built dist/
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this branch (or `main`).
2. In **Settings → Pages**, set Source to **GitHub Actions**.
3. Configure DNS for `engeletron.com.br`:
   - Add a CNAME record pointing `engeletron.com.br` → `<org>.github.io`
   - Or use GitHub's apex-domain A records (185.199.108–111.153.0)
4. Merge your work into `main` — the `deploy.yml` workflow triggers automatically on every push to `main`.
5. The `public/CNAME` file ensures GitHub Pages serves the custom domain.

## Assets

Web assets live in `public/assets/`. The `assets/` directory at root is the source/working copy (not published). Do not publish `SOIC-8.STEP` (CAD source) or `_marking.png` (temp file).
