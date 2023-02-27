import React, { useState } from "react";
import "./styles.css";

import Board from "../Board";

function Game() {
  const [history, setHistory] = useState<[Array<string | null>]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  
  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move: number) => {
    let description: string;

    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
	<button 
	  className="game-info__button" 
	  type="button" 
	  onClick={() => jumpTo(move)}
	>
	  {description}
	</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
	<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
	<ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
