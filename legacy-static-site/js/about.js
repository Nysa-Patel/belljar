(function () {
  var c = window.CONTENT.about;
  document.getElementById("page-title").textContent = c.title;
  document.getElementById("page-intro").textContent = c.intro;

  var wrap = document.getElementById("sections");
  wrap.innerHTML = c.sections.map(function (s) {
    return '<section class="section-block"><h2>' + s.heading + "</h2><p>" + s.body + "</p></section>";
  }).join("");

  window.Common.init({
    inPages: true,
    active: "pages/about.html",
    sources: [],
    jar: { base: 0.3, floor: 0.15, easeOnScroll: true }
  });
})();
