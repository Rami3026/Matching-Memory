import './App.css';
import React from 'react';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
// Add import statements below
import {useDispach} from 'react-redux'
import {setBoard} from './features/board/boardSlice'


const App = () => {
  // Add dispatch variable below
  const dispach = useDispach()

  const startGameHandler = () => {
    // Add action dispatch below
    dispach(setBoard())
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    dispach(resetCards())
  };

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;