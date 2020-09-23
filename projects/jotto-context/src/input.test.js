import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Input from './input';

/**
 * Setup function for input component
 * @returns {ShallowWrapper}
 */
const setup = () => {
    return shallow(<Input />);
}

test('renders input without an error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, "component-input");
    expect(inputComponent.length).toBe(1);
});