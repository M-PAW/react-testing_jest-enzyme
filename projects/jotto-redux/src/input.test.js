
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './input';

/**
 * @function setup
 * @param {object} initialState 
 * @returns {ShallowWrapper}
 * 
 * storeFactory is used in testing, and can be equiped with reducers & actionCreators
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive() // .dive() returns the react child component of the shallow wrapper
    return wrapper;
    //console.log(wrapper.debug());
}; 

setup();

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState); 
        })
        test('renders component-input without an error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });

        test('renders the submit button', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });

    describe('word has been guessed', () => {
        test('renders component-input without an error', () => {

        });

        test('does not renders input box', () => {

        });

        test('does not renders the submit button', () => {

        });
    });
});

describe('update state', () => {

});