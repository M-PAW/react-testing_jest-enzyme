import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './input';

function App() {
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input secretWord="party" />
      <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]} />
    </div>
  );
}

export default App;
