(function () {
  var c = window.CONTENT.thenVsNow;
  var flag = window.CONTENT.footer.needsSourceFlag;
  var emphasis = null; // "then" | "now" | null

  document.getElementById("page-intro").textContent = c.intro;

  var viewToggle = document.getElementById("view-toggle");
  var topicsWrap = document.getElementById("tvn-topics");
  var whatBox = document.getElementById("what-hasnt-changed");

  viewToggle.innerHTML =
    '<button type="button" data-view="then" aria-pressed="false">' + c.toggleThenLabel + "</button>" +
    '<button type="button" data-view="now" aria-pressed="false">' + c.toggleNowLabel + "</button>";

  Array.prototype.forEach.call(viewToggle.querySelectorAll("button"), function (btn) {
    btn.addEventListener("click", function () {
      var view = btn.getAttribute("data-view");
      emphasis = emphasis === view ? null : view;
      renderToggleState();
      applyEmphasis();
    });
  });

  function renderToggleState() {
    Array.prototype.forEach.call(viewToggle.querySelectorAll("button"), function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-view") === emphasis));
    });
  }

  function applyEmphasis() {
    Array.prototype.forEach.call(topicsWrap.querySelectorAll(".tvn-panel"), function (panel) {
      var isThen = panel.classList.contains("panel-then");
      var dim = emphasis && ((isThen && emphasis !== "then") || (!isThen && emphasis !== "now"));
      panel.style.opacity = dim ? "0.45" : "1";
    });
  }

  topicsWrap.innerHTML = c.topics.map(function (t) {
    var badge = t.needsSource ? ' <span class="needs-source">' + flag + "</span>" : "";
    return (
      '<div class="tvn-card">' +
      '<button type="button" class="tvn-toggle" aria-expanded="false" data-topic="' + t.id + '">' +
      t.title + "</button>" +
      '<div class="tvn-panels" id="panels-' + t.id + '" hidden>' +
      '<div class="tvn-panel panel-then"><h4>' + c.toggleThenLabel + "</h4><p>" + t.then + "</p></div>" +
      '<div class="tvn-panel panel-now"><h4>' + c.toggleNowLabel + badge + "</h4><p>" + t.now + "</p></div>" +
      "</div>" +
      "</div>"
    );
  }).join("");

  Array.prototype.forEach.call(topicsWrap.querySelectorAll(".tvn-toggle"), function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-topic");
      var panels = document.getElementById("panels-" + id);
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panels.hidden = open;
      if (!open) applyEmphasis();
    });
  });

  var whatBadge = c.whatHasntChanged.needsSource ? ' <span class="needs-source">' + flag + "</span>" : "";
  whatBox.innerHTML =
    "<h2>" + c.whatHasntChanged.title + whatBadge + "</h2>" +
    "<p>" + c.whatHasntChanged.body + "</p>";

  window.Common.init({
    inPages: true,
    active: "pages/then-vs-now.html",
    sources: c.sourcesUsed,
    jar: { base: 0.35, floor: 0.15, easeOnScroll: true }
  });
})();
