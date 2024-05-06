import "./App.css";

export default function App() {
  return <Greeting name="Derek" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
