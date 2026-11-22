# Under the Glass — A Bell Jar Companion

A Vite + React site for readers who have already finished *The Bell Jar*
and want a second, deeper pass: a real illustrated bell jar that lifts as
you scroll the home page, a decoded reading of the symbol, three
interactives (fig tree, 20-chapter jar meter, then-vs-now), a design
write-up, and a Works Cited page.

## Structure

```
src/
  content.js          ALL site prose, as one plain exported object
  App.jsx             Routes (HashRouter — see "Why HashRouter" below)
  main.jsx            Entry point, imports global.css
  components/
    Layout.jsx          Shared nav + footer, reads content.js
    BellJar.jsx         The etched-glass bell jar illustration
    FogOverlay.jsx       Scroll-driven blur/saturation layer (home only)
    ScrollToTop.jsx      Resets scroll position on route change
    sections/
      FigTreeSection.jsx    The fig-tree interactive (inline on Home)
      JarMeterSection.jsx   The 20-chapter jar meter (inline on Home)
      ThenVsNowSection.jsx  1950s-vs-today comparisons (inline on Home)
  hooks/
    useHeroJarScroll.js  Scroll-progress -> jar lift/fog motion values
  pages/
    Home.jsx            Hero + the three sections above, merged
    Decoded.jsx, PlathEsther.jsx, About.jsx, WorksCited.jsx, Support.jsx
  styles/global.css    All styling and design tokens

legacy-static-site/    The original vanilla HTML/CSS/JS build, kept for
                        reference. Not used by the live site.
```

## Editing the text (content.js)

**`src/content.js` is the only file you should need to touch to put in
your own writing.** It's one big object, organized by page. Every block
of draft text is preceded by:

```js
// REPLACE WITH MY OWN TEXT
```

Find the block, replace the string value(s), save — the dev server
hot-reloads instantly. A few rules:

- Keep the quotes around strings.
- For array entries (`figTree.figs`, `jarMeter.chapters`, `thenVsNow.topics`,
  etc.) you can edit the text fields, but don't remove an object's keys —
  components read them by name (`id`, `label`, `closes`, `chapter`,
  `level`, `insight`, `then`, `now`, …).
- `jarMeter.chapters` must keep all 20 entries, each with a `level` 0–10.
- Add new sources to `CONTENT.worksCited.entries` in MLA format. A page's
  `sourcesUsed` array lists which citation `id`s show in that page's
  footer.

## Running it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Hot-reloads on save.

## Building for deployment

```bash
npm run build
```

Outputs a static `dist/` folder. **You can open `dist/index.html`
directly from disk (double-click it)** — no server required — because
the app uses relative asset paths (`vite.config.js` sets `base: "./"`)
and a hash-based router.

### Why HashRouter

Routes are `/#/fig-tree`, `/#/jar-meter`, etc., instead of `/fig-tree`.
This is deliberate: a plain path-based router needs server-side rewrite
rules to handle a direct/refreshed visit to `/fig-tree` on a static host,
and breaks entirely when the built site is opened via `file://`. Hash
routing needs no server configuration at all and works identically
whether you double-click `dist/index.html` or deploy it anywhere.

## Deploying

**GitHub Pages:** push the repo, enable Pages on your branch, point it at
`dist/` (or build in CI). No rewrite rules needed, thanks to HashRouter.

**Netlify:** drag the `dist/` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo
with build command `npm run build` and publish directory `dist`.

## Accessibility notes

- The hero's scroll-linked lift and the fog overlay are skipped entirely
  under `prefers-reduced-motion: reduce` — the jar renders settled and
  partly clear, with no scroll-driven motion.
- The Fig Tree's countdown timer becomes a manual "Wait" button under
  reduced motion, advancing in discrete steps instead of continuously.
- All interactives (figs, jar-meter timeline and curve, then/now toggles)
  are real focusable elements with visible focus rings, operable by
  keyboard alone.

## Sources

All factual claims in Then vs. Now and Plath & Esther are backed by a
citation in `CONTENT.worksCited.entries` (MLA format), rendered on the
Works Cited page and linked from each page's footer.
