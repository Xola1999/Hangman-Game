// App.js
import React, { useState } from 'react';
import HangmanGame from './components/Game';
import Help from './components/Help';

function App() {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <button onClick={toggleHelp}>Help</button>
      {showHelp ? <Help /> : <HangmanGame />}
    </div>
  );
}

export default App;
