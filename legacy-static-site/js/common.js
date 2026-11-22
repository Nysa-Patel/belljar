/**
 * Shared chrome: nav, footer, and the global jar effect.
 * Every page calls Common.init({ inPages, active, sources, jar }) once
 * its DOM is ready. No page hardcodes nav/footer text — it all comes
 * from window.CONTENT (see content.js).
 */
(function () {
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, attrs, html) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    }
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function renderHeader(inPages, activeHref) {
    var c = window.CONTENT;
    var header = document.getElementById("site-header");
    if (!header) return;
    var homeHref = inPages ? "../index.html" : "index.html";
    var navItems = c.site.nav.map(function (item) {
      var href = inPages ? item.pagesHref : item.href;
      var current = item.href === activeHref;
      return '<li><a href="' + href + '"' + (current ? ' aria-current="page"' : '') + '>' +
        item.label + "</a></li>";
    }).join("");
    header.innerHTML =
      '<nav class="site-nav" aria-label="Primary">' +
      '<a class="brand" href="' + homeHref + '">' + c.site.title + "</a>" +
      '<ul>' + navItems + "</ul>" +
      "</nav>";
  }

  function renderFooter(inPages, sourceIds) {
    var c = window.CONTENT;
    var footer = document.getElementById("site-footer");
    if (!footer) return;
    var citedHref = inPages ? "works-cited.html" : "pages/works-cited.html";
    var entries = (sourceIds || []).map(function (id) {
      var match = c.worksCited.entries.filter(function (e) { return e.id === id; })[0];
      return match ? match.mla.split(".")[0] + "." : null;
    }).filter(Boolean);

    var sourcesHtml = entries.length
      ? '<div class="footer-sources"><strong>' + c.footer.sourcesHeading + ':</strong> ' +
        '<ul>' + entries.map(function (e) { return "<li>" + e + "</li>"; }).join("") + "</ul>" +
        ' — <a href="' + citedHref + '">' + c.footer.worksCitedLinkLabel + "</a></div>"
      : '<div class="footer-sources"><a href="' + citedHref + '">' + c.footer.worksCitedLinkLabel + "</a></div>";

    var supportHref = inPages ? "../index.html#support" : "index.html#support";
    footer.innerHTML =
      sourcesHtml +
      '<div class="footer-support"><a href="' + supportHref + '">&#9671; ' +
      c.footer.supportLinkLabel + "</a></div>";
  }

  function setupJarOverlay() {
    if (!document.getElementById("jar-overlay")) {
      document.body.appendChild(el("div", { id: "jar-overlay", "aria-hidden": "true" }));
    }
  }

  function setJar(value) {
    var clamped = Math.max(0, Math.min(1, value));
    document.documentElement.style.setProperty("--jar", String(clamped));
  }

  /**
   * jar config: { base: 0..1, easeOnScroll: bool, floor: 0..1 }
   * Home opens high and eases down on scroll. Interior pages can set a
   * fixed base, or ease down on scroll too, per the brief.
   */
  function initJarBehavior(cfg) {
    cfg = cfg || {};
    var base = typeof cfg.base === "number" ? cfg.base : 0.6;
    var floor = typeof cfg.floor === "number" ? cfg.floor : 0.15;
    setupJarOverlay();
    setJar(base);

    if (prefersReducedMotion) {
      // Static: pick one settled value, no scroll-driven easing.
      setJar(Math.max(floor, base * 0.6));
      return;
    }

    if (cfg.easeOnScroll === false) return;

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        var progress = Math.min(window.scrollY / max, 1);
        var value = base - progress * (base - floor);
        setJar(value);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  window.Common = {
    prefersReducedMotion: prefersReducedMotion,
    init: function (opts) {
      opts = opts || {};
      renderHeader(opts.inPages, opts.active);
      renderFooter(opts.inPages, opts.sources);
      initJarBehavior(opts.jar);
    },
    setJar: setJar,
    el: el
  };
})();
