import { useState } from "react";

function ScoreBoard() {
  const [score, setScore] = useState();
  const [highscore, setHighscore] = useState(0);

  return(
    <div className="score-board">
      <h1>Score: {score}</h1>
      <h1>Highscore: {highscore} </h1>
    </div>
  );
};

export default ScoreBoard;