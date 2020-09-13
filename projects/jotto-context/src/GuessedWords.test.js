import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';


/*
    setup default props to test with, they can be overwritten later with props you pass in
*/

const defaultProps = { 
    secretWord: '',
    success: false,
    guessedwords: [
        {guessedWords: '',
        letterMatchCount: null}
    ],
};

/**
 * Factor function to create a ShallowWrapper for
 * the GuessedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

 const setup = (props={}, state=null) => {
     const setupProps = {defaultProps, ...props}
     return shallow(<GuessedWords {...setupProps} />)
 };

 test('renders guessedwords without an error', () => {
     // the setup() must have props to prevent propType .isRequired error
     const wrapper = setup({ success: false });
     const component = findByTestAttr(wrapper, "component-guessedwords");
     expect(component.length).toBe(1);
 });