import Layout from "../components/Layout";
import CONTENT from "../content";

export default function Decoded() {
  const c = CONTENT.decoded;
  return (
    <Layout sources={c.sourcesUsed}>
      <h1>{c.title}</h1>
      <p>{c.intro}</p>
      {c.sections.map((s) => (
        <section className="section-block" key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </Layout>
  );
}
