# N5 Technologies — Corporate Website

The system compiler for AI-native enterprises. Built with React, Vite, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy via GitHub Pages

1. Install the GitHub Pages plugin:

```bash
npm install -D gh-pages
```

2. Add to `package.json` scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Set the base URL in `vite.config.js`:

```js
export default defineConfig({
  base: '/nvx-n5-website/',
  plugins: [react(), tailwindcss()],
})
```

4. Deploy:

```bash
npm run deploy
```

5. In GitHub repo settings, go to **Pages** and set source to the `gh-pages` branch.

The site will be live at `https://n5tech.github.io/nvx-n5-website/`

## Deploy via Vercel (Recommended)

The simplest option — zero config for Vite projects.

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project** and import `n5tech/nvx-n5-website`
3. Vercel auto-detects Vite — click **Deploy**
4. Optionally connect a custom domain (e.g. `n5technologies.com`) in project settings

Every push to `main` auto-deploys.

## Deploy via Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **Add new site > Import an existing project**
3. Select `n5tech/nvx-n5-website`
4. Build settings are auto-detected:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**
6. Optionally connect a custom domain in site settings

Every push to `main` auto-deploys.
