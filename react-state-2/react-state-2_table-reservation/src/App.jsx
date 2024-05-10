import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
  let [people, setPeople] = useState(0);

  function handleAdd() {
    return setPeople(++people);
  }

  function handleDelete() {
    return setPeople(--people);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={handleAdd} onDelete={handleDelete} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
