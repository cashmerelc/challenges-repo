import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    { id: 1, name: "Banana", color: "yellow" },
    { id: 2, name: "Apple", color: "red" },
    { id: 3, name: "Orange", color: "orange" },
    { id: 4, name: "Grape", color: "purple" },
    { id: 5, name: "Strawberry", color: "red" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <Card name={fruit.name} color={fruit.color} />
        </div>
      ))}
    </div>
  );
}
