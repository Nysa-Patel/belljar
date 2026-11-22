import { useState } from "react";
import CONTENT from "../../content";

export default function ThenVsNowSection() {
  const c = CONTENT.thenVsNow;
  const flag = CONTENT.footer.needsSourceFlag;
  const [emphasis, setEmphasis] = useState(null);
  const [openId, setOpenId] = useState(null);

  return (
    <section id="then-vs-now" className="home-section">
      <h2>Then vs. Now</h2>
      <p>{c.intro}</p>

      <div className="tvn-view-toggle" role="group" aria-label="Emphasize one side">
        <button
          type="button"
          aria-pressed={emphasis === "then"}
          onClick={() => setEmphasis((v) => (v === "then" ? null : "then"))}
        >
          {c.toggleThenLabel}
        </button>
        <button
          type="button"
          aria-pressed={emphasis === "now"}
          onClick={() => setEmphasis((v) => (v === "now" ? null : "now"))}
        >
          {c.toggleNowLabel}
        </button>
      </div>

      <div className="tvn-topics">
        {c.topics.map((t) => {
          const open = openId === t.id;
          return (
            <div className="tvn-card" key={t.id}>
              <button
                type="button"
                className="tvn-toggle"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : t.id)}
              >
                {t.title}
              </button>
              {open && (
                <div className="tvn-panels">
                  <div className="tvn-panel" style={{ opacity: emphasis && emphasis !== "then" ? 0.45 : 1 }}>
                    <h4>{c.toggleThenLabel}</h4>
                    <p>{t.then}</p>
                  </div>
                  <div className="tvn-panel" style={{ opacity: emphasis && emphasis !== "now" ? 0.45 : 1 }}>
                    <h4>
                      {c.toggleNowLabel}
                      {t.needsSource && <span className="needs-source">{flag}</span>}
                    </h4>
                    <p>{t.now}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="section-block">
        <h3>
          {c.whatHasntChanged.title}
          {c.whatHasntChanged.needsSource && <span className="needs-source">{flag}</span>}
        </h3>
        <p>{c.whatHasntChanged.body}</p>
      </div>
    </section>
  );
}
