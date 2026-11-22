(function () {
  var c = window.CONTENT.worksCited;
  document.getElementById("page-intro").textContent = c.intro;

  document.getElementById("cite-list").innerHTML = c.entries.map(function (e) {
    return "<li>" + e.mla + "</li>";
  }).join("");

  document.getElementById("image-credits-heading").textContent = c.imageCreditsHeading;
  document.getElementById("image-credits-list").innerHTML = c.imageCredits.map(function (e) {
    return "<li>" + e.credit + "</li>";
  }).join("");

  window.Common.init({
    inPages: true,
    active: "pages/works-cited.html",
    sources: [],
    jar: { base: 0.25, floor: 0.1, easeOnScroll: true }
  });
})();
