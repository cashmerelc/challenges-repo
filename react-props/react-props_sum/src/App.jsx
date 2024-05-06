import "./App.css";

export default function App() {
  return <Sum valueA={5} valueB={7} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
