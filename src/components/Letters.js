import React from 'react';

const Letters = ({ guessedLetters, onClick }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div>
      {alphabet.split('').map((letter) => (
        <button key={letter} onClick={() => onClick(letter)} disabled={guessedLetters.includes(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
