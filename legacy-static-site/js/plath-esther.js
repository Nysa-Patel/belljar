(function () {
  var c = window.CONTENT.plathEsther;
  var flag = window.CONTENT.footer.needsSourceFlag;
  document.getElementById("page-title").textContent = c.title;
  document.getElementById("page-intro").textContent = c.intro;

  var wrap = document.getElementById("sections");
  wrap.innerHTML = c.sections.map(function (s) {
    var badge = s.needsSource ? ' <span class="needs-source">' + flag + "</span>" : "";
    return '<section class="section-block"><h2>' + s.heading + badge + "</h2><p>" + s.body + "</p></section>";
  }).join("");

  window.Common.init({
    inPages: true,
    active: "pages/plath-esther.html",
    sources: c.sourcesUsed,
    jar: { base: 0.4, floor: 0.15, easeOnScroll: true }
  });
})();
