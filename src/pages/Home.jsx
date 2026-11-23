import { useEffect } from "react";
import { useReducedMotion, useMotionValue, animate } from "framer-motion";
import Layout from "../components/Layout";
import BellJar from "../components/BellJar";
import FogOverlay from "../components/FogOverlay";
import Reveal from "../components/Reveal";
import FigTreeSection from "../components/sections/FigTreeSection";
import JarMeterSection from "../components/sections/JarMeterSection";
import ThenVsNowSection from "../components/sections/ThenVsNowSection";
import { useHeroJarScroll } from "../hooks/useHeroJarScroll";
import CONTENT from "../content";

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const c = CONTENT.home;
  const reduced = useReducedMotion();
  const scroll = useHeroJarScroll();
  const staticLift = useMotionValue(0);
  const staticFog = useMotionValue(0.5);

  // Reduced motion skips the scroll-linked lift, but should still settle to
  // fully clear once — a single bounded fade, not continuous scroll motion.
  useEffect(() => {
    if (reduced) {
      const controls = animate(staticFog, 0, { duration: 2.5, ease: "easeOut", delay: 0.3 });
      return () => controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return (
    <Layout sources={[]}>
      {!reduced && <FogOverlay blur={scroll.blur} saturate={scroll.saturate} />}

      <section className="hero" ref={reduced ? null : scroll.ref}>
        <div className="hero-sticky">
          {/* key forces a clean remount when `reduced` settles, so BellJar's
              internal hooks never bind to a motion value from before it did */}
          <BellJar
            key={reduced ? "static" : "scroll"}
            className="hero-jar"
            lift={reduced ? staticLift : scroll.lift}
            fog={reduced ? staticFog : scroll.fog}
          />
          <div className="hero-text">
            <h1 className="tagline">{c.tagline}</h1>
            {!reduced && <p className="scroll-hint">{c.scrollHint}</p>}
          </div>
        </div>
      </section>

      <p>{c.intro}</p>

      <Reveal as="section" className="content-note" aria-labelledby="content-note-heading">
        <h2 id="content-note-heading">{c.contentNoteHeading}</h2>
        <p>{c.contentNote}</p>
      </Reveal>

      <section id="enter">
        <h2>{c.enterHeading}</h2>
        <div className="enter-grid">
          {c.enter.map((card, i) => (
            <Reveal
              as="button"
              key={card.target}
              type="button"
              className="enter-card"
              onClick={() => scrollToSection(card.target)}
              delay={i * 0.08}
            >
              <h3>{card.title}</h3>
              <p>{card.teaser}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <FigTreeSection />
      <JarMeterSection />
      <ThenVsNowSection />
    </Layout>
  );
}
