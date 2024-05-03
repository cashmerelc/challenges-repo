import "./App.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">This is the article title</h2>
      <label htmlFor="yourname">Your Name</label>
      <input type="text" id="yourname" name="yourname"></input>
      <a className="article__link" href="http://www.google.com">
        Google
      </a>
    </article>
  );
}
