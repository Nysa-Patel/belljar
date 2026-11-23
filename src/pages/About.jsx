import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import CONTENT from "../content";

export default function About() {
  const c = CONTENT.about;
  return (
    <Layout sources={[]}>
      <h1>{c.title}</h1>
      {c.intro && <p>{c.intro}</p>}
      {c.sections.map((s, i) => (
        <Reveal as="section" className="section-block" key={s.heading || i} delay={i * 0.05}>
          {s.heading && <h2>{s.heading}</h2>}
          <p>{s.body}</p>
        </Reveal>
      ))}
    </Layout>
  );
}
