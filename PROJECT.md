# N5 Technologies Corporate Website

## What This Is

This is the corporate website for **N5 Technologies** -- "The System Compiler for AI-Native Enterprises." It's a single-page marketing site (plus a /legal route) that explains N5's thesis, its three-layer stack (Intent, Sutra, Rumi), and why enterprises should be *described*, not programmed.

The site lives at [n5tech/nvx-n5-website](https://github.com/n5tech/nvx-n5-website) and auto-deploys to **Vercel** from the `main` branch.

---

## The N5 Thesis (What the Site Communicates)

N5's core argument is deceptively simple: AI can already write code, but code isn't the hard part. **Systems** are the hard part -- the stateful, distributed, interconnected architectures that enterprises actually run on. Code generation gives you fragments; N5 compiles whole systems.

The three-layer stack:

| Layer | Role | Color |
|-------|------|-------|
| **Intent** | Captures enterprise intent from business analysis -- processes, constraints, roles, opportunities | Gold `#c09b2d` |
| **Sutra** | System design and compilation layer. Turns intent into structured system design through dialogue. | Navy `#233263` |
| **Rumi** | Execution layer. Runs distributed, stateful systems with enterprise-grade reliability. | Teal `#2f6f73` |

The site walks visitors through this story section by section, building the argument progressively.

---

## Technical Architecture

### Stack

- **React 19** + **Vite 8** -- fast dev server, fast builds, no bloat
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (not PostCSS -- the v4 way)
- **react-router-dom v7** for routing (just `/` and `/legal`)
- **Formspree** for the contact form backend (no server needed)
- **Vercel** for deployment (zero-config for Vite projects)

### Why This Stack

This is a marketing site, not an app. The tech choices reflect that:

- **No Next.js.** This isn't a content-heavy site with SEO-critical pages, server-side rendering needs, or dynamic routes. Vite + React gives you the same developer experience without the framework overhead. You don't bring a bulldozer to plant a garden.
- **Tailwind v4 via Vite plugin.** Tailwind v4 moved away from the PostCSS plugin model. The `@tailwindcss/vite` plugin is the new first-class integration -- it's faster and simpler. Theme tokens are defined in CSS with `@theme {}` rather than in a `tailwind.config.js` file.
- **Formspree for contact form.** Same pattern used on the Rumi website. You POST JSON to a Formspree endpoint, they handle email delivery. No backend, no Lambda, no maintenance. The form ID is `mzdkorgo`.

### Project Structure

```
nvx-n5-website/
  index.html              # Entry point. Loads fonts, sets meta tags.
  vite.config.js          # Vite + React + Tailwind plugins. That's it.
  package.json            # React 19, react-router-dom, tailwindcss v4
  public/
    fonts/                # Self-hosted Geist Sans woff2 files (4 weights)
    n5-logo.png           # Nav logo
    n5-favicon.png        # Browser tab favicon
    robots.txt            # Allows all crawlers, points to sitemap
    sitemap.xml           # Lists the two routes: / and /legal
    llms.txt              # LLM-friendly link index of the site
    llms-full.txt         # LLM-friendly site map with page content inlined as markdown
  src/
    index.css             # @font-face declarations, Tailwind @theme tokens, base styles
    main.jsx              # React root
    App.jsx               # BrowserRouter, routes, contact modal state
    components/
      Nav.jsx             # Fixed top bar, scroll-aware background
      Hero.jsx            # "AI That Turns Intent Into Systems"
      TheShift.jsx        # Yesterday vs N5 comparison
      WhyCodeIsNotEnough.jsx  # The insight: systems > code
      TheStack.jsx        # Three-layer stack visualization
      HowItWorks.jsx      # 4 steps from intent to execution
      WhyThisMatters.jsx  # "We compile systems" + benefits grid
      ForEnterprises.jsx  # Use cases + "Not a" differentiation
      Credibility.jsx     # Core principles, Rumi as execution substrate
      Footer.jsx          # Closing statement + legal link
      ContactForm.jsx     # Modal form -> Formspree
      Legal.jsx           # Full legal/privacy page
```

### How the Pieces Connect

The architecture is intentionally flat. `App.jsx` is the orchestrator:

1. It owns the `contactOpen` state and passes `openContact` down to both `Nav` (the "Talk to Us" button) and `Footer` (the closing CTA).
2. `ContactForm` renders as a modal overlay at the top level -- it lives outside the route structure so it works from any page.
3. The homepage is a simple vertical stack of section components. No shared state between sections. Each component is self-contained with its own data (arrays of objects for cards, steps, principles, etc.).
4. `Nav` uses a scroll listener to add a backdrop blur and bottom border after the user scrolls 40px -- a subtle touch that makes the nav "materialize" as you scroll down from the hero.

The routing is minimal: `/` renders the homepage sections, `/legal` renders the Legal component. That's it.

### The Design System

The design system lives in `src/index.css` using Tailwind v4's `@theme` block:

```css
@theme {
  --color-midnight: #0b0f1a;    /* Page background -- deep blue-black */
  --color-surface: #121826;      /* Card backgrounds */
  --color-surface-light: #1b2233; /* Input fields, lighter surfaces */
  --color-border: #2a3448;       /* Borders everywhere */
  --color-muted: #8891a0;        /* Section labels, secondary text */
  --color-accent: #233263;       /* Primary brand blue (buttons, active states) */
  --color-accent-light: #3a4f8a; /* Button hover state */
  --color-gold: #c09b2d;         /* Key highlights ONLY */
  --color-intent: #c09b2d;       /* Stack: Intent layer */
  --color-sutra: #233263;        /* Stack: Sutra layer */
  --color-rumi: #2f6f73;         /* Stack: Rumi layer */
}
```

These become Tailwind utilities automatically (`bg-midnight`, `text-gold`, `border-border`, etc.).

Text hierarchy:
- `#e6eaf2` -- primary text (headlines, emphasis)
- `#9aa3b2` -- body text, descriptions
- `#8891a0` -- muted text (section labels, captions)

---

## Design Decisions and Why They Matter

### 1. Gold Accent: Less Is More

This was the single most important design lesson from building the site. Early iterations used gold (`#c09b2d`) on section labels, step numbers, and various UI elements. The result? It looked like every other "AI startup with a premium vibe" website. Generic.

The fix: **gold is reserved for three specific uses:**
- The hero headline phrase "Intent Into Systems"
- The "We compile systems" line in Why This Matters
- The Intent layer color in The Stack

Everything else -- section labels, step indicators, secondary text -- uses the muted gray palette. This restraint is what makes the gold *mean something* when it appears. It's like how a good jazz musician uses silence: the notes that *aren't* played define the ones that are.

### 2. The Geist Sans Font Problem

We wanted Geist Sans (Vercel's typeface) for its clean, modern feel. The `geist` npm package exists, but it's built for Next.js -- it uses `next/font/local` internally, which doesn't work in Vite.

**The solution:** Download the woff2 files directly, put them in `public/fonts/`, and declare `@font-face` rules manually in `index.css`. Four weights (400, 500, 600, 700) with `font-display: swap` for good loading behavior.

JetBrains Mono (for code-like elements like section labels) loads from Google Fonts since it's a secondary font and the latency is acceptable.

**Lesson:** When a font package is designed for a specific framework, don't fight the abstraction. Just grab the font files and do it yourself. It's 10 lines of CSS vs. hours of debugging build tool incompatibilities.

### 3. Hero Headline Line Breaking

The hero reads: "AI That Turns **Intent Into Systems**". The word "Systems" wraps to its own line at most viewport widths, creating a visual drop that gives the word weight and drama.

This is achieved by keeping the hero at `max-w-4xl` while other sections use `max-w-5xl`. When we widened the content sections for better readability, we intentionally did *not* widen the hero. Breaking that line wrap would flatten the visual hierarchy of the most important text on the page.

**Lesson:** Visual rhythm sometimes requires different sections to have different max-widths. Don't blindly apply a single `max-w-*` across the whole site.

### 4. Section Headline Pattern

Every section follows the same structure:
1. Muted monospace label (`text-sm font-mono tracking-widest uppercase text-muted`)
2. Bold headline in white, often with a gray second line
3. Body paragraph in `text-lg text-[#9aa3b2]`

This consistency makes the page scannable. Visitors can skim the headlines and get the full argument without reading body text. The monospace labels act as section markers -- they're quiet enough to not compete with headlines but visible enough to orient the reader.

### 5. The "Not a" Row

The ForEnterprises section has a grid of four items that say "Not a Coding copilot", "Not a AI agent wrapper", etc. Early versions used plain bordered cards with muted text. They disappeared into the page.

The fix: gold-tinted borders (`border-gold/20`) and a subtle gold background (`bg-gold/[0.03]`). The "Not a" label uses `text-gold/70`. This gives the row enough visual pop to register as a differentiation statement without being garish or breaking the restraint principle.

### 6. Nav Scroll Behavior

The nav starts fully transparent (blending into the hero's dark background) and gains `bg-midnight/90 backdrop-blur-md border-b border-border` after 40px of scroll. This is done with a simple scroll listener in a `useEffect`:

```jsx
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 40)
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
}, [])
```

No Intersection Observer, no throttling. For a scroll threshold check, the simplicity wins. Overengineering a scroll handler for a marketing site is a classic trap.

### 7. Contact Form as Modal

The contact form is a modal (`ContactForm.jsx`) rather than a page or an embedded section. It's controlled by state in `App.jsx` and can be triggered from both the nav's "Talk to Us" button and the footer CTA.

Key details:
- Backdrop click dismisses the modal
- Escape key dismisses the modal (via `useEffect` keyboard listener)
- `e.stopPropagation()` on the modal content prevents clicks inside the form from closing it
- Posts to Formspree as JSON with `Content-Type: application/json`
- Shows a "Thank you" message on success, error state on failure

### 8. Favicon Journey

Finding the right favicon took multiple attempts with different logo variants. The winner: `N5_LOGO_300x300_LinkedIn-white n5 transparent.png` -- the same white-on-transparent N5 logo used in the nav. Consistency between the nav logo and the browser tab creates a professional, unified feel.

Browser tab title: **"N5 - Intent to Systems"** -- short, descriptive, and reinforces the core message.

---

## The Stack Visualization (TheStack.jsx)

This is the most architecturally interesting component. It renders the three N5 layers as stacked cards with a color system that maps each layer to its identity:

```javascript
const colorMap = {
  intent: {
    border: 'border-[#c09b2d]/20',
    bg: 'bg-[#c09b2d]/[0.03]',
    tag: 'bg-[#c09b2d]/10 text-[#c09b2d] border-[#c09b2d]/20',
    // ... more variants
  },
  // sutra and rumi follow the same pattern
}
```

Each layer card has:
- A colored tag pill with a dot indicator
- A tagline and description
- A column of "output" pills showing what that layer produces

Dashed SVG lines connect the cards vertically, reinforcing the "flow downward" metaphor (intent flows into design, design flows into execution).

The data is defined as a plain array of objects at the top of the file. No API calls, no context, no state management. For static content like this, the simplest approach is the right one.

---

## Deployment

**Vercel** auto-deploys from the `main` branch on GitHub. The repository is `n5tech/nvx-n5-website`.

Vercel detects Vite projects automatically -- no build configuration needed. It runs `npm run build` (which runs `vite build`) and serves the `dist/` directory.

**SPA routing requires `vercel.json`.** Unlike Next.js or CRA, Vercel does *not* automatically fall back to `index.html` for client-side routes in Vite projects. Without a rewrite rule, direct navigation to `/legal` (or any route refresh) returns 404. The fix is a one-file `vercel.json` at the repo root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This rewrites all paths to `/` so `BrowserRouter` can resolve the route client-side.

**Static files in `public/` are served before the SPA rewrite.** The site ships four root-served files for crawlers and LLMs -- `robots.txt`, `sitemap.xml`, `llms.txt`, and `llms-full.txt` (an LLM-friendly map; `llms.txt` is a link index, `llms-full.txt` inlines the page content as markdown). They live in `public/`, so Vite copies them verbatim into `dist/` at build time. You might worry the catch-all rewrite (`/(.*)` → `/`) would swallow `/robots.txt` and serve `index.html` instead -- it doesn't. Vercel matches a real file in `dist/` *first* and only falls through to the rewrite when no file matches. So no `vercel.json` change was needed. **Lesson:** to add any future root-served static file (a search-engine verification file, an `ads.txt`, a `.well-known/` entry), just drop it in `public/`. The SPA rewrite never sees it.

---

## Lessons and Pitfalls

### Things That Went Right

1. **Flat component architecture.** No state management library, no context providers, no prop drilling beyond one level. Each section component is a pure render of its own data. This makes the codebase trivially easy to modify -- you can change any section without understanding any other section.

2. **Tailwind v4's `@theme` block.** Defining design tokens in CSS (not JS config) and having them automatically become utilities is elegant. `--color-gold: #c09b2d` becomes `text-gold`, `bg-gold`, `border-gold`, and all opacity variants. One source of truth.

3. **Formspree for forms.** Zero backend code. The contact form works identically in development and production. No environment variables, no API keys in the frontend, no CORS issues.

### Things to Watch Out For

1. **Tailwind v4 is different from v3.** If you're used to `tailwind.config.js`, forget it. Theme customization is in CSS via `@theme {}`. The plugin is `@tailwindcss/vite`, not `tailwindcss` as a PostCSS plugin. Documentation is still catching up, so expect some trial and error.

2. **Font loading from npm packages.** If a font package says it's for Next.js (or any specific framework), it probably uses framework-specific loaders. Don't waste time making it work with Vite. Just self-host the woff2 files. It's faster, more reliable, and framework-agnostic.

3. **Color opacity in Tailwind v4.** The syntax `bg-gold/20` (20% opacity) works with `@theme` variables. But some complex opacity patterns like `bg-[#c09b2d]/[0.03]` require the bracket syntax. Know when to use which.

4. **SPA routing on Vercel.** Vercel does NOT auto-fall-back to `index.html` for Vite projects — that auto-behavior is specific to Next.js/CRA. Without `vercel.json`, `/legal` returns 404 on direct navigation or refresh. See the Deployment section for the required rewrite config. If you ever move to another host (Netlify, Cloudflare Pages, etc.), you'll need the equivalent fallback rule there too.

### How Good Engineers Think About This

- **Start with content, not components.** The site was built by writing the content/argument first, then wrapping it in components. This is why each section reads as a coherent piece of the story rather than feeling like a template filled in with words.

- **Design tokens earn their keep through constraint.** Having a color system only matters if you follow it. The gold accent rule (sparingly, for key highlights only) is the kind of constraint that separates a polished site from a messy one.

- **Complexity is a choice.** This entire site has zero state management beyond one `useState` for the contact modal. No Redux, no Zustand, no React Query. A corporate marketing site does not need state management. Recognizing when *not* to add tools is as important as knowing how to use them.

- **The 40px scroll threshold.** Small, deliberate numbers like this matter. Too low (10px) and the nav flickers on tiny scrolls. Too high (100px) and users scroll well past the hero before the nav solidifies. 40px is roughly the height of a casual scroll gesture. These details compound into polish.
