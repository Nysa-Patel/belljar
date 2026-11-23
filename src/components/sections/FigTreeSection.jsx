import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";
import CONTENT from "../../content";

const POSITIONS = [
  { x: 110, y: 130 }, { x: 210, y: 85 }, { x: 300, y: 140 },
  { x: 85, y: 230 }, { x: 205, y: 265 }, { x: 295, y: 235 }
];

function buildFigs(raw) {
  return raw.map((fig, i) => {
    const pos = POSITIONS[i] || { x: 200, y: 200 };
    const bend = pos.x < 200 ? -14 : 14;
    const control = { x: (200 + pos.x) / 2 + bend, y: (260 + pos.y) / 2 - 10 };
    return {
      ...fig,
      pos,
      control,
      wrinkleAt: 0.3 + i * 0.09,
      dropAt: 0.58 + i * 0.08
    };
  });
}

const FIG_SHAPE = "M0,-14 C8,-14 11,-4 10,4 C9,12 4,16 0,16 C-4,16 -9,12 -10,4 C-11,-4 -8,-14 0,-14 Z";

const MAX_STEPS = 10;

export default function FigTreeSection() {
  const c = CONTENT.figTree;
  const reduced = useReducedMotion();
  const figsRef = useRef(null);
  if (!figsRef.current) figsRef.current = buildFigs(c.figs);
  const figs = figsRef.current;

  const [elapsed, setElapsed] = useState(0);
  const [step, setStep] = useState(0);
  const [chosenId, setChosenId] = useState(null);
  const [quick, setQuick] = useState(false);
  const [reflection, setReflection] = useState(null);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const frac = reduced ? step / MAX_STEPS : Math.min(elapsed / c.timerSeconds, 1);

  function stateOf(fig) {
    if (fig.id === chosenId) return "chosen";
    if (frac >= fig.dropAt) return "dropped";
    if (frac >= fig.wrinkleAt) return "wrinkling";
    return "fresh";
  }

  useEffect(() => {
    if (reduced || chosenId) return;
    function tick(ts) {
      if (startRef.current === null) startRef.current = ts;
      const e = (ts - startRef.current) / 1000;
      setElapsed(e);
      if (e < c.timerSeconds) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, chosenId]);

  useEffect(() => {
    if (!chosenId && frac >= 1) setReflection("waited");
  }, [frac, chosenId]);

  function choose(fig) {
    if (chosenId) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setChosenId(fig.id);
    setQuick(frac < 0.3);
    setReflection("chosen");
  }

  function reset() {
    startRef.current = null;
    setElapsed(0);
    setStep(0);
    setChosenId(null);
    setQuick(false);
    setReflection(null);
  }

  const chosenFig = figs.find((f) => f.id === chosenId);

  return (
    <Reveal as="section" id="fig-tree" className="home-section">
      <h2>The Fig Tree</h2>
      <p>{c.intro}</p>
      <p className="muted">{c.instructions}</p>

      <div className="fig-tree-wrap">
        <svg
          className="fig-tree-svg"
          viewBox="0 0 400 420"
          role="group"
          aria-label="A fig tree with six figs, each a possible future. Choose one before it drops."
        >
          <path d="M200,420 C198,380 202,320 200,260" stroke="#5a4632" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M197,400 C196,370 198,330 198,280" stroke="#2c2420" strokeWidth="1" opacity="0.25" fill="none" />
          {figs.map((fig) => (
            <path
              key={fig.id}
              d={`M200,260 Q${fig.control.x},${fig.control.y} ${fig.pos.x},${fig.pos.y}`}
              stroke="#5a4632" strokeWidth="4" strokeLinecap="round" fill="none"
            />
          ))}
          {figs.map((fig) => {
            const state = stateOf(fig);
            const scale = state === "dropped" ? 0.55 : state === "wrinkling" ? 0.8 : 1;
            const disabled = state === "dropped";
            return (
              <g
                key={fig.id}
                className="fig"
                data-state={state}
                role="button"
                tabIndex={disabled ? -1 : 0}
                aria-label={`Choose: ${fig.label}${disabled ? " (dropped)" : ""}`}
                onClick={() => !disabled && choose(fig)}
                onKeyDown={(e) => {
                  if (!disabled && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    choose(fig);
                  }
                }}
              >
                <g transform={`translate(${fig.pos.x}, ${fig.pos.y}) scale(${scale})`}>
                  <line x1="0" y1="-14" x2="0" y2="-20" stroke="#5a4632" strokeWidth="1.5" />
                  <path className="fig-tint" d={FIG_SHAPE} />
                  <path d="M-3,-6 C-2,2 -1,9 0,13" fill="none" stroke="#2c2420" strokeWidth="1" opacity="0.3" />
                </g>
                <text x={fig.pos.x} y={fig.pos.y < 100 ? fig.pos.y - 26 : fig.pos.y + 30} textAnchor="middle">
                  {fig.label}
                </text>
              </g>
            );
          })}
        </svg>

        <p className="fig-timer" aria-live="polite">
          {chosenId
            ? ""
            : reduced
              ? `Step ${step} of ${MAX_STEPS}.`
              : `${Math.max(0, Math.ceil(c.timerSeconds - elapsed))}s before the next fig drops`}
        </p>

        <div className="fig-controls">
          {reduced && !chosenId && step < MAX_STEPS && (
            <button type="button" onClick={() => setStep((s) => Math.min(s + 1, MAX_STEPS))}>
              {c.waitButtonLabel}
            </button>
          )}
          {reflection && (
            <button type="button" onClick={reset}>{c.tryAgainLabel}</button>
          )}
        </div>

        {reflection && (
          <div className="fig-reflection" aria-live="polite">
            {reflection === "chosen" ? (
              <>
                <p>{c.reflections.chosenIntro} <strong>{chosenFig.label}</strong></p>
                <p>{chosenFig.closes}</p>
                {quick && <p className="muted">{c.reflections.quickNote}</p>}
              </>
            ) : (
              <>
                <p><strong>{c.reflections.waitedTitle}</strong></p>
                <p>{c.reflections.waited}</p>
              </>
            )}
          </div>
        )}
      </div>

      <p className="muted">{c.closingNote}</p>
    </Reveal>
  );
}
