import "./App.css";

export default function App() {
  return <Button text={"Test"} color={"red"} disabled={false} />;
}

function Button({ color, disabled, text }) {
  function handleClick() {
    return console.log("You clicked");
  }

  return (
    <button onClick={handleClick} style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
