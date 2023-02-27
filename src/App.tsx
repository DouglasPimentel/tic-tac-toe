import React from "react";
import "./App.css";

// Imports components
import Title from "./components/Title";
import Game from "./components/Game";

function App() {
  return (
    <section className="container">
      <Title label="Tic Tac Toe" />
      <Game />
    </section>
  );
}

export default App;
