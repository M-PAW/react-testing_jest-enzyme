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
 * Factor function to create a ShallowWrapper for
 * the GuessedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
};

 test('renders guessedwords without an error', () => {
     // the setup() must have props to prevent propType .isRequired error
     const wrapper = setup({ success: false });
     const component = findByTestAttr(wrapper, "component-guessedwords");
     expect(component.length).toBe(1);
 });

 test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
 });

 describe('if there are no words guessed', () => {

 });

 describe('if there are words guessed', () => {

 });