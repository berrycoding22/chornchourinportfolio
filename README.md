# CHORN CHOURIN — Portfolio

Latest red portfolio, exported for local editing in VS Code and deployment from GitHub to Vercel.

## Files

- `public/index.html` — page structure, biography, project cards and social links
- `public/styles.css` — layout, responsive styles, red theme and hover effects
- `public/main.js` — scroll reveals, clock, navigation and synchronized role progress
- `public/interactions.js` — 3D particles, projects rail, technology ticker and inquiry preparation
- `public/about-motion.js` — word-by-word About illumination, scroll-reactive marquee, spotlights and contact interactions
- `public/images/chorn-chourin.png` — supplied portrait
- `public/icons/` — bundled Simple Icons brand SVGs
- `vercel.json` — Vercel static deployment settings
- `SETUP_KHMER.md` — step-by-step setup in Khmer

## Run locally

Open this folder in VS Code. Use the Live Server extension by Ritwick Dey, then right-click `public/index.html` and select **Open with Live Server**.

Alternatively, with Python installed, run from the project root:

```sh
python -m http.server 5500 --directory public
```

Then open http://localhost:5500 . No npm install or build is required.

## Deploy

Push the complete project root to a new empty GitHub repository. Import it into Vercel with Framework Preset **Other**, Root Directory **./**, empty Build and Install Commands, and Output Directory **public**. `vercel.json` already supplies these static build settings.

## Editing

Search `public/styles.css` for `--red` to change the main accent. The current accent is `#ff3b46`; particle and spotlight colors also appear in JavaScript/CSS.

Search `public/index.html` for GitHub, Facebook, TikTok or Telegram links to edit them. Keep all three JavaScript files loaded in their existing order after the page content.

## Current functionality

The website is static and has no administrator dashboard or database. The contact form prepares a message to copy; it does **not** send email or store submissions. Telegram is the direct contact link. Project cards describe concepts/learning work; they do not link to public project deployments yet.

Fonts load from Google Fonts. Brand SVGs are bundled from Simple Icons v14; brand names and logos remain the property of their respective owners.

## Official references

- https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
- https://vercel.com/docs/builds/configure-a-build
