import { useState } from "react";
import ScoreBoard from "./assets/ScoreBoard";
import CardGrid from "./assets/CardGrid";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="title">Memory Card Game - React App by Brian Riendeau</h1>
      <h2 className="title">
        Game Rule: Try to choose a different card each time!
      </h2>
      <ScoreBoard />
      <CardGrid />
    </>
  );
}

export default App;
