import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [ activePLayer, setActivePLayer] = useState('X');

  function handleSelectSquare(){
    setActivePLayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X'
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName = "Player 1" symbol="X" isActive={activePLayer === 'X'}/> 
         <Player initialName = "Player 2" symbol="O" isActive={activePLayer === 'O'}/> 
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePLayer}/>
      </div>
      LOG
    </main>
    // <h1>React Tic-Tac-Toe</h1>
      // <p>Comming soon ....</p>
  );
}
export default App
