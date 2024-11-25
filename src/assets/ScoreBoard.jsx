import { useState } from "react";

function ScoreBoard({ score, highScore }) {
  return (
    <div className="score-board">
      <h1>Score: {score}</h1>
      <h1>Highscore: {highScore} </h1>
    </div>
  );
}

export default ScoreBoard;
