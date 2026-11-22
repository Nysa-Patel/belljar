# Under the Glass — A Bell Jar Companion

A static site for readers who have already finished *The Bell Jar* and want
a second, deeper pass: a decoded reading of the central symbol, three small
interactives (the fig tree, a 20-chapter "jar meter," and a then-vs-now
comparison of mental health care), a design write-up, and a Works Cited page.

## Structure

```
index.html          Home page
pages/               All other pages (decoded, fig-tree, jar-meter,
                      then-vs-now, plath-esther, about, works-cited)
css/style.css        All styling, including the global "jar" effect
js/common.js         Shared nav/footer renderer + the jar-effect controller
js/*.js              One script per page, reads content.js and fills the DOM
content.js           ALL site prose, as one plain JS object
```

## Editing the text (content.js)

**This is the only file you should need to touch to put in your own writing.**

Open `content.js`. It's one big object, `CONTENT`, organized by page
(`CONTENT.home`, `CONTENT.decoded`, `CONTENT.figTree`, `CONTENT.jarMeter`,
`CONTENT.thenVsNow`, `CONTENT.plathEsther`, `CONTENT.about`,
`CONTENT.worksCited`, plus `CONTENT.site`, `CONTENT.support`,
`CONTENT.footer` for shared chrome).

Every block of draft text is preceded by a comment:

```js
// REPLACE WITH MY OWN TEXT
```

Find the block, replace the string value(s) with your own writing, save,
and reload the page in your browser — no HTML, CSS, or JS files need to
change. A few rules to keep things from breaking:

- Keep the quotes around strings. `"like this"` not `like this`.
- If an entry is an array of objects (like `figTree.figs` or
  `jarMeter.chapters`), you can edit the text fields inside each object,
  but don't delete an object's keys (`id`, `label`, `closes`, `chapter`,
  `level`, `insight`, etc.) — scripts read those by name.
- `jarMeter.chapters` must keep all 20 entries, one per chapter, each with
  a `level` from 0–10.
- Some entries in `thenVsNow` and `plathEsther` are marked
  `needsSource: true` — these render a small **NEEDS SOURCE** flag on the
  live page as a reminder. Once you've verified a claim and added its
  citation to `CONTENT.worksCited.entries`, you can delete that
  `needsSource: true` line (or set it to `false`) to clear the flag.
- When you add or verify a source, add an entry to
  `CONTENT.worksCited.entries` (and `imageCredits` for any image), in MLA
  format. Any page's `sourcesUsed` array lists the citation `id`s whose
  short form shows in that page's footer.

## Running it locally

No build step, no server required. Just open `index.html` in a browser:

```bash
open index.html
```

(or double-click it in Finder / File Explorer). Every page works the same
way directly from disk, including on GitHub Pages or Netlify.

## Deploying

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. In the repo's Settings → Pages, set the source to the branch you pushed
   (root folder).
3. Your site will be live at `https://<username>.github.io/<repo>/`.

**Netlify**
1. Drag this whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop),
   or connect the GitHub repo and set the publish directory to the project
   root (no build command needed).

## Accessibility notes

- All interactives are keyboard-operable (figs, graph points, topic
  toggles are real `<button>`/focusable elements with visible focus
  rings).
- `prefers-reduced-motion` is respected: the jar effect settles on one
  static value instead of animating on scroll, and the Fig Tree's timer
  is replaced by a "Wait" button that advances in discrete steps.
- The Fig Tree, Jar Meter, and Then vs. Now pages all degrade to readable,
  non-interactive-looking content if JavaScript fails to load (text still
  renders from `content.js`; only the live motion is lost — though in
  practice all three features check for `window.CONTENT`/`window.Common`
  at load time and expect JS to be enabled).

## What I tested

See the end of the build conversation / commit message for the specific
viewport widths and interactions checked before calling this done.
