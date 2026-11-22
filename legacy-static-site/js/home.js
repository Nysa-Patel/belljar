(function () {
  var c = window.CONTENT.home;
  document.getElementById("tagline").textContent = c.tagline;
  document.getElementById("intro").textContent = c.intro;
  document.getElementById("content-note-heading").textContent = c.contentNoteHeading;
  document.getElementById("content-note-body").textContent = c.contentNote;
  document.getElementById("enter-heading").textContent = c.enterHeading;

  var grid = document.getElementById("enter-grid");
  grid.innerHTML = c.enter.map(function (card) {
    return '<a class="enter-card" href="' + card.href + '">' +
      "<h3>" + card.title + "</h3>" +
      "<p>" + card.teaser + "</p>" +
      "</a>";
  }).join("");

  var s = window.CONTENT.support;
  document.getElementById("support-heading").textContent = s.heading;
  document.getElementById("support-body").textContent = s.body;
  document.getElementById("support-lifeline-name").textContent = s.lifelineName;
  document.getElementById("support-lifeline-contact").textContent = s.lifelineContact;

  window.Common.init({
    inPages: false,
    active: "index.html",
    sources: [],
    jar: { base: 0.85, floor: 0.2, easeOnScroll: true }
  });
})();
