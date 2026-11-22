import Layout from "../components/Layout";
import CONTENT from "../content";

export default function WorksCited() {
  const c = CONTENT.worksCited;
  return (
    <Layout sources={[]}>
      <h1>Works Cited</h1>
      {c.intro && <p>{c.intro}</p>}
      <ul className="cite-list">
        {c.entries.map((e) => (
          <li key={e.id}>{e.mla}</li>
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
