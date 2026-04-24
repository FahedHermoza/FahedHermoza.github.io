# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:5173/
npm run build      # Build for GitHub Pages (outputs to dist/)
npm run build:library  # Build as NPM package (outputs dist/gitprofile.es.js + .umd.js)
npm run lint       # Lint JS/JSX files
npm run lint:fix   # Auto-fix lint issues
npm run prettier   # Check formatting
npm run prettier:fix  # Auto-fix formatting
```

## Architecture

This is a **GitProfile** portfolio site — a React + Vite app that auto-generates a portfolio by fetching data from the GitHub API. It is also published as an NPM package (`@arifszn/gitprofile`).

### Data flow

1. `gitprofile.config.js` — the single file users edit to customize their portfolio (GitHub username, social links, skills, experience, certifications, education, projects, blog, theme).
2. `src/App.jsx` — imports config and passes it as a prop to `<GitProfile config={config} />`.
3. `src/components/GitProfile.jsx` — the root component. On mount it:
   - Calls `sanitizeConfig()` to normalize/default the config.
   - Fetches GitHub user profile and repos via the GitHub REST API (`https://api.github.com/users/<username>` and the search API for repos).
   - Renders all section sub-components, passing down slices of sanitized config and fetched data.
4. `src/helpers/utils.jsx` — shared utilities: `sanitizeConfig`, theme resolution (`getInitialTheme`), GA helpers (`ga`), Hotjar setup, skeleton loader helper, and error objects.

### Sub-components (all under `src/components/`)

Each section is its own component in a named directory (`avatar-card`, `details`, `skill`, `experience`, `certification`, `education`, `project`, `external-project`, `blog`, `footer`, `theme-changer`, `head-tag-editor`, `error-page`, `lazy-image`).

### Styling

Tailwind CSS + DaisyUI for theming. Theme is stored in `localStorage` under the key `gitprofile-theme` and applied as a `data-theme` attribute on `<html>`. The `procyon` theme maps to the `customTheme` object in config.

### Dual build targets

- **Site build** (`vite.config.js`): standard Vite build with PWA plugin (Service Worker). `base` must match the GitHub Pages path — `'/'` for `<username>.github.io`, `'/<repo>/'` for project pages.
- **Library build** (`library.config.js`): bundles `GitProfile.jsx` as ES + UMD, externalizes React.

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `./dist` to GitHub Pages via `actions/deploy-pages`.

### Key customization file

All portfolio content lives in `gitprofile.config.js`. The `sanitizeConfig` function in `utils.jsx` documents every accepted field and its default value — consult it when adding new config options.
