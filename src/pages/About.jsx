import Layout from "../components/Layout";
import CONTENT from "../content";

export default function About() {
  const c = CONTENT.about;
  return (
    <Layout sources={[]}>
      <h1>{c.title}</h1>
      {c.intro && <p>{c.intro}</p>}
      {c.sections.map((s, i) => (
        <section className="section-block" key={s.heading || i}>
          {s.heading && <h2>{s.heading}</h2>}
          <p>{s.body}</p>
        </section>
      ))}
    </Layout>
  );
}
