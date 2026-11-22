(function () {
  var c = window.CONTENT.figTree;
  var reduced = window.Common.prefersReducedMotion;

  document.getElementById("page-intro").textContent = c.intro;
  document.getElementById("instructions").textContent = c.instructions;
  document.getElementById("closing-note").textContent = c.closingNote;
  document.getElementById("wait-btn").textContent = c.waitButtonLabel;
  document.getElementById("try-again-btn").textContent = c.tryAgainLabel;

  // Fixed branch positions for up to 6 figs, viewBox 0 0 400 420.
  var POSITIONS = [
    { x: 110, y: 130 }, { x: 210, y: 85 }, { x: 300, y: 140 },
    { x: 85, y: 230 }, { x: 205, y: 265 }, { x: 295, y: 235 }
  ];

  var figs = c.figs.map(function (fig, i) {
    return {
      id: fig.id,
      label: fig.label,
      closes: fig.closes,
      pos: POSITIONS[i] || { x: 200, y: 200 },
      state: "fresh", // fresh -> wrinkling -> dropped, or chosen
      wrinkleAt: 0.3 + i * 0.09,
      dropAt: 0.58 + i * 0.08
    };
  });

  var total = c.timerSeconds;
  var maxSteps = 10;
  var elapsed = 0;       // seconds (timed mode)
  var step = 0;          // discrete steps (reduced-motion mode)
  var chosenFig = null;
  var running = false;
  var rafId = null;
  var startedAt = null;

  var svg = document.getElementById("fig-tree-svg");
  var timerLabel = document.getElementById("fig-timer");
  var waitBtn = document.getElementById("wait-btn");
  var tryAgainBtn = document.getElementById("try-again-btn");
  var reflectionBox = document.getElementById("fig-reflection");

  function fraction() {
    return reduced ? step / maxSteps : Math.min(elapsed / total, 1);
  }

  function computeState(fig, frac) {
    if (fig.id === (chosenFig && chosenFig.id)) return "chosen";
    if (frac >= fig.dropAt) return "dropped";
    if (frac >= fig.wrinkleAt) return "wrinkling";
    return "fresh";
  }

  function render() {
    var frac = fraction();
    svg.innerHTML = buildSvgMarkup(frac);
    // jar tightens as figs fall
    var droppedCount = figs.filter(function (f) { return computeState(f, frac) === "dropped"; }).length;
    window.Common.setJar(0.3 + (droppedCount / figs.length) * 0.65);

    figs.forEach(function (fig) {
      var node = svg.querySelector('[data-fig="' + fig.id + '"]');
      if (!node) return;
      var state = computeState(fig, frac);
      if (state === "dropped") {
        node.setAttribute("tabindex", "-1");
      } else {
        node.setAttribute("tabindex", "0");
        node.addEventListener("click", function () { chooseFig(fig); });
        node.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); chooseFig(fig); }
        });
      }
    });

    if (reduced) {
      timerLabel.textContent = chosenFig ? "" : "Step " + step + " of " + maxSteps + ".";
      waitBtn.hidden = !!chosenFig || step >= maxSteps;
    } else {
      timerLabel.textContent = chosenFig ? "" :
        (running ? Math.max(0, Math.ceil(total - elapsed)) + "s before the next fig drops" : "Press a fig, or just watch.");
    }

    if (!chosenFig && frac >= 1 && figs.every(function (f) { return computeState(f, frac) !== "fresh" && computeState(f, frac) !== "wrinkling"; })) {
      showReflection("waited");
    }
  }

  function buildSvgMarkup(frac) {
    var trunk = '<line x1="200" y1="420" x2="200" y2="260" stroke="#7a5a3a" stroke-width="10" stroke-linecap="round"/>';
    var branches = figs.map(function (fig) {
      return '<line x1="200" y1="260" x2="' + fig.pos.x + '" y2="' + fig.pos.y +
        '" stroke="#7a5a3a" stroke-width="4" stroke-linecap="round"/>';
    }).join("");
    var fruit = figs.map(function (fig) {
      var state = computeState(fig, frac);
      var r = state === "dropped" ? 9 : (state === "wrinkling" ? 13 : 16);
      return '<g class="fig" data-fig="' + fig.id + '" data-state="' + state + '" role="button" ' +
        'aria-label="Choose: ' + fig.label + (state === "dropped" ? " (dropped)" : "") + '">' +
        '<circle cx="' + fig.pos.x + '" cy="' + fig.pos.y + '" r="' + r + '"/>' +
        '<text x="' + fig.pos.x + '" y="' + (fig.pos.y < 100 ? fig.pos.y - 20 : fig.pos.y + 24) + '" text-anchor="middle">' +
        fig.label + "</text>" +
        "</g>";
    }).join("");
    return trunk + branches + fruit;
  }

  function chooseFig(fig) {
    if (chosenFig) return;
    chosenFig = fig;
    var frac = fraction();
    var quick = frac < 0.3;
    stopTimer();
    render();
    showReflection(quick ? "quick" : "chosen");
  }

  function showReflection(kind) {
    var html = "";
    if (kind === "chosen" || kind === "quick") {
      html = "<p>" + c.reflections.chosenIntro + " <strong>" + chosenFig.label + "</strong></p><p>" + chosenFig.closes + "</p>";
      if (kind === "quick") html += "<p class=\"muted\">" + c.reflections.quickNote + "</p>";
    } else {
      html = "<p><strong>" + c.reflections.waitedTitle + "</strong></p><p>" + c.reflections.waited + "</p>";
    }
    reflectionBox.innerHTML = html;
    reflectionBox.hidden = false;
    tryAgainBtn.hidden = false;
  }

  function stopTimer() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
  }

  function tick(ts) {
    if (!running) return;
    if (startedAt === null) startedAt = ts;
    elapsed = (ts - startedAt) / 1000;
    render();
    if (elapsed < total && !chosenFig) {
      rafId = requestAnimationFrame(tick);
    } else {
      running = false;
    }
  }

  function startTimer() {
    if (reduced || running || chosenFig) return;
    running = true;
    startedAt = null;
    rafId = requestAnimationFrame(tick);
  }

  function reset() {
    figs.forEach(function (fig) { fig.state = "fresh"; });
    chosenFig = null;
    elapsed = 0;
    step = 0;
    stopTimer();
    reflectionBox.hidden = true;
    reflectionBox.innerHTML = "";
    tryAgainBtn.hidden = true;
    render();
    startTimer();
  }

  if (waitBtn) {
    waitBtn.addEventListener("click", function () {
      step = Math.min(step + 1, maxSteps);
      render();
    });
  }
  tryAgainBtn.addEventListener("click", reset);

  window.Common.init({
    inPages: true,
    active: "pages/fig-tree.html",
    sources: c.sourcesUsed,
    jar: { base: 0.5, floor: 0.2, easeOnScroll: false }
  });

  reset();
})();
