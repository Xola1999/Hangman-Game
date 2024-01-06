import React, { useState, useEffect } from 'react';
import Word from './Word';
import Letters from './Letters';

const HangmanGame = () => {
  const words = ['hangman', 'react', 'javascript']; // Add more words as needed
  const [selectedWord, setSelectedWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6); // Set your desired attempts

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toLowerCase());
  }, []);

  const WordMasked = () => {
    return selectedWord.split('').map((char) => (guessedLetters.includes(char) ? char : '_')).join(' ');
  };

  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setRemainingAttempts(remainingAttempts - 1);
      }
    }
  };

  const isGameOver = remainingAttempts === 0 || !WordMasked();

  return (
    <div>
      <h1>Hangman Game</h1>
      <Word value={WordMasked()} />
      <Letters guessedLetters={guessedLetters} onClick={handleLetterClick} />
      <p>Remaining Attempts: {remainingAttempts}</p>
      {isGameOver && <p>{remainingAttempts === 0 ? 'Game Over! You lost.' : 'Congratulations! You won!'}</p>}
    </div>
  );
};

export default HangmanGame;
