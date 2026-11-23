import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import CONTENT from "../content";

function renderMla(mla) {
  const parts = mla.split(/_([^_]+)_/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : <span key={i}>{part}</span>
  );
}

export default function WorksCited() {
  const c = CONTENT.worksCited;
  return (
    <Layout sources={[]}>
      <h1>Works Cited</h1>
      {c.intro && <p>{c.intro}</p>}
      <ul className="cite-list">
        {c.entries.map((e, i) => (
          <Reveal as="li" key={e.id} delay={Math.min(i * 0.04, 0.3)}>{renderMla(e.mla)}</Reveal>
        ))}
      </ul>

      <h2>{c.imageCreditsHeading}</h2>
      <ul className="cite-list">
        {c.imageCredits.map((e) => (
          <li key={e.id}>{e.credit}</li>
        ))}
      </ul>
    </Layout>
  );
}
