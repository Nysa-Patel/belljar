import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import CONTENT from "../content";

export default function PlathEsther() {
  const c = CONTENT.plathEsther;
  const flag = CONTENT.footer.needsSourceFlag;
  return (
    <Layout sources={c.sourcesUsed}>
      <h1>{c.title}</h1>
      <p>{c.intro}</p>
      {c.sections.map((s, i) => (
        <Reveal as="section" className="section-block" key={s.heading} delay={i * 0.05}>
          <h2>
            {s.heading}
            {s.needsSource && <span className="needs-source">{flag}</span>}
          </h2>
          <p>{s.body}</p>
        </Reveal>
      ))}
    </Layout>
  );
}
