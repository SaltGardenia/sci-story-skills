# sci-story-skill showcase site

React + Vite showcase page for the [sci-story-skill](https://github.com/SaltGardenia/sci-story-skills) skill, with Chinese/English and light/dark toggles (defaults: Chinese, light).

## Develop

```bash
cd website
npm install
npm run dev        # http://localhost:5173
```

## Deploy (GitHub Pages)

Deployment is automated by `../.github/workflows/deploy-website.yml` — push to `main` (or run the workflow manually) and the site builds to GitHub Pages at:

https://saltgardenia.github.io/sci-story-skills/

One-time setup: in the repo **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.

The Vite `base` is set to `/sci-story-skills/` to match the project-pages URL; if you rename the repo, update `base` in `vite.config.js` accordingly.

## Preview the production build

```bash
npm run build
npm run preview    # serves dist/ at http://localhost:4173
```
