import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

/**
 * Setup function for app component.
 * @returns {ReactWrapepr}
 */
const setup = () => {

  mockGetSecretWord.mockClear();

  hookActions.getSecretWord = mockGetSecretWord;

  // use mount because useEffect is not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
}


test('renders app without an error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on app mount', () => {
    setup();

    // check to see if secre word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
})
