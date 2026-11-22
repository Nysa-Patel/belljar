import Layout from "../components/Layout";
import CONTENT from "../content";

export default function PlathEsther() {
  const c = CONTENT.plathEsther;
  const flag = CONTENT.footer.needsSourceFlag;
  return (
    <Layout sources={c.sourcesUsed}>
      <h1>{c.title}</h1>
      <p>{c.intro}</p>
      {c.sections.map((s) => (
        <section className="section-block" key={s.heading}>
          <h2>
            {s.heading}
            {s.needsSource && <span className="needs-source">{flag}</span>}
          </h2>
          <p>{s.body}</p>
        </section>
      ))}
    </Layout>
  );
}
