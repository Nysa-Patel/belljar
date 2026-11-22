(function () {
  var c = window.CONTENT.jarMeter;
  var reduced = window.Common.prefersReducedMotion;
  var chapters = c.chapters;
  var current = 0; // index into chapters

  document.getElementById("page-intro").textContent = c.intro;

  var stopsWrap = document.getElementById("jar-meter-stops");
  var currentWrap = document.getElementById("jar-meter-current");
  var curveWrap = document.getElementById("jar-curve");

  function renderStops() {
    stopsWrap.innerHTML = chapters.map(function (ch, i) {
      return '<button type="button" class="jar-meter-stop" data-i="' + i + '" ' +
        (i === current ? 'aria-current="true"' : "") + '>' +
        '<div class="ch-num">Ch. ' + ch.chapter + "</div>" +
        '<div class="ch-level">' + c.levelLabel + ": " + ch.level + "/10</div>" +
        '<p class="ch-insight">' + ch.insight + "</p>" +
        "</button>";
    }).join("");
    Array.prototype.forEach.call(stopsWrap.querySelectorAll(".jar-meter-stop"), function (btn) {
      btn.addEventListener("click", function () { setCurrent(Number(btn.getAttribute("data-i"))); });
    });
  }

  function renderCurrent() {
    var ch = chapters[current];
    currentWrap.innerHTML =
      '<div class="ch-num">Chapter ' + ch.chapter + "</div>" +
      '<div class="jar-fog-meter" role="img" aria-label="' + c.levelLabel + " " + ch.level + ' out of 10">' +
      '<span style="width:' + (ch.level * 10) + '%"></span></div>' +
      "<p>" + ch.insight + "</p>";
    window.Common.setJar(0.12 + (ch.level / 10) * 0.75);
  }

  function renderCurve() {
    var w = 760, h = 140, pad = 20;
    var step = (w - pad * 2) / (chapters.length - 1);
    var points = chapters.map(function (ch, i) {
      var x = pad + i * step;
      var y = pad + (10 - ch.level) * ((h - pad * 2) / 10);
      return { x: x, y: y, i: i };
    });
    var path = points.map(function (p, i) {
      return (i === 0 ? "M" : "L") + p.x.toFixed(1) + "," + p.y.toFixed(1);
    }).join(" ");
    var dots = points.map(function (p) {
      return '<g class="jar-curve-point" tabindex="0" role="button" data-i="' + p.i +
        '" aria-label="Jump to chapter ' + chapters[p.i].chapter + '">' +
        '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="5"/>' +
        "</g>";
    }).join("");
    curveWrap.innerHTML =
      '<svg viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="Jar level across all twenty chapters">' +
      '<path d="' + path + '" fill="none" stroke="#9fbdce" stroke-width="2"/>' +
      dots +
      "</svg>";
    Array.prototype.forEach.call(curveWrap.querySelectorAll(".jar-curve-point"), function (node) {
      var i = Number(node.getAttribute("data-i"));
      node.addEventListener("click", function () { setCurrent(i); });
      node.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setCurrent(i); }
      });
    });
  }

  function setCurrent(i) {
    current = i;
    renderStops();
    renderCurrent();
    var active = stopsWrap.querySelector('[data-i="' + i + '"]');
    if (active && active.scrollIntoView) {
      active.scrollIntoView({ behavior: reduced ? "auto" : "smooth", inline: "center", block: "nearest" });
    }
  }

  window.Common.init({
    inPages: true,
    active: "pages/jar-meter.html",
    sources: c.sourcesUsed,
    jar: { base: 0.4, floor: 0.15, easeOnScroll: false }
  });

  renderStops();
  renderCurrent();
  renderCurve();
})();
