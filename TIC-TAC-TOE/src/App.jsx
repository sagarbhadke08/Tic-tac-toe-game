import React from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <main>
        <ol id="players">
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="O"/>
        </ol>
        Game Board j
        <GameBoard/>
        </main>
      </div>
    </main>
  );
}

export default App;
