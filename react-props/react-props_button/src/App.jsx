import "./App.css";

export default function App() {
  return <Button text={"Test"} color={"red"} disabled={false} />;
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
