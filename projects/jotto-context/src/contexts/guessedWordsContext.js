
import React from 'react';
import successContext from './successContext';

// no default value
const guessedWordsContext = React.createContext();


/**
 * @function useGuessedWords
 * @returns {array} - guessedWords values, in a state of
 *                    [value, setter]
 */
export function useGuessedWords() {
    // useContext is a hook that returns the context value
    // In this case, the context value is an [ value, setter ] array
    // for the context state.
    // useContext als subscribes to changes, and will update
    // any time the context value updates,
    // We've memoized this so that it will only update when the
    // guessedWords value updates.
    const context = React.useContext(guessedWordsContext);

    // Throw an error if the context doesn't exist,
    // meaning we aren't in a provider
    if(!context) {
        throw new Error('useGuessedWords must be used within a GuessedWordsProvider');
    };

    // Otherwise, return the context
    return context;
};

/**
 * @function GuessedWordsProvider
 * @param {object} props - props to pass through from 
 * the declared component
 * @returns {JSX.Element} Provider component
 */
export function GuessedWordsProvider(props) {

    // Create state that will be used within the provider
    // initial state value will be false
    // The initial shape is an array of objects, 
    // so at first just make an empty array.
    const [ guessedWords, setGuessedWords ] = React.useState([]);

    // Value for the context provider will be an array of [value, setter]
    // for guessedWords state.
    // useMemo just ensures that the provider value will only update
    // guessedWords updates.
    // No need to test this - React tests useMemo() for us!
    const value = React.useMemo(() => [ guessedWords, setGuessedWords ], [guessedWords]);

    // Return a Provider component with the [value, setter] array
    // as the value, passing through the props.
    return <guessedWordsContext.Provider value={value} {...props} />
};

export default { GuessedWordsProvider, useGuessedWords }