import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
    return shallow(<Congrats {...props} />);
};

test('renders congrats without an error', () => {
    // the setup() must have props to prevent propType .isRequired error
    const wrapper = setup({ success: false });
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