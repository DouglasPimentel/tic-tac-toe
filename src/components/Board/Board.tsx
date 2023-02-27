import React from "react";
import "./styles.css";
import calculateWinner from "../../utils/calculateWinner";

import Square from "../Square";

type BoardProps = {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
};

function Board({ xIsNext, squares, onPlay }: BoardProps) { 
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status: string;

  if (winner) {
    status = "Winner " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="wrapper__status">
	<span className="status">{status}</span>
      </div>
      <div className="board-row">
	<Square value={squares[0]} onClick={() => handleClick(0)} />
	<Square value={squares[1]} onClick={() => handleClick(1)} />
	<Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
	<Square value={squares[3]} onClick={() => handleClick(3)} />
	<Square value={squares[4]} onClick={() => handleClick(4)} />
	<Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
	<Square value={squares[6]} onClick={() => handleClick(6)} />
	<Square value={squares[7]} onClick={() => handleClick(7)} />
	<Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
