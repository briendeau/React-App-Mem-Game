import { useState } from "react";
import ScoreBoard from "./assets/ScoreBoard";
import CardGrid from "./assets/CardGrid";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <ScoreBoard score={score} highScore={highScore} />
      <div>
        <h2 className="title">
          Memory Card Game - React App by Brian Riendeau <br /> <br />
          Game Rule: Try to choose a different card each time!
        </h2>
      </div>
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
