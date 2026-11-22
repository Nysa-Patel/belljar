import Layout from "../components/Layout";
import CONTENT from "../content";

export default function Support() {
  const s = CONTENT.support;
  return (
    <Layout sources={[]}>
      <h1>{s.heading}</h1>
      <p>{s.body}</p>
      <p>
        <strong>{s.lifelineName}</strong>
        <br />
        {s.lifelineContact}
      </p>
    </Layout>
  );
}
