import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

/**
 * Setup function for app component.
 * @returns {ShallowWrapepr}
 */
const setup = () => {
  return shallow(<App />);
}


test('renders without an error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
