// Writes static HTML for each route so crawlers that do not run JavaScript
// (most AI answer-engine crawlers) see the page content, not an empty root.
// Runs after both builds: `dist/` (client) and `dist-server/` (entry-server.jsx).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')
const ORIGIN = 'https://n5corp.com'

// Every route in App.jsx must be listed here, or it is served the homepage's HTML.
const routes = [
  { url: '/', file: 'index.html' },
  {
    url: '/legal',
    file: 'legal/index.html',
    title: 'Legal & Privacy - N5 Technologies',
    description: 'Terms of use and privacy policy for N5 Technologies, Inc.',
  },
]

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Replaces the content of an existing meta tag; a tag that is absent stays absent.
function setMeta(html, attr, key, value) {
  const tag = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`)
  return html.replace(tag, `$1${escapeAttr(value)}$2`)
}

function replaceOnce(html, search, replacement) {
  if (html.split(search).length !== 2) {
    throw new Error(`prerender: expected exactly one ${search} in dist/index.html`)
  }
  return html.replace(search, () => replacement)
}

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(path.join(ROOT, 'dist-server/entry-server.js')).href)

for (const route of routes) {
  const canonical = ORIGIN + route.url
  let html = replaceOnce(template, '<div id="root"></div>', `<div id="root">${render(route.url)}</div>`)
  html = replaceOnce(html, '</head>',
    `  <link rel="canonical" href="${canonical}" />\n    <meta property="og:url" content="${canonical}" />\n  </head>`)

  if (route.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(route.title)}</title>`)
    html = setMeta(html, 'property', 'og:title', route.title)
    html = setMeta(html, 'name', 'twitter:title', route.title)
  }
  if (route.description) {
    html = setMeta(html, 'name', 'description', route.description)
    html = setMeta(html, 'property', 'og:description', route.description)
    html = setMeta(html, 'name', 'twitter:description', route.description)
  }

  const out = path.join(DIST, route.file)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  console.log(`prerendered ${route.url} -> dist/${route.file}`)
}
