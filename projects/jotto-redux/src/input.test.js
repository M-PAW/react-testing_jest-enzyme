
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './input';

/**
 * @function setup
 * @param {object} initialState 
 * @returns {ShallowWrapper}
 * 
 * storeFactory is used in testing, and can be equiped with
 * reducers & actionCreators
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
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        })
        test('renders component-input without an error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test('does not renders input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });

        test('does not renders the submit button', () => {
            const submitButton = findByTestAttr(wrapper,"submit-buttom");
            expect(submitButton.length).toBe(0);
        });
    });
});

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    test('guessedWord action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
});

describe('`guessWord` action creator call', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = "train";
    beforeEach(() => {
        // setup mock for guessWord
        guessWordMock = jest.fn();
        const props = {
            guessWord: guessWordMock,
        }
        
        // setup app component with guessWordMock as the guessWord prop
        wrapper = shallow(<UnconnectedInput {...props} />);

        // add value to input box
        wrapper.setState({currentGuess: guessedWord});

        // simulate submit button click
        // simulate allows more to be passed in, see function below.
        const submitButton = findByTestAttr(wrapper, "submit-button");
        submitButton.simulate('click', { preventDefault() {} });

    })
    test('`guessWord` was called once', () => {

        // check to see if mock ran
        const guessWordCallCount = guessWordMock.mock.calls.length;

        expect(guessWordCallCount).toBe(1);
    });

    test('calls `guessWord` with input value as argument', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    })
});