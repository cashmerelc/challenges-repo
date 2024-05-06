import "./App.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Article Heading</h1>
      <p>This is an example paragraph.</p>
      <p>This is another example paragraph.</p>
      <p>This is yet another example paragraph.</p>
    </article>
  );
}
