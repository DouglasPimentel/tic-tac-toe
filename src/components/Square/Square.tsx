import React from "react";
import "./styles.css";

type SquareProps = {
  value: string | null;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      className="square"
      type="button"
      onClick={onClick}
    >
      {value}
    </button>   
  );
}

export default Square;
