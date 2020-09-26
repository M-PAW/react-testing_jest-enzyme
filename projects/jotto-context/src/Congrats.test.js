import React from 'react';
import { mount, shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';
import languageContext from './contexts/languageContext';

/*
    setup default props to test with, they can be overwritten later
    with props you pass in
*/
const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congats component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = ({ success, language }) => {
    language = language || 'en';
    success = success || false;

    // By wrapping in a provider like this we wont be able
    // to test the default language of the context
    return mount(
    <languageContext.Provider value={language}>
        <Congrats success={success}/>
    </languageContext.Provider>
    );
};

describe('languagePicker', () => {

    test('correctly renders congrats string in english', () => {
        const wrapper = setup({ success: true });
        expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
    });

    test('correctly renders congrats string in emoji', () => {
        const wrapper = setup({ success: true, language: 'emoji' });
        expect(wrapper.text()).toBe('🎯🎉');
    });

});

test('renders congrats without an error', () => {
    // the setup() must have props to prevent propType .isRequired error
    const wrapper = setup({});
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false});
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, "congrats-message");
    expect(component.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    // to test this for failure, wrap the data in quotes to make it a string
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
})