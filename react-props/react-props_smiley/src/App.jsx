import "./App.css";

export default function App() {
  return <Smiley isHappy={false} />;
}

function Smiley({ isHappy }) {
  if (isHappy) {
    return <h1>😀</h1>;
  }
  return <h1>Not Happy</h1>;
}
