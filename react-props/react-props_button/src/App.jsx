import "./App.css";

export default function App() {
  function handleClick() {
    return console.log("You clicked");
  }
  return (
    <Button
      text={"Test"}
      color={"red"}
      disabled={false}
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button onClick={onClick} style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
