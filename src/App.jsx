import { useState } from "react";
import ScoreBoard from "./assets/ScoreBoard";
import CardGrid from "./assets/CardGrid";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <h1 className="title">Memory Card Game - React App by Brian Riendeau</h1>
      <h2 className="title">
        Game Rule: Try to choose a different card each time!
      </h2>
      <ScoreBoard score={score} highScore={highScore} />
      <CardGrid
        updateScore={setScore}
        updateHighScore={setHighScore}
        score={score}
        highScore={highScore}
      />
    </>
  );
}

export default App;
