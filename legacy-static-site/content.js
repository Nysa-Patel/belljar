/**
 * ALL site prose lives here. Pages and scripts only read this object —
 * never edit markup to change wording, edit this file instead.
 *
 * To swap in your own writing: find the block below (each is marked
 * "REPLACE WITH MY OWN TEXT"), replace the string(s), save, reload the
 * page. You cannot break layout by editing text here — only by deleting
 * a key a script expects. If you remove a paragraph, leave the array
 * entry as an empty string rather than deleting the entry itself.
 *
 * Attached as window.CONTENT (plain script, not an ES module) so the
 * site keeps working when opened directly from disk via file:// — some
 * browsers block module imports from file://, but a plain <script src>
 * always loads.
 */
var CONTENT = {

  site: {
    title: "Under the Glass",
    subtitle: "A reader's companion to The Bell Jar",
    nav: [
      { href: "index.html", pagesHref: "../index.html", label: "Home" },
      { href: "pages/decoded.html", pagesHref: "decoded.html", label: "The Bell Jar, Decoded" },
      { href: "pages/fig-tree.html", pagesHref: "fig-tree.html", label: "Fig Tree" },
      { href: "pages/jar-meter.html", pagesHref: "jar-meter.html", label: "Jar Meter" },
      { href: "pages/then-vs-now.html", pagesHref: "then-vs-now.html", label: "Then vs. Now" },
      { href: "pages/plath-esther.html", pagesHref: "plath-esther.html", label: "Plath & Esther" },
      { href: "pages/about.html", pagesHref: "about.html", label: "About This Site" },
      { href: "pages/works-cited.html", pagesHref: "works-cited.html", label: "Works Cited" }
    ]
  },

  support: {
    label: "Support",
    heading: "If you need to talk to someone",
    body: "This site discusses depression and suicide as they appear in the novel. If you or someone you know is struggling, you can call or text 988 (US) to reach the Suicide & Crisis Lifeline, any hour, free and confidential.",
    lifelineName: "988 Suicide & Crisis Lifeline",
    lifelineContact: "Call or text 988 (US)"
  },

  home: {
    tagline: "You've read the book. Now stay under the glass a little longer.",
    intro: "There are no jars in The Bell Jar – it creates an impression. This site is for those people who've read the book and who are carrying it around: the numbing in New York, the fig tree, and the ending that leaves you holding your breath.",
    contentNoteHeading: "A quiet note before you go in",
    contentNote: "This site discusses depression and suicide as they appear in the novel. If you or someone you know is struggling, call or text 988 (US).",
    enterHeading: "Three ways in",
    enter: [
      {
        href: "pages/fig-tree.html",
        title: "The Fig Tree",
        teaser: "Choose a future. Watch the others wrinkle while you decide."
      },
      {
        href: "pages/jar-meter.html",
        title: "The Jar Meter",
        teaser: "Walk all twenty chapters by how sealed-off they feel."
      },
      {
        href: "pages/then-vs-now.html",
        title: "Then vs. Now",
        teaser: "1950s psychiatry against today's, topic by topic."
      }
    ]
  },

  decoded: {
    title: "The Bell Jar, Decoded",
    intro: "Esther never says \"I have depression.\" She describes a bell jar: a glass dome that traps her in her own stale air and distorts the world outside it.",
    sections: [
      {
        heading: "First, it's distance",
        body: "In New York she's living the dream of a lucky 1950s college girl, but she reports feeling empty, like watching her own life through glass."
      },
      {
        heading: "Then it tightens",
        body: "The jar changes meaning over the book. At first it's numbness, then suffocation when she can't sleep, read, or write, and later it's something she can sit inside even in a comfortable private hospital."
      },
      {
        heading: "The ending refuses a clean cure",
        body: "The jar is lifted, but Esther knows it could come back. Recovery is real but not guaranteed, and that's part of why the book feels honest."
      },
      {
        heading: "The jar is also social",
        body: "The expectations placed on Esther (be pure but not cold, ambitious but ready to marry, brilliant but willing to give it up) are a kind of glass too."
      }
    ],
    sourcesUsed: ["plath-bell-jar"]
  },

  figTree: {
    // REPLACE WITH MY OWN TEXT
    intro: "Esther sees her future as a fig tree. Each fig is a different life. She starves looking at all of them at once.",
    instructions: "Pick a fig before it drops — or don't. Either way, something is lost.",
    waitButtonLabel: "Wait",
    tryAgainLabel: "Try again",
    timerSeconds: 18,
    figs: [
      {
        id: "poet",
        label: "Famous Poet",
        closes: "Choosing the poet means giving up the steadiness of a conventional career — and the version of herself that doesn't need to be exceptional to feel safe."
      },
      {
        id: "professor",
        label: "Brilliant Professor",
        closes: "Choosing the professor trades the uncertainty of art for the structure of a department — and quietly closes the door on being the one everyone studies, rather than the one who studies."
      },
      {
        id: "wife",
        label: "Wife and Mother",
        closes: "Choosing this fig, in Esther's world, is presented as closing every other fig at once — the one 'choice' her culture keeps insisting isn't really optional."
      },
      {
        id: "editor",
        label: "Brilliant Editor",
        closes: "Choosing the editor keeps her near the work she loves without being the author of it — proximity to brilliance instead of being the brilliant one."
      },
      {
        id: "traveler",
        label: "World Traveler",
        closes: "Choosing to travel means putting down roots nowhere — trading the comfort (and confinement) of a fixed life for a freedom that can also be loneliness."
      },
      {
        id: "unknown",
        label: "???",
        closes: "This is the fig she can't quite make out — the future with no name yet. Choosing it means admitting she doesn't have to know the ending before she starts."
      }
    ],
    reflections: {
      chosenIntro: "You chose:",
      waitedTitle: "You waited.",
      waited: "This is Esther's version of the problem: not refusing to choose, but staring at every possibility until none of them can be reached. The figs didn't vanish because she was slow — they vanished because she wouldn't let go of any of them.",
      quickTitle: "You chose fast.",
      quickNote: "Choosing quickly doesn't erase the cost — it just means you paid it before you had time to feel it."
    },
    closingNote: "The fig tree is the book's clearest picture of ambition under pressure. When every door looks equally impossible, sitting still can feel like the only safe move — even though the figs fall whether you move or not.",
    sourcesUsed: ["plath-bell-jar"]
  },

  jarMeter: {
    // REPLACE WITH MY OWN TEXT — these are draft interpretations, not plot summaries. Keep them that way: an insight or a question, not "what happens."
    intro: "Twenty chapters, twenty jar levels. 0 is clear air. 10 is fully sealed. Click a chapter below, or click a point on the curve.",
    levelLabel: "Jar level",
    chapters: [
      { chapter: 1, level: 4, insight: "Esther is in the middle of everyone's envy and feels nothing. Is numbness the first sign, or just the last thing anyone looks for?" },
      { chapter: 2, level: 5, insight: "Doreen makes Esther feel bold, then shows her how that boldness can turn dangerous." },
      { chapter: 3, level: 5, insight: "She eats everything at the banquet. What is she actually hungry for?" },
      { chapter: 4, level: 5, insight: "Esther wishes her editor were her mother. What does that wish say about the real one?" },
      { chapter: 5, level: 5, insight: "Buddy once seemed perfect. The more she sees of him, the less she can pretend." },
      { chapter: 6, level: 6, insight: "The delivery room horrifies her. Is it the birth itself, or the idea of her own future?" },
      { chapter: 7, level: 6, insight: "The fig tree scene: too many futures, and no way to choose only one." },
      { chapter: 8, level: 5, insight: "A skiing flashback: she feels free at speed, and the fall comes anyway." },
      { chapter: 9, level: 7, insight: "The photo shoot, the tears, the night with Marco. The glossy world turns threatening." },
      { chapter: 10, level: 8, insight: "Back in the suburbs, with no writing course and no plan. The jar starts to close." },
      { chapter: 11, level: 9, insight: "Dr. Gordon never really listens. What does it feel like to need help and not be seen?" },
      { chapter: 12, level: 9, insight: "The first shock treatment reads as a betrayal. Treatment can harm when no one explains it." },
      { chapter: 13, level: 10, insight: "The darkest chapter. Notice what finally makes her grieve her father." },
      { chapter: 14, level: 8, insight: "She wakes, alive, and smashes the mirror. What does she refuse to recognize?" },
      { chapter: 15, level: 7, insight: "A warmer hospital, a better doctor — and she still says the jar is there." },
      { chapter: 16, level: 7, insight: "Joan appears almost as a mirror. Esther starts to see a possible fate." },
      { chapter: 17, level: 6, insight: "Dr. Nolan makes a promise she doesn't fully keep. Does trust survive that?" },
      { chapter: 18, level: 5, insight: "Birth control reads as freedom from fear. Bodily control and mental freedom turn out to be linked." },
      { chapter: 19, level: 5, insight: "Esther gains independence, loses Joan, and leaves carrying grief she didn't choose." },
      { chapter: 20, level: 4, insight: "The jar is lifted but \"suspended.\" Hope, without a guarantee." }
    ],
    sourcesUsed: ["plath-bell-jar"]
  },

  thenVsNow: {
    // REPLACE WITH MY OWN TEXT — every factual claim here is flagged NEEDS SOURCE. Verify before submitting.
    intro: "Click a topic to compare the 1950s world of the novel with mental health care today.",
    toggleThenLabel: "1950s (the novel)",
    toggleNowLabel: "Today",
    topics: [
      {
        id: "doctors",
        title: "The two psychiatrists",
        then: "Dr. Gordon sees Esther for a few scheduled minutes, asks little, and treats her like a case to be processed rather than a person to understand.",
        now: "Dr. Nolan takes the time to build trust before recommending further treatment. Contemporary therapy research generally supports the idea that the therapeutic relationship itself affects outcomes.", // NEEDS SOURCE
        needsSource: true
      },
      {
        id: "ect",
        title: "Electroconvulsive therapy",
        then: "Esther's first treatment is unexplained and administered without her informed consent as she understands it — it reads as something done to her, not with her.",
        now: "Modern ECT is done under general anesthesia with a muscle relaxant, with informed consent, and is typically reserved for severe depression that hasn't responded to other treatments.", // NEEDS SOURCE
        needsSource: true
      },
      {
        id: "stigma",
        title: "Stigma",
        then: "Esther's mother suggests the other patients are not like her daughter, and Esther hides her illness from the world around her.",
        now: "Public attitudes toward mental illness have measurably shifted since the 1950s, though stigma has not disappeared and still shapes who seeks care.", // NEEDS SOURCE
        needsSource: true
      },
      {
        id: "access",
        title: "Who gets access",
        then: "Esther's care depends heavily on her mother's connections and a scholarship patron — without them, her options would have been far worse.",
        now: "Access to quality mental health care today still correlates strongly with income, insurance, and geography.", // NEEDS SOURCE
        needsSource: true
      }
    ],
    whatHasntChanged: {
      title: "What hasn't changed",
      body: "Cost, a shortage of providers, long waits, and uneven access mean who gets good care still depends heavily on money and geography.", // NEEDS SOURCE
      needsSource: true
    },
    sourcesUsed: ["plath-bell-jar"]
  },

  plathEsther: {
    // REPLACE WITH MY OWN TEXT — every claim flagged NEEDS SOURCE. Verify dates/names before submitting.
    title: "Plath & Esther",
    intro: "How much of the novel is autobiography, and what does that question flatten if we answer it too quickly?",
    sections: [
      {
        heading: "The overlap is real",
        body: "Plath, like Esther, was a college student who won a prestigious guest-editor placement at a New York magazine in the early 1950s. Esther's fictional magazine stands in for the real one.", // NEEDS SOURCE: verify magazine name, program, dates
        needsSource: true
      },
      {
        heading: "The publication history matters",
        body: "The novel was first published in England under a pseudonym, shortly before Plath's death, and only later published under her own name.", // NEEDS SOURCE: verify exact dates and pseudonym
        needsSource: true
      },
      {
        heading: "\"Roman à clef\" is the useful term",
        body: "The Bell Jar is often described as a roman à clef: a novel where real people and events appear under changed names. Reading it as pure autobiography flattens what Plath actually built as fiction — selection, compression, shape.", // NEEDS SOURCE
        needsSource: true
      }
    ],
    sourcesUsed: ["plath-bell-jar"]
  },

  about: {
    // REPLACE WITH MY OWN TEXT
    title: "About This Site / My Choices",
    intro: "This page stands in for the design write-up: why the site looks and works the way it does.",
    sections: [
      {
        heading: "Why the jar is the design",
        body: "The book's central symbol shouldn't just be explained — it should be felt. The page softens and sharpens as you move through it, the same way the jar tightens and loosens around Esther."
      },
      {
        heading: "Why a 1950s magazine look",
        body: "The glossy surface is the world Esther is told to want: cream paper, pastel accents, a classic serif. The tension between that surface and what's underneath it is the whole book."
      },
      {
        heading: "Why these three interactives",
        body: "The fig tree captures her paralysis under too many futures. The jar meter shows the shape of the whole book instead of just one scene. Then vs. Now connects the novel to the real, present-day question of who gets care."
      }
    ]
  },

  worksCited: {
    // REPLACE WITH MY OWN TEXT — add every source actually used, in MLA format.
    intro: "A starter structure. Add every source you actually use below, in MLA format, including every website, article, and image credit.",
    entries: [
      {
        id: "plath-bell-jar",
        mla: "Plath, Sylvia. The Bell Jar. Faber and Faber, 1963. (Add the specific edition you used, e.g. Harper & Row, 1971.)"
      }
    ],
    imageCreditsHeading: "Image credits",
    imageCredits: [
      {
        id: "css-svg-art",
        credit: "All visual elements on this site are original CSS/SVG graphics made for this project — no photographs or book-cover images are used."
      }
    ]
  },

  footer: {
    sourcesHeading: "Sources",
    worksCitedLinkLabel: "Full Works Cited",
    supportLinkLabel: "Support",
    needsSourceFlag: "NEEDS SOURCE"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = CONTENT;
}
if (typeof window !== "undefined") {
  window.CONTENT = CONTENT;
}
