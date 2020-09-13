import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

/*
    setup default props to test with, they can be overwritten later with props you pass in
*/

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

/**
 * Factor function to create a ShallowWraper for
 * the GuessWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

 const setup = (props={}) => {
     const setupProps = {...defaultProps, ...props}
     return shallow(<GuessedWords {...setupProps}/>)
 };

 test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
 });

 describe('if ther are no words guessed', () => {
     // beforeEach() allows wrapper to be assigned and used
     // before each test is run.
     let wrapper
     beforeEach(() => {
         wrapper = setup({ guessedWords: [] })
     })
    test('renders guessedwords without an error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });

 })

 describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ];
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });
    test('renders guessedWords without an error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders "guessed words" section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsNode.length).toBe(1);
    });

    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length)
    });
 })