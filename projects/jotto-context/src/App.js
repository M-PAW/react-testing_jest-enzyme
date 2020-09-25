import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './input';
import hookActions from './actions/hookActions';

/**
 * reducer to update state, called automatically by dispatch
 * @param {object} - existing state
 * @param {object} - contains 'type' and 'payload' properties 
 *                   for the state update
 *    for example: { type: "setSecretWord", payload: "party" }
 * @returns {object} - new state
 */
function reducer(state, action) {
  switch(action.type) {
    case "setSecretWord":
      return { ...action, secretWord: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

function App() {

  const [ state, dispatch ] = React.useReducer(
    reducer,
    { secretWord: null }
  );

  const setSecretWord = (secretWord) => 
  dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  )

  return (
    <div data-test="component-app" className="container">
      
    </div>
  );
}

export default App;
