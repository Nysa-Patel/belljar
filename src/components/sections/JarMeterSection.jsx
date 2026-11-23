import { useEffect, useRef, useState } from "react";
import { useMotionValue, useReducedMotion, animate } from "framer-motion";
import BellJar from "../BellJar";
import Reveal from "../Reveal";
import CONTENT from "../../content";

export default function JarMeterSection() {
  const c = CONTENT.jarMeter;
  const reduced = useReducedMotion();
  const chapters = c.chapters;
  const [current, setCurrent] = useState(0);
  const stopRefs = useRef({});

  const lift = useMotionValue(0);
  const fog = useMotionValue(1);

  useEffect(() => {
    const level = chapters[current].level;
    // level 10 = fully sealed: most fog, least lift. level 0 = clear air: no fog, most lift.
    const targetFog = level / 10;
    const targetLift = -(1 - level / 10) * 140;
    if (reduced) {
      fog.set(targetFog);
      lift.set(targetLift);
    } else {
      animate(fog, targetFog, { duration: 0.5, ease: "easeOut" });
      animate(lift, targetLift, { duration: 0.5, ease: "easeOut" });
    }
    const node = stopRefs.current[current];
    if (node) node.scrollIntoView({ behavior: reduced ? "auto" : "smooth", inline: "center", block: "nearest" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const ch = chapters[current];

  return (
    <Reveal as="section" id="jar-meter" className="home-section">
      <h2>The Jar Meter</h2>
      <p>{c.intro}</p>

      <BellJar className="jar-meter-hero" lift={lift} fog={fog} showTitle={false} />

      <div className="jar-meter-current">
        <div className="ch-num">Chapter {ch.chapter}</div>
        <p>{ch.insight}</p>
      </div>

      <div className="jar-meter-stops" role="list" aria-label="Chapters">
        {chapters.map((chapter, i) => (
          <button
            type="button"
            key={chapter.chapter}
            ref={(node) => { stopRefs.current[i] = node; }}
            className="jar-meter-stop"
            aria-current={i === current}
            onClick={() => setCurrent(i)}
          >
            <div className="ch-num">Ch. {chapter.chapter}</div>
            <div className="ch-level">{c.levelLabel}: {chapter.level}/10</div>
            <p className="ch-insight">{chapter.insight}</p>
          </button>
        ))}
      </div>
    </Reveal>
  );
}
