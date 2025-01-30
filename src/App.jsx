import Player from "./components/player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player name = "Player 1" symbol="X"/> 
         <Player name = "Player 2" symbol="O"/> 
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
    // <h1>React Tic-Tac-Toe</h1>
      // <p>Comming soon ....</p>
  );
}
export default App
