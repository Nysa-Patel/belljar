/**
 * ALL site prose lives here. Pages and components only read this object —
 * never edit JSX to change wording, edit this file instead.
 *
 * To swap in your own writing: find the block below (each is marked
 * "REPLACE WITH MY OWN TEXT"), replace the string(s), save — Vite's dev
 * server hot-reloads automatically. You cannot break layout by editing
 * text here, only by deleting a key a component expects. If you remove a
 * paragraph, leave the array entry as an empty string rather than
 * deleting the entry itself.
 */
const CONTENT = {

  site: {
    title: "Under the Glass",
    subtitle: "A reader's companion to The Bell Jar",
    nav: [
      { href: "/", label: "Home" },
      { href: "/decoded", label: "The Bell Jar, Decoded" },
      { href: "/plath-esther", label: "Plath & Esther" },
      { href: "/about", label: "About This Site" },
      { href: "/works-cited", label: "Works Cited" }
    ]
  },

  support: {
    // REPLACE WITH MY OWN TEXT
    label: "Support",
    heading: "If you need to talk to someone",
    body: "This site discusses depression and suicide as they appear in the novel. If you or someone you know is struggling, you can call or text 988 (US) to reach the Suicide & Crisis Lifeline, any hour, free and confidential.",
    lifelineName: "988 Suicide & Crisis Lifeline",
    lifelineContact: "Call or text 988 (US)"
  },

  home: {
    // REPLACE WITH MY OWN TEXT
    tagline: "You've read the book. Now stay under the glass a little longer.",
    intro: "There are no jars in The Bell Jar – it creates an impression. This site is for those people who've read the book and who are carrying it around: the numbing in New York, the fig tree, and the ending that leaves you holding your breath.",
    scrollHint: "Scroll to lift the jar.",
    contentNoteHeading: "A quiet note before you go in",
    contentNote: "This site discusses depression and suicide as they appear in the novel. If you or someone you know is struggling, call or text 988 (US).",
    enterHeading: "Three ways in",
    enter: [
      {
        target: "fig-tree",
        title: "The Fig Tree",
        teaser: "Choose a future. Watch the others wrinkle while you decide."
      },
      {
        target: "jar-meter",
        title: "The Jar Meter",
        teaser: "Walk all twenty chapters by how sealed-off they feel."
      },
      {
        target: "then-vs-now",
        title: "Then vs. Now",
        teaser: "1950s psychiatry against today's, topic by topic."
      }
    ]
  },

  decoded: {
    title: "The Bell Jar, Decoded",
    intro: "Esther does not call it \"depression,\" rather she talks about a bell jar, which is a glass dome that imprisons her in her own foul air and distorts everything going on in the outside world.",
    sections: [
      {
        heading: "First, it's distance",
        body: "When she is living in New York, she is experiencing the fantasy life of a lucky 1950s college girl, yet she feels empty, seeing her life through glass."
      },
      {
        heading: "Then it tightens",
        body: "The symbolism of the bell jar evolves in the book. First, it was numbness; then suffocation as she cannot sleep, read, or write, and finally it was something she could sit into, even in a cozy private hospital."
      },
      {
        heading: "The ending denies a perfect cure",
        body: "The bell jar is removed, however, Esther understands that it may come back again. There is recovery but there is no guarantee of it, and this makes the book more realistic."
      },
      {
        heading: "The bell jar is social",
        body: "The demands imposed upon Esther (she should be pure but not cold, ambitious but marriageable, brilliant but prepared to sacrifice herself) are another form of glass."
      }
    ],
    sourcesUsed: ["plath-bell-jar"]
  },

  figTree: {
    // REPLACE WITH MY OWN TEXT
    intro: "For Esther, her future is a fig tree, and each fig represents a different life. She is starving while looking at all the figs together.",
    instructions: "Choose one of the fruits before they fall off; either way, something is lost.",
    waitButtonLabel: "Wait",
    tryAgainLabel: "Try again",
    timerSeconds: 10,
    figs: [
      {
        id: "poet",
        label: "Famous Poet",
        closes: "In choosing the poet, she won't get the stability of a regular job, and the version of herself who doesn't need to be extraordinary to be comfortable."
      },
      {
        id: "professor",
        label: "Brilliant Professor",
        closes: "Choosing the professor means trading the uncertainty of art for the orderliness of a department."
      },
      {
        id: "wife",
        label: "Wife and Mother",
        closes: "Choosing this fig, in Esther's world, is shown as choosing to close all other figs at once — the only \"choice\" that her culture insists is not a choice at all."
      },
      {
        id: "editor",
        label: "Brilliant Editor",
        closes: "Choosing the editor allows her to stay close to what she loves without writing it. In other words, closeness to genius without having to be the genius."
      },
      {
        id: "traveler",
        label: "World Traveler",
        closes: "Choosing to travel means choosing never to put down roots anywhere. She will exchange the security of a settled life for a freedom that can be lonely."
      },
      {
        id: "unknown",
        label: "???",
        closes: "The future which does not yet have a name. In choosing it, she admits that she does not have to know how the story ends before she begins."
      }
    ],
    reflections: {
      chosenIntro: "You chose:",
      waitedTitle: "You waited.",
      waited: "This is Esther's version of the problem: not refusing to choose, but staring at every possibility until none of them can be reached. The figs didn't vanish because she was slow — they vanished because she wouldn't let go of any of them.",
      quickTitle: "You chose fast.",
      quickNote: "Choosing quickly doesn't erase the cost — it just means you paid it before you had time to feel it."
    },
    closingNote: "The fig tree is a representation of ambition under pressure in this book. In situations where each door seems to offer the same impossibility, the only sensible choice may seem to be inaction even though the figs will drop regardless.",
    sourcesUsed: ["plath-bell-jar"]
  },

  jarMeter: {
    // REPLACE WITH MY OWN TEXT — these are draft interpretations, not plot summaries. Keep them that way: an insight or a question, not "what happens."
    intro: "Twenty Chapters, Twenty Jars Levels. Level 0 represents pure air, whereas level 10 denotes total closure. Click on any chapter below or the point on the curve.",
    levelLabel: "Jar level",
    chapters: [
      { chapter: 1, level: 4, insight: "Esther is in the middle of everyone's envy and feels nothing. Is numbness the first sign, or just the last thing anyone looks for?" },
      { chapter: 2, level: 5, insight: "Doreen instills courage in Esther and then demonstrates to her just how perilous it could be." },
      { chapter: 3, level: 5, insight: "She eats everything at the banquet. What is she actually hungry for?" },
      { chapter: 4, level: 5, insight: "Esther wishes her editor were her mother. Is this desire revealing anything about the real one?" },
      { chapter: 5, level: 5, insight: "Buddy used to be flawless. As she spends more time with him, she cannot ignore the truth anymore." },
      { chapter: 6, level: 6, insight: "The delivery room horrifies her. Is it the birth that scares her, or is it her own future?" },
      { chapter: 7, level: 6, insight: "The fig tree scene: too many futures, and no way to choose only one." },
      { chapter: 8, level: 5, insight: "Skiing memory: despite her feeling of freedom while going fast, she gets hurt anyhow." },
      { chapter: 9, level: 7, insight: "Photo shoot, crying fits, night with Marco. The shiny world becomes threatening." },
      { chapter: 10, level: 8, insight: "Back home to suburbia with no creative writing course and no plan. The opening is narrowing." },
      { chapter: 11, level: 9, insight: "Dr. Gordon does not listen at all. How does it feel not to be heard when help is needed?" },
      { chapter: 12, level: 9, insight: "Shock therapy treatment becomes betrayal, because sometimes a patient may be hurt after it." },
      { chapter: 13, level: 10, insight: "The darkest part of the novel. Notice what finally makes her grieve her father." },
      { chapter: 14, level: 8, insight: "She wakes, alive, and smashes the mirror. Why won't she recognize what she sees in the reflection?" },
      { chapter: 15, level: 7, insight: "A more humanized hospital environment with a better doctor, and the jar's presence is still there." },
      { chapter: 16, level: 7, insight: "Joan looks like a mirror for Esther, who can now see her destiny." },
      { chapter: 17, level: 6, insight: "Dr. Nolan makes a promise she doesn't fully keep. Can Esther trust her?" },
      { chapter: 18, level: 5, insight: "Birth control pills are freedom from fear. Physical and psychological independence turn to be connected." },
      { chapter: 19, level: 5, insight: "Esther has gained some independence, lost Joan, and carried the burden of her choice away with her." },
      { chapter: 20, level: 4, insight: "The jar is lifted but \"suspended.\" Hope, without a guarantee." }
    ],
    sourcesUsed: ["plath-bell-jar"]
  },

  thenVsNow: {
    intro: "Click a topic to compare the 1950s world of the novel with mental health care today.",
    toggleThenLabel: "1950s (the novel)",
    toggleNowLabel: "Today",
    topics: [
      {
        id: "doctors",
        title: "The two psychiatrists",
        then: "Dr. Gordon spends a few minutes seeing Esther, asks her very little, and looks at her as if she were a case to be processed, not a person to be understood.",
        now: "Dr. Nolan builds rapport prior to suggesting further treatment. In a 2018 meta-analysis of more than 300 studies, the therapeutic alliance, which refers to the patient-clinician relationship quality, was found to be an indicator of treatment efficacy regardless of the type of treatment, measurement tool, and country."
      },
      {
        id: "ect",
        title: "Electroconvulsive therapy",
        then: "The first treatment that Esther undergoes is poorly explained and given without her informed consent. It is something that is done to her, rather than with her consent.",
        now: "Modern electroconvulsive therapy (ECT) is done under general anesthesia with a muscle relaxant to prevent physical damage due to the induced seizures, needs informed consent of the patient prior to treatment, and is used only when all other treatments fail in case of severe depression."
      },
      {
        id: "stigma",
        title: "Stigma",
        then: "The other patients are not like Esther, according to Esther's mother, and she hides her disease from the surrounding world.",
        now: "According to research on attitudes in the USA between 1996 and 2018, a decrease in stigma related to depression can be observed; however, stigma towards other diseases, including schizophrenia, remained stable or even increased."
      },
      {
        id: "access",
        title: "Who gets access",
        then: "The fate of Esther and the quality of the treatment provided to her depend mostly on her connection with her mother and a scholarship patron. Without it, her chances were much worse.",
        now: "It is important to remember that access to mental health care is still greatly influenced by one's insurance coverage, financial standing, and location: as of the end of 2025, almost 40% of the population of the USA — 137 million people — lived in a federally designated Mental Health Professional Shortage Area."
      }
    ],
    whatHasntChanged: {
      title: "What hasn't changed",
      body: "In spite of the advancements made by modern medicine over many decades, access to mental healthcare facilities in the U.S. remains largely determined by money and location. In December 2025, nearly 40% of the U.S. population resided in the area designated by the federal authorities as Mental Health Professional Shortage Area, and the shortage itself is uneven: according to the information provided by the federal statistics on the workforce, rural counties have much higher rates of lacking any behavioral health providers compared to urban areas. Not only is there the issue of a shortage, but the out-of-pocket expenses and coverage gaps prevent patients from getting an appointment even where it is possible."
    },
    sourcesUsed: ["plath-bell-jar", "fluckiger-alliance-2018", "mayo-ect", "pescosolido-stigma-2021", "kff-hpsa-2025", "hrsa-behavioral-health-2025"]
  },

  plathEsther: {
    title: "Plath & Esther",
    intro: "How autobiographical is the novel, and what do we erase by answering the question quickly?",
    sections: [
      {
        heading: "The internship was real",
        body: "In the summer of 1953, Plath secured a guest-editorship at the magazine Mademoiselle and spent the whole month in New York preparing the college issue of the publication. This period in New York forms the foundation for Esther's summer internship at the fictional Ladies' Day. Esther, similar to Plath, is a student of English literature from a women's college, attending the school on the merit of the scholarship and thrown into the world of glamorous magazine."
      },
      {
        heading: "The hospital period was also real",
        body: "Later that year, Plath attempted to commit suicide and underwent treatment in the hospital. Electroconvulsive therapy was used during Plath's treatment and it was funded by the novelist Olive Higgins Prouty, the one whose endowment made Plath eligible for the scholarship of the Smith College."
      },
      {
        heading: "Publishing it almost killed the fiction",
        body: "When Plath's novel was released to British publishers in early 1963, she chose the pen name Victoria Lucas, since so many actual people were featured. She died within about a month of the release. The novel was only published in the U.S. under her name in 1971, in spite of objections from family members, because they worried about how much of the novel was actually true."
      },
      {
        heading: "\"Roman à clef\" is the helpful term here",
        body: "\"The Bell Jar\" has typically been labeled a roman à clef, which is an auto-fiction novel where characters and events from real life can be found but using false names. This term is helpful not just because there really were a number of people in Plath's life involved in events from her life, but because it acknowledges its status as fiction."
      }
    ],
    sourcesUsed: ["plath-bell-jar", "britannica-bell-jar", "poetry-foundation-bell-jar-40", "smith-rarebook-plath"]
  },

  about: {
    title: "About This Site / My Choices",
    intro: "",
    sections: [
      {
        heading: "",
        body: "The main symbol in the book isn't something to be explained; rather, it needs to be experienced, so the jar lifts up on the homepage as you scroll down, just like the one in reality that tightens and loosens around Esther. It is this very approach that has been followed in the entire design of the website; the website has a 1950s magazine design of cream paper, pastels, serif fonts, and etched-line illustrations in the mid-century magazine style, because it is this surface that is Esther's world, and the clash of the two makes the entire book. The three interactives all follow the same approach: the fig tree depicts her paralysis because of the many futures that she has to choose from, the jar meter gives the structure of the entire book instead of a single scene, and then vs. now links the novel to the real-life issue of care."
      }
    ]
  },

  worksCited: {
    // REPLACE WITH MY OWN TEXT — add every source actually used, in MLA format.
    intro: "",
    entries: [
      {
        id: "britannica-bell-jar",
        mla: "\"The Bell Jar.\" _Encyclopaedia Britannica_, www.britannica.com/topic/The-Bell-Jar. Accessed 22 Nov. 2026."
      },
      {
        id: "smith-rarebook-plath",
        mla: "\"The Bell Jar.\" _Sylvia Plath: A Comprehensive Bibliography_, Smith College Libraries Special Collections, www.smith.edu/libraries/libs/rarebook/exhibitions/conway/belljar.htm. Accessed 22 Nov. 2026."
      },
      {
        id: "poetry-foundation-bell-jar-40",
        mla: "Gould, Emily. \"The Bell Jar at Forty.\" _Poetry Foundation_, www.poetryfoundation.org/articles/69721/the-bell-jar-at-40. Accessed 22 Nov. 2026."
      },
      {
        id: "fluckiger-alliance-2018",
        mla: "Flückiger, Christoph, et al. \"The Alliance in Adult Psychotherapy: A Meta-Analytic Synthesis.\" _Psychotherapy_, vol. 55, no. 4, 2018, pp. 316-340."
      },
      {
        id: "kff-hpsa-2025",
        mla: "KFF. \"Mental Health Care Health Professional Shortage Areas (HPSAs).\" _KFF_, 31 Dec. 2025, www.kff.org/mental-health/state-indicator/mental-health-care-health-professional-shortage-areas-hpsas/. Accessed 22 Nov. 2026."
      },
      {
        id: "mayo-ect",
        mla: "Mayo Clinic. \"Electroconvulsive Therapy (ECT).\" _Mayo Clinic_, Mayo Foundation for Medical Education and Research, www.mayoclinic.org/tests-procedures/electroconvulsive-therapy/about/pac-20393894. Accessed 22 Nov. 2026."
      },
      {
        id: "pescosolido-stigma-2021",
        mla: "Pescosolido, Bernice A., et al. \"Trends in Public Stigma of Mental Illness in the US, 1996-2018.\" _JAMA Network Open_, vol. 4, no. 12, 21 Dec. 2021, doi:10.1001/jamanetworkopen.2021.40202."
      },
      {
        id: "plath-bell-jar",
        mla: "Plath, Sylvia. _The Bell Jar_. Faber and Faber, 2001."
      },
      {
        id: "hrsa-behavioral-health-2025",
        mla: "United States, Health Resources and Services Administration, Bureau of Health Workforce. _Behavioral Health Workforce Brief 2025_. Dec. 2025, bhw.hrsa.gov/sites/default/files/bureau-health-workforce/data-research/Behavioral-Health-Workforce-Brief-2025.pdf."
      }
    ],
    imageCreditsHeading: "Image credits",
    imageCredits: [
      {
        id: "original-svg-art",
        credit: "All visual elements on this site (the bell jar illustration, fig tree, and jar-level graph) are original SVG art made for this project — no photographs or book-cover images are used."
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

export default CONTENT;
