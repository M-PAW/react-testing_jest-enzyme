import React from 'react';
import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()})

// Make a setup that can accept props, implementing DRY.
/**
 *  Facctory Function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper} 
 */

const setup = (props={}, state=null) => {
  const wrapper =  shallow(<App {...props} />)
  if ( state ) wrapper.setState(state)
  return wrapper;
}

/**
 * Returns ShallowWrapper containing node(s) with the give data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @Return {ShallowWrapper}
 */
// The find function
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


// Use a data-test attribut to make sure it doesn't
// render a blank component.
test('renders without an error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders component button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

// Target the initial state of a class component
test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

// Find the button, counter-display, and simulate a button click to increment
test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find the button
  const button = findByTestAttr(wrapper, 'increment-button');
  // .simulate('actionName) simulates a page action
  button.simulate('click')

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1)
});

// Find the button, counter-display, and simulate button click to decrement
test('clicking button decrements coutner display', () => {
  const counter = 8;
  const wrapper = setup(null, {counter});

  // find the button
  const button = findByTestAttr(wrapper, 'decrement-button');
  // simulate a user action, clicking the decrement button
  button.simulate('click')

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1)
})

// Find the button, counter-dispaly, and simulate decrement, stop at zero
test('clicking the button doesn\'t decrement below zero', () => {
  const counter = 0;
  const wrapper = setup(null, {counter});

  // find the button
  const button = findByTestAttr(wrapper, 'decrement-button');
  // simulate user action, clicking decrement button
  button.simulate('click')

  // fubd diplay and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(0)
})

