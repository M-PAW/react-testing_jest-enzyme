
import React from 'react';
import { shallow, mount } from 'enzyme';

import guessedWordsContext from './guessedWordsContext';
import successContext from './successContext';

// A functional component that calls useGuessedWords for our tests
const FunctionalComponent = () => {
    guessedWordsContext.useGuessedWords();
    return <div />;
};

test('useGuessedWords throws an erros when not wrapped in GuessedWordsProvider', () => {
    expect(() => {
        shallow(<FunctionalComponent />);
    }).toThrow('useGuessedWords must be used within a GuessedWordsProvider');
});

test('useGuessedWords does not throw an erros when wrapped in a GuessedWordsProvider', () => {
    expect(() => {
        mount(
            <guessedWordsContext.GuessedWordsProvider>
                <FunctionalComponent />
            </guessedWordsContext.GuessedWordsProvider>
        );
    }).not.toThrow();
});